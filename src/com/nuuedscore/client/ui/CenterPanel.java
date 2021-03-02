package com.nuuedscore.client.ui;

import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Center and Middle Aligned Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class CenterPanel extends VerticalPanel {
	
	public CenterPanel() {
		this.setStyleName("centerPanels");
		this.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		this.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
	}
}
