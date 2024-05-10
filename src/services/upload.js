const path = require("path");

const uploadFile = async (files) => {
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
  const pathUrl = path.resolve(__dirname, "../public/images/uploads");

  const extName = path.extname(files.sampleFile.name);
  const baseName = path.basename(files.sampleFile.name, extName);
  const fileName = `${baseName}-${Date.now()}${extName}`;

  uploadPath = pathUrl + "/" + fileName;

  try {
    const res = await sampleFile.mv(uploadPath);
    return {
      statusCode: 200,
      errorCode: 0,
      response: res,
      path: fileName,
    };
  } catch (err) {
    return {
      statusCode: 400,
      errorCode: 1,
      response: err,
    };
  }
};

const uploadMultipleFile = async (files) => {
  if (!files || files.length === 0) {
    return {
      statusCode: 400,
      errorCode: 1,
      response: "No files were uploaded.",
    };
  }

  const result = [];
  let countSuccess = 0;
  let isError = false;
  const pathUrl = path.resolve(__dirname, "../public/images/uploads");

  for (const file of files) {
    const extName = path.extname(file.name);
    const baseName = path.basename(file.name, extName);
    const fileName = `${baseName}-${Date.now()}${extName}`;

    const uploadPath = pathUrl + "/" + fileName;

    try {
      const res = await file.mv(uploadPath);
      result.push({
        statusCode: 200,
        errorCode: 0,
        response: res,
        path: fileName,
      });
      countSuccess++;
    } catch (err) {
      isError = true;
      result.push({
        statusCode: 400,
        errorCode: 1,
        response: err,
      });
    }
  }

  return { countSuccess, isError, result };
};

module.exports = {
  uploadFile,
  uploadMultipleFile,
};
