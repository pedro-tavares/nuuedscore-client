package com.nuuedscore.client.ui.resource;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Resource Card
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class ResourceCard extends FlowPanel {

	private StudentResource resource;
	private Image mainImage, scrollImage;

	public ResourceCard(StudentResource resource) {
		super();
		this.resource = resource;
		
		//this.getElement().getStyle().setProperty("padding", "5px");
		
		init();
	}
	
	private void init() {		
		
		mainImage = new Image("images/resources/student/" + this.resource.getId() + "-1.png");
		mainImage.setStyleName("resourceCard-image");
		mainImage.setPixelSize(200, 200);
		this.add(mainImage);

		Label resourceNameLabel = new Label(this.resource.getName());
		resourceNameLabel.setStyleName("resourceCard-label");
		this.add(resourceNameLabel);	
	}

}
