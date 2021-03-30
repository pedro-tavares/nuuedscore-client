package com.nuuedscore.client.ui.dashboard;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.dashboard.student.aptitude.AptitudePanel;
import com.nuuedscore.client.ui.dashboard.student.skill.SkillsMasterPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;

/**
 * TEACHER Dashboard Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class TeacherDashboardPanel extends TitledPanel implements ITeacherFlow {

	private HorizontalPanel innerPanel = new HorizontalPanel();
	/*
	private AptitudePanel lowAptitudePanel = new AptitudePanel(RefAptitude.LOW);
	private SkillsMasterPanel skillsMasterPanel = new SkillsMasterPanel();
	private AptitudePanel highAptitudePanel = new AptitudePanel(RefAptitude.HIGH);
	*/
	
	public TeacherDashboardPanel() {
		super(NuuEdScore.GET_USER().getFirstName() +  "'s Teacher Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
		/*
		innerPanel.add(lowAptitudePanel);
		innerPanel.add(skillsMasterPanel);
		innerPanel.add(highAptitudePanel);
		*/
		this.add(innerPanel);
	}
	
/*	
	@Override
	public void flow(List<StudentResource> studentResources) {
	GWT.log("StudentDashboardPanel: Flow StudentResources");

		List<StudentResource> lowAptitudes = new ArrayList<StudentResource>();
		List<StudentResource> highAptitudes = new ArrayList<StudentResource>();
		
		for (StudentResource studentResource: studentResources) {
			GWT.log("TOPIC:" + studentResource.getTopic() + ", APTITUDE:" + studentResource.getScore());
			
			switch(studentResource.getScore()) {
			case LOW:
				lowAptitudes.add(studentResource);
				break;
			case HIGH:
				highAptitudes.add(studentResource);
				break;
			default:
				break;
			}
		}
		
		// Flow...
		lowAptitudePanel.flow(lowAptitudes);
		highAptitudePanel.flow(highAptitudes);
	}
*/
	@Override
	public void flow(List<TeacherResource> teacherResources) {
		GWT.log("TeacherDashboardPanel: Flow teacherResources:\n" + teacherResources);
		
	}

}
