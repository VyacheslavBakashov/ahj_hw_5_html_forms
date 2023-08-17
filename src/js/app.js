import Popover from './Popover';

const btn = document.querySelector('.button');
const text = 'You can type any text here';
const title = 'Choose your title';
const popover = new Popover(btn, title, text);

popover.init();
