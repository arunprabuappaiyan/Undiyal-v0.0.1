import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicLayout({ children }) {
  return (
    <>
      <div className={'login-box'}>
        <Head>
          <title>Login Page</title>
          <meta name="description" content="Login" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          ></link>
        </Head>

        <div className={'content-wrapper'}>{children}</div>

        <AppFooter />
      </div>
    </>
  );
}

const MainNavBar = () => {
  return (
    <>
      <nav
        className={
          'main-header navbar navbar-expand-md navbar-light navbar-white'
        }
      >
        <div className={'container'}>
          <Link href={`/`}>
            <a className="navbar-brand">
              <Image
                src="http://gndsolutions.in/wp-content/uploads/2020/09/GND-Solutions-Blue-transparent_logo.png"
                className="brand-image"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={`/`}>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`/contact`}>
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fas fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const AppFooter = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">version 1.0 beta</div>
        <strong>
          Copyright &copy;<a href="https://gndsolutions.in">GND Solutions</a>.
        </strong>{' '}
        All rights reserved.
      </footer>
    </>
  );
};
