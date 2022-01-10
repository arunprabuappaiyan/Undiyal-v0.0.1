import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { getSession } from 'next-auth/react';
import {
  Card,
  CardBody,
  CardText,
  Col,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import Tabs from '../../../../thinxview/components/Tabs';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
                      style={{ height: 230 }}
                      className="bg-light d-flex flex-fill"
                    >
                      <CardBody className="pt-0 table-responsive">
                        <Row>
                          <Col sm="3" className="text-center mt-4">
                            <Image
                              src="/fire.png"
                              alt="member-avatar"
                              width={128}
                              height={128}
                              className="img-circle img-fluid"
                            />
                          </Col>
                          <Col sm="7">
                            <h4 className="mb-0 ">Arun Prabu A</h4>
                            <small>individual</small>
                            <br />
                            <ul className="ml-4 mb-0 fa-ul text-muted mt-2">
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
                      style={{ height: 200 }}
                      className="bg-light d-flex flex-fill"
                    >
                      <CardBody className="table-responsive">
                        <Tabs>
                          <TabPane label="Subscribe">
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Subscribed at : qwertyy</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Amount : qwsdaf</CardText>
                              </Col>
                            </Row>
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>
                                  Subscription Type : oidoanoc
                                </CardText>
                              </Col>
                              <Col sm>
                                <CardText>Next Due : ovnosudon</CardText>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane label="Docs">
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Status : Verified</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Amount : Paid</CardText>
                              </Col>
                            </Row>
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Subscription Type : No</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Next Due : Soon</CardText>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane label="Payment">
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Subscribed at : qwertyy</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Amount : qwsdaf</CardText>
                              </Col>
                            </Row>
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>
                                  Subscription Type : oidoanoc
                                </CardText>
                              </Col>
                              <Col sm>
                                <CardText>Next Due : ovnosudon</CardText>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane label="AddPayment">
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Status : Verified</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Amount : Paid</CardText>
                              </Col>
                            </Row>
                            <Row className="container g-2 mt-4">
                              <Col sm>
                                <CardText>Subscription Type : No</CardText>
                              </Col>
                              <Col sm>
                                <CardText>Next Due : Soon</CardText>
                              </Col>
                            </Row>
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
