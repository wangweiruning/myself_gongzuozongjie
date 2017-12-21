/*
 * 轮播图片js代码插件
 * 2017-11-13
 * wangweiruning
 * */


jQuery(document).ready(function($) {
	

next = jQuery('.next');//下一张
prev = jQuery('.prev');//上一张
pagination = jQuery('#pagination li a');

pagination.click(function(e) {
	e.preventDefault();//阻止时间冒泡
	mythis = jQuery(this);
	thisid = jQuery(this).attr('data-id');
	pagination.removeClass();
	mythis.addClass('pag_active');
	 jQuery('.active').removeClass();
	 jQuery('#spinners li[data-id="'+thisid+'"]').addClass('active');
});

next.click(function(e) {
	e.preventDefault();
	thisid = jQuery('.active').attr('data-id');


	 if (thisid == 6) {

               jQuery('.active').removeClass();
                jQuery('#spinners').find('li:first-child').addClass('active');
                	  pagination.removeClass('pag_active');
                jQuery('#pagination li a[data-id="1"]').addClass('pag_active');
            } else {
               jQuery('.active').removeClass().next().addClass('active');
                jQuery('.pag_active').removeClass('pag_active').parent().next().find('a').addClass('pag_active');
            }





});

prev.click(function(e) {
	e.preventDefault();
	thisid = jQuery('.active').attr('data-id');
	console.log(thisid);

    
		 if (thisid == 1) {
               jQuery('.active').removeClass();
                jQuery('#spinners').find('li:last-child').addClass('active');
                                pagination.removeClass('pag_active');
                jQuery('#pagination li a[data-id="6"]').addClass('pag_active');

            } else {
               jQuery('.active').removeClass().prev().addClass('active');
                jQuery('.pag_active').removeClass('pag_active').parent().prev().find('a').addClass('pag_active');
            }

	

});



});


//html代码部分
<div class="jq22-container">
		
		<ul id="arrows">
			<li><a class="next" href="" title="">&#10095;</a></li>
			<li><a class="prev" href="" title="">&#10094;</a></li>
		</ul>
		<ul id="spinners">
			<li class="active" data-id="1">
				<div id="preloader_1">
		  			<span></span>
		  			<span></span>
		  			<span></span>
		  			<span></span>
		  			<span></span>
		  		</div>

			</li>

			<li data-id="2">

				<div id="preloader_2">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</li>

			<li data-id="3">

				<div id="preloader_3"></div>

			</li>

			<li data-id="4">

				<div id="preloader_4">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</li>

			<li data-id="5">
				<div id="preloader5"></div>
			</li>

			<li data-id="6">
				<div id="preloader6">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</li>
		</ul>

		<ul id="pagination">
			<li><a data-id="1" class="pag_active" href="" title=""></a></li>
			<li><a data-id="2" href="" title=""></a></li>
			<li><a data-id="3" href="" title=""></a></li>
			<li><a data-id="4" href="" title=""></a></li>
			<li><a data-id="5" href="" title=""></a></li>
			<li><a data-id="6" href="" title=""></a></li>
			<span class="clear"></span>
		</ul>
	</div>