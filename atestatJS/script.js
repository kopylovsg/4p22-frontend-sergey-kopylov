const mailErrorData = document.querySelector('[data-js-mail-error]');
const emailData = document.querySelector('[data-js-mail]');
const passwordErrorData = document.querySelector('[data-js-password-error]');
const passwordData = document.querySelector('[data-js-password]');
const passwordVerErrorData = document.querySelector('[data-js-passwordVer-error]');
const passwordVerData = document.querySelector('[data-js-passwordVer]');
let colorError = 'red';
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

function handleFormSubmit(event) {
    event.preventDefault();

    const validatMail = emailData.value;
    const validatPassvord = passwordData.value;
    const validatPassvordVer = passwordVerData.value;

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validatMail.length) {
      emailData.style.borderColor = colorError;
      mailErrorData.innerHTML = errorLength;
    } else if (!validateEmail(validatMail)) {
      mailErrorData.innerHTML = "Email введён некорректно";
      emailData.style.borderColor = colorError;
    };

    if (!validatPassvord.length) {
      passwordData.style.borderColor = colorError;
      passwordErrorData.innerHTML = errorLength;
      return;
    };

    if (validatPassvord.length < 8) {
      passwordData.style.borderColor = colorError;
      passwordErrorData.innerHTML = "Пароль должен содержать не менее 8 символов";
    };

    if (!validatPassvordVer.length || validatPassvordVer.length < 8 || validatPassvord !== validatPassvordVer) {
      passwordVerData.style.borderColor = colorError;
      passwordVerErrorData.innerHTML = "Пароли не совпадают";
      return;
    };


  submitForm(applicantForm);
};



