$(function() {
  if($('#gla')){
		$('.gla_inbox').corner('5px');
		$('#gla_box>ul').roundabout({
			minOpacity:1,
			btnNext: ".next",
			duration: 1000,
			reflect: true,
			btnPrev: '.prev',
			// autoplay:true,
			autoplayDuration:5000,
			tilt:0,
			shape: 'figure8'
		});
	}
  var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
  });
  var changeCard = function (s){
    var elements = $('.card-li-item')
    Array.prototype.forEach.call(elements, function (el, index) {
      $(el).removeClass('roundabout-in-focus')
    })
    $(s).addClass('roundabout-in-focus')
    $(s).find('div .card-child-box').show(1000)
    $(s).find('a').show(1000)
    Array.prototype.forEach.call(elements, function (el, index) {
      var item = $(el).find('div .card-child-box')
      var a = $(el).find('a')
      if ($(el).hasClass('roundabout-in-focus')) {
        $(item).show(1000)
        $(a).show(1000).css({
          lineheight: '92px'
        })
      } else {
        $(item).hide()
        $(a).hide()
      }
    })
  }
  // 列表切换图片
  $('.plan-list').on('click', function(e){
    var srcTage = $(e.target).attr('name')
    var imgs = $('.plan-img')
    Array.prototype.forEach.call(imgs, function (el, index) {
      $(el).hide()
      $(el).attr('src', `./statics/images/plan-${srcTage}.png`).fadeIn(200)
    })
  })
})
