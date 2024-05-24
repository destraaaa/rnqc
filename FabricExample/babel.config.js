const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          crypto: 'react-native-quick-crypto',
          'stream': 'readable-stream',
          'buffer': '@craftzdog/react-native-buffer',
        },
      },
    ],
  ],
};