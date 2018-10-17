let changeColor = document.getElementById('changeColor');

  changeColor.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: `
            let elements = document.querySelectorAll("p, span, li, h1, h2, h3, h4, h5, h6, code, cite");
            let textElements = [];
            for(let i=0; i<elements.length; i++){
              if(elements[i].textContent.length){
                textElements.push(elements[i])
              }
            }
            for(let i=0; i<textElements.length; i++){
              textElements[i].innerHTML = textElements[i].innerText.replace(new RegExp(/[A-Za-z]+/g), word => ("<a href='https://www.w3schools.com/js/js_htmldom_elements.asp'>" + word + "</a>"));
            }
          `
        }
      );
    });
  };