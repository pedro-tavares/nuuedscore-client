package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;

/**
 * Portal Title Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTitlePanel extends HorizontalPanel {

	String topic;
	HorizontalPanel titlePanel = new HorizontalPanel();
	
	public PortalTitlePanel(String topic) {
		this.topic = topic;
		
		Image topicImage = new Image();
		titlePanel.add(topicImage);
		
		Label topicLabel = new Label(topic);
		topicLabel.setStyleName("portalTopicLabel");
		titlePanel.add(topicLabel);
		
		this.add(titlePanel);
	}
	
	
}
