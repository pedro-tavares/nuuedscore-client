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
 * @since Mar 2021
 * 
 */
public class LoggedInPanel extends HorizontalPanel {
	
	public LoggedInPanel(Person user) {
		this.setStyleName("loggedinPanel");
		this.setHorizontalAlignment(ALIGN_RIGHT);
		this.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);

		VerticalPanel loginLogoutPanel = new VerticalPanel();
		
		Label loggedinLabel = new Label("Logged in as: " + NuuEdScore.GET_USER().getFirstName() + " " + NuuEdScore.GET_USER().getLastName());
		loggedinLabel.addStyleName("greenBoldlLabel");
		loginLogoutPanel.add(loggedinLabel);
		
		Label namePersonLabel = new Label(NuuEdScore.GET_USER().getEmail());
		loginLogoutPanel.add(namePersonLabel);
		namePersonLabel.addStyleName("blueBoldLabel");
		/*
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
		*/
		this.add(loginLogoutPanel);
		
		//TODO get USER avatar
		Image userAvatarImage = new Image("images/the_architect.png");
		userAvatarImage.setPixelSize(50, 50);
		this.add(userAvatarImage);
	}
}
