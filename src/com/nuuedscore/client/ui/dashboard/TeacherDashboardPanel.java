package com.nuuedscore.client.ui.dashboard;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.client.flow.IsDashboard;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.dashboard.student.score.ScoresPanel;
import com.nuuedscore.client.ui.dashboard.teacher.AssessmentPanel;
import com.nuuedscore.client.ui.dashboard.teacher.ResourcePanel;
import com.nuuedscore.client.ui.dashboard.teacher.StudentPanel;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * TEACHER Dashboard Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class TeacherDashboardPanel extends TitledPanel implements IsDashboard, ITeacherFlow {

	private HorizontalPanel innerPanel = new HorizontalPanel();

	private VerticalPanel innerLeftPanel = new VerticalPanel();
	private VerticalPanel innerCenterPanel = new VerticalPanel();
	private VerticalPanel innerRightPanel = new VerticalPanel();
	
	private StudentPanel studentPanel = new StudentPanel();
	private ResourcePanel resourcePanel = new ResourcePanel();
	
	public TeacherDashboardPanel() {
		super(NuuEdScore.GET_PERSON().getFirstName() +  "'s Teacher Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
		
		// LEFT
		innerLeftPanel.setSpacing(20);
		
		Button mainDashboardButton = new Button("MAIN DASHBOARD");
		mainDashboardButton.setStyleName("gwt-Button-grey");
		mainDashboardButton.getElement().getStyle().setProperty("width", "100%");
		innerLeftPanel.add(mainDashboardButton);
		
		Label studentsLabel = new Label("STUDENTS");
		studentsLabel.setStyleName("viewTitleLabel-blue");
		studentsLabel.getElement().getStyle().setProperty("width", "100%");
		studentsLabel.getElement().getStyle().setProperty("align", "center");
		
		AssessmentPanel assessmentPanel = new AssessmentPanel(); 
		Button headerAssessmentButton = new Button("ASSESSMENTS");
		headerAssessmentButton.setStyleName("gwt-Button-grey");

		Button reportsButton = new Button("REPORTS");
		reportsButton.setStyleName("gwt-Button-green");
		reportsButton.getElement().getStyle().setProperty("width", "100%");

		Button socialEmotionalLearningButton = new Button("Social Emotional Learning");
		socialEmotionalLearningButton.setStyleName("gwt-Button-green");
		socialEmotionalLearningButton.getElement().getStyle().setProperty("width", "100%");
		
		innerLeftPanel.add(mainDashboardButton);
		innerLeftPanel.add(studentsLabel);
		innerLeftPanel.add(studentPanel);
		innerLeftPanel.add(assessmentPanel);
		innerLeftPanel.add(reportsButton);
		innerLeftPanel.add(socialEmotionalLearningButton);
		
		// CENTER
		Button commonCoreStateStandardsButton = new Button("Common Core State Standards");
		//commonCoreStateStandardsButton.setStyleName("gwt-Button-green");
		commonCoreStateStandardsButton.getElement().getStyle().setProperty("width", "100%");

		Label studentNameLabel = new Label("Student Name");
		studentNameLabel.setStyleName("viewTitleLabel-darkgrey");
		
		Button positiveQuoteOfTheWeekButton = new Button("POSITIVE QUOTE OF THE WEEK");
		positiveQuoteOfTheWeekButton.setStyleName("gwt-Button-green");
		positiveQuoteOfTheWeekButton.getElement().getStyle().setProperty("width", "100%");
		
		Button appsButton = new Button("APPS");
		//appsButton.setStyleName("gwt-Button-green");
		appsButton.getElement().getStyle().setProperty("width", "100%");
		
		Button studentGamesButton = new Button("STUDENT GAMES");
		//studentGamesButton.setStyleName("gwt-Button-green");
		studentGamesButton.getElement().getStyle().setProperty("width", "100%");
		
		innerCenterPanel.setSpacing(20);
		innerCenterPanel.add(commonCoreStateStandardsButton);
		innerCenterPanel.add(studentNameLabel);
		innerCenterPanel.add(resourcePanel);
		resourcePanel.getElement().getStyle().setProperty("width", "100%");
		innerCenterPanel.add(positiveQuoteOfTheWeekButton);
		innerCenterPanel.add(appsButton);
		innerCenterPanel.add(studentGamesButton);
				
		// RIGHT
		innerRightPanel.setSpacing(20);
		
		Button highAptitudeButton = new Button("HIGH APTITUDE");
		//highAptitudeButton.setStyleName("gwt-Button-grey");
		highAptitudeButton.getElement().getStyle().setProperty("width", "100%");

		ScoresPanel highPriorityAreasPanel1 = new ScoresPanel("HIGH PRIORITY AREAS #1", RefAptitude.HIGH, RefScore.HIGH) ;
		ScoresPanel highPriorityAreasPanel2 = new ScoresPanel("HIGH PRIORITY AREAS #2", RefAptitude.HIGH, RefScore.HIGH) ;
		ScoresPanel highPriorityAreasPanel3 = new ScoresPanel("HIGH PRIORITY AREAS #3", RefAptitude.HIGH, RefScore.HIGH) ;
				
		innerRightPanel.add(highAptitudeButton);
		innerRightPanel.add(highPriorityAreasPanel1);
		innerRightPanel.add(highPriorityAreasPanel2);
		innerRightPanel.add(highPriorityAreasPanel3);
				
		// THIS
		Image poohImage = new Image("images/Pooh.jpg");
		poohImage.setPixelSize(500, 500);

		innerPanel.add(innerLeftPanel);
		innerPanel.add(innerCenterPanel);
		innerPanel.add(innerRightPanel);		
		innerPanel.add(poohImage);		
		this.add(innerPanel);
	}
	
	@Override
	public void flow(List<TeacherResource> teacherResources) {
		GWT.log("TeacherDashboardPanel: Flow teacherResources:\n"/* + teacherResources*/);

		this.resourcePanel.flow(teacherResources);
	}

}
