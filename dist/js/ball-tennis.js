const data = {"ball-tennis":{"data":".silicon-ball-tennis {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  box-sizing: border-box;\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-radius: 50%;\n  -webkit-transform: rotate(22.5deg);\n          transform: rotate(22.5deg);\n  overflow: hidden;\n}\n.silicon-ball-tennis::before {\n  content: \"\";\n  position: absolute;\n  top: 0.2em;\n  left: 50%;\n  display: block;\n  width: 66.66%;\n  height: 100%;\n  box-sizing: border-box;\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n  border-radius: 0.5em 0.5em 0 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.silicon-ball-tennis.colored {\n  background-color: var(--yellow,#f5c505);\n  color: var(--black,#101010);\n}"}}
	export default data;