$(function() {
  $('.change-item').on('click', function(e) {
    var left = $(e.target).attr('name')
    var tag = $(e.target).attr('tag')
    $(e.target).css({color: '#333'}).siblings().css({color: '#999'})
    $('#tab-bottom-border').css({left: `${left}px`})
    if (tag == '详细介绍') {
      $('#tab-conten').text('详细介绍详细介绍详细介绍详细介绍详细介绍')
    } else if (tag == '使用帮助') {
      $('#tab-conten').text('使用帮助使用帮助使用帮助使用帮助使用帮助')
    }
  })
})
