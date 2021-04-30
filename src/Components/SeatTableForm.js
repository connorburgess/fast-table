import React from "react";
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function SeatTableForm (props) {


return (
  <ReusableForm
  formSubmissionHandler={handleNewSectionFormSubmission}
  headerText="Current Section"
  buttonText="Seat table"
/>
)

}