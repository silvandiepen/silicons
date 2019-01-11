const data = {"bottle":{"data":".silicon-bottle {\n  position: relative;\n  display: inline-block;\n  width: 0.45em;\n  height: 0.85em;\n  box-sizing: border-box;\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-radius: 0.5em 0.5em 0 0;\n  background-image: linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor);\n  background-repeat: no-repeat, no-repeat;\n  background-position: top 25% center, top 70% center;\n  background-size: 100% calc(var(--stroke, 0.1em) * 0.5), 100% calc(var(--stroke, 0.1em) * 0.5);\n}\n.silicon-bottle::before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  display: block;\n  width: 0.25em;\n  height: 0.4em;\n  box-sizing: border-box;\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-bottom: none;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}"}}
	export default data;