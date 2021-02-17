import path from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const isDevServer = process.env.WEBPACK_DEV_SERVER

const webpackConfig: webpack.Configuration = {
  mode: isDevServer ? 'development' : 'production',
  devtool: isDevServer ? 'inline-source-map' : 'source-map',
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [/src/],
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'MovieSearch App' }),
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin(),
  ],
}

export default webpackConfig
