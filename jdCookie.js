/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jdv=122270672%7Ciosapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1609245894812; __jdu=16092458875451410681885; areaId=14; ipLoc-djd=14-1116-3433-0; PCSYCityID=CN_340000_340100_340102; shshshfpa=acb4855c-aca3-ea77-7fb3-832339bdc0ce-1609480683; __jdc=122270672; wxa_level=1; retina=1; cid=9; jxsid=16094807081773399601; webp=1; mba_muid=16092458875451410681885; visitkey=64821059330572820; shshshfpb=iO9mkKCDC%20dtkNofRA2gjYw%3D%3D; PPRD_P=UUID.16092458875451410681885; sc_width=375; __jda=122270672.16092458875451410681885.1609245887.1609480682.1609482622.3; 3AB9D23F7A4B3C9B=Z5JQ6PJMCMOK6QS4XRF3MJT5U35KKAZ67IEZEGXJZ7Q55RPBS3JLERNUYFUD4PMI7Q4G5IHMG3RDTYI2LJH3NF5Z4M; TrackerID=8Dfl1kaGsw4D-WHYr6LcmN71g4vXiz_OuycQRGoN0vg-BeBnMIg_xsJnhCA5jKvmBsXavnUPISt0bn0N0Zk2ibfFme-tPs_kvQZtNl-RdeyEz6g7gkK4OipXdSF8uZj2AUERquNAgb04HPJRoJUedA; pt_key=AAJf7sGeADAF8SYRiDMHevI9-BlQDABma2okcY9_YaKU3HpvUbInVGaniMDWnfwhs8pzJP8Qn24; pt_pin=jd_4f1005e5d511a; pt_token=bylxnwvq; pwdt_id=jd_4f1005e5d511a; sfstoken=tk01mdba31d70a8sMyszQ1QremlBN6PhaqrKsMcgdVfO42iTZMDK186CobJwBApYiHQtpNmeNvYzeWaKXYKxjwm21zmP; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; shshshfp=5578716d58ad5fe7dfccc621b9464006; wqmnx1=MDEyNjM2M3Bvai9uZW9uMiYvYTcxMDBsIHhyLi0gL1RsaS5IbGVDLzQ4bGE3NXNkYTIyT0QpJkg%3D; __jdb=122270672.13.16092458875451410681885|3.1609482622; mba_sid=16094807083133944765291900027.11; __wga=1609483421899.1609480746887.1609480746887.1609480746887.6.1; jxsid_s_t=1609483421962; shshshsID=ffc6886886ac756fd30aadb2dbc9b2e0_9_1609483422188',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
