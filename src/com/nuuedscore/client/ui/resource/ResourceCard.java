package com.nuuedscore.client.ui.resource;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.shared.dto.IResource;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;

/**
 * Resource Card
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class ResourceCard extends FlowPanel {

	private IResource resource;
	private Image mainImage, scrollImage;
	private Label resourceNameLabel;

	public ResourceCard(IResource resource) {
		super();
		this.resource = resource;
		
		//this.getElement().getStyle().setProperty("padding", "5px");
		
		init();
	}
	
	private void init() {		
		
		String resourceFolder = "";
		if (this.resource instanceof TeacherResource) {
			resourceFolder = "teacher";
		}
		else if (this.resource instanceof StudentResource) {
			resourceFolder = "student";
		}
		//GWT.log("" + resourceFolder);		

		mainImage = new Image("images/resources/" + resourceFolder + "/" + this.resource.getId() + "-1.png");
		mainImage.setStyleName("resourceCard-image");
		mainImage.setPixelSize(200, 200);
		mainImage.addClickHandler(event -> {click();});
		this.add(mainImage);

		resourceNameLabel = new Label(this.resource.getName());
		resourceNameLabel.setStyleName("resourceCard-label");
		resourceNameLabel.addClickHandler(event -> {click();});
		this.add(resourceNameLabel);
	}

	private void click() {
		// TODO can do features on resource
		Window.open(resource.getResource(), resource.getName(), "");		
	}
}
