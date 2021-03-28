import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
// import PhotoList from "features/Photo/components/PhotoList";
// import { removePhoto } from 'features/Photo/photoSlice';
import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.SHEEP_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
