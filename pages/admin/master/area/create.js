import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'reactstrap';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react';

const Schema = Yup.object().shape({
  countryName: Yup.string().required('Select your country name'),
  stateName: Yup.string().required('Select your state name'),
  cityName: Yup.string().required('Enter your city name'),
  areaName: Yup.string().required('Enter your area name'),
});

export default function CreateArea(params) {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Create Area'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Area',
              path: '/admin/master/area',
            },
            {
              title: 'Create Area',
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
                    stateName: '',
                    cityName: '',
                    areaName: '',
                  }}
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
                          <div className="card-header">
                            <h3 className="card-title">Area Details</h3>
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
                                    as="select"
                                    name="stateName"
                                    className={
                                      errors.stateName && touched.stateName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                  >
                                    <option value="" hidden>
                                      Select State
                                    </option>
                                    <option value="tamilnadu">
                                      Tamil Nadu
                                    </option>
                                    <option value="karnataka">Karnataka</option>
                                    <option value="kerala">Kerala</option>
                                  </Field>
                                  <ErrorMessage
                                    name="stateName"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    City Name
                                  </label>
                                  <Field
                                    as="select"
                                    name="cityName"
                                    className={
                                      errors.cityName && touched.cityName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="Enter City Name"
                                  >
                                    <option value="" hidden>
                                      Select City
                                    </option>
                                    <option value="salem">Salem</option>
                                    <option value="vellor">Vellor</option>
                                    <option value="chennai">Chennai</option>
                                  </Field>
                                  <ErrorMessage
                                    name="cityName"
                                    component="span"
                                    className="error"
                                  />
                                </div>
                                <div className="col-sm-12 mb-4 height-60">
                                  <label className="form-label">
                                    Area Name
                                  </label>
                                  <Field
                                    type="text"
                                    name="areaName"
                                    className={
                                      errors.areaName && touched.areaName
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                    placeholder="Enter Area Name"
                                  />
                                  <ErrorMessage
                                    name="areaName"
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
