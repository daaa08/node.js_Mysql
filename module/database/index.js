var mysql = require('mysql');

var conInfo = {
	host : '127.0.0.1',  // 데이터 베이스 아이피 또는 url
	user :  'root',      // 사용자 아이디 (나)
	password : 'root',  // 비밀번호
	port : '3306', 		// 포트  (mysql 전용 포트)
	database : 'Bbs'	// 데이터베이스
}
// 쿼리 후에 결과값을 리턴해주는 함수
exports.executeQuery = function(query,callback){
	// 연결 정보를 담은 객체 생성 
	var con = mysql.createConnection(conInfo);  // 가져다 쓰겠다는 의미 
	// 연결 정보를 이용해서 데이터베이스 연결
	con.connect();
	// 데이터 베이스의 쿼리 실행
	con.query(query, function(err, items,fields){
		if(err){
			console.log(err);
		}else{
			callback(items);
		}
		this.end();  // mysql 연결 해제 
	});
}

// 쿼리를 실행만 하는 함수
exports.execute = function(query, values,callback){  
	// 연결 정보를 담은 객체 생성 
	var con = mysql.createConnection(conInfo);  // 가져다 쓰겠다는 의미 
	// 연결 정보를 이용해서 데이터베이스 연결
	con.connect();
	// 데이터 베이스의 쿼리 실행
	con.query(query, values,function(err,result){
		if(err){
			callback(err);
		}else{
			callback();
		}
		this.end();  // mysql 연결 해제 
	});
	// con.end(); // 필수! 안하면 계속 연결된 상태 
}

//멀티
exports.executeMulti = function(query,values, callback){  
	// 연결 정보를 담은 객체 생성 
	var con = mysql.createConnection(conInfo);  // 가져다 쓰겠다는 의미 
	con.connect();  // 연결 정보를 이용해서 데이터베이스 연결
	con.query(query,[[values]], function(err,result){	// 데이터 베이스의 쿼리 실행
		if(err){
			console.log(err);
		}else{
			callback();
		}
		this.end();  // mysql 연결 해제 
	});
	// con.end(); // 필수! 안하면 계속 연결된 상태 
}