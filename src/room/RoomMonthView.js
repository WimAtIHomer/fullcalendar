
fcViews.roomMonth = RoomMonthView;

function RoomMonthView(element, calendar) { // TODO: make a DayView mixin
	var t = this;
	
	
	// exports
	t.incrementDate = incrementDate;
	t.render = render;
	
	
	// imports
    RoomView.call(t, element, calendar, 'roomWeek');


	function incrementDate(date, delta) {
		var out = date.clone().stripTime().add('months', delta);
		out = t.skipHiddenDays(out, delta < 0 ? -1 : 1);
		return out;
	}


	function render(date) {

		t.start = t.intervalStart = date.clone().add('days', -7).stripTime();
		t.end = t.intervalEnd = t.start.clone().add('months', 1);

		t.title = calendar.formatDate(date.clone().stripTime(), t.opt('titleFormat'));

		t.renderAgenda(1);
	}
	

}
