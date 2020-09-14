const path = require('path');
const config = {
  entry: path.resolve('touring_plan/source/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve('touring_plan/dist'),
    filename: 'touring_plan.min.js'
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000
  }
};

const configPlugin = {
  entry: path.resolve('touring_plan/source/js/config.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve('touring_plan/dist'),
    filename: 'config.min.js'
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000
  }
};

module.exports = (env, argv) => {
  'use strict';
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    configPlugin.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }
  return [config, configPlugin];
};
