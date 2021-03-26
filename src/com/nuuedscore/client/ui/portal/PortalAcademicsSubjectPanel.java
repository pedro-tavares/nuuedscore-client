package com.nuuedscore.client.ui.portal;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.ux.UiUx;

/**
 * Portal Academics Subject Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalAcademicsSubjectPanel extends VerticalPanel {

	private String subject;
	
	public PortalAcademicsSubjectPanel(String subject) {
		this.subject = subject;
		
		this.setStyleName("portalAcademicsSubjectPanel");
		
		init();
	}
	
	protected void init() {
		Button header = new Button(subject.toUpperCase());
		header.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForSubject(subject));
		this.add(header);
		
	}
	
}

