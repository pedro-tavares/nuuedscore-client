package com.nuuedscore.client.ui.portal;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Portal Academics Subject Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalAcademicsSubjectPanel extends VerticalPanel {

	private String subject;
	private VerticalPanel innerPanel = new VerticalPanel();
	
	public PortalAcademicsSubjectPanel(String subject) {
		this.subject = subject;
		
		this.setStyleName("");
		this.setSpacing(10);
		
		init();
	}
	
	protected void init() {
		Button header = new Button(subject.toUpperCase());
		header.getElement().getStyle().setProperty("width", "100%");
		header.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForSubject(subject));
		this.add(header);
		
		innerPanel.setStyleName("portalAcademicsSubjectPanel-inner");
		innerPanel.setSpacing(10);
		
		this.add(innerPanel);
	}
	
	public void add(StudentResource studentResource) {
		Button resourceButton = new Button(studentResource.getName());
		resourceButton.setStyleName("resourceButton");
		resourceButton.addClickHandler(event -> {
			// TODO can do features on resource
			Window.open(studentResource.getResource(), studentResource.getName(), "");
		});
		
		this.innerPanel.add(resourceButton);
	}
}

