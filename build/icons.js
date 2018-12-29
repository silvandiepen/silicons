const sass = require('sass');
const Fiber = require('fibers');
const fs = require('fs');
const path = require('path');
const src = './src/icon';
const dist = './dist/icon';

function doSass(file) {
	sass.render(
		{
			file: path.join(src, file),
			fiber: Fiber
		},
		function(err, result) {
			fs.writeFile(path.join(dist,file.replace('.scss', '.css')), result.css, (err) => {
				if (err) throw err;
				console.log(`${file} is created`);
			});
		}
	);
}

fs.readdirSync(src).forEach((file) => {
	console.log(file);
	if (file.indexOf('.scss') > 0) {
		doSass(file);
	}
});
