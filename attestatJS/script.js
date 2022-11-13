const mailErrorData = document.getElementById('email-error');
const emailData = document.getElementById('email');
const passwordErrorData = document.getElementById('password-error');
const passwordData = document.getElementById('password');
const passwordVerErrorData = document.getElementById('passwordVer-error');
const passwordVerData = document.getElementById('passwordVer');
const colorError = 'red';
const colorNoError = 'grey';
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
  passwordVerErrorData.innerHTML = " ";
  passwordVerData.style.borderColor = colorNoError;
  emailData.style.borderColor = colorNoError;
  passwordData.style.borderColor = colorNoError;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleFormSubmit(event) {
    event.preventDefault();

    const validatPassword = passwordData.value;
    const validatPasswordVer = passwordVerData.value;

    if (!emailData.length) {
      emailData.style.borderColor = colorError;
      mailErrorData.innerHTML = errorLength;
    } else if (!validateEmail(emailData)) {
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

    if (!validatPasswordVer.length || validatPasswordVer.length < 8 || validatPassword !== validatPasswordVer) {
      passwordVerData.style.borderColor = colorError;
      passwordVerErrorData.innerHTML = "Пароли не совпадают";
      return;
    }

  submitForm(applicantForm);
}



