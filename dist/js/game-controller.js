const data = {"game-controller":{"data":".silicon-game-controller {\n  position: RELATIVE;\n  display: inline-block;\n  width: 1em;\n  height: 0.6em;\n  border: 0.085em solid currentColor;\n  border-radius: 0.3em;\n}\n.silicon-game-controller::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 0.425em;\n  height: 0.425em;\n  background-image: linear-gradient(to bottom, currentColor, currentColor), linear-gradient(to bottom, currentColor, currentColor);\n  background-repeat: no-repeat, no-repeat;\n  background-position: center center, center center;\n  background-size: 0.05em 0.2em, 0.2em 0.05em;\n}\n.silicon-game-controller::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: calc(50% + 0.05em);\n  width: 0.1em;\n  height: 0.1em;\n  box-shadow: 0.1em 0.1em currentColor, 0.2em 0em currentColor, 0.1em -0.1em currentColor;\n  border-radius: 50%;\n  background-color: currentColor;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"}}
	export default data;