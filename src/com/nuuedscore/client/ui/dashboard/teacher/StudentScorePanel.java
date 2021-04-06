package com.nuuedscore.client.ui.dashboard.teacher;

import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;

/**
 * Student Score Panel
 * 
 * @author PATavares
 * @since Apr 2021
 * 
 */
public class StudentScorePanel extends HorizontalPanel {

	private String studentName;
	
	public StudentScorePanel(String studentName) {
		this.studentName = studentName;
		
		//this.setStyleName("simpleBorderPanel-green");
		this.setWidth("100%");
		//this.setSpacing(5);
		
		init();
	}
	
	private void init() {

		Label studentNameLabel = new Label(this.studentName);
		studentNameLabel.setStyleName("resourceAnchor");
		this.add(studentNameLabel);
		
		Label studentScoreLabel = new Label("Level 1 Score: 85");
		//studentScoreLabel.setStyleName("resourceAnchor");
		studentScoreLabel.setHorizontalAlignment(ALIGN_RIGHT);
		this.add(studentScoreLabel);
		
	}
	
}