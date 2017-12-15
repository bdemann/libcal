class LCCalendarColumn extends Polymer.Element {
	static get is(){ return 'lc-calendar-column'; }

	constructor () {
		super();
		// console.log('we created a calender column');
		// console.log(document);
		this.attachShadow({mode: 'open'});
		this.renderInfo = [];
	}

	getColor(index) {
		var color = ['#A9C66D', '#ffc74f', '#4286f4', '#fc5358']
		return color[index];
	}

	intToHour (hour) {
		switch (hour) {
			case 1:
				return 'one';
			case 2:
				return 'two';
			case 3:
				return 'three';
			case 4:
				return 'four';
			case 5:
				return 'five';
			case 6:
				return 'six';
			case 7:
				return 'seven':
			case 8:
				return 'eight';
			case 9:
				return 'nine';
			case 10:
				return 'ten';
			case 11:
				return 'eleven';
			case 12:
				return 'twelve';
			case 13:
				return 'thirteen';
			case 14:
				return 'fourteen';
			case 15:
				return 'fifteen';
			case 16:
				return 'sixteen';
			case 17:
				return 'seventeen';
			default:
				return 18;
		}
	}

	intToTime(index) {
		var = times = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM','12:00 AM'];
		return times[index];
	}

	renderEvents () {
		this.renderInfo.forEach((element)=>{
			const timeLen = element.endTime - element.startTime;
			console.log('this is the timeLen');
			console.log(timeLen);
			const color = this.getColor(element.mode);
			const title = element.title;
			const startTime = element.startTime;
			console.log('this is the startTime');
			console.log(startTime);
			var i = 0;
			for(i = 0; i < timeLen; i++){
				const block = this.shadowRoot.querySelector('#' + this.intToHour(startTime + 1 + i));
				block.style.backgroundColor = color;
			}
			const trunkLen = 15;
			var renderedTitle = title.substring(0,trunkLen) + (title.length < trunkLen ? "": "...");
			var renderNotes = element.notes.substring(0,trunkLen) + (element.notes.length < trunkLen ? "": "...");
			const info = `
			<div>` + renderedTitle + `</div>
			<div class="eventInfo">` + this.intToTime(startTime) + ` to ` + this.intToTime(element.endTime) + `</div>
			<div class="eventInfo">` + renderNotes + `</div>
			`
			this.shadowRoot.querySelector('#' + this.intToHour(startTime + 1)).innerHTML = info;
		});
	}

	static get properties() {
		return {
			renderInfo: {
				observer: 'renderEvents'
			}
		}
	}

	connectedCallback() {
		setTimeout(()=> {
			// console.log('Here is the connected Callback');
			// console.log(this.shadowRoot);
			const blocks = this.shadowRoot.querySelectorAll('.block');
			// document.getElementsByClassName('block');
			// console.log(this);

			// console.log(blocks);
			var i;
			for (i = 0; i < blocks.length; i++){
				// blocks[i].innerHTML = `<div class="job deskone">Mike</div>
				// 	<div class="job desktwo">Sam</div>
				// 	<div class="job equip">Brennan</div>`
			}
			// console.log(document.getElementById('calContainer'));
			// console.log(document);
		});
	}

}

window.customElements.define(LCCalendarColumn.is, LCCalendarColumn)
