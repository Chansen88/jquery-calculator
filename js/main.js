var screenstring = "";
var operator = false;
$(function(){
    $('.buttons').on('click', 'span', function(){
      var isNumber = "1234567890".includes($(this).html());
      if ($(this).attr('id') === 'cancel'){
          screenstring = "";
      } else if ($(this).attr('id') === 'calc'){
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
          }
      }else if (isNumber || screenstring.length > 0){
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
});
