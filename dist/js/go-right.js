const data = {"go-right":{"data":".silicon-go-right {\n  position: relative;\n  display: inline-block;\n  width: 0.5em;\n  height: 1em;\n  overflow: hidden;\n}\n.silicon-go-right::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: block;\n  width: calc(0.5em - (var(--stroke, 0.1em) / 2));\n  height: calc(0.5em - (var(--stroke, 0.1em) / 2));\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-bottom: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}"}}
	export default data;