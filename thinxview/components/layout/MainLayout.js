import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { GLOBAL_CONFIGURATION, MAIN_MENU } from './../../constants';
import { useSession } from 'next-auth/react';

export default function MainLayout({ children }) {
  return (
    <>
      <div className={'wrapper'}>
        <Head>
          <title>{GLOBAL_CONFIGURATION.APPLICATION_TITLE}</title>
          <meta
            name="description"
            content={GLOBAL_CONFIGURATION.APPLICATION_DESCRIPTION}
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          ></link>
        </Head>
        <MainNavBar />
        <div className={'content-wrapper'}>{children}</div>

        <AppFooter />
      </div>
    </>
  );
}

const MainNavBar = (props) => {
  const { data: session, status } = useSession();

  const handleLogout = async (e) => {
    e.preventDefault();

    await signOut();
  };

  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar
        className={
          'main-header navbar navbar-expand-md navbar-light navbar-white'
        }
      >
        <div className={'container'}>
          <Link href="/" passHref>
            <NavbarBrand>
              <img
                src={GLOBAL_CONFIGURATION.APP_LOGO}
                className="brand-image"
              />
            </NavbarBrand>
          </Link>

          <NavbarToggler className="me-2" onClick={() => setActive(!active)} />
          <Collapse navbar isOpen={active}>
            <Nav navbar className="me-auto">
              {MAIN_MENU.map((item, index) => {
                if (item.childrens.length > 0) {
                  return <CustomNavigationItem item={item} key={index} />;
                }
                return (
                  <NavItem key={index}>
                    <Link href={`${item.path}`} passHref>
                      <NavLink>{item.title}</NavLink>
                    </Link>
                  </NavItem>
                );
              })}

              <NavItem>
                <NavLink href={`#`} onClick={handleLogout}>
                  Logout <small>({session?.user?.name})</small>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

const CustomNavigationItem = (props) => {
  const { item } = props;
  const [isOpen, updateIsOpen] = useState(false);

  //console.log('MAIN ITEM', item);

  return (
    <UncontrolledDropdown
      inNavbar
      nav
      {...props}
      onClick={() => updateIsOpen(true)}
      onFocus={() => updateIsOpen(true)}
      onBlur={() => updateIsOpen(false)}
      toggle={() => updateIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <DropdownToggle
        caret
        nav
        style={{
          cursor: 'pointer',
        }}
      >
        {item.title}
      </DropdownToggle>

      <DropdownMenu end>
        {item?.childrens.map((mainItem, index) => {
          if (Array.isArray(mainItem)) {
            return (
              <>
                {mainItem.map((groupItem, gIndex) => {
                  return (
                    <>
                      <DropdownItem key={gIndex}>
                        <Link href={groupItem.path}>
                          <a className={'text-dark'}> {groupItem.title}</a>
                        </Link>
                      </DropdownItem>
                    </>
                  );
                })}
                {mainItem.length - 1 == index ? (
                  <li className="dropdown-divider"></li>
                ) : null}
              </>
            );
          }

          return (
            <li key={index}>
              <DropdownItem>
                <Link href={mainItem.path}>
                  <a className={'text-dark'}> {mainItem.title}</a>
                </Link>
              </DropdownItem>
            </li>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const AppFooter = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">
          version {GLOBAL_CONFIGURATION.VERSION_NAME}
        </div>

        <strong>
          Copyright ©
          <a href={GLOBAL_CONFIGURATION.COPYRIGHTS.url}>
            {GLOBAL_CONFIGURATION.COPYRIGHTS.name}
          </a>
          .
        </strong>
      </footer>
    </>
  );
};
