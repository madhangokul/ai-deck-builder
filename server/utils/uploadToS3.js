const s3 = require('../config/awsConfig');

async function uploadToS3(buffer, folderName, fileName) {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: `${folderName}/${fileName}`,
    Body: buffer,
    ContentType: 'image/jpeg'
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location; // Return the S3 URL of the uploaded file
  } catch (error) {
    throw new Error(`Failed to upload to S3: ${error.message}`);
  }
}

module.exports = uploadToS3;
