(function($){

	$.titleBlock = {

		defaults: {

		}
	}

	$.fn.extend({
        titleBlock:function(config) {        
         
            return this.each(function() {
            
            var theImage = $(this);
                theImage
					.wrap("<div class='image'>")
					.parent()
					.append("<h2>")
					.find("h2")
					.html(theImage.attr('title'))
					.wrapInner("<span>")
					.find("br")
					.before("<span class='spacer'>&nbsp;</span>")
					.after("<span class='spacer'>&nbsp;</span>");
			})
		}
	})

})(jQuery);