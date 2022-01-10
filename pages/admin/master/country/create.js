import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'reactstrap';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react';

const Schema = Yup.object().shape({
  countryName: Yup.string().required('Enter country name'),
  countryCode: Yup.string().required('Enter country code'),
  phoneCode: Yup.number().required('Enter phonecode'),
});

export default function CreateCountry() {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Create Country'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Country',
              path: '/admin/master/country',
            },
            {
              title: 'Create Country',
              path: null,
            },
          ]}
        />

        <section className="content text-sm">
          <div className="container-fluid">
            <div className="row justify-content-md-center mt-md-5">
              <div className="col-md-4">
                <Formik
                  initialValues={{
                    countryName: '',
                    countryCode: '',
                    phoneCode: '',
                  }}
                  validationSchema={Schema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values);

                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      resetForm();
                    }, 0);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    isSubmitting,
                    setFieldValue,
                  }) => {
                    return (
                      <>
                        <div className="card card-purple">
                          <div className="card-header">
                            <h3 className="card-title">Country Details</h3>
                          </div>
                          <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                              <div className="row g-1">
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    Country Name
                                  </label>
                                  <Field
                                    type="text"
                                    name="countryName"
                                    className={
                                      errors.countryName && touched.countryName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="eg: INDIA"
                                  />
                                  <ErrorMessage
                                    name="countryName"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    Country Code
                                  </label>
                                  <Field
                                    type="text"
                                    name="countryCode"
                                    className={
                                      errors.countryCode && touched.countryCode
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="eg: IND"
                                  />
                                  <ErrorMessage
                                    name="countryCode"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    Phone Code
                                  </label>
                                  <Field
                                    type="text"
                                    name="phoneCode"
                                    className={
                                      errors.phoneCode && touched.phoneCode
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="eg: +91"
                                  />
                                  <ErrorMessage
                                    name="phoneCode"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button
                                  disabled={isSubmitting}
                                  outline
                                  type="submit"
                                  color="primary"
                                  size="sm"
                                >
                                  Register
                                </Button>
                                {'  '}
                                <Button
                                  onClick={handleReset}
                                  outline
                                  type="submit"
                                  color="dark"
                                  size="sm"
                                >
                                  Reset
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
