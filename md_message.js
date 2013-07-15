setInterval(function(){$.ajax({
  url: 'http://www.manodrabuziai.lt/member/msg/inbox',
  success: function(r){
    var d=document.createElement('html');
    d.innerHTML=r;
    var k=$(".nav-link.icon-messages",d).attr("data-details");
    if(k!=0)alert("Gavote "+k+"pranešimą(-ų)");
    }
});},3000);
