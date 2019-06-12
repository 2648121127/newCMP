/* Webarch Admin Dashboard
/* This JS is Only DEMO Purposes
-----------------------------------------------------------------*/
$(document).ready(function() {

	$("#placeholder").bind("plothover", function (event, pos, item) {
				if (item) {
					var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

					$("#tooltip").html(item.series.label + " of " + x + " = " + y)
						.css({top: item.pageY+5, left: item.pageX+5})
						.fadeIn(200);
				} else {
					$("#tooltip").hide();
				}

		});

	$("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			"z-index":"99999",
			opacity: 0.80
	}).appendTo("body");


	$("#sparkline-pie").sparkline([1,2,3,4,5,6,7,8], {
		type: 'pie',
		width: '100%',
		height: '100%',
		sliceColors: ['#5fbfb5','#f35958','#90cdec','#90c111','#5fb111','#dddddd','red','#21312d'],
		offset: 10,
		borderWidth: 0,
		borderColor: '#000000 '
	});
    $("#sparkline-pie2").sparkline([8,2,3], {
        type: 'pie',
        width: '100%',
        height: '100%',
        sliceColors: ['#5fbfb5','#f35958','#90cdec'],
        offset: 10,
        borderWidth: 0,
        borderColor: '#dddddd '
    });


});