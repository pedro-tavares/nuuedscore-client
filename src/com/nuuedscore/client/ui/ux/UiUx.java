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
}
