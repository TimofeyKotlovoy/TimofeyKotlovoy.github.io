var portfolioItems;
var order;
var items;
var title;
var reverse;

$(document).ready(function() {
	portfolioContainer = $(".portfolio");

	function reverse(container) {
		items = $(container).children("section");
		blockTitle = $(container).children("h1");
		for(var i = 0; i < items.length; i++) {
			order = -i + "";
			$(items[i]).css("order", order);
		};
		blockTitle.css("order", parseInt(order) - 1);
	};

	reverse(portfolioContainer);
});
