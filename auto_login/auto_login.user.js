// ==UserScript==
// @name        auto login
// @namespace   window
// @include     https://www.die-staemme.de/
// @version     1
// @grant       none
// ==/UserScript==


self.setInterval(function(){
  
  $(".button_middle").click();  
  
  
  
  
  $(".world_button_active").each(function(){

    if ($(this).text().trim() == "Welt 119") {

        $(this).closest("a").click();
    }

  });
  
  
}, 6000);
