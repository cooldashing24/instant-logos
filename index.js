var _ = require('underscore');

var logos = _.union(
	require('./gilbarbara_logos'),
	require('./shgysk8zer0_logos'),
	require('./seanherron_Gov-Webicons'),
	require('./file_logos')
);

_.chain(logos)
	.groupBy('id')
	.reject(_.matcher({ length: 1 }))
	.each(function(group) {
		_.chain(group)
			.rest()
			.each(function(logo, i) {
				logo.id = logo.id + '-' + (i + 2);
			});
	});

module.exports = logos;
