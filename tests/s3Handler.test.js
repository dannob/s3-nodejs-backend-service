
process.env.AWS_REGION = 'us-west-2';  // Set a default region for testing purposes
process.env.S3_BUCKET_NAME = 'test-bucket';  // Mock the S3 bucket name for testing

const s3Handler = require('../src/s3Handler');
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const mockClient = require('aws-sdk-client-mock');

const s3Mock = mockClient.mockClient(S3Client);

describe('S3 Handler Tests', () => {
  beforeEach(() => {
    s3Mock.reset();  // Reset the mock before each test
  });

  test('Upload File', async () => {
    s3Mock.on(PutObjectCommand).resolves({});
    await expect(s3Handler.uploadFile('test.txt', 'content')).resolves.toEqual({});
  });

  test('Get File', async () => {
    s3Mock.on(GetObjectCommand).resolves({ Body: 'file content' });
    const url = await s3Handler.getFile('test.txt');
    expect(url).toBeTruthy();
  });

  test('Delete File', async () => {
    s3Mock.on(DeleteObjectCommand).resolves({});
    await expect(s3Handler.deleteFile('test.txt')).resolves.toEqual({});
  });
});
