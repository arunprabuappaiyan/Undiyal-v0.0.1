import { useState } from 'react';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

export default function Tabs() {
  const [toggleState, setToggleState] = useState('1');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Nav
        tabs
        style={{
          cursor: 'pointer',
        }}
      >
        <NavItem>
          <NavLink
            className={toggleState == 1 ? 'active' : ''}
            onClick={() => toggleTab('1')}
          >
            Subscription
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={toggleState == 2 ? 'active' : ''}
            onClick={() => toggleTab('2')}
          >
            Docs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={toggleState == 3 ? 'active' : ''}
            onClick={() => toggleTab('3')}
          >
            Payment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={toggleState == 4 ? 'active' : ''}
            onClick={() => toggleTab('4')}
          >
            Add Payment
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={toggleState}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Subscribe</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Doc</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Pay</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Add</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
}
