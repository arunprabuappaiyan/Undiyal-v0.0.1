import React from 'react';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import { getSession } from 'next-auth/react';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import {
  Card,
  CardTitle,
  Col,
  Row,
  Input,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';

const AdminHome = () => {
  return (
    <MainLayout>
      <BreadCrumb
        title={'Dashboard'}
        urls={[
          {
            title: 'Admin',
            path: null,
          },
        ]}
      />

      <section className="content">
        <div className="container">
          <Row>
            <Col sm="4">
              <Card body className="text-center" style={{ height: 125 }}>
                <CardTitle tag="h5" className="text-bold">
                  Total Donors
                </CardTitle>
              </Card>
            </Col>
            <Col sm="4">
              <Card body className="text-center" style={{ height: 125 }}>
                <CardTitle tag="h5" className="text-bold">
                  Recived Payment
                </CardTitle>
              </Card>
            </Col>
            <Col sm="4">
              <Card body className="text-center" style={{ height: 125 }}>
                <CardTitle tag="h5" className="text-bold">
                  Pending Payment
                </CardTitle>
              </Card>
            </Col>
          </Row>

          <Card style={{ height: 480 }}>
            <CardHeader>
              <Row>
                <Col sm="2">
                  <Input type="select">
                    <option value={''} hidden>
                      Select Duration
                    </option>
                    <option value={'today'}>To Day</option>
                    <option value={'thisweek'}>This Week</option>
                    <option value={'thismonth'}>This Month</option>
                    <option value={'thisyear'}>This Year</option>
                  </Input>
                </Col>
                <Col sm="2">
                  <Input type="select">
                    <option value={''} hidden>
                      Select Type
                    </option>
                    <option value={'recived'}>Recived</option>
                    <option value={'pending'}>Pending</option>
                  </Input>
                </Col>
              </Row>
            </CardHeader>

            <CardBody className="table-responsive">
              <CardTitle tag={'h5'} className="text-bold">
                Statement
              </CardTitle>
              <br />
            </CardBody>

            <CardFooter className="text-muted">Available Places</CardFooter>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdminHome;

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
