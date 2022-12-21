# Project: AWS: S3 and Lambda
### Author: Dustin Apodaca
---
## Problem Domain

- AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers. Use it to automatically run some processing on image files after they’re uploaded to an S3 Bucket.
  - Lambda function code found [here](./lamdaFunctionExample/index.js).

## Processes

### Process for AWS S3 Bucket Deployment and Lambda Function Trigger Creation

Link to [S3 Bucket JSON Object File](https://bucketdust.s3.us-west-2.amazonaws.com/images.json).

- Create an AWS S3 Bucket
  - [AWS S3](https://s3.console.aws.amazon.com/s3/home)
- Create an AWS Lambda Function
  - [AWS Lambda](https://console.aws.amazon.com/lambda/home)
  - [Lambda Function Code](./lamdaFunctionExample/index.js)
- Create an AWS IAM Role

- Create an AWS S3 Bucket Event Trigger
  - An event trigger is a rule that defines an event in which the Lambda function is triggered.
  - S3 trigger created that retrieves metadata for the object that has been updated.

- Upload a JSON file to the AWS S3 Bucket
  - [AWS S3](https://s3.console.aws.amazon.com/s3/home)

- Verify that the Lambda function has been triggered


### Testing Output

```bash
START RequestId: 675453f4-97f3-4f6d-8a4f-788d19147f59 Version: $LATEST
2022-12-21T03:48:07.548Z	675453f4-97f3-4f6d-8a4f-788d19147f59	INFO	[
  { name: 'test', size: 'testSize', type: 'testType' },
  { name: 'newImg', size: 1024, type: 'image/jpeg' }
]
END RequestId: 675453f4-97f3-4f6d-8a4f-788d19147f59
```
