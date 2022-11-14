const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank">Click to verify email</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
