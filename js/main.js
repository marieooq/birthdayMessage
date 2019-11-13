const displayScreen = document.getElementById("display-screen");

const displayMessage = val => {
  if (displayScreen.className !== "") {
    removeClass();
  }
  switchMode(isMode());
  displayScreen.textContent = val;
  captureScreen();
};

const isMode = () => {
  const mode = document.getElementById("mode").value;
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
      return;
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

      case "note":
        coloredTextClass[i].style.color = "#292929";
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

  if (mode === "neon") {
    displayScreen.classList.add("textShadow");
    const root = document.documentElement;
    root.style.setProperty("--textShadowColor", returnRgb());
  } else {
    if (displayScreen.className.includes("textShadow") !== -1) {
      displayScreen.classList.remove("textShadow");
    } else {
      return;
    }
  }
};

const changeFontFamily = mode => {
  switch (mode) {
    case "developer":
      displayScreen.style.fontFamily = '"Ubuntu Mono", monospace';
      break;

    case "neon":
      displayScreen.style.fontFamily = '"Lobster", cursive';
      break;

    case "note":
      displayScreen.style.fontFamily = '"Noto Serif", serif';
      break;

    default:
      console.log("mode is undefined");
  }
};

const changeBackground = mode => {
  switch (mode) {
    case "developer":
      displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
      break;

    case "neon":
      displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
      break;

    case "note":
      displayScreen.style.backgroundColor = "#fff";
      break;

    default:
      console.log("mode is undefined");
  }
};

const switchMode = mode => {
  switch (mode) {
    case "developer":
      changeTextColor(mode);
      changeTextShadow(mode);
      changeFontFamily(mode);
      changeBackground(mode);
      break;

    case "neon":
      changeTextColor(mode);
      changeTextShadow(mode);
      changeFontFamily(mode);
      changeBackground(mode);
      break;

    case "note":
      changeTextColor(mode);
      changeTextShadow(mode);
      changeFontFamily(mode);
      changeBackground(mode);
      break;

    default:
      console.log("isMode returns undefined");
  }
};

const captureScreen = () => {
  html2canvas(document.getElementById("display-screen"), {
    onrendered: canvas => {
      const imgData = canvas.toDataURL();
      document.getElementById("result").src = imgData;
      document.getElementById("ss").href = imgData;
    }
  });
};
