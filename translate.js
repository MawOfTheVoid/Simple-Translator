function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function translate_click() {
  var text = document.getElementById('textinput').value;
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + "auto" + "&tl=" + "en" + "&dt=t&q=" + encodeURI(text);
  var txt = httpGet(url);
  txt = txt.replace(/\[/g, "");
  txt = txt.replace(/\]/g, "");
  txt = txt.replace(/null/g, "");
  txt = txt.replace(/\"/g, "");
  txt = txt.split(",");
  console.log(txt);
  alert(txt)
}
