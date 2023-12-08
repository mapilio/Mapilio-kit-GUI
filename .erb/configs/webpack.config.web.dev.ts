import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import webpackPaths from './webpack.paths';
import baseConfig from './webpack.config.base';
import { spawn } from 'child_process';


const configuration: webpack.Configuration = {
  devtool: 'inline-source-map',

  mode: 'development',

  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Webpack Dev Server'ı etkinleştirin ve bağlantı noktasını belirtin
    'webpack/hot/only-dev-server', // HMR sadece tarayıcıyı yeniden yükler
    path.join(webpackPaths.srcRendererPath, 'index.tsx'),
  ],

  output: {
    path: path.join(webpackPaths.rootPath, 'client'),
    filename: 'bundle.js',
    publicPath: '/', // Webpack Dev Server'ın root path'i ayarlayın
  },

  target: 'web', // Tarayıcıda çalışacak şekilde değiştirin

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader', // Stil dosyalarını DOM'a eklemek için style-loader ekleyin
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // SVG
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR'yi etkinleştiren plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(webpackPaths.srcRendererPath, 'index.html'),
    }),
  ],

  devServer: {
    hot: true,
    port: 8080,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: {
      publicPath: '/',
    },
    historyApiFallback: {
      verbose: true,
    }
  },
};

export default merge(baseConfig, configuration);
