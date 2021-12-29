var re1 = /^([А-Я]{1})([а-я]+)(\s)(([a-z]{2})(\s))?([А-Я]{1})([а-я]+)$/;
var re2 = /^((\+7|8){1})(((\()([0-9]{3})(\)))|([0-9]{3}))([0-9]{3})((\-)([0-9]{2})(\-)([0-9]{2})|([0-9]{2})([0-9]{2}))$/;

function testInfo1(phone1Input, name1Input){
  var N1 = re1.exec(name1Input.value);
  var P1= re2.exec(phone1Input.value);
  if ((!N1)&&(!P1))
    window.alert("Ошибка ввода!(");
  else
    window.alert("Спасибо, заявка отправлена!)");
}

function testInfo2(phone2Input, name2Input){
    var N2 = re1.exec(name2Input.value);
    var P2= re2.exec(phone2Input.value);
    if ((!N2)&&(!P2))
      window.alert("Ошибка ввода!(");
    else
      window.alert("Спасибо, заявка отправлена!)");
}

  function testInfo3(phone3Input, name3Input){
    var N3 = re1.exec(name3Input.value);
    var P3= re2.exec(phone3Input.value);
    if ((!N3)&&(!P3))
      window.alert("Ошибка ввода!(");

}

$(document).ready(function(){

  $("form").submit(function(){
    var th=$(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function(){
      alert("Спасибо, заявка отправлена!)");
      setTimeout(function(){
        th.trigger("reset");
      }, 1000);
    });
    return false;
    });
  });