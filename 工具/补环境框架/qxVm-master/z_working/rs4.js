debugger;
;(function (){
    // 重写模式
    let getElementsByTagName = Element.prototype.getElementsByTagName;
    Element.prototype.getElementsByTagName = function (tag){
        if (tag === 'i'){
            return []
        }
        return getElementsByTagName.call(Element, tag)
    }
    let documentgetElementsByTagName = Document.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagName = function (tag){
        if (tag === 'meta'){
            let meta_data = {
                content:"{q{UH0EJ8qNar1zJhmLL1nRhEYqvU6GmIaeCs1fiiT3eKvyQWma_KOWiMGTGrsf8EY3dUPTAtrlXsk2JlYgaKcN8rTLqm26649qc80qDdfe167qQm6W91nwJEl0bAnJrh99fA1mWx0a9q *wR7HvJ6IsUC410DntKRngA;QyqA82EGtIB6ePNEeYo9NG;iEm6gdSTTpYiqU10OlvsnG;yMG8gk5okQ97gP4eb.IadA;T8F36FaS9AtR4sXBkRr0iG;RTlM3IYjAzboXbIiNSIFRA;t7_svh3Kc3.VU9jOjAJgdq;.8D9Zx78FrKF.Zn4xbfmIG;IMhCM7gXESIqShs5TNMo9A;pvBPF7OtrK6trS5vZYizwa;9qxqLXuEeDQeAlNfAL_l.A;VNeyFcNDtQZhV2sfCxyHqA;kT4JL2WRSOhvUIEcOjSrva;LpFhLGWYI8eFx_X999MLEq;xVtZ9.fpfr2dDNfaNAzAgq;NqssQaVItFB0TevtNxJrkG;AI3RN3R7lP0BBnYsoCO5KG;xrYRhwM6FYW7zCsPL.iecq;0kOXzZzt1eXLrlPo.QQ4xG;ApKNqLIRoybF5rIxSnabBG;hfgZrtz_KscdFC6a3f1wKA;q|[Id9DufCLoFzlfVPIhRaHSimiXshxY4zi4Vo61WAeguMhHIp87oCCYhzB7VFT8BQdenMIt726Z6dNh52aZ6.NhWAf0ld0UQaGTUXTRZTbX6uypZLFnb4yFJNET0hRsHru_CvuMHAsulUrm5z8gVsb1BwI_YIjKdwKX6hsR7x0nYXSM8wkgv16wM7E0YdK17m4gP4WmZ9fXa.mW5aC_1v6IiJbSOotWWw57qjXt83.7Ub6RFg4ZCv9IQ37nPdo34qp.OubHhm7zC_XJBJb_GbuRXVFgOMAlhzUZP4Dqh3WuPXTKBr1TShYkhVKecvzr47qqqqq|gxREp_9jGswYf4od4pHrN60oBYWrad0uJmFVAdp6EwEyBgTCAQ7GKSbiYlBR1nVOJsXxQu0_3mX2O6ldhMXYf6SicF7pBGKuQ3XT7S2CoYXzZOqBIAiLUyliHYITqe2tgI4WK9CX2F43h2pIuMLYufUCJQyePGvFOUdZsjGBZI4fP7T1pwF91ymtGVtJZX6cqY8fI7m8hsMrYbT1rQEyz2Di4sMruXpCmwEpkGT5HVem7C6sFMM2qL684YhLwBS6q3tYLSmow1LJjX2KqRNydXS6URhff.65WIyqsqKSXb0ugIj_ZyMyulwyXuNZaqlwDeMqHUVR7QCNnFUm9QDL!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipa1MTyqJal4cffrcp7Hqa}!hA9p3lJ_KoZJ8mpe1kWHR0p01UpkWqT_119H1vxyA6zc8V2DQOGJwVSS1cqHVvEvI0JclCRKIm2IMDpO8YyeF0N8YlJgU9ejYlmTDSySUame3lfhYVR_pUSIMoyep6ydsqfm1KyMpYqIVYfLFVfgFoErDfrjMraoU6mVwfVKokTIHbN.ksSWxTGNlDeEoTVUFfp83DeOADxnrCadIDWVRCLykCQqqkhxqqr4qr0qr0ql3650qr1qVK5ejCKuk3ZxzSDOoM7Yzq.9nyd02BmWz13Cb3gcAYFyxNn9D0OYrdj3WNibJo8OzAqqqhDbuFhgxwGOjqYplpK.pB0FbIPQPSw3vEhTqhHoSbUHxtiptqr0qk162qt1074790432ql4096qhs1SU6eWnplTq",
                parentNode:{
                    removeChild(){}
                },
            }
            return [lwVm.proxy_chained(meta_data, 'myMeta')]
        }
        return documentgetElementsByTagName.call(document, tag)
    }
    let documentElement = {
        style: {},
        getAttribute(){
            // qxVm.console_log(arguments)
            return false;
        }
    }
    lwVm.memory.private_data.get(document).documentElement = lwVm.proxy_chained(documentElement, 'documentElement')

}());
