class LCCalendarColumn extends Polymer.Element {
	static get is(){ return 'lc-calendar-column'; }
}

window.customElements.define(LCCalendarColumn.is, LCCalendarColumn)

document.getElementById('columnHeader').innerHTML('hi there')
