const incomeInput = document.getElementById('income');
const familyMembersInput = document.getElementById('family-members');
const childrenInput = document.getElementById('children');
const IncomeSize = document.querySelector('.income__size');
const resultValue = document.getElementById('result');
const incomeValue = document.getElementById('income__value');
const button = document.querySelector('.form__button');

let isProperty = '';
let isPercentages = '';

// change__body
const changeBody = document.querySelectorAll('.change__body');

changeBody.forEach((ch) => {
  ch.addEventListener('click', (e) => {
    const currntChildren = ch.children;
    for (let i = 0; i < currntChildren.length; i++) {
      currntChildren[i].classList.remove('active');
    }
    e.target.classList.add('active');
    changeChild();
  });
});

const reasons = document.querySelector('.reasons');
const reasonsText = document.querySelector('.reasons__reasons');

const selectC1 = document.querySelector('.select-c1');
const selectC2 = document.querySelector('.select-c2');
const selectC3 = document.querySelector('.select-c3');
const selectC4 = document.querySelector('.select-c4');
const selectC5 = document.querySelector('.select-c5');

selectC1.addEventListener('change', selectChildChange);

function selectChildChange(e) {
  if (e.target.value == 3) {
    reasons.classList.add('active');
    reasonsText.textContent = 'Уход за ребенком до 3-х лет в расчетном периоде';
  } else {
    reasons.classList.remove('active');
  }
  if (selectC1.value == 3) reasons.classList.add('active');
  if (selectC2.value == 3) reasons.classList.add('active');
  if (selectC3.value == 3) reasons.classList.add('active');
  if (selectC4.value == 3) reasons.classList.add('active');
  if (selectC5.value == 3) reasons.classList.add('active');
}

const changeChild = () => {
  let index = null;
  let indexMember = null;
  const childrenArrow = document.querySelector('.children-arrow').children;
  const childrenMember = document.querySelector('.children-member').children;
  const child2 = document.querySelectorAll('.child-2');
  for (let i = 0; i < childrenArrow.length; i++) {
    if (childrenArrow[i].className === 'change__item active') {
      index = i - 1;
    }
  }
  for (let i = 0; i < childrenMember.length; i++) {
    if (childrenMember[i].className === 'change__item change__item_m active') {
      indexMember = i - 1;
    }
  }

  childrenInput.textContent = index + 2;
  familyMembersInput.textContent = indexMember + 3;

  if (index + 2 > 2) {
    reasons.classList.add('active');
    reasonsText.textContent = 'Многодетность для одного из родителей';
  } else {
    reasons.classList.remove('active');
  }

  console.log(indexMember + 3);

  child2.forEach((e) => {
    e.classList.remove('active');
  });

  for (let i = 0; i <= index; i++) {
    child2[i].classList.add('active');
  }

  const childspensionHex = document.querySelector('.childspension-hex');
  const childspension = document.querySelector('.childspension');
  if (childspensionHex.className.includes('active') === true) {
    childspension.classList.add('active');
  } else {
    childspension.classList.remove('active');
  }

  const widowallowanceHex = document.querySelector('.widowallowance-hex');
  const widowallowance = document.querySelector('.widowallowance');
  if (widowallowanceHex.className.includes('active') === true) {
    widowallowance.classList.add('active');
  } else {
    widowallowance.classList.remove('active');
  }
};

// checkboxes
const check1 = document.querySelector('.checkbox-1');
const check11 = document.querySelector('.checkbox-11');
const salary = document.querySelector('.salary');
const spouse = document.querySelector('.spouse');

const check2 = document.querySelector('.checkbox-2');
const check12 = document.querySelector('.checkbox-12');
const pension = document.querySelector('.pension');

const check4 = document.querySelector('.checkbox-4');
const check14 = document.querySelector('.checkbox-14');
const check6 = document.querySelector('.checkbox-6');
const check16 = document.querySelector('.checkbox-16');
const additional = document.querySelector('.additional');
const childspension = document.querySelector('.childspension');

