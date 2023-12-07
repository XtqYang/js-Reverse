const CryptoJS = require("crypto-js");

window = global

var _0x4e96b4 = window

_$Tk = CryptoJS;

// 加载 test2.js
const test2 = require("./005_2.js")

//流程
// "page":window.page,"m":window._$is,"f":window.$_zw[23]

// eval($_ow);
//_0x4664b4(_0x307e6a);
//_0x3d0f3f[_$Fe] = 'R' + 'M' + '4' + 'h' + 'Z' + 'B' + 'v' + '0' + 'd' + 'D' + 'o' + 'n' + '4' + '4' + '3' + 'M=' + _0x4e96b4['_$ss'] + ';\x20path=/';
//_0x4e96b4["_$ss"] = _0x29dd83["toString"]();


//加密明文数据
_0x4e96b4['_$pr'] = test2.n


_$Ww = _$Tk['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']())

//_0x4e96b4['_$pr']['toString']()='790ad01d38b59c649cd733690bc516f5,fc0f5d672d7d00fc28440f103dcaf941,b3fbb7ee3e497f6f4fa0798627787e99,55e208ccc5cb8ba9291ee28089aaa472,2d0a5474b82c003fb23096f498870815'
// _0x4e96b4['_$is'] = Date['parse'](new Date())
_0x4e96b4['_$is'] = test2._$is
//加密密钥(截取16位长度当前时间戳的bas64加密前16位(实际只有12位))
_0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8']["parse"](_0x4e96b4['btoa'](_0x4e96b4['_$is'])['slice'](0, 16));

_0x29dd83 = _$Tk["AES"]["encrypt"](
    //明文数据
    _$Ww,
    //加密密钥
    _0x4e96b4["_$qF"],
    {
        'mode': _$Tk["mode"]["ECB"],
        'padding': _$Tk['pad']["Pkcs7"]
    }
)["toString"]()
//_$Ww = _$Tk['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']())
//        return _0x499969(_0x41873d(_0x32e7c1));

//_$Wa(number)=new Date()['valueOf']()
//_$yw(String)=Date.parse(new Date());

//_0x499969(_0x1ee7ec(_$yw))


let jm2 = [_0x29dd83, test2.$_zw_23, test2._$is]
console.log(jm2)




