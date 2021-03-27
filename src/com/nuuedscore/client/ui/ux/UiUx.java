package com.nuuedscore.client.ui.ux;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Image;
import com.nuuedscore.shared.dto.refdata.RefTopic;

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
	static public Image imageForTopic(RefTopic topic) {
		switch(topic) {
		case Academics: return new Image("/images/topics/" + topic + ".png");
		default: return new Image("/images/NuLogo_Small.jpg");
		}
	}
	
	static public String colourForSubject(String subject) {
		switch(subject) {
		case "Quotes": return "#0074B9";
		case "Math": return "#953ED5";
		case "Reading": return "#FF6F12";
		case "Science": return "#9BDA46";
		case "History": return "#E21A1A";
		case "Financial Literacy": return "#00FF00";
		case "Vocational/Certification": return "#8E1600";
		case "Technical Skills": return "#800080";
		case "Office Skills": return "#FF5E13";
		case "Writing": return "#F8D800";
		default: return "#7BDDEF"; 
		}
	}
}
