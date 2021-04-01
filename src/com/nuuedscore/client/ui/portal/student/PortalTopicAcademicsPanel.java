package com.nuuedscore.client.ui.portal.student;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Portal Topic Academics Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTopicAcademicsPanel extends HorizontalPanel {

	private PortalAcademicsSubjectPanel portalSubjectPanel;
	
	public PortalTopicAcademicsPanel() {
		this.setStyleName("portalTopicPanel");
		
		init();
	}
	
	protected void init() {
		List<StudentResource> studentResources = DATA.STUDENT_RESOURCES;
		
		Map<String, PortalAcademicsSubjectPanel> studentResourcesForAcademics = new HashMap<String, PortalAcademicsSubjectPanel>();
		
		for (StudentResource studentResource: studentResources) {
			if (studentResource.getSubject().equals("Quotes")) { // TODO Quotes go to DASH
				
			} else { // Flow only Subjects

				String subject = studentResource.getSubject();
				if (!studentResourcesForAcademics.containsKey(subject)) { // create new
					
					GWT.log("NEW SUBJECT:" + subject);
					
					portalSubjectPanel = new PortalAcademicsSubjectPanel(subject);
					studentResourcesForAcademics.put(subject, portalSubjectPanel);
					this.add(portalSubjectPanel);
				}				
				
				// and Flow the Resources for Subject...
				if (!"You Tube".equals(studentResource.getName())) {
					portalSubjectPanel.add(studentResource);
				}
			}
		}
	}
	
}
