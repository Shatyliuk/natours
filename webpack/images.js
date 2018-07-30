module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.(jpg|png|svg|webm|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }]
        }
    }
};