package com.nuuedscore.client.ui.portal.student;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Portal Topic Panel Default
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTopicPanel extends HorizontalPanel {

	public PortalTopicPanel() {
		this.setStyleName("portalTopicPanel");
		
		init();
	}
	
	protected void init() {
		for (StudentResource studentResource: DATA.STUDENT_RESOURCES) {
			this.add(new Button(studentResource.getName()));
		}
	}
	
}
