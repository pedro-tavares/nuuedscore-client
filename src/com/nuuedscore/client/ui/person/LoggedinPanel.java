package com.nuuedscore.client.ui.person;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.shared.dto.Person;

/**
 * Logged In Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class LoggedinPanel extends HorizontalPanel {
	
	public LoggedinPanel(Person user) {
		this.setStyleName("loggedinPanel");
		this.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);

		VerticalPanel loginLogoutPanel = new VerticalPanel();
		
		Label loggedinLabel = new Label("Logged in as: " + NuuEdScore.GET_USER().getEmail());
		loggedinLabel.addStyleName("loggedinLabel");
		loginLogoutPanel.add(loggedinLabel);

		Anchor logoutAnchor = new Anchor("Log out");
		loginLogoutPanel.add(logoutAnchor);
		logoutAnchor.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				if (Window.confirm("Are you sure you want to log out?")) {
					NuuEdScore.logOut();
				}
			}
	      });
		
		this.add(loginLogoutPanel);
		
		Image userAvatarImage = new Image("images/woman_avatar.jpg");
		userAvatarImage.setPixelSize(50, 40);
		this.add(userAvatarImage);
	}
}
