function validation(userData) {
  const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = /^(?=.*\d).{8,}$/;
  const errors = {};

  if (userData.user) {
    if (!regexUser.test(userData.user)) {
      errors.user = "Debe ser un correo valido";
    }
  }

  if (userData.pass) {
    if (!regexPass.test(userData.pass)) {
      errors.pass = "Debe tener almenos 8 caracteres y un numero";
    }
  }

  return errors;
}

export default validation;
