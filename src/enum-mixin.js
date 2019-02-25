module.exports = function (Model, opts) {
	Model.observe('before save', (ctx, next) => {
		if (!ctx.isNewInstance) return next()
		let props = Object.keys(opts)
		let instance = ctx.instance.__data
		Object.keys(instance)
			.forEach(property => {
				if (props.includes(property)) {
					Model.validatesInclusionOf(property, { in: opts[property].enum })
				}
			})
		next()
	})
}