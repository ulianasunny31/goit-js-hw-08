import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

let data = JSON.parse(localStorage.getItem(localStorageKey)) || {};
reloadThePage();

form.addEventListener('input', function () {
  saveToLocalStorage();
});

function reloadThePage() {
  if (data) {
    messageInput.value = data.message || '';
    emailInput.value = data.email || '';
  }
}

const handleSubmit = event => {
  event.preventDefault();
  if (emailInput.value !== '' || messageInput.value !== '') {
    console.log({ message: messageInput.value, email: emailInput.value });
  }

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all the fields of the form!');
  }

  localStorage.removeItem(localStorageKey);
  event.currentTarget.reset();
  data = {};
};

form.addEventListener('submit', handleSubmit);

const saveToLocalStorage = throttle(() => {
  if (emailInput.value !== '' || messageInput.value !== '') {
    data = {
      email: emailInput.value,
      message: messageInput.value,
    };
  }
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}, 500);
