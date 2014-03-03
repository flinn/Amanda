$(document).ready(function() {
	checkUrlForActiveTab();
	hideInactiveContent();

	$('.tab').click(function() {
		hideActiveTab();
		showClickedTab(this.id);
	});

	function checkUrlForActiveTab() {
		var tab = window.location.hash;

		if(tab !== "" && tab !== undefined) {
			tabHash = tab.substring(1);
			hideActiveTab();
			showClickedTab(tabHash);
		}
	}

	function showClickedTab(clickedTabId) {
		$('.' + clickedTabId).addClass('active');
		$('.' + clickedTabId).show();
	}

	function hideActiveTab() {
		$('.active').hide();
	}

	function hideInactiveContent() {
		$('.content-block').each(function() {
			if (!$(this).hasClass('active')) {
				$(this).hide();
			}
		});
	}
});