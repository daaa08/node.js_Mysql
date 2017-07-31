var database = require("../module/database");
var tableName = "board";

exports.select = function(callback){
    var query = " select * from " + tableName+" order by id desc ";   // 정렬 <-> asc
    database.executeQuery(query,callback);
}

exports.search = function(qs, callback){
    // var query = "select * from "+tableName+" where title like '%'"+qs.title+"'%'";  // column 하나만 검색할때 
    // 전체 검색시에 모든 column 넣어줘야 함
    var query = "select * from "+tableName+" where title like ? or author like ?";  // 전체 검색하는 방법 or 조건 추가 (# or, and는 소문자로 가능)
    var values = [addPercent(qs.search), addPercent(qs.search)];  // search에 담아주면 검색시 search=검색내용 으로 가능 

    console.log(query);
    database.executeQueryValues(query, values,callback);
}

exports.insert = function(data,callback){
    var query = " insert into " + tableName+"(title,author,content,date)";
       query = query + " values(?,?,?,?)";
    var now = new Date().toLocaleDateString();
    var values = 
        [data.title,data.author,data.content,now];
    database.execute(query, values, callback);
    // database.executeMulti(query,values,function(){
    //     callback();
    // });
}
exports.update = function(data, callback){
    var query = " update " + tableName
              + " set id      =?, "
              + " title =? , "
              + " author =?,"
              + " content =?,"
              + " date =?"
              + " where id=?";

    var now = new Date().toLocaleDateString();
    var values = [data.id, data.title,data.author ,data.content, now, data.id];
                          console.log(query);
    database.execute(query,values,function(error){
        callback(error);
    });
}
exports.delete = function(data, callback){
    var query = "delete from "+tableName+" where id = ?";
    var values = [data.id];
    database.execute(query, values, function(error){
        callback(error);
    });
}

function addPercent(param){
    return "%"+param+"%";
}