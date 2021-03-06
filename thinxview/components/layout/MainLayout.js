import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
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
              <Image
                src={GLOBAL_CONFIGURATION.APP_LOGO}
                width={115}
                height={38}
                alt="NEKHOP-logo"
                className="brand-image"
              />
            </NavbarBrand>
          </Link>

          <NavbarToggler className="me-2" onClick={() => setActive(!active)} />
          <Collapse navbar isOpen={active}>
            <Nav navbar className="me-auto">
              {MAIN_MENU.map((item) => {
                if (item.childrens.length > 0) {
                  return <CustomNavigationItem item={item} />;
                }
                return (
                  <NavItem
                    key={item.id}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
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

  return (
    <Dropdown
      {...props}
      tag={'li'}
      className={'nav-item'}
      onClick={() => updateIsOpen(true)}
      onFocus={() => updateIsOpen(true)}
      onBlur={() => updateIsOpen(false)}
      toggle={() => updateIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <DropdownToggle
        tag={'div'}
        className={'nav-link'}
        caret
        style={{
          cursor: 'pointer',
        }}
      >
        {item.title}
      </DropdownToggle>

      <DropdownMenu tag={'ul'} className={'border-0 shadow'}>
        {item?.childrens.map((mainItem, index) => {
          //console.log(mainItem);
          if (Array.isArray(mainItem)) {
            return (
              <>
                {mainItem.map((groupItem, gIndex) => {
                  return (
                    <>
                      <li key={gIndex} className={'text-dark'}>
                        <Link href={groupItem.path} passHref>
                          <DropdownItem>{groupItem.title}</DropdownItem>
                        </Link>
                      </li>
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
            <li key={index} className={'text-dark'}>
              <Link href={mainItem.path} passHref>
                <DropdownItem>{mainItem.title}</DropdownItem>
              </Link>
            </li>
          );
        })}

        {/* Leave 2 not implemented */}
        {/* <li className="dropdown-divider"></li>
                    <li class="dropdown-submenu dropdown-hover">
                            <a href={"#"} className={"dropdown-item dropdown-toggle"}>Hover for action</a>
                              <ul className={"dropdown-menu border-0 shadow"}>
                            <li><a tabindex="-1" href="#" className="dropdown-item">level 2</a></li>
                      </ul>
                   </li> */}
      </DropdownMenu>
    </Dropdown>
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
          Copyright ??
          <a href={GLOBAL_CONFIGURATION.COPYRIGHTS.url}>
            {GLOBAL_CONFIGURATION.COPYRIGHTS.name}
          </a>
          .
        </strong>
      </footer>
    </>
  );
};
