const State = {
	user: 'bdemann',
	selectedMode: 0,
	events: []
};

export const RootReducer = (state=State, action) => {
	switch(action.type) {
		case 'changeSelectedMode': {
			return {
				...state,
				selectedMode: action.newMode
			};
		}
		case 'cellSelected': {
			return {
				...state,
				currentDay: action.currentDay,
				currentHour: action.currentHour
			}
		}
		case 'addEvent': {
			console.log('we are in the add event reducer');
			console.log(action);
			return {
				...state,
				events: [...state.events, action.info]
			}
		}
		default: {
			return state;
		}
	}
}
