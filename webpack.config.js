const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const pagesDir = `${PATHS.src}/html/pages/`;

const pages = fs
  .readdirSync(pagesDir)
  .filter((fileName) => fileName.endsWith('.njk'));

module.exports = {
  stats: {
    children: false,
  },
  performance: {
    hints: false,
  },
  externals: {
    paths: PATHS,
  },
  entry: `${PATHS.src}/app.js`,
  output: {
    filename: 'js/[name].min.js',
    path: PATHS.dist,
    publicPath: '',
    // publicPath: '/',
  },
  resolve: {
    alias: {
      sass: path.resolve('src/assets/sass'),
      // '@': path.resolve('src/vue'),
    },
    extensions: ['.js', '.scss', '.sass'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/](node_modules|assets[\\/]js[\\/]vendors)[\\/](.(?!.*\.css$))*$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              searchPaths: ['src/html'],
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './configs/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'import-glob-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${pagesDir}/${page}`,
          filename: `./${page.replace(/\.njk/, '.html')}`,
          minify: false,
        })
    ),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: false,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ['p', 'i', 'b', 'span'],
        },
      },
      replace: [' type="text/javascript"'],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/font', to: 'font' },
      // { from: 'src/assets/img/main', to: 'img' },
      { from: 'src/assets/documents', to: 'content/documents' },
      { from: 'src/assets/img/content', to: 'content' },
      // { from: 'src/assets/json', to: 'json' },
      { from: 'src/assets/css', to: 'css' },
    ]),
  ],
  devtool: false,
  devServer: {
    // contentBase: 'src',
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        { from: /\/personal/, to: '/personal.html' },
        // { from: /\/personal\/[A-Za-z0-9\-\/]+/, to: '/personal.html' },
      ],
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
