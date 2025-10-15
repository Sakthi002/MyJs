function compose(...functions) {
  return function (result) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, result);
  };
}

// Your code goes here!

const inputText = document.getElementById('input-text');
const upperCaseCheckbox = document.getElementById('uppercase');
const colorPicker = document.getElementById('color-picker');
const applyStylesButton = document.getElementById('apply-styles');
const styledText = document.getElementById('styled-text');
const fontSizeSelctor = document.getElementById('font-size');
const fontFamilySelector = document.getElementById('font-family');

const applyUpperCase = (text) => {
  return upperCaseCheckbox.checked ? text.toUpperCase() : text;
}

const applyColor = (text) => {
  styledText.style.color = colorPicker.value;
  return text;
}

const applyFontSize = (text) => {
  styledText.style.fontSize = fontSizeSelctor.value;
  return text;
}

const applyFontFamily = (text) => {
  styledText.style.fontFamily = fontFamilySelector.value;
  return text;
}

function updateStyledText(text) {
  styledText.textContent = text;
}

applyStylesButton.addEventListener('click', () => {
  compose(
    updateStyledText,
    applyColor,
    applyUpperCase,
    applyFontFamily,
    applyFontSize
  )(inputText.value)
})