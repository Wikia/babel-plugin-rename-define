'use strict';

module.exports = function (babel) {
	var t = babel.types;

	return {
		visitor: {
			Program: {
				exit: function (path, state) {
					var expression = path.node.body[0].expression,
						newName = state.opts.name;

					if (newName && t.isIdentifier(expression.callee, {name: 'define'})) {
						expression.callee = t.identifier(newName);
					}
				}
			}
		}
	}
};
