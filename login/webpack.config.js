const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  //webpack
  output: {
    // path: path.join(__dirname, "/dist"), // the bundle output path
    // filename: "bundle.js", // the name of the bundle
    
    publicPath: 'http://localhost:9024/',
    uniqueName: 'login'
  },
  
  //webpack
  devServer: {
    port: 9024, // you can change the port
  },

  entry: "./src/index",
  
  //webpack
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  
  /*
  //webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  */
  optimization: {
    splitChunks: false
  },
  plugins: [
    //webpack-moduleFederation
    new ModuleFederationPlugin({
      name: 'login',
      filename: "loginEntry.js",
      remotes: {
      },
      exposes: {
        './main': './src/app.js',
        './recover': './src/recoverPassword.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
        '@pmc-uc/uc': {
          singleton: true,
          requiredVersion: dependencies['@pmc-uc/uc'],
        }
      },
    }),
    // webpack
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
