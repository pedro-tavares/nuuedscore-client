package com.nuuedscore.client.ui.portal;

import com.google.gwt.user.client.Window;
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
		
		init();
	}
	
	protected void init() {
		Window.alert(this.subject);
		
		Button header = new Button(subject);
		header.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForSubject(subject));
		this.add(header);
		
	}
	
}
