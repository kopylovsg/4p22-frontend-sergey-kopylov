const mailErrorNode = document.getElementById('email-error');
const emailNode = document.getElementById('email');
const passwordErrorNode = document.getElementById('password-error');
const passwordNode = document.getElementById('password');
const passwordСonfirmationErrorNode = document.getElementById('passwordСonfirmation-error');
const passwordСonfirmationNode = document.getElementById('passwordСonfirmation');
const colorError = 'red';
const colorNoError = '#787878';
const errorLength = "Поле обязательно для заполнения";

const applicantForm = document.getElementById('formSubmit')
applicantForm.addEventListener('submit', handleFormSubmit);

function submitForm() {
  let formData = new FormData(formSubmit);
  for (let [name, value] of formData) {
    let data = {name, value};
    console.log(data);
  }

  document.getElementById('formSubmit').reset()
  mailErrorNode.innerHTML = " ";
  passwordErrorNode.innerHTML = " ";
  passwordСonfirmationErrorNode.innerHTML = " ";
  passwordСonfirmationNode.style.borderColor = colorNoError;
  emailNode.style.borderColor = colorNoError;
  passwordNode.style.borderColor = colorNoError;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleFormSubmit(event) {
    event.preventDefault();
    const validatEmail = emailNode.value
    const validatPassword = passwordNode.value;
    const validatPasswordСonfirmation = passwordСonfirmationNode.value;

    if (!validatEmail.length) {
      emailNode.style.borderColor = colorError;
      mailErrorNode.innerHTML = errorLength;
    } else if (!validateEmail(validatEmail)) {
      mailErrorNode.innerHTML = "Email введён некорректно";
      emailNode.style.borderColor = colorError;
    }

    if (!validatPassword.length) {
      passwordNode.style.borderColor = colorError;
      passwordErrorNode.innerHTML = errorLength;

    }

    if (validatPassword.length < 8) {
      passwordNode.style.borderColor = colorError;
      passwordErrorNode.innerHTML = "Пароль должен содержать не менее 8 символов";
    }

    if (!validatPasswordСonfirmation.length || validatPasswordСonfirmation.length < 8 || validatPassword !== validatPasswordСonfirmation) {
      passwordСonfirmationNode.style.borderColor = colorError;
      passwordСonfirmationErrorNode.innerHTML = "Пароли не совпадают";
      return;
    }

  submitForm(applicantForm);
}



