class ShareTwitter {
  createShareTwitterBtn(url) {
    const a = document.createElement("a");
    a.textContent = "Twitter";
    a.href = `http://twitter.com/share?url=${url}`;
    console.log(a);
  }
}
