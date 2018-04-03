$(function() {
  // 分页按钮事件
  $('.page-number-btn').on('click', function(e) {
    $(e.target).css({
      background: '#54A7F5',
      color: '#ffffff'
    }).siblings().css({
      background: '#ffffff',
      color: '#333333'
    })
  })

})
