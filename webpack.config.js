var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output:{
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'bundle'),
        clean: true
    },

    module:{
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }]

    },
    plugins: [
      
        new CleanObsoleteChunks({
            verbose: false,

            // Clean obsolete chunks of webpack child compilations.
            // Default: false
            deep: true
        })
    ]

}