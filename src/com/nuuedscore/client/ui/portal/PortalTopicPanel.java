package com.nuuedscore.client.ui.portal;

import java.util.List;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Portal Topic Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTopicPanel extends VerticalPanel {

	private String topic;
	
	public PortalTopicPanel(String topic) {
		this.topic = topic;
		
		this.setStyleName("portalTopicPanel");
		
		init();
	}
	
	protected void init() {
		List<StudentResource> studentResources = DATA.STUDENT_RESOURCES;
		
		for (StudentResource studentResource: studentResources) {
			if (!studentResource.getSubject().equals("Quotes")) {
				Button header = new Button(studentResource.getSubject() + " - " + studentResource.getResource());
				header.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForSubject(studentResource.getSubject()));
				this.add(header);
				// Flow to Student Resources ... 				
			}
		}
	}
	
}
