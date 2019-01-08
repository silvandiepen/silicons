const data = {"book":{"data":".silicon-book {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.75em;\n  height: 0.75em;\n  background-image: linear-gradient(to bottom, currentColor, currentColor);\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: var(--stroke, 0.1em) calc(100% - \t\t\t\t\t(var(--stroke, 0.1em) * 2));\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-right: none;\n  border-bottom: none;\n  border-radius: 0.2em 0 0 0;\n}\n.silicon-book:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  top: 100%;\n  left: calc(var(--stroke, 0.1em) * -1);\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: calc(100% + var(--stroke, 0.1em));\n  height: 0.4em;\n  background-image: radial-gradient(closest-side, transparent calc(100% - 0.05em), currentColor calc(100% - 0.05em), currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: top 50% right -0.31em;\n  background-size: 0.4em 0.4em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-right: none;\n  border-radius: 0.2em 0 0 0.2em;\n  /* transform */\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"}}
	export default data;