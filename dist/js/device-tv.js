const data = {"device-tv":{"data":".silicon-device-tv {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 0.75em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-radius: 0.2em;\n}\n.silicon-device-tv:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: calc(var(--stroke, 0.1em) * 3);\n  height: calc(var(--stroke, 0.1em) * 3);\n  /* border */\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n  border-top: 0;\n  border-right: 0;\n  /* transform */\n  -webkit-transform: translateX(-50%) translateY(calc(var(--stroke, 0.1em) * -1)) rotate(-45deg);\n          transform: translateX(-50%) translateY(calc(var(--stroke, 0.1em) * -1)) rotate(-45deg);\n}\n.silicon-device-tv .colored {\n  /* background */\n  background-image: var(--purple,#7329b1);\n}"}}
	export default data;