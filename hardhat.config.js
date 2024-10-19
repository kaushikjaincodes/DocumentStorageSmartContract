require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:6000",
      accounts: [
        '0x28e7f4fa780b5ec778ff7ac60acc0b54cf2dac53d4626296b9c81b8f94794658'
      ]
    }
  }
};
