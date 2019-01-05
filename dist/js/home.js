const data = {"home":{"data":".silicon-home {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.9em;\n  height: 0.5em;\n  background-image: linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor);\n  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;\n  background-position: left 0.1em bottom, 0.35em 0.1em, 0.475em 0.1em, 0.35em 0.225em, 0.475em 0.225em;\n  background-size: 0.2em 0.3em, 0.1em 0.1em, 0.1em 0.1em, 0.1em 0.1em, 0.1em 0.1em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top: none;\n}\n.silicon-home:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  top: 0;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: calc(0.8em - (var(--stroke, 0.1em) * 1));\n  height: calc(0.8em - (var(--stroke, 0.1em) * 1));\n  /* background */\n  background-image: radial-gradient(closest-side, currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: 0.1em 0.1em;\n  background-size: calc(var(--stroke, 0.1em) * 1.5) calc(var(--stroke, 0.1em) * 1.5);\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-right: none;\n  border-bottom: none;\n  /* transform */\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n}"}}
	export default data;