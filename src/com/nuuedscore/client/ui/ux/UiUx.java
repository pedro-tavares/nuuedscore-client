package com.nuuedscore.client.ui.ux;

import com.google.gwt.user.client.ui.Image;

/**
 * UI UX
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class UiUx {

	/**
	 * static bindings
	 */
	static public Image imageForTopic(String topic) {
		return new Image("/images/topics/" + topic + ".png"); 
	}
	
	static public String colourForTopic(String topic) {
		switch(topic) {
		case "Quotes": return "#0074B9";
		case "Math": return "#953ED5";
		case "Reading": return "#FF6F12";
		case "Science": return "#9BDA46";
		case "History": return "#E21A1A";
		case "Writing": return "#F8D800";
		default: return "#0078D7"; 
		}
	}
}
