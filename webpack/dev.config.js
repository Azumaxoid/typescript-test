const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
    mode: "development",
    devServer: {
        contentBase: "dist",
        host: "0.0.0.0",
        port: 3000
    }
});

module.exports = config;