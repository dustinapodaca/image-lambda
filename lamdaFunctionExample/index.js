const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  // Get the S3 bucket and key of the uploaded image
  const bucket = event.Records[0].s3.bucket.name;
  // const bucket = 'bucketdust';
  // const key = 'images.json';
  const key = event.Records[0].s3.object.key;

  // Download the images.json file from the S3 bucket
  let images;
  try {
    const response = await s3.getObject({
      Bucket: bucket,
      Key: 'images.json'
    }).promise();
    //parse the response object from the response.Body
    images = JSON.parse(response.Body.toString());
    console.log(images);
  } catch (err) {
    // If the file does not exist, we can create an empty array here:
    images = [];
  }

  // Create a metadata object for the image
  const image = {
    name: key,
    size: event.Records[0].s3.object.size,
    type: event.Records[0].s3.object.contentType
  };

  // Append the image to the array or update the existing object if it exists
  let found = false;
  for (let i = 0; i < images.length; i++) {
    if (images[i].name === image.name) {
      images[i] = image;
      found = true;
      break;
    }
  }
  if (!found) {
    images.push(image);
  }

  // Upload the images.json file back to the S3 bucket
  await s3.putObject({
    Bucket: bucket,
    Key: 'images.json',
    Body: JSON.stringify(images)
  }).promise();
};