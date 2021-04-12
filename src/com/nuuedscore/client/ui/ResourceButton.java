package com.nuuedscore.client.ui;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Image;

public class ResourceButton extends Button {
	
	private String text;

	public ResourceButton() {
		super();
	}

	public void setResource(String imageResource) {
		Image img = new Image(imageResource);
		img.setPixelSize(15, 15);
		String definedStyles = img.getElement().getAttribute("style");
		img.getElement().setAttribute("style", definedStyles + "padding-left:10px;");
		DOM.insertBefore(getElement(), img.getElement(), DOM.getFirstChild(getElement()));
	}

	@Override
	public void setText(String text) {
		this.text = text;
		Element span = DOM.createElement("span");
		span.setInnerText(text);
		//span.setAttribute("style", "padding-left:3px; vertical-align:middle;");

		DOM.insertChild(getElement(), span, 0);
	}

	@Override
	public String getText() {
		return this.text;
	}
}