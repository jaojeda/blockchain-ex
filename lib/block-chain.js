const SHA256 = require('crypto-js/sha256');

const calculateHash = ({ previousHash, timestamp, data, nonce = 1 }) => {
  return SHA256(previousHash + timestamp + JSON.stringify(data) + nonce).toString();
};


