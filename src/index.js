import _ from 'lodash';
import 'bootstrap';
import {contentHeader,contentContainer} from './js/content'
import './styles/style.scss';

function container() {
  const container = document.createElement('div');
  container.classList.add('container-fluid');

  container.appendChild(contentHeader());
  container.appendChild(contentContainer());

  return container;
};

document.body.appendChild(container());