const check3 = document.querySelector('.checkbox-3');
const check13 = document.querySelector('.checkbox-13');
const self = document.querySelector('.self');

const check5 = document.querySelector('.checkbox-5');
const check7 = document.querySelector('.checkbox-7');
const check8 = document.querySelector('.checkbox-8');
const check9 = document.querySelector('.checkbox-9');
const check10 = document.querySelector('.checkbox-10');
const check55 = document.querySelector('.checkbox-55');
const check155 = document.querySelector('.checkbox-155');
const check15 = document.querySelector('.checkbox-15');
const scholarship = document.querySelector('.scholarship');
const ndfl = document.querySelector('.ndfl');
const house = document.querySelector('.house');
const apartment = document.querySelector('.apartment');
const area = document.querySelector('.area');
const car = document.querySelector('.car');
const carOld = document.querySelector('.car-old');
const carOld2 = document.querySelector('.car-old-2');
const carHourse = document.querySelector('.car-hourse');
const carHourse2 = document.querySelector('.car-hourse-2');
const houseAll = document.querySelector('.house-all');
const apartmentAll = document.querySelector('.apartment-all');

const selectStatus = document.querySelector('.select-status');
const widow = document.querySelector('.widow');
const spouseChecks = document.querySelector('.spouse-checks');

house.addEventListener('change', (e) => {
  if (e.target.value > 1) {
    houseAll.classList.add('active');
  } else {
    houseAll.classList.remove('active');
  }
});

apartment.addEventListener('change', (e) => {
  if (e.target.value > 1) {
    apartmentAll.classList.add('active');
  } else {
    apartmentAll.classList.remove('active');
  }
});

car.addEventListener('change', (e) => {
  if (e.target.value == 1) {
    carOld.classList.add('active');
    carHourse.classList.add('active');
  } else {
    carOld.classList.remove('active');
    carHourse.classList.remove('active');
  }
});

selectStatus.addEventListener('change', (e) => {
  if (e.target.value === 'Вдова') {
    widow.classList.add('active');
  } else {
    widow.classList.remove('active');
  }

  if (e.target.value === 'ЗАГС') {
    spouseChecks.classList.add('active');
  } else {
    spouseChecks.classList.remove('active');
  }
});

check1.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    salary.classList.add('active');
    additional.classList.add('active');
  } else {
    salary.classList.remove('active');
  }
});

check7.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    house.classList.add('active');
  } else {
    house.classList.remove('active');
  }
});

check8.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    apartment.classList.add('active');
  } else {
    apartment.classList.remove('active');
  }
});
check9.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    area.classList.add('active');
  } else {
    area.classList.remove('active');
  }
});
check10.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    car.classList.add('active');
    carOld.classList.add('active');
    carHourse.classList.add('active');
  } else {
    car.classList.remove('active');
    carOld.classList.remove('active');
    carHourse.classList.remove('active');
  }
});

check11.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    spouse.classList.add('active');
    additional.classList.add('active');
  } else {
    spouse.classList.remove('active');
  }
});
check2.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    pension.classList.add('active');
    additional.classList.add('active');
  } else {
    pension.classList.remove('active');
  }
});
check12.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    pension.classList.add('active');
    additional.classList.add('active');
  } else {
    pension.classList.remove('active');
  }
});
check3.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    self.classList.add('active');
    additional.classList.add('active');
  } else {
    self.classList.remove('active');
  }
});
check13.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    self.classList.add('active');
    additional.classList.add('active');
  } else {
    self.classList.remove('active');
  }
});
check5.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    scholarship.classList.add('active');
    additional.classList.add('active');
  } else {
    scholarship.classList.remove('active');
  }
});
check55.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    ndfl.classList.add('active');
    additional.classList.add('active');
  } else {
    ndfl.classList.remove('active');
  }
});
check155.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    ndfl.classList.add('active');
    additional.classList.add('active');
  } else {
    ndfl.classList.remove('active');
  }
});
check15.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    scholarship.classList.add('active');
    additional.classList.add('active');
  } else {
    scholarship.classList.remove('active');
  }
});

