const displayScreen = document.getElementById("display-screen");

const displayMessage = val => {
  console.log("displayMessage() is excecuted");
  console.log(`isMode returns ${isMode()}`);

  if (displayScreen.className !== "") {
    removeClass();
  }

  switch (isMode()) {
    case "developer":
      changeTextColor();
      break;

    case "neon":
      changeTextShadow();
      break;

    default:
      console.log("isMode returns undefined");
  }

  // displayScreen.classList.add("coloredText");
  // changeTextColor();

  // displayScreen.classList.add("textShadow");
  // changeTextShadow();

  displayScreen.textContent = val;
};

const isMode = () => {
  const mode = document.getElementById("mode").value;
  console.log(mode);
  return mode;
};

const removeClass = () => {
  const isClassName = displayScreen.className;
  switch (isClassName) {
    case "coloredText":
      displayScreen.classList.remove("coloredText");
      break;

    case "textShadow":
      displayScreen.classList.remove("textShadow");
      break;

    default:
      console.log("No class is attached.");
  }
};

const removeTextColor = () => {};

const changeTextColor = () => {
  console.log("inside changeTextColor");
  displayScreen.classList.add("coloredText");
  const coloredTextClass = document.getElementsByClassName("coloredText");

  for (let i = 0; i < coloredTextClass.length; i++) {
    coloredTextClass[i].style.color = "#00c200";
  }
};

const changeTextShadow = () => {
  console.log("inside changeTextShadow");
  displayScreen.classList.add("textShadow");
  const textShadowClass = document.getElementsByClassName("textShadow");

  const returnRanNum = () => {
    const runNum = Math.floor(Math.random() * 360);
    return runNum;
  };

  const returnRgb = () => {
    let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
    return rgb;
  };

  const root = document.documentElement;
  const body = document.body;
  root.style.setProperty("--accentColor", returnRgb());
};
