const data = {"volume-medium":{"data":".silicon-volume-medium {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 1em;\n  height: 1em;\n  border-bottom: none;\n  border-left: none;\n  -webkit-transform: translateX(25%) rotate(45deg);\n          transform: translateX(25%) rotate(45deg);\n}\n.silicon-volume-medium:before, .silicon-volume-medium:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  box-sizing: border-box;\n}\n.silicon-volume-medium:before {\n  bottom: calc(var(--stroke, 0.1em) * -1.5);\n  left: calc(var(--stroke, 0.1em) * -1.5);\n  width: 0;\n  height: 0;\n  border: calc(var(--stroke, 0.1em) * 3) solid currentColor;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-radius: var(--stroke, 0.1em);\n}\n.silicon-volume-medium:after {\n  bottom: calc(var(--stroke, 0.1em) * -2);\n  left: calc(var(--stroke, 0.1em) * -2);\n  width: calc(var(--stroke, 0.1em) * 4);\n  height: calc(var(--stroke, 0.1em) * 4);\n  background-color: currentColor;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.silicon-volume-medium.colored {\n  color: var(--gray,#7f7f7f);\n}\n.silicon-volume-medium.colored:after, .silicon-volume-medium.colored:before {\n  color: var(--blue,#1eb3e0);\n}\n\n.silicon-volume-medium {\n  background-image: radial-gradient(at bottom left, transparent calc(35% - var(--stroke, 0.05em)), currentColor calc(35% - var(--stroke, 0.05em)), currentColor 35%, transparent 35%), radial-gradient(at bottom left, transparent calc(50% - var(--stroke, 0.05em)), currentColor calc(50% - var(--stroke, 0.05em)), currentColor 50%, transparent 50%);\n}"}}
	export default data;