check4.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check14.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check6.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check16.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});

const sumS = document.querySelectorAll('.sum');
setInterval(() => {
  let currentSum = 0;
  sumS.forEach((sum, i) => {
    if (i === 0 || i === 1) {
      let procent = Number(sum.value) > 0 ? (Number(sum.value) / 100) * 13 : 0;
      currentSum = Number(currentSum) + Number(sum.value) * 12 + procent * 12;
    } else {
      currentSum = Number(currentSum) + Number(sum.value) * 12;
    }
  });
  incomeInput.textContent = Math.round(currentSum);
}, 1000);

//count
const MONTHS_IN_YEAR = 12;
let LIVING_WAGE = 13066;
let middleIncome = 0;
let currentPercent = 0;
const region = document.querySelector('.region');

region.addEventListener('change', (e) => {
  LIVING_WAGE = e.target.value;
});

const calc = () => {
  let result = '';
  let resultNumber = '';
  const incomeNumber = document.querySelector('.income__numbers');
  const middle = document.getElementById('middle');
  const income = parseFloat(incomeInput.textContent);
  const familyMembers = parseInt(familyMembersInput.textContent);
  const children = parseInt(childrenInput.textContent);

  const averageIncomeFamily = income / MONTHS_IN_YEAR;
  const averageIncome = averageIncomeFamily / familyMembers;

  const childrenValue50 = 0.5 * Number(LIVING_WAGE) * (!children ? 1 : children);
  const childrenValue75 = 0.75 * Number(LIVING_WAGE) * (!children ? 1 : children);

  const value75 = (averageIncomeFamily + childrenValue50) / familyMembers;
  const value100 = (averageIncomeFamily + childrenValue75) / familyMembers;
  handleFormInput();
  console.log(averageIncome, value75);

  middle.textContent = Math.round(averageIncome);
  middleIncome = Math.round(averageIncome);

  if (averageIncome <= Number(LIVING_WAGE)) {
    console.log(Number(LIVING_WAGE), averageIncome, value75);
    if (value75 <= Number(LIVING_WAGE)) {
      if (value100 <= Number(LIVING_WAGE)) {
        result = 'Положено семье ';
        resultNumber = '100%';
        incomeNumber.classList.remove('min');
        isPercentages = '100%';
        currentPercent = '100%';
        // IncomeSize.textContent = 'Выплата в размере:';
        // return;
      } else {
        result = 'Положено семье ';
        resultNumber = '75%';
        incomeNumber.classList.remove('min');
        isPercentages = '75%';
        currentPercent = '75%';
        // IncomeSize.textContent = 'Выплата в размере:';
        // return;
      }
    } else {
      result = 'Положено семье ';
      resultNumber = '50%';
      isPercentages = '50%';
      currentPercent = '50%';
      // IncomeSize.textContent = 'Выплата в размере:';
      incomeNumber.classList.remove('min');
      // return;
    }
  } else {
    result = 'У вас превышение дохода. Право на выплату отсутствует';
    resultNumber = 'У вас превышение дохода. Право на выплату отсутствует';
    isPercentages = '0%';
    currentPercent = '0%';
    IncomeSize.textContent = '';
    incomeNumber.classList.add('min');
  }
  const checkingText = document.querySelector('.checking');

  const checkin = checking(familyMembers);

  if (checkin === true) {
    checkingText.textContent = 'Ваше имущество позволяет получить выплату';
    isProperty = true;
  } else {
    checkingText.textContent = 'Ваше имущество не позволяет получить выплату';
    isProperty = false;
  }

  if (result == 'У вас превышение дохода. Право на выплату отсутствует') {
    checkingText.textContent = '';
  }

  console.log(result);
  resultValue.textContent = result;
  incomeNumber.textContent = resultNumber;
  console.log(incomeNumber);
};

