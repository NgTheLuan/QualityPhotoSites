import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
// import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // {...field} tương ứng 4 dòng trên, nếu như biết field bao nhiêu phần tử mới dùng cách này
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </FormGroup>
  );
}

export default InputField;
