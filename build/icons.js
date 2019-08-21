/* eslint-disable */
const sass = require('sass');
const Fiber = require('fibers');
const fs = require('fs');
const path = require('path');

const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const src = './src/icon';
const dist = './dist/icon';

function cssJs(fileName, css) {
	let CSSObj = {};
	CSSObj[fileName] = {
		data: css
	};
	return `const data = ${JSON.stringify(CSSObj)}
	export default data;`;
}
function cssJsImports(icons) {
	let imports = ``;
	icons.forEach(function(icon) {
		imports = imports + `\nimport './js/${icon}.js'`;
	});
	return imports;
}

function doSass(file) {
	console.log(file);
	sass.render(
		{
			data: '@import "src/mixins.scss"; @include silicon-' + file + '(); ',
			fiber: Fiber
		},
		function(err, result) {
			postcss([autoprefixer])
				.process(result.css)
				.then(function(result) {
					result.warnings().forEach(function(warn) {
						console.warn(warn.toString());
					});
					fs.writeFile(path.join(dist, file + '.css'), result.css, (err) => {
						if (err) throw err;
						console.log(`${file}.css is created`);
					});
					fs.writeFile(
						path.join('./dist/js', file + '.js'),
						cssJs(file, result.css),
						(err) => {
							if (err) throw err;
							console.log(`${file}.js is created`);
						}
					);
				});
		}
	);
}

function makeFiles(items, callback) {
	let iconList = {};
	iconList.silicons = [];
	let iconArray = [];
	let mixins = '';
	let includes = '';

	for (var i = 0; i < items.length; i++) {
		if (items[i].indexOf('.scss') > 0) {
			let iconname = items[i].replace('.scss', '');
			iconList.silicons.push(iconname);
			mixins = mixins + `@import 'icon/${iconname}';\n `;
			includes = includes + `@include silicon-${iconname}();\n`;
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

	// JSON
	fs.writeFile(
		path.join('./dist/', 'icons.js'),
		cssJsImports(iconList.silicons),
		(err) => {
			if (err) throw err;
			console.log(`icons.js is created`);
		}
	);

	// MIXINS
	fs.writeFile(path.join('./src/', 'mixins.scss'), mixins, (err) => {
		if (err) throw err;
		console.log(`mixins file is created`);
	});

	// INCLUDES
	fs.writeFile(path.join('./src/', 'includes.scss'), includes, (err) => {
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
		}, 250);
	});
});
