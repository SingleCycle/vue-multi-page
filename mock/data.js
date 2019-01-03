const Mock = require('mockjs');
//通用返回成功状态
const data = Mock.mock('/api/data','get',{
    "code": 200,
    "desc": "OK",
    "modelData": {
    }
});
export  default {
    data
}