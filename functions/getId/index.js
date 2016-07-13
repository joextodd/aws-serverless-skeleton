/*
 * Example Lambda function to get id from cognito.
 */
const aws = require('aws-sdk');
const cognito = new aws.CognitoIdentity();

exports.handle = function handler(event, context) {
  if (!event.username) {
    context.fail('Bad Request: Missing username parameter.');
    return;
  }
  const idParams = {
    IdentityPoolId: settings.identityPoolId,
    DeveloperUserIdentifier: event.username,
    MaxResults: 1,
  };
  cognito.lookupDeveloperIdentity(idParams, (idError, idData) => {
    if (idError) {
      context.fail(`Unprocessable Entity: ${event.username} not registered.`);
      return;
    }
    context.succeed(data);
  });
};
