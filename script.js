
	function gray()
	{

  document.getElementById('pic').src='images/gray.png';

	}
  function black()
	{

  document.getElementById('pic').src='images/black.png';

	}

	function green()
	{

     document.getElementById('pic').src='images/green.png';

	}

	function purple()
	{

 document.getElementById('pic').src='images/purple.png';

	}

	function yellow()
	{

  document.getElementById('pic').src='images/yellow.png';

	}
	
    $(document).ready(function(){
        $('.boldText').click(function(){
           $('.container').toggleClass("bold");
        });
        $('.italicText').click(function(){
          $('.container').toggleClass("italic");
        });
        $('.alignleft').click(function(){
            $('.container').toggleClass("alignleft");
          });
          $('.aligncenter').click(function(){
            $('.container').toggleClass("aligncenter");
          });
          $('.alignright').click(function(){
            $('.container').toggleClass("alignright");
          });
        });
          var p = document.getElementById('paragraph');
          var btn = document.getElementById('btn');
          var txt = document.getElementById('theText');
          btn.onclick = function(){
          p.textContent = txt.value;
          };
        var p = document.getElementById('paragraph');
         var btn = document.getElementById('btn2');
         var txt = document.getElementById('theText');
            btn.onclick = function(){
             p.style.fontStyle= "bold";
              };
         var p = document.getElementById('paragraph');
         var btn = document.getElementById('btn3');
        var txt = document.getElementById('theText');
         btn.onclick = function(){
        p.style.fontStyle= "italic";
          };
         function increaseFontSizeBy2px() {
         txt = document.getElementById('theText');
       style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
         currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + 2) + 'px';
           }
         function decreaseFontSizeBy2px() {
    txt = document.getElementById('theText');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 2) + 'px';
      }
   function changeTextSize() {
    var input = document.getElementById('input').value;
     document.getElementById('theText').style.fontSize = input + "px";
    }
  var colorWell;
  var defaultColor = "#000000";
  window.addEventListener("load", startup, false);
    function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
     function updateFirst(event) {
      var p = document.querySelector("textarea");
  
       if (p) {
      p.style.color = event.target.value;
    }
  }
  function updateAll(event) {
    document.querySelectorAll("teaxtarea").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }