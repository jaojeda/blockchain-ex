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

const checkDifficulty = (difficulty, hash) => {
  return hash.substr(0, difficulty) === '0'.repeat(difficulty); 
};

const nextNonce = (block) => {
  return updateHash({ ...block, nonce: block.nonce + 1 });
};

const updateHash = (block) => {
  return { ...block, hash: calculateHash(block) };
};

// eslint-disable-next-line no-console
console.log(generateGenesisBlock());

