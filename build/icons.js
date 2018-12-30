const sass = require('sass');
const Fiber = require('fibers');
const fs = require('fs');
const path = require('path');

const src = './src/icon';
const dist = './dist/icon';

function doSass(file) {
	sass.render(
		{
			data: '@import "src/mixins.scss"; @include silicon-' + file + '(); ',
			fiber: Fiber
		},
		function(err, result) {
			fs.writeFile(path.join(dist, file + '.css'), result.css, (err) => {
				if (err) throw err;
				console.log(`${file} is created`);
			});
		}
	);
}
function arrayRemove(arr, value) {
	return arr.filter(function(ele) {
		return ele != value;
	});
}

function makeFiles(items, callback) {
	let iconList = {};
	iconList.silicons =[];
	let iconArray = [];
	let mixins = '';
	let includes = "@import 'mixins'; \n";

	for (var i = 0; i < items.length; i++) {
		if (items[i].indexOf('.scss') > 0) {
			let iconname = items[i].replace('.scss', '');
			iconList.silicons.push(iconname);
			mixins = mixins + `\n @import 'icon/${iconname}';`;
			includes = includes + `@include silicon-${iconname}(); \n`;
		}
	}
	
	// JSON
	fs.writeFile(
		path.join('./dist/', 'icons.json'),
		JSON.stringify(iconList),
		(err) => {
			if (err) throw err;
			console.log(`icons.json is created`);
		}
	);

	// MIXINS
	fs.writeFile(path.join('./src/', 'mixins.scss'), mixins, (err) => {
		if (err) throw err;
		console.log(`mixins file is created`);
	});

	// ICONS
	fs.writeFile(path.join('./src/', 'icons.scss'), includes, (err) => {
		if (err) throw err;
		console.log(`icons file is created`);
	});

	callback();
}

fs.readdir(src, function(err, items) {
	makeFiles(items, function() {
		setTimeout(function() {
			items.forEach(function(item) {
				if (item.indexOf('.scss') > 0) {
					doSass(item.replace('.scss', ''));
				}
			});
		}, 1000);
	});
});
