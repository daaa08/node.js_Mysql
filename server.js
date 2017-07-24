// 1 서버 모듈
var http = require("http");
var router = require("./module/router");
// 2 서버 생성_ 콜백펑션 : 사용자 요청이 있을시에 호출
var server = http.createServer(function(request, response){
    // requestParser(request,response);
     //---> 모든 요청에 대해 router.js 로 보냄
    router.parse(request, response); // 요청 url 분석
});  

// 3 서버 시작
server.listen(8080, function(){  // 스타트 후에 호출
    console.log("server is running......")   // 단순 참고용 로그 호출 
});

/*

// 요청 분석 처리 
function requestParser(request,response){
     console.log(request.url);   // localhost:8080/hello 라고 입력시 로그창에 뜸 
     
    if(request.url == "/hello"){
        responseSend(response)
    }else{
        send404(response);
    }
}

// 응답 처리
function responseSend(response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("hello");
    response.end();  //end를 써줘야 응답이 끝난걸로 처리가 됨 
}

// 오류 처리
function send404(response){
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end("Not hello~~");   // .write 쓰지않고 .end 에 쓸 수 있음 
}

*/