import table from './table';
import form from './form';
import carousel from './carousel';

export function contentHeader() {
  const header = document.createElement('div');
  header.classList.add('header','text-center');
  const headerText = document.createElement('h3');
  headerText.innerHTML = 'Page header';

  header.appendChild(headerText);

  return header;
};

export function contentContainer() {
  const content = document.createElement('div');
  content.classList.add('content', 'row');

  content.appendChild(table());
  content.appendChild(form());
  content.appendChild(carousel());

  return content;
};