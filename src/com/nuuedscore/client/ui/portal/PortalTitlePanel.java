package com.nuuedscore.client.ui.portal;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * Portal Title Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalTitlePanel extends HorizontalPanel {

	RefTopic topic;
	HorizontalPanel titlePanel = new HorizontalPanel();
	
	public PortalTitlePanel(RefTopic topic) {
		this.topic = topic;

		this.setHorizontalAlignment(ALIGN_LEFT);
		this.setSpacing(10);
		init();
	}
	
	private void init() {
		Image topicImage = UiUx.imageForTopic(topic);
		topicImage.setSize("70px", "70px");
		this.add(topicImage);
		
		VerticalPanel topicTitlePanel = new VerticalPanel();
		
		Label topicLabel = new Label(topic.value());
		topicLabel.setStyleName("portalTopicLabel");
		topicTitlePanel.add(topicLabel);
		
		Label topicDescriptionLabel = new Label("Please explore the content from various NuuEDSCORE recommended sources.");
		topicDescriptionLabel.setStyleName("portalTopicDescriptionLabel");
		topicTitlePanel.add(topicDescriptionLabel);
		
		this.add(topicTitlePanel);
	}

}
