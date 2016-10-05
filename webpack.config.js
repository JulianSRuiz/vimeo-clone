module.exports = {
	// the entry point (index.js) of our application
	entry: [
		// first element is only necessary for webpack dev server

	 "./dist/app.js"
	]
	, module: {
		// informs webpack what to do with different file types
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: "babel"
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: "style!css"
			}
			, {
				test: /\.html$/
				, loader: "html"
			}
		]
	}
	// determines what file types webpack should resolve
	, resolve: {
		extensions: [ "", ".js", ".css" ]
	}
	// output information of the production file
	, output: {
		path: __dirname + "/dist"
		, filename: "bundle.js"
	}
	// Where to find index.html
	// Only necessary for webpack dev server
	, devServer: {
		contentBase: "./"
	}
};
