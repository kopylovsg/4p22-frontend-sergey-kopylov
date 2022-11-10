const mailErrorData = document.querySelector('[data-js-mail-title]');
const emailData = document.querySelector('[data-js-mail]');
const passwordErrorData = document.querySelector('[data-js-password-title]');
const passwordData = document.querySelector('[data-js-password]');
const passwordVerErrorData = document.querySelector('[data-js-password-title]');
const passwordVerData = document.querySelector('[data-js-passwordVer]');
const colorError = 'red';
const applicantForm = document.getElementById('formSubmit')
applicantForm.addEventListener('submit', handleFormSubmit)

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
    const validatMail = emailData.value;
    const validatPassvord = passwordData.value;
    const validatPassvordVer = passwordVerData.value;


     console.log(validatMail);
     console.log(validatPassvord);
     console.log(validatPassvordVer);

    if (!validatMail.length) {
        emailData.style.borderColor = colorError;
    } else {
      function validateEmail(emailData) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*) | (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(emailData).toLowerCase());
           console.log(re);
        }
    }
    if (!validatPassvord.length) {
      passwordData.style.borderColor = colorError;
    }
    if (!validatPassvordVer.length) {
      passwordVerData.style.borderColor = colorError;
    }

    // if (passwordData !=== passwordVerData)
    //   passwordVerErrorData.style.text
    //     return;
    //     }







  }



  //
  //
  //
  //
  //
  //  function validateEmail(emailData) {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*) | (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(emailData).toLowerCase());
  //    console.log(re);
  // }

  // if (validatePassword)
  //   passwordData !=== passwordVerData
  //   return;
  //   }

