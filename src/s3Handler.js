
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3Client = new S3Client({ region: process.env.AWS_REGION });

// Upload a file to S3
const uploadFile = async (fileName, fileContent) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
    };
    const command = new PutObjectCommand(params);
    return s3Client.send(command);
};

// Download a file from S3
const getFile = async (fileName) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
    };
    const command = new GetObjectCommand(params);
    return getSignedUrl(s3Client, command, { expiresIn: 3600 });
};

// Delete a file from S3
const deleteFile = async (fileName) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
    };
    const command = new DeleteObjectCommand(params);
    return s3Client.send(command);
};

module.exports = {
  uploadFile,
  getFile,
  deleteFile
};
