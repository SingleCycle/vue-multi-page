'use strict'
/* eslint-disable spaced-comment,curly,eqeqeq,no-unused-vars,no-redeclare */
import Request from '../libs/http/axios'
import utils from '../libs/utils/utils'

const get = (url, data) => {
  Request.get(url, data).then(function(response) {
    if (response.status) {
      if (response.data.status == 'SUCCESS')
        return response.data
      else {
        console.log(response.data.message)
        return false
      }
    }
  }).catch(function(error) {
    console.log(error)
  })
}
const post = (url, data, success, fail) => {
  Request.post(url, data).then(function(response) {
    //console.log(response)
    if (response.status == 200) {
      if (response.data.code == 200) {
        success(response.data)
      } else {
        fail(response.data)
      }
    } else {
      console.log(response.statusText)
    }
  }).catch(function(error) {
    console.log(error)
  })

}
export default {
  //举栗子
  userProblemOrderList: (data, success, fail) => {
    post('/order/userProblemOrderList.json', data, function(res) {
      return success(res)
    }, function(error) {
      return fail(error)
    })
  },
}