const uploadFile = async (files) => {
  debugger;
  let sampleFile;
  let uploadPath;
  if (!files || Object.keys(files).length === 0) {
    return {
      statusCode: 400,
      errorCode: 1,
      response: "No files were uploaded.",
    };
  }

  sampleFile = files.sampleFile;
  const path = __dirname.split("/");
  path.splice(7, 1, "pulic", "images", "uploads");

  uploadPath = path.join("/") + "/" + files.sampleFile.name;

  try {
    const res = await sampleFile.mv(uploadPath);
    return {
      statusCode: 200,
      errorCode: 0,
      response: "File uploaded to" + uploadPath,
      data: res,
    };
  } catch (err) {
    return {
      statusCode: 400,
      errorCode: 1,
      response: err,
    };
  }
};

module.exports = {
  uploadFile,
};
