const data = {"copy":{"data":".silicon-copy {\n  /* position */\n  position: relative;\n  z-index: 1;\n  /* size */\n  display: inline-block;\n  box-sizing: border-box;\n  width: 0.75em;\n  height: 1em;\n}\n.silicon-copy:before, .silicon-copy:after {\n  content: \"\";\n  /* position */\n  position: absolute;\n  /* size */\n  display: block;\n  box-sizing: border-box;\n  width: 0.75em;\n  height: 1em;\n  /* border */\n  border: var(--stroke, 0.1em) solid currentColor;\n}\n.silicon-copy:before {\n  /* position */\n  top: calc(var(--stroke, 0.1em) * -2);\n  left: calc(var(--stroke, 0.1em) * -2);\n  z-index: -1;\n  /* border */\n  border-right: none;\n  border-bottom: none;\n}\n.silicon-copy:after {\n  /* position */\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.silicon-copy.colored:before, .silicon-copy.colored:after {\n  /* text */\n  color: var(--black,#101010);\n  /* background */\n  background-color: white;\n  /* border */\n  border: calc(var(--stroke, 0.1em) / 2) solid currentColor;\n}\n.silicon-copy.colored:before {\n  /* text */\n  color: var(--gray,#7f7f7f);\n  /* background */\n  background-color: var(--white,#ffffff);\n  /* opacity */\n  opacity: 0.5;\n}"}}
	export default data;