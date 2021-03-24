package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.ux.UiUx;

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
		
		this.setSpacing(10);
		init();
	}
	
	private void init() {
		Image topicImage = UiUx.imageForTopic(topic);
		topicImage.setSize("70px", "70px");
		this.add(topicImage);
		
		VerticalPanel topicTitlePanel = new VerticalPanel();
		
		Label topicLabel = new Label(topic);
		topicLabel.setStyleName("portalTopicLabel");
		topicTitlePanel.add(topicLabel);
		
		Label topicDescriptionLabel = new Label("Please explore the content from various NuuEDSCORE recommended sources.");
		topicDescriptionLabel.setStyleName("portalTopicDescriptionLabel");
		topicTitlePanel.add(topicDescriptionLabel);
		
		this.add(topicTitlePanel);
	}

	
	
}
