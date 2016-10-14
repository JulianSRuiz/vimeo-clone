const webpack = require('webpack');

module.exports =  {
  entry:['./dist/app.js']
  , module: {
    loaders: [
      {
        test:/\.jsx?$/
        // , exclude: /node_modules/
        , loader: "babel"
      },
      {
        test: /\.css$/
        // , exclude: /node_modules/
        , loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/
        ,loader: 'html'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
        , loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/
        , loader: 'url-loader?limit=8192'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
        , loader: "file"
      },
      {
        test: /\.(woff|woff2)$/
        , loader:"url?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
        , loader: "url?limit=10000&mimetype=application/octet-stream"
      }
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  }
  // , resolve: {
  //   extensions: ['', '.js', '.css']
  // }
  , output: {
		path: __dirname + "/dist"
		, filename: "bundle.js"
	}
};
