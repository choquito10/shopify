const inputs = document.getElementsByClassName('inputs_change_product');
const select = document.getElementsByClassName('product-form__input')[0];
const select3 = document.getElementById('ProductSelect-product-template');

for (const input of inputs) {
  input.addEventListener('click', e => {
    selectFirst(e);
    selectSecond(e);
  });
}

function selectFirst(e) {
  for (const option of select.children) {
    if (option.getAttribute('value') === e.target.value) {
      option.selected = true;
    }
  }
}

function selectSecond(e) {
  for (const option of select3.children) {
    if (option.text === e.target.value) {
      option.selected = true;
    }
  }
}
