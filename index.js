module.exports = {
	CompositeDisposer: require('./js/CompositeDisposer'),
	DelegateDisposer: require('./js/DelegateDisposer'),
	EventEmitter: require('./js/EventEmitter'),
	Lazy: require('./js/Lazy'),
	ValueChangedEmitter: require('./js/ValueChangedEmitter'),
	ValueContainer: require('./js/ValueContainer'),
	Spans: {
		Extensions: require('./js/Spans/Extensions'),
		StartDerrivedSpan: require('./js/Spans/StartDerrivedSpan'),
		EndDerrivedSpan: require('./js/Spans/EndDerrivedSpan'),
		LengthDerrivedSpan: require('./js/Spans/LengthDerrivedSpan'),
		TrimmableSpan: require('./js/Spans/TrimmableSpan')
	},
	Iterable: {
		Extensions: require('./js/Iterable/Extensions')
	},
	Array: {
		Extensions: require('./js/Iterable/Extensions')
	}
}