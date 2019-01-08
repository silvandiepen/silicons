const data = {"birdhouse":{"data":".silicon-birdhouse {\n  /* position */\n  position: relative;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.8em;\n  height: 0.65em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-top: none;\n}\n.silicon-birdhouse:before {\n  content: \"\";\n  /* position */\n  position: absolute;\n  top: 0;\n  left: 50%;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: calc(0.8em - (var(--stroke, 0.1em) * 1.5));\n  height: calc(0.8em - (var(--stroke, 0.1em) * 1.5));\n  /* background */\n  background-image: radial-gradient(closest-side, currentColor 100%, transparent);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: calc(var(--stroke, 0.1em) * 1.5) calc(var(--stroke, 0.1em) * 1.5);\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n  border-right: none;\n  border-bottom: none;\n  /* transform */\n  -webkit-transform: translate(-50%, -50%) rotate(45deg);\n          transform: translate(-50%, -50%) rotate(45deg);\n}\n.silicon-birdhouse.colored {\n  /* background */\n  background-color: var(--brown,#aa834f);\n  /* border */\n  border-width: 0;\n}\n.silicon-birdhouse.colored:before {\n  /* text */\n  color: var(--dark-brown,#87683f);\n  /* background */\n  background-color: var(--brown,#aa834f);\n  background-image: radial-gradient(closest-side, var(--black,#101010) 100%, transparent);\n}"}}
	export default data;