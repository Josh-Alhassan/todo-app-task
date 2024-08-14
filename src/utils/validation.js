// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  // Minimum 8 characters, at least one letter, one number, and one special character
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

// Validate required field
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

// Example of a combined validation function for registration form
export const validateRegistrationForm = (formData) => {
  const { email, password, confirmPassword } = formData;
  const errors = {};

  if (!validateRequired(email) || !validateEmail(email)) {
    errors.email = "Invalid email address";
  }

  if (!validateRequired(password) || !validatePassword(password)) {
    errors.password =
      "Password must be at least 8 characters long and include one letter, one number, and one special character";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
