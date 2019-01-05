const data = {"arrow-basic-left":{"data":".silicon-arrow-basic-left {\n  /* position */\n  position: relative;\n  /* size */\n  display: block;\n  width: 1em;\n  height: var(--stroke, 0.1em);\n  /* background  */\n  background-color: currentColor;\n}\n.silicon-arrow-basic-left:before {\n  content: \"\";\n  /* size */\n  position: absolute;\n  top: calc(var(--stroke, 0.1em) * 0.5);\n  right: calc(var(--stroke, 0.1em) * -0.5);\n  /* size */\n  display: block;\n  width: 0.3em;\n  height: 0.3em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-bottom: none;\n  border-left: none;\n  /* transform */\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n\n.silicon-arrow-basic-left {\n  /* position */\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}"}}
	export default data;