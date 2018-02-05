$(function() {
  // 用户头像弹窗
  $('#user-box').data('flag', true).on('click', function(e) {
    // console.log(e.target)
    if ($(e.target).attr('name') == 'userClick') {
      if($(this).data('flag')){
        $('#triangle-tag').css({
          transform: 'rotateX(180deg)'
        })
        $('#user-settings-box').fadeIn(50)
        $(this).data('flag', false)
      } else {
        $('#triangle-tag').css({
          transform: 'rotateX(360deg)'
        })
        $('#user-settings-box').fadeOut(200)
        $(this).data('flag', true)
      }
    } else {
      $('#user-settings-box').css('display', 'none')
    }
  })
  // 用户设置
  $('.user-item-text').on('click', function(e) {
    console.log($(e.target).text())
    location.href = 'product_details.html'
  })
})
