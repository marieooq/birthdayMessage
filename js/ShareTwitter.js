class ShareTwitter {
  createShareTwitterBtn(url) {
    const a = document.createElement("a");
    a.textContent = "Twitter";
    a.href = `http://twitter.com/share?url=${url}`;
    a.target = "_blank";
    console.log(a);
    const twitterDiv = document.getElementById("twitter-div");
    twitterDiv.appendChild(a);
  }
}
