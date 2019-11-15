class Cloudinary {
  constructor() {
    this.cloudinary = {
      uploadPreset: "vcbpzks2",
      apiKey: "392913127576281",
      apiSecret: "89ZM-841L4xN9_CFnQEvi-Xjplw",
      cloudName: "dxceyj03g"
    };
    this.clUrl = `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/image/upload`;
  }

  uploaded(file) {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", this.cloudinary.uploadPreset);
    formData.append("tags", "msgif-uploaded");
    console.log("here");
    //excecute api
    axios.post(this.clUrl, formData).then(res => {
      console.log("Success!");
    });
  }
}

// module.exports = Cloudinary;
