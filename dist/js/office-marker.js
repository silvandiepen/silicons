const data = {"office-marker":{"data":".silicon-office-marker {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.6em;\n  height: 1em;\n  background-image: radial-gradient(closest-side, transparent calc(100% - 0.05em), currentColor calc(100% - 0.05em), currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: bottom 0.8em center;\n  background-size: 0.9em 0.9em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top: none;\n  border-radius: 0 0 0.5em 0.5em/0 0 0.3em 0.3em;\n  /* transform */\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n.silicon-office-marker:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: 0.6em;\n  height: 0.2em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top-width: calc(var(--stroke, 0.1em) * 0.5);\n  border-bottom: none;\n  border-radius: 0.2em 0.2em 0 0;\n  /* transform */\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.silicon-office-marker:after {\n  content: \"\";\n  /* position */\n  position: absolute;\n  bottom: calc(100% + 0.15em);\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: 0.3em;\n  height: 0.4em;\n  /* background */\n  background-image: radial-gradient(closest-side, currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: bottom 0.1em center;\n  background-size: 0.5em 0.5em;\n  /* border */\n  border: calc(var(--stroke, 0.1em) * 0.5) solid currentColor;\n  border-bottom: none;\n  border-radius: 0.1em 0.1em 0 0;\n  /* transform */\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}"}}
	export default data;