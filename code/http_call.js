module.exports.function = function http_call (meal) {
  //Post 방식
  const http = require('http')
  URL = 'https://mportal.cau.ac.kr/portlet/p005/p005.ajax'
  const headers = {  
    format : "json",  
    headers : {  
      "Content-Type":'application/json'  
    }} 
  
  const params = { "tabs":"1","tabs2":"10","daily":1 };   
  const result = http.postUrl(URL, params, headers);  
  
  /*tabs2 = 10(조식)
20(중식)
40(석식)
daily = 0(오늘)
1(내일)*/


//Get 방식
/*
  var http = require('http')
  var result = http.getUrl("www.example.com/api",{format : 'json'})

  return result
} */

  return result
}
