package com.nuuedscore.client.ui.dashboard.teacher;

import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Student Panel
 * 
 * @author PATavares
 * @since Apr 2021
 * 
 */
public class StudentPanel extends VerticalPanel {

	public StudentPanel() {
		
		this.setStyleName("simpleBorderPanel-green");
		this.setWidth("100%");
		this.setSpacing(20);
		
		init();
	}
	
	private void init() {

		for (int i=1; i<=5; i++) {
			StudentScorePanel studentScorePanel1 = new StudentScorePanel("Student " + i);
			this.add(studentScorePanel1);
		}
	}
	
}