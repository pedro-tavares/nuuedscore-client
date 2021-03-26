package com.nuuedscore.client.ui.portal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Portal Topic Academics Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTopicAcademicsPanel extends HorizontalPanel {

	private String topic;
	
	public PortalTopicAcademicsPanel(String topic) {
		this.topic = topic;
		
		this.setStyleName("portalTopicPanel");
		
		init();
	}
	
	protected void init() {
		List<StudentResource> studentResources = DATA.STUDENT_RESOURCES;
		
		Map<String, PortalAcademicsSubjectPanel> studentResourcesForAcademics = new HashMap<String, PortalAcademicsSubjectPanel>();
				
		for (StudentResource studentResource: studentResources) {
			if (studentResource.getSubject().equals("Quotes")) { // TODO Quotes go to DASH
				
			} else { // Flow only Subjects

//				Button header = new Button(studentResource.getSubject() + " - " + studentResource.getName() /* + " - " + studentResource.getResource()*/);
//				header.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForSubject(studentResource.getSubject()));
//				this.add(header);
				String subject = studentResource.getSubject();
				if (!studentResourcesForAcademics.containsKey(subject)) { // create new
					
					GWT.log("NEW SUBJECT:" + subject);
					
					PortalAcademicsSubjectPanel portalSubjectPanel = new PortalAcademicsSubjectPanel(subject);
					studentResourcesForAcademics.put(subject, portalSubjectPanel);
					
					this.add(portalSubjectPanel);
				}
			}
		}
	}
	
}
