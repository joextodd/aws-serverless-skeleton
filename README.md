# AWS Serverless Skeleton

A skeleton project to easily utilise Amazon Web Service's serverless architecture with API Gateway and Lambda.

- Lambda functions are tested and deployed using Apex.
- API structure is defined with a Swagger file.
- API deployed using aws-apigateway-importer.
- CORS enabled.
- Test API with mocha, should and supertest.
- Run commands with npm scripts.

## Requirements

- [Node.js](https://nodejs.org)
- [Apex](https://github.com/apex/apex)
- [AWS API Gateway Importer](https://github.com/awslabs/aws-apigateway-importer)

## Setup

1. Save AWS credentials.
2. Run npm install in root directory.
3. Add Lambda execution role ARN to project.json and each functions function.json.
4. Add aws-apigateway-importer path, API URL, stage name to package.json.
5. Add each Lambda function ARN to Swagger.yaml definitions.

## Lambda

- To test function change into directory and run `npm test`
- Deploy to AWS with `npm run deploy`

## API Gateway

- Run API test suite in the root directory with `npm test`
- Deploy to AWS in the root directory with `npm run deploy`
