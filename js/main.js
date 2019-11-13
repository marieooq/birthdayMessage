const displayScreen = document.getElementById("display-screen");

const displayMessage = val => {
  console.log("displayMessage() is excecuted");
  console.log(`isMode returns ${isMode()}`);

  if (displayScreen.className !== "") {
    removeClass();
  }

  switch (isMode()) {
    case "developer":
      changeTextColor(isMode());
      changeTextShadow(isMode());
      break;

    case "neon":
      changeTextColor(isMode());
      changeTextShadow(isMode());
      break;

    default:
      console.log("isMode returns undefined");
  }

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

const changeTextColor = mode => {
  displayScreen.classList.add("coloredText");
  const coloredTextClass = document.getElementsByClassName("coloredText");

  for (let i = 0; i < coloredTextClass.length; i++) {
    switch (mode) {
      case "developer":
        coloredTextClass[i].style.color = "#00c200";
        break;

      case "neon":
        coloredTextClass[i].style.color = "#fff";
        break;

      default:
        console.log("mode is undefined");
    }
  }
};

const changeTextShadow = mode => {
  const returnRanNum = () => {
    const runNum = Math.floor(Math.random() * 360);
    return runNum;
  };

  const returnRgb = () => {
    let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
    return rgb;
  };

  switch (mode) {
    case "developer":
      if (displayScreen.className.includes("textShadow") !== -1) {
        displayScreen.classList.remove("textShadow");
      } else {
        return;
      }
      break;

    case "neon":
      displayScreen.classList.add("textShadow");
      const root = document.documentElement;
      root.style.setProperty("--accentColor", returnRgb());
      break;

    default:
      console.log("mode is undefined");
  }
};
