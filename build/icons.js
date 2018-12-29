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

function makeJson(items) {
	let iconList = {};
	for (var i = 0; i < items.length; i++) {
		if (items[i].indexOf('.scss') > 0) {
			items[i] = items[i].replace('.scss', '');
		}
	}
	iconList.silicons = items;
	
	fs.writeFile(path.join('./dist/','icons.json'), JSON.stringify(iconList), (err) => {
		if (err) throw err;
		console.log(`icons.json is created`);
	});
}

fs.readdir(src, function(err, items) {
	items.forEach(function(item) {
		if (item.indexOf('.scss') > 0) {
			doSass(item.replace('.scss', ''));
		}
	});
	makeJson(items);
});
