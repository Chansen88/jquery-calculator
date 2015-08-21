var screenstring = "";
var operator = false;
var snd = new Audio("sound.wav");
var cash = new Audio("cash.wav");
var laser = new Audio("laser.wav")

function calculate() {
  var a = '';
  var b = '';
  for (var i = 0; "1234567890.".includes(screenstring[i]); i++){
      a += screenstring[i]
  }
  var j = i;
  i += 1;
  for (i; i < screenstring.length; i++){
      b += screenstring[i];
  }
  if (b !== '') {
    b = parseFloat(b);
    a = parseFloat(a);
    operator = false;
    switch(screenstring[j]){
      case '+':
        screenstring = a + b;
        break;
      case '-':
        screenstring = a - b;
        break;
      case 'x':
        screenstring = a * b;
        break;
      default:
        screenstring = a/b;
    }
    screenstring = screenstring.toString();
    screenstring = screenstring.substring(0,8);
    cash.play();
  }
}
$(function(){
    $('.buttons').on('click', 'span', function(){
      var isNumber = "1234567890".includes($(this).html());
      if ($(this).attr('id') === 'cancel'){
          laser.play();
          screenstring = "";
      } else if ($(this).attr('id') === 'calc'){
          calculate();
      }else if (isNumber || screenstring.length > 0){
        snd.play();
        if (!operator || isNumber) {
          screenstring += $(this).html();
        }
        if (!isNumber) {
          operator = true;
        }
      }
      screenstring = screenstring.substring(0,14);
      $('#screen').html(screenstring);
    });
    $('body').on("keydown", function(event) {
      console.log(event);
      switch (event.keyCode) {
        case 8:
          screenstring = "";
          break;
        case 13:
        case 187:
          if (event.shiftKey) {
            screenstring += "+";
            break;
          }
          calculate();
          break;
        case 49:
          screenstring += "1";
          break;
        case 50:
          screenstring += "2";
          break;
        case 51:
          screenstring += "3";
          break;
        case 52:
          screenstring += "4";
          break;
        case 53:
          screenstring += "5";
          break;
        case 54:
          screenstring += "6";
          break;
        case 55:
          screenstring += "7";
          break;
        case 56:
          if (event.shiftKey) {
            screenstring += "x";
            break;
          }
          screenstring += "8";
          break;
        case 57:
          screenstring += "9";
          break;
        case 48:
          screenstring += "0";
        case 191:
         if (screenstring.length > 0 && !operator){
           screenstring += $('.buttons span:nth-child(2)').html();
         }
          break;
        case 189:
          if (screenstring.length > 0 && !operator){
            screenstring += "-";
          }
          break;
        default:
          break;90
      }
      screenstring = screenstring.substring(0,14);
      $('#screen').html(screenstring);
    })
});
