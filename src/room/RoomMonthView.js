
fcViews.roomMonth = RoomMonthView;

function RoomMonthView(element, calendar) { // TODO: make a DayView mixin
	var t = this;
	
	
	// exports
	t.incrementDate = incrementDate;
	t.render = render;
	
	
	// imports
    RoomView.call(t, element, calendar, 'roomWeek');


	function incrementDate(date, delta) {
		var out = date.clone().stripTime().add(delta, 'months');
		out = t.skipHiddenDays(out, delta < 0 ? -1 : 1);
		return out;
	}


	function render(date) {

        t.intervalStart = date.clone();
        t.intervalEnd = date.clone();
		t.start = date.clone().add(-7, 'days').stripTime();
		t.end = date.clone().add(1, 'months');

		t.title = calendar.formatDate(date.clone().stripTime(), t.opt('titleFormat'));

		t.renderAgenda(1);
	}
	

}
