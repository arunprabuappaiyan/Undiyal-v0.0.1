import Link from 'next/link';
import nc from 'next-connect';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { getSession } from 'next-auth/react';

const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required('Please enter your password'),
});

// yup
//     .string()
//     .required("Please enter your password")
//     .matches(
//       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//       "Password must contain at least 8 characters, one uppercase, one number and one special case character"
//     )

export default function Register() {
  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      let response = await axios.post('/api/account/register', values);

      resetForm();
    } catch (error) {
      if (typeof error.response !== 'undefined') {
        if (error.response.status == 422) {
          return error.response.data;
        }
      }

      console.log('response', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <h1 className="display-4 text-center mb-3">Sign up</h1>
            <p className="text-muted text-center mb-5">
              This page is for development purposes only
            </p>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={handleOnSubmit}
              validationSchema={RegisterSchema}
              auto
            >
              <Form autoComplete="off">
                <div className="form-group">
                  <label>Full name</label>

                  <Field
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder=""
                  />
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                  </div>

                  <div className="input-group input-group-merge">
                    <Field
                      name="password"
                      type="password"
                      className="form-control form-control-appended"
                      placeholder=""
                    />

                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-primary mb-3"
                >
                  Sign Up
                </button>
                <div className="text-center">
                  <small className="text-muted text-center">
                    Already have an account?{' '}
                    <Link href={'/auth/login'}>Log in</Link>.
                  </small>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  //conditional redirections
  const session = await getSession({ req: req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const handler = nc();
  try {
    await handler.run(req, res);
  } catch (e) {
    // handle the error
  }

  return {
    props: {},
  };
  //  use use for custom redirection
  // if (context.res) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/"
  //     }
  //   };
  // }
}
