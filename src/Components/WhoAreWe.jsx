import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiCrane } from "react-icons/gi";

const WhoAreWe = () => {
  return (
    <Container className="whoAreWe">
      <Row className="justify-content-center py-3 px-lg-5">
        <Col lg={4} md={6} xs={12} className="dialog">
          <div>
            <h3 className="title">لمحة عامة</h3>
            <div className="line" />
            <p className="text mb-2">
              <GiCrane />
              <span>شركة روائع المتميزون للصناعات المعدنية.</span>
            </p>
            <p className="text mb-2">
              <GiCrane />
              <span>
                شركة ذات مسؤولية محدودة مختلطة تقع داخل المملكة العربية السعودية.
              </span>
            </p>
            <p className="text mb-2">
              <GiCrane />
              <span>مطورة من قِبل شركة رواد التنمية بالجمهورية اليمنية.</span>
            </p>
          </div>
        </Col>
        <Col lg={4} md={6} xs={12} className="dialog">
          <div>
            <h3 className="title">من نحن؟ وماذا نريد؟</h3>
            <div className="line" />
            <p className="text">
              استطاعت شركة روائع أن تضع لها بصمة قوية في منطقة الخليج وما جاورها
              حيث دخلت بقوة وتميزت في قطاعات عدة من خلال الخبرة العالمية والتميز
              والبحوث وذلك بإستخدام أحدث وسائل التكنولوجيا العالمية.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6} xs={12} className="dialog">
          <div>
            <h3 className="title">معلومة إضافية</h3>
            <div className="line" />
            <p className="text">
              شركة روائع من الشركات الصناعية الرائدة في مجال الصناعات المعدنية و التي
              تنمو وفق إستراتيجية توسعية مدروسة بعناية فائقة ، حيث ضاعفت طاقاتها
              الإنتاجية منذ تأسيسها وتنمو وتتوسع في مبيعاتها التصديرية حتى وصلت
              منتجاتها إلى دول اخرى
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default WhoAreWe;
