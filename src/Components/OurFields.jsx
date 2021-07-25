import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Iron from "../img/سبك-الحديد.jpg";
import structure from "../img/هياكل.jpg";
import metal from '../img/معادن.jpg'
import blacksmith from '../img/حدادة.jpg'
import sand from '../img/sand.jpg'
import cement from '../img/cement.jpg'
import gypsum from '../img/gypsum.jpg'
import blocks from '../img/blocks.jpg'
import concrete from '../img/concrete.jpg'
import scaffolding from '../img/scaffolding.jpg'

const data = [
  { title: "سبك الحديد والصلب (منتجات تامة الصنع)", pic: Iron },
  { title: "صناعة وحدات الهياكل الحديدية الجاهزة", pic: structure },
  { title: "خراطة المعادن", pic: metal },
  { title: "ورش الحدادة", pic: blacksmith },
  { title: "تشغيل مناجم الرمال أو الحصباء يشمل (الكسارات)", pic: sand },
  { title: "صناعة الإسمنت بأنواعه", pic: cement },
  { title: "صناعة الجبس", pic: gypsum },
  { title: "صناعة البلوك", pic: blocks },
  { title: "صناعة الخرسانة بأنواعها", pic: concrete },
  { title: "صناعة وتركيب السقالات", pic: scaffolding },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4,slidesToSlide:4 },
  tablet: { breakpoint: { max: 1024, min: 760 }, items: 3,slidesToSlide:3 },
  mobile: { breakpoint: { max: 760, min: 450 }, items: 2,slidesToSlide:2 },
  smallphones: { breakpoint: { max: 450, min: 0 }, items: 1,slidesToSlide:1 },
};

const OurFields = () => {
  const Items = data.map((e) => {
    return (
      <div className="fieldsItems" key={Math.random()}>
        <span className="overlay"></span>
        <img src={e.pic} className="bg" alt="خلفية"/>
        <p className="fieldName">{e.title}</p>
      </div>
    );
  });
  return (
    <div className="fields graybg" id="fields">
      <Container>
        <h3 className="title">مجالات و أنشطة الشركة</h3>
        <div className="line" />
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1500}
          dotListClass="custom-dot-list-style"
        >
          {Items}
        </Carousel>
      </Container>
    </div>
  );
};
export default OurFields;
