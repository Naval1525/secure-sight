import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
       <div className="bg-[#0E0F1B]">
        <Container fluid ={true}>
          <Row>
            {/* <Col sm={6}>{new Date().getFullYear()} © Trend Micro Unity Tools.</Col> */}
            <Col sm={6}>{new Date().getFullYear()} © Secure Sight.</Col>
            <Col sm={6}>
              {/* <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger"></i> by
                Themesdesign
              </div> */}
            </Col>
          </Row>
        </Container>
        </div>
      </footer>
    </React.Fragment>

  );
}

export default Footer;