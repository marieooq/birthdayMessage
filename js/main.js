const displayScreen = document.getElementById("display-screen");

const displayMessage = val => {
  console.log("displayMessage() is excecuted");

  // displayScreen.classList.add("coloredText");
  // changeTextColor();

  displayScreen.classList.add("textShadow");
  changeTextShadow();

  displayScreen.textContent = val;
};

const changeTextColor = () => {
  console.log("inside changeTextColor");
  const coloredTextClass = document.getElementsByClassName("coloredText");

  const returnRanNum = () => {
    const runNum = Math.floor(Math.random() * 255);
    console.log(runNum);
    return runNum;
  };

  for (let i = 0; i < coloredTextClass.length; i++) {
    coloredTextClass[
      i
    ].style.color = `rgba(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()}, .8)`;
  }
};

const changeTextShadow = () => {
  console.log("inside changeTextShadow");
  const textShadowClass = document.getElementsByClassName("textShadow");

  const returnRanNum = () => {
    const runNum = Math.floor(Math.random() * 360);
    console.log(runNum);
    return runNum;
  };

  const returnRgb = () => {
    let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
    console.log(rgb);
    return rgb;
  };

  const root = document.documentElement;
  const body = document.body;
  root.style.setProperty("--accentColor", returnRgb());
};
