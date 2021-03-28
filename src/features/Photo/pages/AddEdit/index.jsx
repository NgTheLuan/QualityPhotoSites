import Banner from "../../../../components/Banner";
import PhotoForm from "../../../../features/Photo/components/PhotoForm";
import React from "react";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <PhotoForm />
      <div className="photo-edit__form"></div>
    </div>
  );
}

export default AddEditPage;
