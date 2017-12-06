class LCCalendarColumn extends Polymer.Element {
	static get is(){ return 'lc-calendar-column'; }

	constructor () {
		super();
		console.log('we created a calender column');
		console.log(document)
	}

	connectedCallback() {
		console.log('Here is the connected Callback');
		var blocks = document.getElementsByClassName('block');
		var i;
		for (i = 0; i < blocks.length; i++){
			blocks[i].innerHTML = 'Hello World';
				// <div class="job deskone">Mike</div>
				// <div class="job desktwo">Sam</div>
				// <div class="job equip">Brennan</div>
		}
		// console.log(i);
		// console.log(document.getElementById('calContainer'));
		// console.log(document);
	}

	report () {
		console.log('we are hovering over the thing')
	}
}

window.customElements.define(LCCalendarColumn.is, LCCalendarColumn)
