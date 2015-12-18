
fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.incrementDate = incrementDate;
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');


	function incrementDate(date, delta) {
		return date.clone().stripTime().add(delta, 'months').startOf('month');
	}


	function render(date) {

		t.intervalStart = date.clone().stripTime().startOf('month');
		t.intervalEnd = t.intervalStart.clone().add(1, 'months');

		t.start = t.intervalStart.clone().startOf('week');
		t.start = t.skipHiddenDays(t.start);

		t.end = t.intervalEnd.clone().add((7 - t.intervalEnd.weekday()) % 7, 'days');
		t.end = t.skipHiddenDays(t.end, -1, true);

		var rowCnt = Math.ceil( // need to ceil in case there are hidden days
			t.end.diff(t.start, 'weeks', true) // returnfloat=true
		);
		if (t.opt('weekMode') == 'fixed') {
			t.end.add(6 - rowCnt, 'weeks');
			rowCnt = 6;
		}

		t.title = calendar.formatDate(t.intervalStart, t.opt('titleFormat'));

		t.renderBasic(rowCnt, t.getCellsPerWeek(), true);
	}
	
	
}
