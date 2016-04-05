var main=function(){

  $('.small_pic_div').mouseover(function(){
    var overlay=$(this).children('.pic_div');
    overlay.fadeIn(800);

  });

  $('.small_pic_div').mouseout(function(){
    var overlay=$(this).children('.pic_div');
    overlay.fadeOut(500);
  });
  /*var e=document.getElementsByClassName('small_pic_div');
  e.onmouseover=function(){
    document.getElementsByClassName('pic_div').style.display= 'block';
  }
  e.onmouseout=function(){
    document.getElementsByClassName('pic_div').style.display='none';
  }*/
}

function toggle_visibility(class){
  var e=document.getElementsByClassName(class);
  if(e.style.display=='block'||e.style.display==''){
    e.style.display='none';
  }
  else{
    e.style.display='block';
  }
}

$(document).ready(main);
