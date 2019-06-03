import { SET_REGISTER_FORM_DATA } from "../../../constants";

const setFormData = formData => ({
  type: SET_REGISTER_FORM_DATA,
  formData
});

export default setFormData;
