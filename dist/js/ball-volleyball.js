const data = {"ball-volleyball":{"data":".silicon-ball-volleyball {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 1em;\n  overflow: hidden;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-radius: 50%;\n  /* transform */\n  -webkit-transform: rotate(22.5deg);\n          transform: rotate(22.5deg);\n}\n.silicon-ball-volleyball:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  top: 0.2em;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: 66.66%;\n  height: 100%;\n  /* size */\n  background-image: linear-gradient(to bottom, currentColor, currentColor);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100% calc(var(--stroke, 0.1em) * 0.5);\n  /* border */\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n  border-radius: 0.5em 0.5em 0 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.silicon-ball-volleyball.colored {\n  /* text */\n  color: var(--black,#101010);\n  /* background */\n  background-color: var(--yellow,#f5c505);\n}"}}
	export default data;