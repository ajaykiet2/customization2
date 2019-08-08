module.exports = {
	css: {
		sourceMap: true,
	},
	outputDir: 'public/dist',
	lintOnSave: false,
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	configureWebpack: {
		performance: {
			maxAssetSize: 500000,
		},
	},
	devServer: {
		proxy: {
			'/todos': {
                // target: `http://localhost:${process.env.PORT}`,
                target: "https://jsonplaceholder.typicode.com/todos",
			},
		},
	},
};