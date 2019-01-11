const data = {"arrow-filled-up":{"data":".silicon-arrow-filled-up {\n  position: relative;\n  display: block;\n  width: 1em;\n  height: var(--stroke, 0.1em);\n  background-color: currentColor;\n}\n.silicon-arrow-filled-up::before {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--stroke, 0.1em) * 0.5);\n  right: calc(var(--stroke, 0.1em) * -0.5);\n  display: block;\n  width: 0;\n  height: 0;\n  border: 0.15em solid currentColor;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-radius: 0.05em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n\n.silicon-arrow-filled-up {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}"}}
	export default data;