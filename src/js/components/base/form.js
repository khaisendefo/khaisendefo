// import js library
import Inputmask from 'inputmask';

export const mainForm = () => {
  let inputs = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7(999) 999-99-99');
  im.mask(inputs);
};
