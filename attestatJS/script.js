const mailErrorData = document.getElementById('email-error');
const emailData = document.getElementById('email');
const passwordErrorData = document.getElementById('password-error');
const passwordData = document.getElementById('password');
const passwordСonfirmationErrorData = document.getElementById('passwordСonfirmation-error');
const passwordСonfirmationData = document.getElementById('passwordСonfirmation');
const colorError = 'red';
const colorNoError = '#787878';
const errorLength = "Поле обязательно для заполнения";

const applicantForm = document.getElementById('formSubmit')
applicantForm.addEventListener('submit', handleFormSubmit);

function submitForm(formNode) {
  const { elements } = formNode;

  const data = Array.from(elements)
    .map((element) => {
      const {name, type} = element;
      const volue = type === 'checkbox' ? element.checked : element.value;

      return {name, volue};
    })
    .filter((item) => !!item.name);
  console.log(data);

  document.getElementById('formSubmit').reset()
  mailErrorData.innerHTML = " ";
  passwordErrorData.innerHTML = " ";
  passwordСonfirmationErrorData.innerHTML = " ";
  passwordСonfirmationData.style.borderColor = colorNoError;
  emailData.style.borderColor = colorNoError;
  passwordData.style.borderColor = colorNoError;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleFormSubmit(event) {
    event.preventDefault();
    const validatEmail = emailData.value
    const validatPassword = passwordData.value;
    const validatPasswordСonfirmation = passwordСonfirmationData.value;

    if (!validatEmail.length) {
      emailData.style.borderColor = colorError;
      mailErrorData.innerHTML = errorLength;
    } else if (!validateEmail(validatEmail)) {
      mailErrorData.innerHTML = "Email введён некорректно";
      emailData.style.borderColor = colorError;
    }

    if (!validatPassword.length) {
      passwordData.style.borderColor = colorError;
      passwordErrorData.innerHTML = errorLength;
      return;
    }

    if (validatPassword.length < 8) {
      passwordData.style.borderColor = colorError;
      passwordErrorData.innerHTML = "Пароль должен содержать не менее 8 символов";
    }

    if (!validatPasswordСonfirmation.length || validatPasswordСonfirmation.length < 8 || validatPassword !== validatPasswordСonfirmation) {
      passwordСonfirmationData.style.borderColor = colorError;
      passwordСonfirmationErrorData.innerHTML = "Пароли не совпадают";
      return;
    }

  submitForm(applicantForm);
}



