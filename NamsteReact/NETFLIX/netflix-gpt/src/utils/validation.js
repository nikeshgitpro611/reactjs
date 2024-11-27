export const checkValidation = (email, password, name) => {
  const emails = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwords = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/.test(password);
  const nameCheck = /([a-zA-Z0-9_\s]+)/.test(name)
 
  return  !nameCheck ? "Required Name": !emails ? "Invalid Email" :  !passwords ? "Invalid Password": null
};
