# Node.js
###### CRUD 적용해보기 (Create(생성), Read(읽기), Update(갱신), Delete(삭제))
- insert : POST
![스크린샷 2017-07-24 오후 10.35.18](http://i.imgur.com/Zvr8ERs.png)

- select : GET
![스크린샷 2017-07-24 오후 10.36.05](http://i.imgur.com/OufIOH0.png)

- update : PUT
![스크린샷 2017-07-24 오후 10.34.42](http://i.imgur.com/imCd1KU.png)

- delete : DELETE
![스크린샷 2017-07-24 오후 10.34.23](http://i.imgur.com/j8wy4KS.png)

+ +search -> ?title = 제목
![스크린샷 2017-07-24 오후 10.40.17](http://i.imgur.com/hVLqsWm.png)

---
✔️✔️✔️ javascript 함수 만들기 ✔️✔️✔️
```javascript
function send (response,result){  // function 함수명
    response.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    response.end(result);
}
```
⬇️ 다른 파일에서도 사용할 수 있도록 public으로 바꾸면? ⬇️
```javascript
exports.send = function(response){    
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("Bbs");
}
```

> 현재 날짜 가져오기
```javascript
var now = new Date().toLocaleDateString();
    var values = [data.id, data.title,data.author ,data.content, now, data.id];
                          console.log(query);
```

> callback 동작 순서
![bandicam 2017-07-24 13-54-40-652](http://i.imgur.com/8cIZxHm.jpg)
![bandicam 2017-07-24 13-57-54-231](http://i.imgur.com/bJbcvnf.jpg)

