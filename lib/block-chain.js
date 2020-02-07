const SHA256 = require('crypto-js/sha256');

const calculateHash = ({ previousHash, timestamp, data, nonce = 1 }) => {
  return SHA256(previousHash + timestamp + JSON.stringify(data) + nonce).toString();
};

const generateGenesisBlock = () => {

  const block = {
    timestamp: + new Date(),
    data: 'Genesis Block',
    previousHash: '0'
  };

  return {
    ...block,
    hash: calculateHash(block)
  };
};

// eslint-disable-next-line no-console
console.log(generateGenesisBlock());

