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
	
	static public String colourForItem(String item) {
		switch(item) {
		case "Quotes": return "#0074B9";
		case "Math": return "#953ED5";
		case "Reading": return "#FF6F12";
		case "Science": return "#9BDA46";
		case "History": return "#E21A1A";
		case "Financial Literacy": return "#9EEC00";
		case "Vocational / Certification Programs": return "#4D2DB6";
		case "Technical Skills": return "#800080";
		case "Office Skills": return "#FF5E13";
		case "Writing": return "#F8D800";
		case "Personality Test": return "#0E8D18";
		case "Career Aptitude": return "#00649C";
		case "Learning Styles": return "#FF6E11";
		case "Social Emotional Learning": return "#FFA800";
		case "Education Loans": return "#9EEC00";
		case "Career Options": return "#2B53B3";
		case "Tutoring Options": return "#46B4B5";
		case "ASSESSMENT SCORES": return "#CB0073";
		default: return "#0074B9"; 
		}
	}
}
