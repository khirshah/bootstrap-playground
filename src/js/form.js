export default function form() {

  const formContainer = document.createElement('div');
  formContainer.classList.add('col-md-4');
  
  const formTitle = document.createElement('h4');
  formTitle.classList.add('text-center');
  formTitle.innerHTML = 'Form';

  const form = document.createElement('form');
  form.classList.add('form');
  form.appendChild(formGroup());

  formContainer.appendChild(formTitle);
  formContainer.appendChild(form);

  return formContainer;
};

function formGroup() {
  const formGroup = document.createElement('div');
  for (let i = 0; i < 3; ++i) {
    formGroup.appendChild(inputField());
  }
  return formGroup;
};

function inputField() {
  const inputField = document.createElement('input');
  return inputField;
};