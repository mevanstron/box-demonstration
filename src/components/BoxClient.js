const boxClient = props => {
  const BoxSDK = require('box-node-sdk');
  // Create new Box SDK instance
  const sdk = new BoxSDK({
    clientID: 'm1pqiy0vuuhz0ybejni75yf77664lplu',
    clientSecret: 'MLXjmrDiwq4dPb6JlQpnokg0JhuGxNxK'
  });
  // Create new basic client with developer token
  const token = '6he0Kaibh4Bz6n8T9JNRu0b3lHIHfn9q'
  const client = sdk.getBasicClient(token);
  return client;
}

export default boxClient;
