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

    var style = document.createElement('link');
    style.setAttribute('rel','stylesheet');
    style.setAttribute('href','sua-widget.css');
    uawidget.after(style);

}
else 
{
    if(debug) console.log('missing div');
}
