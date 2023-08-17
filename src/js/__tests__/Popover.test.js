import Popover from '../Popover';

const content = '<div class="container"><button class="button" type="button">Click to toggle popover</button></div>';
document.body.innerHTML = content;
const button = document.querySelector('.button');
const popover = new Popover(button, 'some title', 'some text');
popover.init();

test('Show popover', () => {
  button.click();
  expect(document.querySelector('.popover')).not.toBeNull();
});

test('Hide poppover', () => {
  button.click();
  expect(document.querySelector('.popover')).toBeNull();
});
