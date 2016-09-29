/*
 * @Author: Fan
 * @Date:   2016-09-29 22:05:35
 * @Last Modified by:   Fan
 * @Last Modified time: 2016-09-29 22:45:24
 */

'use strict';;
(function($) {

	// Pre-compile template and "cache" it using closure
	var resultTemplate = _.template($("#resultTemplate").html());

	// Subscribe to the new search tags topic
	$.subscribe("/search/tags", function(e, tags) {
		$("#lastQuery")
			.html("<p>Searched for:<strong>" + tags + "</strong></p>");
	});

	// Subscribe to the new results topic
	$.subscribe("/search/resultSet", function(e, results) {

		$("#searchResults").empty().append(resultTemplate(results));

	});

	// Submit a search query and publish tags on the /search/tags topic
	$("#flickrSearch").submit(function(e) {

		e.preventDefault();
		var tags = $(this).find("#query").val();

		if (!tags) {
			return;
		}

		$.publish("/search/tags", [$.trim(tags)]);

	});


	// Subscribe to new tags being published and perform
	// a search query using them. Once data has returned
	// publish this data for the rest of the application
	// to consume

	$.subscribe("/search/tags", function(e, tags) {

		// $.getJSON( "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
		//        tags: tags,
		//        tagmode: "any",
		//        format: "json"
		//      },

		//    function( data ){

		//        if( !data.items.length ) {
		//          return;
		//        }

		//        $.publish( "/search/resultSet", { items: data.items } );
		// });


		$.ajax({
			async: true,
			url: "https://www.sogou.com/suggnew/ajajjson?type=web&key=" + tags,
			type: "GET",
			dataType: 'jsonp',
			jsonp: 'jsoncallback',

			timeout: 5000,
			success: function(json) {

			},
			error: function(xhr) {}
		});

	});


})(jQuery);
window.sogou = {
	sug: function(data) {
		console.log(data);
		console.log("success.....");
		if (!data[1]) {
			return;
		}
		console.log(data[1]);
		$.publish("/search/resultSet", {
			items: data[1]
		});

	}
};