/**************************************
 * 
 * Notas sobre webpack
 * 
 * Ese necesario el public path al menos para levantarlo con serve
 * 'output' aparentemente no es necesario
 * 'devserver' en este caso, solo se usa para definir el puerto
 * 
 * 
 * en module federation:
 * - se usa el boostrap por que lazy funciona ok con require y no tan bien con import
 * - el shared es capricho de react, podria no tener nada compartido pero algunas
 *   librerias podrian tener conflictos por instancias
 * 
 * los comentarios //webpack y //webpack-modulefederation indican cuales partes son 
 * parte de la configuración necesaria de webpack. Referencia cuando pasas de 
 * no-webpack a webpack y luego a webpack con module federation
 * 
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  /*
  //webpack
  output: {
    // path: path.join(__dirname, "/dist"), // the bundle output path
    // filename: "bundle.js", // the name of the bundle
    publicPath: 'http://localhost:9000/'
  },
  */
  
  //webpack
  devServer: {
    port: 9000, // you can change the port
  },
  
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
      name: 'container',
      remotes: {
        products: 'products@http://localhost:9010/productsEntry.js',
      //<nombre del import>: <nombre del remote>@<url>/<filename del remote>
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
        }
      },
    }),
    // webpack
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
