package com.nuuedscore.client.ui.portal.teacher;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.portal.PortalTitlePanel;
import com.nuuedscore.client.ui.portal.student.LearningPersonalityNavigationPanel;
import com.nuuedscore.client.ui.portal.student.PortalTopicAcademicsPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * TEACHER Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalPanel extends TitledPanel {
	
	private RefTopic REF_TOPIC;
	private List<TeacherResource> teacherResources;
	
	public PortalPanel(RefTopic refTopic, List<TeacherResource> teacherResources) {
		super(refTopic.value() + " PORTAL");
		
		this.teacherResources = teacherResources;
		this.REF_TOPIC = refTopic;
		
		this.setSpacing(20);

		init();
	}
	
	private void init() {
		GWT.log("\n\nTEACHER PortalPanel for:\n" + this.REF_TOPIC + "\n"/* + teacherResources*/);
				
		PortalTitlePanel titlePanel = new PortalTitlePanel(this.REF_TOPIC);
		this.add(titlePanel);

		// I AM THE MATRIX
		//this.add(new HTML(teacherResources.toString()));
		
		// Flow Topics
		FlowPanel flowPanel = new FlowPanel();
		//flowPanel.getElement().getStyle().setProperty("padding", "10px");
		
		for (TeacherResource teacherResource: this.teacherResources) {
			Button resourceButton = new Button(teacherResource.getName());		
			resourceButton.getElement().getStyle().setProperty("margin", "10px");
			resourceButton.addClickHandler(event -> {
				// TODO can do features on resource
				Window.open(teacherResource.getResource(), teacherResource.getName(), "");
			});
			
			flowPanel.add(resourceButton);
		}
		this.add(flowPanel);

	}	

}
