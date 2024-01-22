// 框架内存管理，用于解决变量名重复问题
// 调试日志 window.catvm 把框架功能集中管理，

var catvm = {};
// 框架运行内存
catvm.memory = {
    content_meta: {
        0: "{qqqhDDexFaTvMa0kihgqql4096qqqt1075314760lABpzq!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipak162H8Wxte9vasdRWdl9qqJ1600407196152lEgWWqqh5XmfHRYf62oKx69ItuerNQRyYMyKX4NamAqqYJYrJJu8N5ghrCsU314Hhjqqqqqqqqqqqq~FD6ABkKTm3axUocqfMumPJmEYE0w.JCZStu2gZnkxQXpp5UsvE.ya4loEwBajBnkmAQ3B_TMoA.YYyC_NFFE7e1kAE5ShZo4b8FSwdbuZVBTxZPk6sIrZN9HAsx7B_mkmKNl7S1kUVBmXgYsv1za.vY6MQeeK2vOHsx2Cd2DmwJSenbdyMwAGd2FkQ5TR41B8UdpTf6u_VENSdKPcKMxf.ccqYFSkZmvus.eu.CdnwyyUOvbDIyaLzc55JMpezc.9hi3TBbOX8iY_NbOfIhxBBDvBJMfeXc.LhiLTPbOFYtyJNmcHUewB9oFaEE0X0oP2hLJtvmnTheYEPntcYFxVflX3QRWGqqVpKy0KoYIQVrnA6Rlw9NZXAOo30eljTuAgmeehhIUrtA;4kUyzUi8kgD7ll6J2MqFBA;qqr1MlK02KnfRx2GPpcmDEllbAcmmtVlqql3650Ddfe167qqr0k443qqr0k117qqq{Ul8GO0PUAtyf0bb1m3gGdOUcW8RYSanBDtW2O9Kcq8Ep0CUtRQNm0bPkrEZ0.96cE8xfuwoTuHDJPQ0pf3oR4FUa",

    },
    tagName: {},//document.getElementsByTagName(tagName)名称
    config: {print: true, proxy: true}, // 框架配置：是否打印，是否使用proxy
    htmlelements: {}, // 所有的html节点元素存放位置
    listeners: {}, // 所有事件存放位置
    log: [], // 环境调用日志统一存放点
    storage: {} // localStorage 全局存放点
}; // 默认关闭打印


