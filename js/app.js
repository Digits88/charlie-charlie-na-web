    window.SpeechRecognition = window.SpeechRecognition       ||
                               window.webkitSpeechRecognition ||
                               null;


if (window.SpeechRecognition === null) {
  alert("Seu navegador não suporta! :(");
  document.getElementById("falar").setAttribute('style','pointer-events: none; cursor: default;');
  document.getElementById("falar").innerHTML = "...";
}else {
  var recognizer = new window.SpeechRecognition();

  recognizer.continuous = false;

  recognizer.onresult = function(event){
    document.getElementById("falar").innerHTML = "Falar";
    for (var i = event.resultIndex; i < event.results.length; i++) {
      if(event.results[i].isFinal){
        var textFinal = event.results[i][0].transcript;

        if(textFinal != null) {
          document.getElementById("lapis").classList.remove('pos-1', 'pos-2', 'pos-3', 'pos-4');
          var poss = Array(1,2,3,4);
          var pos = poss[Math.floor(Math.random()*poss.length)];

          document.getElementById("lapis").classList.add('pos-'+pos);
        }

      }else{
      }
    }
  }

  document.querySelector("#falar").addEventListener("click",function(){
    try {
        recognizer.start();
        document.getElementById("falar").innerHTML = "Ouvindo";
    } catch(ex) {
        alert("error: "+ex.message);
    }
  })
}
