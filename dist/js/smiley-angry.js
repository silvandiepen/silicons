const data = {"smiley-angry":{"data":".silicon-smiley-angry {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  box-sizing: border-box;\n  border: calc(var(--stroke, 0.1em) / 1) solid currentColor;\n  border-radius: 50%;\n  background-image: radial-gradient(closest-side, currentColor 100%, transparent), radial-gradient(closest-side, currentColor 100%, transparent);\n  background-repeat: no-repeat, no-repeat;\n  background-position: left calc(50% + 0.15em) bottom calc(50% + 0.1em), right calc(50% + 0.15em) bottom calc(50% + 0.1em);\n  background-size: 0.2em 0.2em, 0.2em 0.2em;\n}\n.silicon-smiley-angry::before, .silicon-smiley-angry::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: border-box;\n}\n.silicon-smiley-angry::after {\n  top: 50%;\n  left: 50%;\n  width: 0.5em;\n  height: 0.5em;\n  border: calc(var(--stroke, 0.1em) / 2) solid transparent;\n  border-bottom-color: currentColor;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.silicon-smiley-angry.colored {\n  background-color: var(--yellow,#f5c505);\n  background-image: radial-gradient(closest-side, var(--black,#101010) 50%, var(--white,#ffffff) 50%, var(--white,#ffffff) 100%, transparent), radial-gradient(closest-side, var(--black,#101010) 50%, var(--white,#ffffff) 50%, var(--white,#ffffff) 100%, transparent);\n  color: var(--yellow,#f5c505);\n}\n.silicon-smiley-angry.colored::after {\n  color: var(--black,#101010);\n}\n\n.silicon-smiley-angry {\n  background-image: none;\n}\n.silicon-smiley-angry::before, .silicon-smiley-angry::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: border-box;\n}\n.silicon-smiley-angry::before {\n  right: calc(50% + 0.05em);\n  bottom: 50%;\n  width: 0.2em;\n  height: 0.1em;\n  /* box */\n  box-shadow: 0.3em 0 0 0 currentColor;\n  border-radius: 0 0 0.1em 0.1em;\n  background-color: currentColor;\n}\n.silicon-smiley-angry::after {\n  border-top-color: currentColor;\n  border-bottom-color: transparent;\n  -webkit-transform: translate(-50%, 25%);\n          transform: translate(-50%, 25%);\n}\n.silicon-smiley-angry.colored::before {\n  bottom: calc(50% + 0.1em);\n  border-radius: 0.1em 0.1em 0 0;\n  color: var(--yellow,#f5c505);\n}"}}
	export default data;