package com.nuuedscore.client.ui.portal;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;

/**
 * Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalPanel extends TitledPanel {

	private RefAptitude REF_APTITUDE;
	private List<StudentResource> studentResources;
	private String topic;
	
	public PortalPanel(RefAptitude refAptitude, List<StudentResource> studentResources) {
		super(refAptitude.value() + " APTITUDE PORTAL");
		
		this.REF_APTITUDE = refAptitude;
		this.studentResources = studentResources;
		this.topic = studentResources.get(0).getTopic();
		
		if (this.REF_APTITUDE.equals(RefAptitude.HIGH)) {
			this.titleLabel.setStyleName("titledPanelLabel-high");
		}

		this.setSpacing(20);

		init();
	}
	
	private void init() {
		GWT.log("\n\nPortalPanel:" + this.REF_APTITUDE.value() + "\n" + studentResources);
		
		PortalTitlePanel titlePanel = new PortalTitlePanel(this.topic);
		this.add(titlePanel);

		HorizontalPanel innerPanel = new HorizontalPanel();
		
		LearningPersonalityNavigationPanel learningPersonalityNavigationPanel = new LearningPersonalityNavigationPanel();
		innerPanel.add(learningPersonalityNavigationPanel);
		
		PortalTopicPanel portalTopicPanel = new PortalTopicPanel(this.topic);
		innerPanel.add(portalTopicPanel);
		
		this.add(innerPanel);
	}
	
}
