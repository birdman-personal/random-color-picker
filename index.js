const randHexCode = () => "#" + Math.random().toString(16).substr(2, 6);

const modifyEleWithRandColors = (el) => {
  let randColor = randHexCode();
  el.style.backgroundColor = randColor;
  el.childNodes[1].innerHTML = randColor;
};

const writeToClipBoard = (text) => {
  const copyElement = document.querySelector(".copied");
  navigator.clipboard.writeText(text).then(function () {
    copyElement.classList.add("visible");
    setTimeout(function () {
      copyElement.classList.remove("visible");
    }, 2000);
  });
};
const addClicktoElements = (el) => {
  const text = el.childNodes[1].innerHTML;
  el.addEventListener("click", function () {
    writeToClipBoard(text);
  });
};

const funcCallToAllSelectors = (elements) => {
  return function (func) {
    elements.forEach((el) => {
      func(el);
    });
  };
};

const colorSelectors = document.querySelectorAll(".color");
const insertFuncToSelectors = funcCallToAllSelectors(colorSelectors);

const addNewColor = () => insertFuncToSelectors(modifyEleWithRandColors);
const copyToClipboard = () => insertFuncToSelectors(addClicktoElements);
const loadFuncs = () => {
  addNewColor();
  copyToClipboard();
};

document.querySelector(".refresh").addEventListener("click", addNewColor);
window.addEventListener("load", loadFuncs);
