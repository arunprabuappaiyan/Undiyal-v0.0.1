import Link from 'next/link';
import { Row, Col } from 'reactstrap';

export default function BreadCrumb(props) {
  return (
    <>
      <section className="content-header">
        <div className="container">
          <Row className="mb-2">
            <Col sm-6>
              <h1 className="m-0">
                {props?.title} <small>{props?.smallTitle}</small>
              </h1>
            </Col>

            <Col sm-6>
              <ol className="breadcrumb float-sm-right">
                {props.urls &&
                  props.urls.map((menu, index) => {
                    if (menu.path) {
                      return (
                        <li key={index} className="breadcrumb-item">
                          <Link href={menu.path}>
                            <a>{menu.title}</a>
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} className="breadcrumb-item active">
                          {menu.title}
                        </li>
                      );
                    }
                  })}
              </ol>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
