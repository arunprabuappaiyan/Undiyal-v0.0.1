import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import { signIn, getSession } from 'next-auth/react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login({ router }) {
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        ...values,
        redirect: false,
      });

      console.log('Response Error', response);

      if (response.status === 200) {
        await MySwal.fire({
          title: 'Login Success',
          icon: 'success',
          toast: true,
          showConfirmButton: false,
          position: 'top-right',
          timer: 1000,
          timerProgressBar: false,
        });

        router.push('/');
      } else {
        await MySwal.fire({
          title: <strong>Invalid username and password</strong>,
          icon: 'error',
          toast: true,
          showConfirmButton: false,
          position: 'top-right',
          timer: 1500,
          timerProgressBar: true,
        });
      }

      setIsLoading(false);
    } catch (error) {
      console.log('ERROR', error);
    }

    //router.push("/wallet");
  };

  return (
    <div className={'login-page'}>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <img
              src="http://nekhop.com/img/logo-white.png"
              width={180}
              className="brand-image"
            />
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={handleSubmit}
            >
              <Form autoComplete={'off'}>
                <div className="input-group mb-3">
                  <Field
                    autoComplete={'username'}
                    type="email"
                    name={'username'}
                    className="form-control"
                    placeholder="email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <Field
                    type="password"
                    name={'password'}
                    className="form-control"
                    placeholder="password"
                    autoComplete={'new-password'}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={isLoading}
                    >
                      {' '}
                      {isLoading ? 'Loading...' : 'Sign In'}
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);

export async function getInitialProps(context) {
  const session = await getSession({ req: context.req });

  if (session && context.req && session.accessToken) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }

  return {
    props: {},
  };
}
