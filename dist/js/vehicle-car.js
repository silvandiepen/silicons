const data = {"vehicle-car":{"data":".silicon-vehicle-car {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 0.3em;\n  /* background */\n  background-image: radial-gradient(closest-side, currentColor 50%, transparent 50%), radial-gradient(closest-side, currentColor 50%, transparent 50%);\n  background-repeat: no-repeat, no-repeat;\n  background-position: left center, right center;\n  background-size: 0.2em 0.2em, 0.2em 0.2em;\n  /* border */\n  border: calc(var(--stroke, 0.1em) * 0.5) solid currentColor;\n  border-radius: var(--stroke, 0.1em) var(--stroke, 0.1em) 0 0;\n}\n.silicon-vehicle-car:before, .silicon-vehicle-car:after {\n  content: \"\";\n  /* position */\n  position: absolute;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n}\n.silicon-vehicle-car:before {\n  /* position  */\n  bottom: 100%;\n  left: 50%;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.8em;\n  height: 0.3em;\n  /* background */\n  background-image: radial-gradient(closest-side, transparent calc(100% - 0.025em), currentColor calc(100% - 0.025em), currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: 90% 0.1em;\n  background-size: 0.2em 0.2em;\n  /* border */\n  border: calc(var(--stroke, 0.1em) * 0.5) solid currentColor;\n  border-radius: 0.2em 0.2em 0 0/0.5em 0.5em 0 0;\n  /* transform */\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.silicon-vehicle-car:after {\n  top: 100%;\n  left: calc(calc(var(--stroke, 0.1em) * 0.5) * -1);\n  /* size */\n  width: 0.15em;\n  height: 0.2em;\n  /* background */\n  background-color: currentColor;\n  /* border */\n  border-radius: 0 0 0.05em 0.05em;\n  box-shadow: 0.85em 0 0 0 currentColor;\n}"}}
	export default data;