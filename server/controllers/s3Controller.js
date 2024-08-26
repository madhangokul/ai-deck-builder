const s3 = require('../config/awsConfig');

const uploadToS3 = async (req, res) => {
  const { fileName, fileContent } = req.body;

  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: fileName,
    Body: fileContent,
    ContentType: 'image/jpeg', // Modify based on your content type
  };

  try {
    const data = await s3.upload(params).promise();
    res.json({ url: data.Location });
  } catch (error) {
    console.error('S3 Error:', error);
    res.status(500).json({ error: 'Failed to upload file to S3' });
  }
};

module.exports = { uploadToS3 };
