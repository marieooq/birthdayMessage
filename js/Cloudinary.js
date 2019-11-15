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

  async uploaded(file) {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", this.cloudinary.uploadPreset);
    formData.append("tags", "msgif-uploaded");

    //excecute api
    try {
      const res = await axios.post(this.clUrl, formData);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
