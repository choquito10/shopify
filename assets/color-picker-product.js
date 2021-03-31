const inputs = document.getElementsByClassName('inputs_change_product');
const select = document.getElementsByClassName('product-form__input')[0];
const selectHide = document.getElementById('ProductSelect-product-template');
const imagesContainer = document.getElementsByClassName('product-single__media-group')[0];

for (const input of inputs) {
  input.addEventListener('click', e => {
    selectFirst(e);
    selectSecond(e);
  });
}

function selectFirst(e) {
  for (const element of imagesContainer.children) {
    if (element.getAttribute('data-media-id') === `product-template-${e.target.value}`) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  }
}

function selectSecond(e) {
  for (const option of selectHide.children) {
    if (option.text === e.target.value) {
      option.selected = true;
    }
  }
}
