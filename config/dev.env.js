var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"dev"',
    NODE_ENV: '"testing"',
    // API_ROOT: '"//pregatewayapi.shouqiev.com:8443"',//预发布环境测试
    // API_ROOT: '"//39.106.63.225:8000"', //28网关
    // API_ROOT: '"//39.107.98.106:8000"', //159网关
    // API_ROOT: '"//47.94.148.4:8000"', //197网关
    API_ROOT: '"//localhost:8802/api"',
    API_ROOT_WITHOUT_GATEWAY: '"//tcapi2.0.gftest.cloudns.asia:88"',
    REPORT_ROOT: '"//testreport.gfdev.cloudns.asia:88"',
    GOFUN_HTML_ROOT: '"//tch5.gftest.cloudns.asia:88"', //159
})