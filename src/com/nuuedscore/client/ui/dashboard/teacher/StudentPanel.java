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

		Label studentLabel1 = new Label("Student 1");
		studentLabel1.setStyleName("resourceAnchor");
		this.add(studentLabel1);
		
		Label studentLabel2 = new Label("Student 2");
		studentLabel2.setStyleName("resourceAnchor");
		this.add(studentLabel2);

		Label studentLabel3 = new Label("Student 3");
		studentLabel3.setStyleName("resourceAnchor");
		this.add(studentLabel3);

	}
	
}