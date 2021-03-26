package com.nuuedscore.client.ui.portal;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
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

	private String topic;
	private PortalAcademicsSubjectPanel portalSubjectPanel;
	
	public PortalTopicAcademicsPanel(String topic) {
		this.topic = topic;
		
		this.setStyleName("portalTopicPanel");
		
		init();
	}
	
	protected void init() {
		List<StudentResource> studentResources = DATA.STUDENT_RESOURCES;
		
		Map<String, PortalAcademicsSubjectPanel> studentResourcesForAcademics = new HashMap<String, PortalAcademicsSubjectPanel>();
		List<String> knownSubjects = Arrays.asList("Math", "Reading", "Science", "History", "Writing"); 
		
		for (StudentResource studentResource: studentResources) {
			if (studentResource.getSubject().equals("Quotes")) { // TODO Quotes go to DASH
				
			} else { // Flow only Subjects

				String subject = studentResource.getSubject();
				if (!studentResourcesForAcademics.containsKey(subject)) { // create new
					
					GWT.log("NEW SUBJECT:" + subject);
					
					if (knownSubjects.indexOf(subject) != -1) { // if known
						portalSubjectPanel = new PortalAcademicsSubjectPanel(subject);
						studentResourcesForAcademics.put(subject, portalSubjectPanel);
						this.add(portalSubjectPanel);
					} 
				}				
				
				// and Flow the Resources for Subject...
				portalSubjectPanel.add(studentResource); 
			}
		}
	}
	
}