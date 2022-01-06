import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { getSession } from 'next-auth/react';
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import Tabs from '../../../../thinxview/components/Tabs';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function MemberProfile() {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Profile View'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Members',
              path: '/admin/members',
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
                      <CardBody className="pt-0 table-responsive">
                        <Row>
                          <Col sm="3" className="text-center mt-4">
                            <img
                              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/128x128/fire.png"
                              alt="member-avatar"
                              className="img-circle img-fluid"
                            />
                          </Col>
                          <Col sm="7">
                            <h4 className="mb-0 ">Arun Prabu A</h4>
                            <small>individual</small>
                            <br />
                            <ul className="ml-4 mb-0 fa-ul text-muted">
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-envelope"></i>
                                </span>
                                {' Email: '}
                              </li>

                              <br />
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-mobile"></i>
                                </span>
                                {' Mobile: '}
                              </li>

                              <br />
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-birthday-cake"></i>
                                </span>
                                {' DOB: '}
                              </li>

                              <br />
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-house-user"></i>
                                </span>
                                {' Address: '}
                              </li>
                            </ul>
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
                      <CardBody className="table-responsive">
                        <Tabs>
                          <TabPane label="Subscribe">
                            <h4>Subscribe</h4>
                            <p>Arun Prabu 1</p>
                          </TabPane>
                          <TabPane label="Docs">
                            <h4>Docs</h4>
                            <p>Arun Prabu 2</p>
                          </TabPane>
                          <TabPane label="Payment">
                            <h4>Payment</h4>
                            <p>Arun Prabu 3</p>
                          </TabPane>
                          <TabPane label="Add Payment">
                            <h4>Add Payment</h4>
                            <p>Arun Prabu 4</p>
                          </TabPane>
                        </Tabs>
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
