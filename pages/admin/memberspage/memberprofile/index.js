import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { getSession } from 'next-auth/react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Tabs from '../../../../thinxview/components/Tabs';

export default function MemberProfile(params) {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Profile View'}
          urls={[
            {
              title: 'AdminHomePage',
              path: '/admin',
            },
            {
              title: 'MembersPage',
              path: '/admin/memberspage',
            },
            {
              title: 'MemberProfile',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <Card className="card-solid">
              <CardBody className="pb-0">
                <Row>
                  <Col
                    sm="12"
                    className="align-items-stretch d-flex flex-column"
                  >
                    <Card
                      style={{ height: 250 }}
                      className="bg-light d-flex flex-fill"
                    >
                      <CardBody className="pt-0">
                        <Row>
                          <Col sm="7">
                            <h2 className="lead mt-2">
                              <b>Arun</b>
                            </h2>
                            <br />
                            <ul className="ml-4 mb-0 fa-ul text-muted">
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-lg fa-building"></i>
                                </span>
                                {' Address '}
                              </li>
                              <br />
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-lg fa-phone"></i>
                                </span>
                                {' Phone Number '}
                              </li>
                            </ul>
                          </Col>
                          <Col sm="5" className="text-center mt-4">
                            <img
                              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/128x128/fire.png"
                              alt="member-avatar"
                              className="img-circle img-fluid"
                            />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col
                    sm="12"
                    className="align-items-stretch d-flex flex-column"
                  >
                    <Card
                      style={{ height: 300 }}
                      className="bg-light d-flex flex-fill"
                    >
                      <CardBody>
                        <Tabs />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
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
