const data = {"arrow-right":{"data":".silicon-arrow-right {\n  position: relative;\n  display: block;\n  width: 1em;\n  height: var(--stroke, 0.1em);\n  /* background  */\n  background-color: currentColor;\n}\n.silicon-arrow-right::before {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--stroke, 0.1em) * 0.5);\n  right: calc(var(--stroke, 0.1em) * -0.5);\n  display: block;\n  width: 0.3em;\n  height: 0.3em;\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-bottom: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}"}}
	export default data;