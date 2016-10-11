module.exports =  {
  entry:['./dist/app.js']
  , module: {
    loaders: [
      {
        test:/\.js/
        , exclude: /node_modules/
        , loader: "babel"
      },
      {
        test: /\.css/
        , exclude: /node_modules/
        , loader: 'style!css'
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
      }
    ]
  }
  , resolve: {
    extensions: ['', '.js', '.css']
  }
  , output: {
		path: __dirname + "/dist"
		, filename: "bundle.js"
	}
};
