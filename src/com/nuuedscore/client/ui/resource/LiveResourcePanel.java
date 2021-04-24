package com.nuuedscore.client.ui.resource;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Frame;

/**
 * Live Resource Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class LiveResourcePanel extends Frame {

	public LiveResourcePanel(String resource) {
		super(resource);

		this.setUrl(resource);
		this.setStyleName("resourcePreviewPanel");
		this.setPixelSize(300, 300);
		DOM.setElementProperty(this.getElement(), "frameborder", "0");
		DOM.setElementProperty(this.getElement(), "marginwidth", "0");
		DOM.setElementProperty(this.getElement(), "marginheight", "0");
		DOM.setElementProperty(this.getElement(), "scrolling", "no");

		// Commented because on IE show clear if allowtransparency=true
		DOM.setElementProperty(this.getElement(), "allowtransparency", "false");

//		initWidget(this);
	}
}
