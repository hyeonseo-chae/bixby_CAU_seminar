module.exports.function = function http_call () {
  
  const http = require('http')
  URL = 'https://mportal.cau.ac.kr/portlet/p005/p005.ajax'
  const headers = {  
    format : "json",  
    headers : {  
      "Content-Type":'application/json'  
    }} 
  
  const params = { "tabs":"1","tabs2":"10","daily":1 };   
  const result = http.postUrl(URL, params, headers);  
  
  return result
}
