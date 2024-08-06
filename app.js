document.addEventListener('DOMContentLoaded', () => {
  const formOne = document.querySelector('.form.first');
  const formTwo = document.querySelector('.form.second');
  const formThree = document.querySelector('.form.third');
  const formFour = document.querySelector('.form.four');

  const circleOne = document.querySelector('.circle.one');
  const circleTwo = document.querySelector('.circle.two');
  const circleThree = document.querySelector('.circle.three');
  const btnRegister = document.querySelector('.btn.registration');
  const btnTopic = document.querySelector('.btn.topic');
  const btnConfirm = document.querySelector('.btn.confirm');
  const registerForm = document.querySelector('.register');
  const checked = document.querySelectorAll(
    '.topic-label input[type="checkbox"]'
  );
  const nameSum = document.querySelector('.nameSum');
  const emailSum = document.querySelector('.emailSum');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('email');
  const itemList = document.querySelector('.item-list');
  const countStep = document.querySelector('.count');
  const items = document.querySelectorAll('.items');
  const item = document.querySelector('.item');

  let count = 1;

  step();
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    if (registerForm.checkValidity()) {
      if (formOne.classList.contains('active')) {
        formOne.classList.remove('active');
        formTwo.classList.add('active');
        circleTwo.classList.add('active');
        nameSum.innerHTML =
          '<span class="label">Name:</span> ' + nameInput.value;
        emailSum.innerHTML =
          '<span class="label">Email:</span> ' + emailInput.value;
        count++;

        step();
      }
    } else {
      registerForm.reportValidity();
    }
  });

  function getItems() {
    itemList.innerHTML = '';
    items.forEach((checkbox) => {
      if (checkbox.checked) {
        const listItem = document.createElement('li');
        listItem.classList.add('item');
        listItem.textContent = checkbox.value;
        itemList.appendChild(listItem);
      }
    });
  }

  function step() {
    countStep.innerHTML = 'Step ' + count + ' of 3';
  }

  btnTopic.addEventListener('click', (event) => {
    event.preventDefault();
    if (formTwo.classList.contains('active')) {
      formTwo.classList.remove('active');
      formThree.classList.add('active');
      circleThree.classList.add('active');
      getItems();
      count++;

      step();
    }
  });

  btnConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    if (formThree.classList.contains('active')) {
      formThree.classList.remove('active');
      formFour.classList.add('active');
    }
  });

  checked.forEach((checkbox) => {
    checkbox.addEventListener('change', function (event) {
      event.preventDefault();
      const label = this.parentElement;
      if (this.checked) {
        label.classList.add('checked');
      } else {
        label.classList.remove('checked');
      }
    });
  });
});
