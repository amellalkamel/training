const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack 4 Starter',
        template: './src/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
     })
],
resolve: {extensions: ['.js', '.ts','.scss']},
module: {
  rules: [
      {
          test:  [/.js$|.ts$/],
          exclude: /(node_modules)/,
          use: {
            
              loader: 'babel-loader',
              options: {
                  presets: [
                      '@babel/preset-env',
                      '@babel/typescript',
                  ]
              }
          }
          
          
      },
      {
        test: [/.css$|.scss$/],
        use:[                    
          'style-loader',                  
          'css-loader',
          'sass-loader'
         ]
      },
      {
        test: [/.css$|.scss$/],
         use: [    
           MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'  ]
      },
     
  ]
},
};