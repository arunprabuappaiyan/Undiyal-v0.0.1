import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'reactstrap';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react';

const Schema = Yup.object().shape({
  countryName: Yup.string().required('Select your country name'),
  stateName: Yup.string().required('Enter your state name'),
});

export default function CreateState(params) {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Create State'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'State',
              path: '/admin/master/state',
            },
            {
              title: 'Create State',
              path: null,
            },
          ]}
        />

        <section className="content text-sm">
          <div className="container-fluid">
            <div className="row justify-content-md-center mt-md-5">
              <div className="col-md-4">
                <Formik
                  initialValues={{ countryName: '', stateName: '' }}
                  validationSchema={Schema}
                  onSubmit={(values, { resetForm }) => {
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
                          <div className="card-header ">
                            <h3 className="card-title">State Details</h3>
                          </div>
                          <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                              <div className="row g-1">
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    Country Name
                                  </label>
                                  <Field
                                    as="select"
                                    name="countryName"
                                    className={
                                      errors.countryName && touched.countryName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                  >
                                    <option value="" hidden>
                                      Select Country
                                    </option>
                                    <option value="india">India</option>
                                    <option value="unitedstates">
                                      United States
                                    </option>
                                    <option value="unitedarabemirates">
                                      United Arab Emirates
                                    </option>
                                  </Field>
                                  <ErrorMessage
                                    name="countryName"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    State Name
                                  </label>
                                  <Field
                                    type="text"
                                    name="stateName"
                                    className={
                                      errors.stateName && touched.stateName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="Enter State Name"
                                  />
                                  <ErrorMessage
                                    name="stateName"
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
                                </Button>{' '}
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
