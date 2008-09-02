/*
*/
CmdUtils.CreateCommand({
  name: "shorten", 
  homepage: "http://yapok.org/",
  author: {name: "MadX", email: "root+ubiq@yapok.org"},
  license: "WTFPL",
  description: "Replace an url with a shorter one using is.gd",
  
  takes: {"url to shorten": noun_arb_text},
  
  preview: function( pblock ) {
    var msg = "Replace <b>${url}</b> by a shorter url made with is.gd";
    pblock.innerHTML = CmdUtils.renderTemplate( msg, {url: CmdUtils.getSelection()} );
  },
  
  execute: function( urlToShorten ) {
    var baseUrl = "http://is.gd/api.php";
    var params = {longurl: urlToShorten.text};
    jQuery.get( baseUrl, params, function( isGd ) {
      CmdUtils.setSelection( isGd );
    })
  }
  
});
