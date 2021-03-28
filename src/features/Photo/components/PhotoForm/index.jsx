import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import Select from "react-select"; //npm i react-select
import React from "react";
import { FastField, Formik } from "formik"; //npm install formik --save
// import { Button, FormGroup, Input, Label } from "reactstrap";
import { Form } from "formik";
import PropTypes from "prop-types";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };

  return (
    <Formik initialValues={initialValues}>
      {(FormikProps) => {
        //do something here ...
        const { values, errors, touched } = FormikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category ?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            {/* <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="250"
                  height="200"
                  src={Images.CLOCK_BG}
                  alt="colorful"
                ></img>
              </div>
            </FormGroup> */}

            {/* <FormGroup>
              <Button color="primary"> Add to album</Button>
            </FormGroup> */}
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
