package com.nuuedscore.client.ui.dashboard;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.IStudentFlow;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.dashboard.aptitude.AptitudePanel;
import com.nuuedscore.client.ui.dashboard.skill.SkillsMasterPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;

/**
 * Dashboard Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class DashboardPanel extends TitledPanel implements IStudentFlow {

	private HorizontalPanel innerPanel = new HorizontalPanel();
	private AptitudePanel lowAptitudePanel = new AptitudePanel(RefAptitude.LOW);
	private SkillsMasterPanel skillsMasterPanel = new SkillsMasterPanel();
	private AptitudePanel highAptitudePanel = new AptitudePanel(RefAptitude.HIGH);
	
	public DashboardPanel() {
		super(NuuEdScore.GET_USER().getFirstName() +  "'s Student Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
		
		innerPanel.add(lowAptitudePanel);
		innerPanel.add(skillsMasterPanel);
		innerPanel.add(highAptitudePanel);
		
		this.add(innerPanel);
	}
	
	@Override
	public void flow(List<StudentResource> studentResources) {
		//Window.alert("I AM DashboardPanel: Flow StudentResources");

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
		
}
