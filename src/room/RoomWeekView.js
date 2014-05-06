
fcViews.roomWeek = RoomWeekView;

function RoomWeekView(element, calendar) { // TODO: make a DayView mixin
	var t = this;
	
	
	// exports
	t.incrementDate = incrementDate;
	t.render = render;
	
	
	// imports
    RoomView.call(t, element, calendar, 'roomWeek');


	function incrementDate(date, delta) {
		var out = date.clone().stripTime().add('days', delta);
		out = t.skipHiddenDays(out, delta < 0 ? -1 : 1);
		return out;
	}


	function render(date) {

        t.intervalStart = date.clone();
        t.intervalEnd = date.clone();
        t.start = date.clone().stripTime();
		t.end = t.start.clone().add('days', 7);

		t.title = calendar.formatDate(t.start, t.opt('titleFormat'));

		t.renderAgenda(1);
	}
	

}
