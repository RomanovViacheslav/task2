let formElement = document.forms.formElement;

formElement.addEventListener(
  "focus",
  (event) => {
    let activeElement = formElement.querySelector(".focused");
    if (activeElement) {
      activeElement.classList.remove("focused");
    }
    event.target.classList.add("focused");
  },
  true
);

formElement.addEventListener(
  "blur",
  () => {
    let activeElement = formElement.querySelector(".focused");
    if (activeElement) {
      activeElement.classList.remove("focused");
    }
  },
  true
);
