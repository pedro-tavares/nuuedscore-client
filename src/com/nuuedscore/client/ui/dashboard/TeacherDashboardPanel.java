package com.nuuedscore.client.ui.dashboard;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.dashboard.teacher.ResourcePanel;
import com.nuuedscore.shared.dto.TeacherResource;

/**
 * TEACHER Dashboard Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class TeacherDashboardPanel extends TitledPanel implements ITeacherFlow {

	private HorizontalPanel innerPanel = new HorizontalPanel();
	private VerticalPanel innerCenterPanel = new VerticalPanel();
	private ResourcePanel resourcePanel = new ResourcePanel();
	
	public TeacherDashboardPanel() {
		super(NuuEdScore.GET_PERSON().getFirstName() +  "'s Teacher Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
		
		Label studentNameLabel = new Label("Student Name");
		studentNameLabel.setStyleName("dashboardStudentNameLabel");
		
		innerCenterPanel.setSpacing(20);
		innerCenterPanel.add(studentNameLabel);
		innerCenterPanel.add(resourcePanel);
		
		innerPanel.add(innerCenterPanel);
		
		this.add(innerPanel);
	}
	
	@Override
	public void flow(List<TeacherResource> teacherResources) {
		GWT.log("TeacherDashboardPanel: Flow teacherResources:\n"/* + teacherResources*/);

		this.resourcePanel.flow(teacherResources);
	}

}
