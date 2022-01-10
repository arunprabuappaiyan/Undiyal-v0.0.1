import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  Col,
  Row,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from 'reactstrap';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react';

export const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid Email').required('Email is Required!'),
  mobileNumber: Yup.number()
    .required('Mobile Number Required!')
    .positive()
    .integer(),
  dateOfBirth: Yup.date().required('Enter Date Of Birth'),
  addressLine1: Yup.string().required('Enter Your Address'),
  addressLine2: Yup.string().required('Enter Your Address'),
  country: Yup.string().required('Select your country'),
  state: Yup.string().required('Select your State'),
  city: Yup.string().required('Select your city'),
  pinCode: Yup.number().required('Enter your pincode'),
  gender: Yup.string().required('Select gender'),
});

const SignUpFormFormik = () => {
  const [filteredCity, setFilteredCity] = useState([]);
  const [filteredState, setFilteredState] = useState([]);

  function filterStateValues(country) {
    let tempState = States.filter((state) => state.countryId === country);

    setFilteredState(tempState);
  }
  function filterCityValues(state) {
    let tempCity = Cities.filter((city) => city.stateId === state);

    setFilteredCity(tempCity);
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          gender: '',
          dateOfBirth: '',
          addressLine1: '',
          addressLine2: '',
          country: '',
          countryName: '',
          state: '',
          stateName: '',
          city: '',
          cityName: '',
          pinCode: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          values.countryName = Countries.filter(
            (country) => country.id == values.country
          )[0].name;
          values.stateName = States.filter(
            (state) => state.id == values.state
          )[0].name;
          values.cityName = Cities.filter(
            (city) => city.id == values.city
          )[0].name;

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
            <Card className="card-purple">
              <CardHeader>
                <CardTitle tag={'h3'}>Member Details</CardTitle>
              </CardHeader>
              <Form onSubmit={handleSubmit}>
                <CardBody>
                  <div>
                    <div className="row g-2">
                      <div className="col-sm mb-4 height-60">
                        <label className="form-label">First Name</label>
                        <Field
                          type="text"
                          name="firstName"
                          className={
                            errors.firstName && touched.firstName
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="First Name"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-sm mb-4 height-60">
                        <label className="form-label">Last Name</label>
                        <Field
                          type="text"
                          name="lastName"
                          className={
                            errors.lastName && touched.lastName
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-sm mb-4 height-60">
                        <label className="form-label">Email</label>
                        <Field
                          type="email"
                          name="email"
                          className={
                            errors.email && touched.email
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-sm mb-4 height-60 ">
                        <label className="form-label">Mobile</label>
                        <Field
                          type="text"
                          name="mobileNumber"
                          className={
                            errors.mobileNumber && touched.mobileNumber
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="Mobile"
                        />
                        <ErrorMessage
                          name="mobileNumber"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row g-1">
                      <div className="col-sm-12 mb-4 height-60">
                        <label className="form-label">AddressLine1</label>
                        <Field
                          type="text"
                          name="addressLine1"
                          className={
                            errors.addressLine1 && touched.addressLine1
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="Address"
                        />
                        <ErrorMessage
                          name="addressLine1"
                          component="span"
                          className="error"
                        />
                      </div>

                      <div className="col-sm-12 mb-4 height-60 ">
                        <label className="form-label">AddressLine2</label>
                        <Field
                          type="text"
                          name="addressLine2"
                          className={
                            errors.addressLine2 && touched.addressLine2
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          placeholder="Address"
                        />
                        <ErrorMessage
                          name="addressLine2"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-sm-5 mb-4 height-60">
                        <label className="form-label">Country</label>
                        <Field
                          as="select"
                          name="country"
                          className={
                            errors.country && touched.country
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          onChange={(e) => {
                            setFieldValue('country', e.target.value);
                            setFieldValue('state', '');
                            filterStateValues(e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            Select Country
                          </option>
                          {Countries.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage
                          name="country"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-sm-5 mb-4 height-60">
                        <label className="form-label">State</label>

                        <Field
                          as="select"
                          name="state"
                          className={
                            errors.state && touched.state
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          onChange={(e) => {
                            setFieldValue('state', e.target.value);
                            setFieldValue('city', '');
                            filterCityValues(e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            Select State
                          </option>
                          {filteredState.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage
                          name="state"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-sm-5 mb-4 height-60 ">
                        <label className="form-label">City</label>

                        <Field
                          name="city"
                          as="select"
                          className={
                            errors.city && touched.city
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          onChange={(e) => {
                            setFieldValue('city', e.target.value);
                          }}
                        >
                          <option value="" hidden>
                            Select City
                          </option>
                          {filteredCity.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage
                          name="city"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-sm-3 mb-4 height-60 ">
                        <label className="form-label">Pin Code</label>
                        <Field
                          type="text"
                          name="pinCode"
                          placeholder="Pincode"
                          className={
                            errors.pinCode && touched.pinCode
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                        />
                        <ErrorMessage
                          name="pinCode"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>

                    <div className="row g-2">
                      <div className="col-md-5 mt-3 height-60">
                        <div>
                          <div>
                            <label className="form-label">Gender</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="male"
                              className="form-check-input"
                            />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="female"
                              className="form-check-input"
                            />
                            <label className="form-check-label">Female</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="gender"
                              value="Others"
                              className="form-check-input"
                            />
                            <label className="form-check-label">Others</label>
                          </div>
                        </div>
                        <ErrorMessage
                          name="gender"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-sm-4 mt-3 height-60 ">
                        <label className="form-label">Date Of Birth</label>
                        <Field
                          type="date"
                          name="dateOfBirth"
                          className={
                            errors.dateOfBirth && touched.dateOfBirth
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="span"
                          className={'error'}
                        />
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    className="d-grid col-4 mx-auto"
                    disabled={isSubmitting}
                    type="submit"
                    color="primary"
                  >
                    Register
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          );
        }}
      </Formik>
    </>
  );
};

const Countries = [
  {
    id: 'IND',
    name: 'India',
  },
  {
    id: 'USA',
    name: 'United States Of America',
  },
  {
    id: 'GER',
    name: 'Germany',
  },
];

const States = [
  {
    id: 'TN',
    name: 'Tamilnadu',
    countryId: 'IND',
  },
  {
    id: 'KA',
    name: 'Karnataka',
    countryId: 'IND',
  },
  {
    id: 'TL',
    name: 'Telangana',
    countryId: 'IND',
  },
  {
    id: 'WDC',
    name: 'WashintonDC',
    countryId: 'USA',
  },
  {
    id: 'BR',
    name: 'Brooklyn',
    countryId: 'USA',
  },
  {
    id: 'SA',
    name: 'Southren',
    countryId: 'USA',
  },
  {
    id: 'NZ',
    name: 'Nazis',
    countryId: 'GER',
  },
  {
    id: 'GM',
    name: 'Genarel',
    countryId: 'GER',
  },
  {
    id: 'HT',
    name: 'Hitler',
    countryId: 'GER',
  },
];

const Cities = [
  {
    id: 'SA',
    name: 'Salem',
    stateId: 'TN',
  },
  {
    id: 'CH',
    name: 'Chennai',
    stateId: 'TN',
  },
  {
    id: 'VE',
    name: 'Velore',
    stateId: 'TN',
  },
  {
    id: 'BA',
    name: 'Bangalore',
    stateId: 'KA',
  },
  {
    id: 'MA',
    name: 'Mangalore',
    stateId: 'KA',
  },
  {
    id: 'HY',
    name: 'Hyderabad',
    stateId: 'TL',
  },
  {
    id: 'WA',
    name: 'Warangal',
    stateId: 'TL',
  },
  {
    id: 'AP',
    name: 'Appos',
    stateId: 'WDC',
  },
  {
    id: 'IP',
    name: 'Ippos',
    stateId: 'WDC',
  },
  {
    id: 'YP',
    name: 'Yeppos',
    stateId: 'WDC',
  },
  {
    id: 'N',
    name: 'Nah',
    stateId: 'BR',
  },
  {
    id: 'Y',
    name: 'Yea',
    stateId: 'BR',
  },
  {
    id: 'S',
    name: 'Shh',
    stateId: 'BR',
  },
  {
    id: 'A',
    name: 'Ahh',
    stateId: 'SA',
  },
  {
    id: 'SU',
    name: 'Sudds',
    stateId: 'SA',
  },
  {
    id: 'POD',
    name: 'Podds',
    stateId: 'SA',
  },
  {
    id: 'MD',
    name: 'Mods',
    stateId: 'NZ',
  },
  {
    id: 'UZ',
    name: 'Uzzz',
    stateId: 'NZ',
  },
  {
    id: 'XX',
    name: 'Xmen',
    stateId: 'NZ',
  },
  {
    id: 'SPI',
    name: 'Spidi',
    stateId: 'GM',
  },
  {
    id: 'IR',
    name: 'Iron',
    stateId: 'GM',
  },
  {
    id: 'CP',
    name: 'Captan',
    stateId: 'GM',
  },
  {
    id: 'AT',
    name: 'Ant',
    stateId: 'GM',
  },
  {
    id: 'HU',
    name: 'Hulk',
    stateId: 'HT',
  },
  {
    id: 'WA',
    name: 'Wale',
    stateId: 'HT',
  },
  {
    id: 'LE',
    name: 'Leomord',
    stateId: 'HT',
  },
];

export default function SignUp(params) {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="6">
          <SignUpFormFormik />
        </Col>
      </Row>
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

export { Countries, States, Cities };
