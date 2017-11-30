class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	addTime () {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		alert ("Adding Time not Implemented");
	}
}

window.customElements.define(LCBody.is, LCBody)
