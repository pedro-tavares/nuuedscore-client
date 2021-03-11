package com.nuuedscore.client.ui;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.dashboard.DashboardPanel;
import com.nuuedscore.client.ui.person.PersonPanel;
import com.nuuedscore.client.ui.resource.StudentResourcePanel;
import com.nuuedscore.client.ui.resource.TeacherResourcePanel;

/**
 * Left Navigation Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class LeftNavigationPanel extends VerticalPanel {

	private VerticalPanel innerPanel = new VerticalPanel();
	private Image 
		responsiveImage,
		personImage,
		homeImage,
		scoresImage,
		taskListImage,
		presentImage,
		signOutImage;
	private DashboardPanel dashboardPanel;
	private PersonPanel personPanel;
	private TeacherResourcePanel teacherResourcePanel;
	private StudentResourcePanel studentResourcePanel;
	
	public LeftNavigationPanel() {
		super();
		
		innerPanel.setSpacing(0);
		
		this.setStyleName("leftNavigationPanel");
		this.setSpacing(0);
		
		this.init();
	}
	
	private void init() {
		responsiveImage = new Image("images/graphx/navigation/navigation_responsive.png");
		responsiveImage.setStyleName("leftNavigationGraphx");
		responsiveImage.addClickHandler(event -> {
		});
		innerPanel.add(responsiveImage);

		personImage = new Image("images/graphx/navigation/navigation_person.png");
		personImage.setStyleName("leftNavigationGraphx");
		personImage.addClickHandler(event -> {
			if (personPanel == null) {
				personPanel = new PersonPanel();
			}
			NuuEdScore.GET().showView(personPanel);
		});
		innerPanel.add(personImage);
		
		homeImage = new Image("images/graphx/navigation/navigation_home.png");
		homeImage.setStyleName("leftNavigationGraphx");
		homeImage.addClickHandler(event -> {
			showDefaultView();
		});
		innerPanel.add(homeImage);
		
		scoresImage = new Image("images/graphx/navigation/navigation_scores.png");
		scoresImage.setStyleName("leftNavigationGraphx");
		scoresImage.addClickHandler(event -> {
		});
		innerPanel.add(scoresImage);

		taskListImage = new Image("images/graphx/navigation/navigation_task_list.png");
		taskListImage.setStyleName("leftNavigationGraphx");
		taskListImage.addClickHandler(event -> {
		});
		innerPanel.add(taskListImage);

		presentImage = new Image("images/graphx/navigation/navigation_present.png");
		presentImage.setStyleName("leftNavigationGraphx");
		presentImage.addClickHandler(event -> {
		});
		innerPanel.add(taskListImage);

		signOutImage = new Image("images/graphx/navigation/navigation_sign_out.png");
		signOutImage.setStyleName("leftNavigationGraphx");
		signOutImage.addClickHandler(event -> {
		});
		innerPanel.add(signOutImage);
		
		/* TODO DEV */
		Button teacherResourceButton = new Button("T");
		teacherResourceButton.setStyleName("devButton");
		teacherResourceButton.addClickHandler(event -> {
			if (teacherResourcePanel == null) {
				teacherResourcePanel = new TeacherResourcePanel();
			}
			NuuEdScore.GET().showView(teacherResourcePanel);		
		});		
		innerPanel.add(teacherResourceButton);

		Button studentResourceButton = new Button("S");
		studentResourceButton.setStyleName("devButton");
		studentResourceButton.addClickHandler(event -> {
			if (studentResourcePanel == null) {
				studentResourcePanel = new StudentResourcePanel();
			}
			NuuEdScore.GET().showView(studentResourcePanel);		
		});		
		innerPanel.add(studentResourceButton);
		
		this.add(innerPanel);
	}
	
	public void showDefaultView() {
		if (dashboardPanel == null) {
			dashboardPanel = new DashboardPanel();
		}
		NuuEdScore.GET().showView(dashboardPanel);		
	}
}
