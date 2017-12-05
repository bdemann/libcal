class LCCalendarColumn extends Polymer.Element {
	static get is(){ return 'lc-calendar-column'; }

	report () {
		console.log('we are hovering over the thing')
	}
}

window.customElements.define(LCCalendarColumn.is, LCCalendarColumn)
