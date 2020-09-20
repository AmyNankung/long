
var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理


obj.time=1645467742;
obj.power=3;
obj.je=999999;
obj.msg.ds=999999;



obj.msg.time=1645467742;
obj.msg.power=3;
obj.msg.je=999999;

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
