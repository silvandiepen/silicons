const data = {"label":{"data":".silicon-label {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.5em;\n  height: 0.65em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top: none;\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.silicon-label:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  top: 0;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: calc(0.5em - (var(--stroke, 0.1em) * 1.5));\n  height: calc(0.5em - (var(--stroke, 0.1em) * 1.5));\n  /* background */\n  background-image: radial-gradient(closest-side, currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: var(--stroke, 0.1em) var(--stroke, 0.1em);\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-right: none;\n  border-bottom: none;\n  border-radius: var(--stroke, 0.1em) 0 0 0;\n  /* transform */\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n}"}}
	export default data;