const displayScreen = document.getElementById("display-screen");
const frames = [];
let gifAnimation;

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
  if (isClassName.includes("coloredText")) {
    displayScreen.classList.remove("coloredText");
  }
  if (isClassName.includes("textShadow")) {
    displayScreen.classList.remove("textShadow");
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
    const textShadowClass = document.getElementsByClassName("textShadow");
    for (let i = 0; i < textShadowClass.length; i++) {
      textShadowClass[i].style.textShadow = `2px 2px 15px ${returnRgb()}`;
    }
  } else {
    if (displayScreen.className.includes("textShadow")) {
      displayScreen.classList.remove("textShadow");
    }
    displayScreen.style.textShadow = "";
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

////CAPTURE/////////////////////////////////////////////////////

const captureScreen = () => {
  html2canvas(document.getElementById("display-screen"), {
    onrendered: canvas => {
      const imgData = canvas.toDataURL();
      const imgTag = document.createElement("img");
      imgTag.src = `${imgData}`;
      // frames.push(imgData);
      frames.push(imgTag);
      console.log(frames);

      // document.getElementById("result").src = imgData;
      document.getElementById("ss").href = imgData;
    }
  });
};

////CREATE GIF//////////////////////////////////////////////////

let encoder;

const createGIF = () => {
  //get canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //initiate GiTEncoder
  encoder = new GIFEncoder();
  encoder.setRepeat(0); //infinite loop
  // encoder.setDelay(document.getElementById("anime_speed").value);
  encoder.start();

  //get images
  // frames = document.getElementById("anime").getElementsByTagName("img");

  //fit the size of canvas to the first image
  canvas.width = frames[0].naturalWidth;
  canvas.height = frames[0].naturalHeight;

  //draw all the images to the canvas
  for (let frame_no = 0; frame_no < frames.length; frame_no++) {
    ctx.drawImage(frames[frame_no], 0, 0);
    encoder.addFrame(ctx);
  }

  //create a gif animation
  encoder.finish();
  gifAnimation =
    "data:image/gif;base64," + encode64(encoder.stream().getData());
  document.getElementById("anime_gif").src = gifAnimation;
  // document.getElementById("download").style.display = "block";

  // const downloadGIF = () => {
  //   encoder.download("download.gif");
  // };
  document.getElementById("ssgif").href = gifAnimation;
};

////SAVE ON LOCALSTRAGE//////////////////////////////////////////////////
const setLocalStrage = () => {
  console.log("setLocalStrage() is executed");
  localStorage.setItem("gif1", gifAnimation);
};
