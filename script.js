const button = document.querySelector("#button-click");

const changeColor = () => {
  const value = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  document.body.style.backgroundColor = `#${value}`;
  button.textContent = `#${value}`;
};
