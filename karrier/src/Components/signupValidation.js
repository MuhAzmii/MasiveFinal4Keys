function Validation(values) {
    let error = {};
  
    // ... (existing validation logic)
  
    if (values.password !== values.confirmPassword) {
      error.password = "Passwords do not match";
      error.confirmPassword = "Passwords do not match";
    } else {
      error.password = "";
      error.confirmPassword = "";
    }
  
    return error;
  }
  
  export default Validation;