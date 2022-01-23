import React, { useState, useEffect, useMemo } from 'react';
import { slugify } from '../utils/slugify';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState();
  const router = useRouter();

  useMemo(() => {
    if (router.query.tab) {
      setActiveTab(router.query.tab);
    } else {
      setActiveTab('Subscribe');
    }
  }, [router.query.tab]);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();

    router.push(`/admin/members/${router.query.mid}?tab=${newActiveTab}`);
  };

  return (
    <>
      <Nav
        tabs
        fill
        className="layout-navbar-fixed"
        style={{
          cursor: 'pointer',
        }}
      >
        {children.map((tab) => {
          const label = tab.props.label;

          return (
            <>
              <NavItem key={label}>
                <NavLink
                  className={label == activeTab ? 'active' : ''}
                  onClick={(e) => handleClick(e, label)}
                >
                  {label}
                </NavLink>
              </NavItem>
            </>
          );
        })}
      </Nav>

      {children.map((one) => {
        if (one.props.label == activeTab) {
          return (
            <TabContent key={one.props.label}>{one.props.children}</TabContent>
          );
        }
      })}
    </>
  );
}
