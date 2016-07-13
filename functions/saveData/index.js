/*
 * Example Lambda function to save data to DynamoDB.
 */
const aws = require('aws-sdk');
const dynamo = new aws.DynamoDB.DocumentClient({ region: 'eu-west-1' });


exports.handle = function handler(event, context) {
  if (!event.data) {
    context.fail('Bad Request: Missing data parameter.');
    return;
  }
  const params = {
    TableName : 'users',
    Item: {
       data: event.data,
  };
  dynamo.put(params, (err, data) => {
    if (err) {
      context.fail('Internal Error: Failed to update database.');
      return;
    }
    context.succeed(data);
  });
};
