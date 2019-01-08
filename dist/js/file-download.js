const data = {"file-download":{"data":".silicon-file-download {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 0.5em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top: 0;\n}\n.silicon-file-download:before, .silicon-file-download:after {\n  content: \"\";\n  /* position */\n  position: absolute;\n  box-sizing: border-box;\n}\n.silicon-file-download:before {\n  /* position */\n  bottom: 75%;\n  left: 50%;\n  /* size */\n  display: block;\n  width: calc(var(--stroke, 0.1em) / 2);\n  height: 0.5em;\n  /* background */\n  background-color: currentColor;\n  /* transform */\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.silicon-file-download:after {\n  /* position */\n  bottom: calc(75% - var(--stroke, 0.1em) / 2);\n  left: 50%;\n  /* size */\n  display: block;\n  width: 0.33em;\n  height: 0.33em;\n  /* border */\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n  border-top: none;\n  border-right: none;\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n.silicon-file-download.colored {\n  /* text */\n  color: var(--dark,#303030);\n}\n.silicon-file-download.colored:before, .silicon-file-download.colored:after {\n  /* text */\n  color: var(--blue,#1eb3e0);\n}"}}
	export default data;