function handleFormInput() {
  const income = parseFloat(incomeInput.textContent);
  const familyMembers = parseInt(familyMembersInput.textContent);
  const value = parseInt(income / familyMembers / MONTHS_IN_YEAR);
  const numberFormat = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

  if (isNaN(value)) {
    incomeValue.textContent = '0 ₽';
  } else {
    incomeValue.textContent = numberFormat.format(value);
  }
}

const minuButton = document.querySelector('.form__minbutton');

minuButton.addEventListener('click', calc);

const glow = document.querySelectorAll('.glow');

const searchIndex = (i) => {
  let check = true;
  const parent = glow[i + 1]?.parentElement;
  if (!parent) {
    glow[i].classList.remove('button-glow');
    return;
  }
  const granParent = parent.parentElement;
  if (granParent.className.includes('child-2')) {
    if (granParent.className.includes('active') === false) {
      while (check) {
        i += 1;
        const parent = glow[i + 1].parentElement;
        const granParent = parent.parentElement;
        if (granParent.className.includes('child-2')) {
          if (granParent.className.includes('active') === false) {
            console.log('ok');
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  if (granParent.className.includes('none')) {
    if (granParent.className.includes('active') === false) {
      while (check) {
        i += 1;
        const parent = glow[i + 1]?.parentElement;
        console.log(parent);
        if (!parent) {
          glow[i].classList.remove('button-glow');
          break;
        }
        const granParent = parent.parentElement;

        if (granParent.className.includes('none')) {
          if (granParent.className.includes('active') === false) {
            console.log('ok');
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  if (parent.className.includes('none')) {
    if (parent.className.includes('active') === false) {
      while (check) {
        i += 1;
        const parent = glow[i + 1].parentElement;
        if (parent.className.includes('none')) {
          if (parent.className.includes('active') === false) {
            console.log('ok');
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  return i;
};

glow.forEach((g, i) => {
  g.addEventListener('click', (e) => {
    const index = searchIndex(i);
    if (g.className.includes('button-glow')) {
      g.classList.remove('button-glow');
      glow[index + 1].classList.add('button-glow');
    }
  });
});

const hourseSelect = document.querySelector('.hourse-select');
const apartamentSelect = document.querySelector('.apartament-select');
const carSelect = document.querySelector('.car-select');
const hourseMetersInput = document.querySelector('.house-meters');
const apartmentMetersInput = document.querySelector('.apartament-meters');
const areaMetersInput = document.querySelector('.area-meters');
const carYearInput = document.querySelector('.car-year');
const carHourseInput = document.querySelector('.car-hourse-value');

function checking(familyMembers) {
  let result = true;

  const isHouse = house.className.includes('active');
  const isApartment = apartment.className.includes('active');
  const isArea = area.className.includes('active');
  const isCar = car.className.includes('active');

  const hourseQuantity = hourseSelect.value;
  const apartamentQuantity = apartamentSelect.value;
  if (isApartment && apartamentQuantity > 1) {
    result = countingApartments(familyMembers, apartmentMetersInput.value, 24);
  }
  if (isHouse && hourseQuantity > 1) {
    result = countingApartments(familyMembers, hourseMetersInput.value, 40);
  }
  if (isArea && areaMetersInput.value > 1) {
    result = countingSotki(familyMembers, areaMetersInput.value);
  }
  if (isCar) {
    result = countingCar();
  }

  return result;
}

function countingApartments(familyMembers, value, acceptable) {
  if (Number(value) / Number(familyMembers) > acceptable) {
    return false;
  } else {
    return true;
  }
}

function countingSotki(familyMembers, value) {
  if (Number(value) / Number(familyMembers) > 25) {
    return false;
  } else {
    return true;
  }
}

function countingCar(familyMembers) {
  const childspensionHex = document.querySelector('.childspension-hex');
  const disabled = childspensionHex.className.includes('active') === true ? true : false;
  const children = parseInt(childrenInput.textContent);
  const age = 2023 - Number(carYearInput.value);
  if (children >= 3 || disabled) {
    if (carSelect.value > 2) {
      return false;
    } else {
      return true;
    }
  }

  if (carSelect.value > 1) {
    return false;
  } else {
    console.log(age, carHourseInput.value);
    if (age <= 5 && carHourseInput.value <= 250) {
      return true;
    }
    if (age >= 5) {
      return true;
    } else {
      false;
    }
  }
}

const phoneInput = document.querySelector('.phone-person');
const nameInput = document.querySelector('.name-person');
const emailInput = document.querySelector('.email-person');
const childspensionHex = document.querySelector('.childspension-hex');
const checkbox100 = document.querySelector('.checkbox-100');

button.onclick = async (e) => {
  if (nameInput.value.length < 3 || emailInput.value.length < 4 || phoneInput.value.length < 15) {
    let errorItems = [];
    if (nameInput.value.length < 3) {
      nameInput.classList.add('err');
      errorItems.push('имя');
    } else {
      nameInput.classList.remove('err');
    }

    if (emailInput.value.length < 4) {
      emailInput.classList.add('err');
      errorItems.push('email');
    } else {
      emailInput.classList.remove('err');
    }

    if (phoneInput.value.length < 15) {
      phoneInput.classList.add('err');
      errorItems.push('номер телефона');
    } else {
      phoneInput.classList.remove('err');
    }

    emailError(errorItems);

    return;
  }
  if (checkbox100.checked === false) {
    alert('дайте согласие на обработку персональных данных');
    return;
  }
  nameInput.classList.remove('err');
  emailInput.classList.remove('err');
  phoneInput.classList.remove('err');
  alert('заявка отправлена');
  let currentName = nameInput.value;
  let currentEmail = emailInput.value;
  let currentPhone = phoneInput.value;
  const children = parseInt(childrenInput.textContent);
  const disabled = childspensionHex.className.includes('active') === true ? 'да' : 'нет';
  const hourseSelect1 = house.className.includes('active') === true ? hourseSelect.value : 0;
  const apartamentSelect1 =
    apartment.className.includes('active') === true ? apartamentSelect.value : 0;
  const carSelect1 = car.className.includes('active') === true ? carSelect.value : 0;

  console.log(currentPhone, currentEmail);
  let formData = new FormData();
  formData.append('currentPhone', currentPhone);
  formData.append('currentName', currentName);
  formData.append('currentEmail', currentEmail);
  formData.append('Количество детей', children);
  formData.append('Общий доход семьи', incomeInput.textContent);
  formData.append('Среднедушевой доход семьи', middleIncome);
  formData.append('Полагается выплата', currentPercent);
  formData.append('Количество членов семьи', familyMembersInput.textContent);
  formData.append('Количество домов', hourseSelect1);
  formData.append('Количество квартир', apartamentSelect1);
  formData.append('Количество метров у дома', hourseMetersInput.value);
  formData.append('Количество соток у участка', areaMetersInput.value);
  formData.append('Количество квадратов квартиры', apartmentMetersInput.value);
  formData.append('Количество машин', carSelect1);
  formData.append('Год выпуска машины', carYearInput.value);
  formData.append('Количество л.c', carHourseInput.value);
  formData.append('Есть ли дети инвалиды', disabled);
  let responce = await fetch('sendmail.php', {
    method: 'POST',
    body: formData,
  });
  // alert('Ваша заявка отправлена');
  // thanksPopup();
  // inputNameOne.value = '';
  // inputTelOne.value = '';
};

  window.onload = function() {

		setTimeout(function() {

			document.getElementById("custom-loader").style.display = "none";

		}, 400);
	};

function emailError(value) {
  const modaleText = document.querySelector('.modale__value');
  const modale = document.querySelector('.modale');
  modaleText.textContent = value.join(', ');
  modale.style.display = 'block';

  setTimeout(() => {
    modale.style.display = 'none';
  }, 4000);
}


