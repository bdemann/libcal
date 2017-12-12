class LCHeader extends Polymer.Element {
	static get is(){
		return 'lc-header';
	}
	editSchedule () {
		console.log ("Edit Schedule Not Yet Implemented");
		var event = new CustomEvent('scheduleEdit', { detail: this.dataset.time });
		this.dispatchEvent(event);
		console.log('we finished with no problems');
		alert('Your Schedule has been saved!');
	}
	changeSemester () {
		console.log ('Changing Semesters Not Yet Implemented');
	}
}

window.customElements.define(LCHeader.is, LCHeader);
