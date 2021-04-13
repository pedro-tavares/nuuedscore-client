package com.nuuedscore.client.ui.resource;

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
	private ResourcePreviewPanel resourcePreviewPanel; 

	public ResourceCard(StudentResource resource) {
		super();
		this.resource = resource;
		this.resourcePreviewPanel = new ResourcePreviewPanel(resource.getResource());
		
		init();
	}
	
	private void init() {
		this.add(resourcePreviewPanel);
		
		Label resourceNameLabel = new Label(this.resource.getName());
		resourceNameLabel.setStyleName("blueBoldLabel");
		this.add(resourceNameLabel);
	}

}
