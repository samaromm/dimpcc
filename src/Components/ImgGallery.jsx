import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  img1,img2,img4,img4thumb,img5,img6,img7,
  img8,img9,img10,img11,img11thumb,img12,img12thumb,
  img13,img14,img15,img15thumb,img16,img16thumb,img17,
  img18,img19,img19thumb,img20,img20thumb,img21,img22,
  img23,img24,img25,img26,img27,img27thumb,img28
} from './ImportAllImg'


const images = [
  { original: img1,  thumbnail: img1 },  { original: img2, thumbnail: img4thumb },
  { original: img10, thumbnail: img10 }, { original: img4, thumbnail: img4 },
  { original: img11, thumbnail: img11thumb }, { original: img5, thumbnail: img5 },
  { original: img12, thumbnail: img12thumb }, { original: img6, thumbnail: img6 },
  { original: img13, thumbnail: img13 }, { original: img7, thumbnail: img7 },
  { original: img14, thumbnail: img14 }, { original: img8, thumbnail: img8 },
  { original: img15, thumbnail: img15thumb }, { original: img9, thumbnail: img9 },
  { original: img16, thumbnail: img16thumb }, { original: img17, thumbnail: img17 },
  { original: img20, thumbnail: img20thumb }, { original: img18, thumbnail: img18 },
  { original: img21, thumbnail: img21 }, { original: img19, thumbnail: img19thumb },
  { original: img22, thumbnail: img22 }, { original: img26, thumbnail: img26 },
  { original: img23, thumbnail: img23 }, { original: img27, thumbnail: img27thumb },
  { original: img24, thumbnail: img24 }, { original: img28, thumbnail: img28 },
  { original: img25, thumbnail: img25 }
];

class ImgGallery extends React.Component {
  render() {
    return (
      <Container className="imgGallery" id="gallery">
        <h3 className="title">معرض صور منتجاتنا</h3>
        <div className="line" />
        <ImageGallery items={images} infinite={true} thumbnailPosition="right"/>
      </Container>
    );
  }
}
export default ImgGallery;
