class LCHeader extends Polymer.Element {
	static get is(){
		return 'lc-header';
	}
	editSchedule () {
		alert ("Edit Schedule Not Yet Implemented");
	}
	changeSemester () {
		console.log ("Changing Semesters Not Yet Implemented");
	}
}

window.customElements.define(LCHeader.is, LCHeader);
