package com.nuuedscore.client.ui.resource;

import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Resource Card
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class ResourceCard extends VerticalPanel {

	private StudentResource resource;
	private Image mainImage, scrollImage;
	private LiveResourcePanel liveResourcePanel; 

	public ResourceCard(StudentResource resource) {
		super();
		this.resource = resource;
		
		init();
	}
	
	private void init() {
		
		mainImage = new Image(this.resource.getId() + "-1.png");
		this.add(mainImage);
		
		Label resourceNameLabel = new Label(this.resource.getName());
		resourceNameLabel.setStyleName("blueBoldLabel");
		this.add(resourceNameLabel);
	}
	
	private void addLiveResourcePanel() {
		if (this.liveResourcePanel == null) {
			this.liveResourcePanel = new LiveResourcePanel(resource.getResource());		
		}
		this.add(liveResourcePanel);

	}

}
