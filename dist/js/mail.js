const data = {"mail":{"data":".silicon-mail {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 0.75em;\n  box-sizing: border-box;\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-radius: var(--stroke, 0.1em);\n  overflow: hidden;\n}\n.silicon-mail::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  display: block;\n  width: 0.6em;\n  height: 0.6em;\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n  border-radius: var(--stroke, 0.1em);\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.silicon-mail.colored {\n  background-color: var(--white,#ffffff);\n  color: var(--gray,#444444);\n}"}}
	export default data;