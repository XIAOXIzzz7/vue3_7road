const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { 
        '/api': {
            target: 'http://10.0.23.85:8888',
            changeOrigin: true,
            pathRewrite: {
                '^./api':'/api',
            }
        },
        '/qa/7road': {
            target: 'http://10.0.23.85', 
            changeOrigin: true,
            pathRewrite: {
                '^/qa/7road/zy_issue_data_table': '/qa/7road/zy_issue_data_table',
                '^/qa/7road/zy_bug_data_table': '/qa/7road/zy_bug_data_table',
            }
        },

    },
    // disableHostCheck: false,
    // https: false,
    // hotOnly: false,
        historyApiFallback: true,
        allowedHosts: "all",
        // https: true,
        // host:"10.0.22.242",
        port:8081
}
  
})
