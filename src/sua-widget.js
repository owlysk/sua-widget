//https://github.com/owlysk/sua-widget
var debug = false;
var langs = {
    'sk': {
        url:{
            href: 'https://ktopomozeukrajine.sk',
            title: 'Kto pomôže Ukrajine.sk',
            text: 'Ako pomôcť?',
        },
        text: 'Podporujeme<br/>UKRAJINU!<br/>'
    },
    'cz': {
        url:{
            href: 'https://stojimezaukrajinou.cz',
            title: 'Stojíme za Ukrajinou.cz',
            text: 'Jak pomoci?',
        },
        text: 'Podporujeme<br/>UKRAJINU!<br/>'
    },
    'en': {
        url:{
            href: 'https://helpukrainewin.org',
            title: 'HelpUkraineWin.org',
            text: 'How to help?',
        },
        text: 'Support<br/>UKRAINE!<br/>'
    }

};

var styleCSS = `
/* https://github.com/owlysk/sua-widget */
:root{
    --standard-font-size: 16px;
    --standard-border-radius: 15px;
}

.sua-widget{
    display: block;
    position: fixed;
    box-shadow: #6d6d6dad 0px 0px 20px 2px;
    border: solid #6d6d6d5e 1px;
    border-radius: var(--standard-border-radius);
    margin: 10px;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
}
.sua-widget.top{
    top: 0px;
}
.sua-widget.bottom{
    bottom: 0px;
}
.sua-widget.left{
    left: 0px;
}
.sua-widget.right{
    right: 0px;
}
.sua-body{
    padding: 5px 15px 20px;
    border-radius: var(--standard-border-radius);
    background: #f0efef;
    color: #000000;
    font-size: var(--standard-font-size);
    text-align: center;
    position: relative;
    line-height: 10px;
    font-weight: bold;
}
.sua-body a{
    font-size: calc(var(--standard-font-size) - 2px);
    font-weight: normal;
}
.sua-body p{
    padding: 0px;
    margin: 10px 0px;
    line-height: 16px;
}

.sua-body .sua-close{
    position: absolute;
    display: inline-block;
    border: solid #6d6d6d83 1px;
    background-color: #f0efef;;
    right: -15px;
    top: -15px;
    border-radius: 20px;
    padding: 10px 5px;
    width: 35px;
    height: 35px;
    line-height: 14px;
    font-size: 14px;
    cursor: pointer;
}
.sua-body .sua-close:hover{
    background-color: #464646;
}

.sua-body .sua-icons{
    padding-bottom: 20px;
}
.sua-body .inline-block{
    display: inline-block;
    line-height: 18px;
}
.sua-body .sua-flag{
    font-size: calc(var(--standard-font-size) + 20px);
    line-height: calc(var(--standard-font-size) + 20px);
    padding: 5px;
    display: inline-block;
}
.sua-body a{
    display: inline-block;
    background-color: #1a8bd6;
    color: #f5f5f5;
    border: solid #0a65a1 1px;
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px 7px;
    line-height: 20px;
    text-decoration: none;
    font-style: italic;
}
.sua-body a:hover{
    background-color: #0c76bd;
    color: #ffffff;
}
`;
var userBrowserLang = navigator.language || navigator.userLanguage; 

var userLang = userBrowserLang.split('-')[0];
if(typeof(langs[userLang])==="undefined") userLang = 'en';

var uawidget=document.querySelector('.sua-widget');
if(uawidget){
    if(debug) console.log('init');

    var uawidgetbody=document.createElement('div');
    uawidgetbody.classList.add('sua-body');
    uawidget.append(uawidgetbody);

    var icons=document.createElement('div');
    icons.classList.add('sua-icons');
    uawidgetbody.append(icons);

    var closeButton = document.createElement('div');
    closeButton.classList.add('sua-close');
    closeButton.setAttribute('onclick','document.querySelector(\'.sua-widget\').remove();');
    closeButton.innerHTML='❌';
    icons.append(closeButton);

    var flag = document.createElement('div');
    flag.classList.add('sua-flag');
    flag.innerHTML='🇺🇦';
    uawidgetbody.append(flag);

    var text = document.createElement('div');
    text.classList.add('inline-block');
    text.innerHTML=langs[userLang].text;
    uawidgetbody.append(text);

    uawidgetbody.append(document.createElement('br'));

    var supportBtn = document.createElement('a');
    supportBtn.setAttribute('href',langs[userLang].url.href);
    supportBtn.setAttribute('title',langs[userLang].url.title);
    supportBtn.setAttribute('target','_blank');
    supportBtn.innerHTML=langs[userLang].url.text;
    uawidgetbody.append(supportBtn);

    var style=document.createElement('style');
    style.innerHTML=styleCSS;
    uawidget.append(style);

}
else 
{
    if(debug) console.log('missing div');
}
