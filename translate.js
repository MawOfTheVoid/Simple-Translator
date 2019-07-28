function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    response = xmlHttp.responseText
    delete xmlHttp
    return response;
}

function clean_translation(txt)
{
  txt = txt.replace(/\[/g, "");
  txt = txt.replace(/\]/g, "");
  txt = txt.replace(/\"/g, "");
  /**
  txt = txt.replace(/null/g, "");
  txt = txt.replace(/1/g, "");
  txt = txt.replace(/\"/g, "");
  */
  txt = txt.split(",");
  translation = txt[0]
  if (translation === "null")
  {
    translation = "Please enter a word to translate!"
  }
  return translation
}


function get_language()
{
  var radios = document.getElementsByName('language');
  var language;

for (var i = 0, length = radios.length; i < length; i++)
  {
    if (radios[i].checked)
    {
      language = radios[i].id;
      break;
    }
  }
  return language
}

function write_output(answer)
{
  var p = document.getElementById("answer");
  p.textContent = answer
}

function translate_click() {
  // en=english german=de spanish=es
  var text = document.getElementById('textinput').value;
  var lan = get_language()
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + "auto" + "&tl=" + lan + "&dt=t&q=" + encodeURI(text);
  var txt = httpGet(url);
  var translation = clean_translation(txt);
  write_output(translation)
}
