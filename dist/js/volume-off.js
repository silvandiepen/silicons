const data = {"volume-off":{"data":".silicon-volume-off {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 1em;\n  border-bottom: none;\n  border-left: none;\n  -webkit-transform: translateX(25%) rotate(45deg);\n          transform: translateX(25%) rotate(45deg);\n}\n.silicon-volume-off:before, .silicon-volume-off:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  box-sizing: border-box;\n}\n.silicon-volume-off:before {\n  bottom: calc(var(--stroke, 0.1em) * -1.5);\n  left: calc(var(--stroke, 0.1em) * -1.5);\n  width: 0;\n  height: 0;\n  border: calc(var(--stroke, 0.1em) * 3) solid currentColor;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-radius: var(--stroke, 0.1em);\n}\n.silicon-volume-off:after {\n  bottom: calc(var(--stroke, 0.1em) * -2);\n  left: calc(var(--stroke, 0.1em) * -2);\n  width: calc(var(--stroke, 0.1em) * 4);\n  height: calc(var(--stroke, 0.1em) * 4);\n  background-color: currentColor;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.silicon-volume-off.colored {\n  color: var(--gray,#7f7f7f);\n}\n.silicon-volume-off.colored:after, .silicon-volume-off.colored:before {\n  color: var(--blue,#1eb3e0);\n}"}}
	export default data;