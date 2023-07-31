const button = document.querySelector('.form__button');

if (button) {
  button.onclick = async (e) => {
    let currentName = inputNameOne.value;
    let currentPhone = inputTelOne.value;

    if (currentPhone.length > 17 && currentName.length > 1) {
      let currentNumber = getRandomInt(100000);
      console.log(currentPhone, currentName);
      let formData = new FormData();
      formData.append('phoneNumberOne', currentPhone);
      formData.append('nameOne', currentName);
      formData.append('country', `${country}#${currentDay}-${currentNumber}`);
      let responce = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      // alert('Ваша заявка отправлена');
      thanksPopup();
      inputNameOne.value = '';
      inputTelOne.value = '';
      metrik(country);
    } else {
      alert('Введите корректно имя и номер телефона');
    }
  };
}
