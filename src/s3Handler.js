
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2'  // Set your AWS region
});

const s3 = new AWS.S3();
const bucketName = process.env.S3_BUCKET_NAME;

// Create - Upload a file to S3
const uploadFile = async (fileName, fileContent) => {
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent
    };
    return s3.upload(params).promise();
};

// Read - Download a file from S3
const getFile = async (fileName) => {
    const params = {
        Bucket: bucketName,
        Key: fileName
    };
    return s3.getObject(params).promise();
};

// Update - Update an existing file in S3
const updateFile = async (fileName, fileContent) => {
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent
    };
    return s3.upload(params).promise();
};

// Delete - Delete a file from S3
const deleteFile = async (fileName) => {
    const params = {
        Bucket: bucketName,
        Key: fileName
    };
    return s3.deleteObject(params).promise();
};

module.exports = {
  uploadFile,
  getFile,
  updateFile,
  deleteFile
};
