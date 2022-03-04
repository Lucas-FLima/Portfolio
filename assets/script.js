function html() {
  if (document.querySelector(".html_descricao").classList.contains("disable")) {
    document.querySelector(".html_descricao").classList.remove("disable");
    document.querySelector(".html_descricao").classList.add("activated");
  } 
  else {
    document.querySelector(".html_descricao").classList.remove("activated");
    document.querySelector(".html_descricao").classList.add("disable");
  }
}

function css() {
  if (document.querySelector(".css_descricao").classList.contains("disable")) {
    document.querySelector(".css_descricao").classList.remove("disable");
    document.querySelector(".css_descricao").classList.add("activated");
  } 
  else {
    document.querySelector(".css_descricao").classList.remove("activated");
    document.querySelector(".css_descricao").classList.add("disable");
  }
}

function js() {
    if (document.querySelector(".js_descricao").classList.contains("disable")) {
      document.querySelector(".js_descricao").classList.remove("disable");
      document.querySelector(".js_descricao").classList.add("activated");
    } 
    else {
      document.querySelector(".js_descricao").classList.remove("activated");
      document.querySelector(".js_descricao").classList.add("disable");
    }
  }

  window.onload = function(){
    document.querySelector("#bars").addEventListener("click", function(){
        if(document.querySelector("nav ul").style.display == 'flex') {
            document.querySelector("nav ul").style.display = 'none';
        }
        else {
            document.querySelector("nav ul").style.display = 'flex';
        }
    });
};