






var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理



obj= {
  "retcode" : 0,
  "errmsg" : "",
  "data" : {
    "signed" : 1,
    "groups" : [
      {
        "minup" : "0",
        "gicon" : "V0",
        "gname" : "游客",
        "play_daynum" : 15,
        "down_daynum" : 0,
        "comment_daynum" : 0
      },
      {
        "minup" : "0",
        "gicon" : "V1",
        "gname" : "VIP1",
        "play_daynum" : 25,
        "down_daynum" : 4,
        "comment_daynum" : 5
      },
      {
        "minup" : "2",
        "gicon" : "V2",
        "gname" : "VIP2",
        "play_daynum" : 50,
        "down_daynum" : 10,
        "comment_daynum" : 10
      },
      {
        "minup" : "5",
        "gicon" : "V3",
        "gname" : "VIP3",
        "play_daynum" : 100,
        "down_daynum" : 20,
        "comment_daynum" : 15
      },
      {
        "minup" : "10",
        "gicon" : "V4",
        "gname" : "VIP4",
        "play_daynum" : 200,
        "down_daynum" : 40,
        "comment_daynum" : 20
      },
      {
        "minup" : "20",
        "gicon" : "V5",
        "gname" : "尊贵VIP",
        "play_daynum" : 999,
        "down_daynum" : 100,
        "comment_daynum" : 30
      }
    ],
    "uinfo" : {
      "curr_group" : {
        "minup" : "20",
        "gicon" : "V5",
        "gid" : "5",
        "gname" : "尊贵VIP"
      },
      "next_group" : {
        "minup" : "65535",
        "gicon" : "",
        "gid" : "6",
        "gname" : "禁止发言"
      },
      "next_upgrade_need" : 65130,
      "down_daily_remainders" : 88,
      "play_daily_remainders" : 880,
      "goldcoin" : "213"
    },
    "reqplay_addnum" : "136",
    "reqdown_addnum" : "0",
    "user" : {
      "duetime" : "2021-07-19 11:02:24",
      "sysgid" : "5",
      "uid" : "20888",
      "uniqkey" : "GXH6HE",
      "gids" : null,
      "avatar_url" : "09",
      "newmsg" : "0",
      "gicon" : "V5",
      "gid" : "5",
      "avatar" : "09",
      "dueday" : "352天后过期",
      "mobi" : "86.13279316646",
      "username" : "~小小影迷-GXH6HE",
      "goldcoin" : 213,
      "regtime" : "2019-07-12 18:57:06",
      "nickname" : "杜佛林",
      "email" : "~1023687698",
      "isvip" : 1,
      "gender" : "1"
    }
  }
}





body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
