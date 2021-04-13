package com.nuuedscore.client.ui.resource;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;

/**
 * Resource Anchor
 * 
 * @author PATavares
 * @since Apr 2021
 * 
*/
public class ResourceAnchor extends Label {

	private String resource;
	
	public ResourceAnchor(String name, String resource) {
		super(name);
		this.resource = resource;
		
		this.setStyleName("resourceAnchor");
		this.addClickHandler(event -> {
			//Window.alert(this.resource);
			// TODO can do features on resource
			Window.open(this.resource, this.getText(), "");
		});
	}
}
