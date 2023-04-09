function validation(userData) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = /^(?=.*\d).{8,}$/;
  const errors = {};

  if (userData.user) {
    if (userData.user.length > 8) {
      errors.user = "Usuario no valido";
    }
  }

  if (userData.email) {
    if (!regexEmail.test(userData.email)) {
      errors.email = "Debe ser un correo valido";
    }
  }

  if (userData.pass) {
    if (!regexPass.test(userData.pass)) {
      errors.pass = "Debe tener almenos 8 caracteres y un numero";
    }
  }

  if (userData.pass1) {
    if (!regexPass.test(userData.pass1)) {
      errors.pass1 = "Debe tener almenos 8 caracteres y un numero";
    }
  }

  if (userData.pass2) {
    if (!regexPass.test(userData.pass2)) {
      errors.pass2 = "Debe tener almenos 8 caracteres y un numero";
    }
  }

  if (userData.pass1 && userData.pass2) {
    if (userData.pass1 !== userData.pass2) {
      errors.pass1 = "Las contraseñas deben ser iguales";
      errors.pass2 = "Las contraseñas deben ser iguales";
    }
  }

  return errors;
}

export default validation;
