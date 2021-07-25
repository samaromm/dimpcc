import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai";
import { FaWhatsapp, FaInternetExplorer } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const Contact = () => {
  return (
    <Container id="contact" className="contact">
      <Row>
        <Col md={6} className="px-0">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.3819617428344!2d46.79659361499863!3d24.644977584155978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzQxLjkiTiA0NsKwNDcnNTUuNiJF!5e0!3m2!1sen!2str!4v1627230615887!5m2!1sen!2str"
          ></iframe>
        </Col>
        <Col md={6} className="p-3 sns">
          <h3 className="title">بيانات التواصل</h3>
          <div className="contactnum">
            <span className="phone">
              <AiFillPhone />
              <p>00966112411150</p>
            </span>
            <span className="whatsapp">
              <FaWhatsapp />
              <p>00966594444645</p>
            </span>
            <a href="https://WWW.DIMPCC.COM" className="web">
              <FaInternetExplorer />
              <p>WWW.DIMPCC.COM</p>
            </a>
            <a
              className="mail"
              onClick={() => {
                window.open(
                  "mailto:INFO@DIMPCC.COM?subject=Subject&body=Body%20goes%20here"
                );
              }}
            >
              <HiOutlineMail />
              <p>INFO@DIMPCC.COM</p>
            </a>
          </div>
          <div className="snslinks">
            <a href="#" className="twitter">
              <TiSocialTwitterCircular />
            </a>
            <a href="#" className="linkedin">
              <TiSocialLinkedinCircular />
            </a>
            <a href="#" className="insta">
              <TiSocialInstagramCircular />
            </a>
            <a href="#" className="facebook">
              <TiSocialFacebookCircular />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
