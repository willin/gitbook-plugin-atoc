require(["gitbook","jQuery"],function(gitbook,$){
  function resetTOC(){
    var targetUl = document.getElementsByClassName('page-inner')[0].getElementsByTagName('ul')[0];
    if(targetUl && targetUl.getElementsByTagName('a').length>0) {
      $('.'+className+' .toggle').unbind('click');
      $(targetUl).before('<div class="' + className + '">' + targetUl.outerHTML + '<div class="toggle"><i class="fa fa-align-justify"></i></div></div>');
      $('.'+className+' .toggle').bind('click',function(){
          $('.'+className+' ul').stop(true,true).slideToggle();
      });
      $(targetUl).remove();
    }
  }

  gitbook.events.bind("page.change", resetTOC);
});
