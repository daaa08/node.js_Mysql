var error = require("/Users/Da08/Documents/workspace/nodejs/serverMysql/module/error");
var bbs = require("../b_controller/bbs");
var user = require("../b_controller/user");
// request 를 분석해서 요청 url 에 대한 연결 
exports.parse = function(request,response){
    var path = removeQuerystring(request.url);
    // url 분석_ 추후 '/'를 기준으로 전부 split 해야 함 
    if(path == "/bbs"){
        // bbs.js처리
        // bbs.send(response);
        parseMethod(bbs,request,response);
    }else if(path == "/user"){
        // user.js처리
        //  user.send(response);
         parseMethod(user,request,response);
    }else{
        error.send(response,404);
    }
};
// http메소드 분석 
function parseMethod(module,request,response){
    if(request.method == "POST"){
         module.write(request,response);
     }else if(request.method == "GET"){
         module.read(getQuerystring(request.url),response);
     }else if(request.method == "PUT"){
         module.update(request,response);
     }else if(request.method == "DELETE"){
         module.delete(request,response);
     }
}

// http://localhost          /bbs?title=서초구
function removeQuerystring(fullUrl){
    var position = fullUrl.indexOf('?'); // ?의 위치값을 반환. 없으면 -1
    if(position == -1){
        return fullUrl;
    }else{
        return fullUrl.substring(0, position);
    }
}

function getQuerystring(fullUrl){
    var position = fullUrl.indexOf('?'); // ?의 위치값을 반환. 없으면 -1
    if(position == -1){
        return "";
    }else{
        return fullUrl.substring(position + 1);
    }
}

// var exports = "aaa";  // 앞에 var를 붙이면 private