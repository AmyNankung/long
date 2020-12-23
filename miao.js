






var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理




obj.ret_data.expire_time="2030-06-12 20:51:47";
obj.ret_data.info.n_vip_time=2222504183;
obj.ret_data.info.vip_time=2222504183;
obj.ret_data.info.expire_time_format="2030-12-23 19:09:34";

obj.ret_data.vip_type=3;
obj.ret_data.time=2222504183;
obj.code=0;
obj.ret=0;
obj.timestamp=2222504183;
obj.s_vip_time=2222504183;
obj.vip_type=3;
obj.vip_time=2222504183;
obj.time=2222504183
obj.expire_time="2030-06-12 20:51:47";
obj.expire_time_format="2030-06-12 20:56:54";


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
