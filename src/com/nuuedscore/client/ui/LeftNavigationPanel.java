package com.nuuedscore.client.ui;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.person.PersonPanel;

/**
 * Left Navigation Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class LeftNavigationPanel extends VerticalPanel {

	private Button personButton;
	private PersonPanel personPanel;
	
	public LeftNavigationPanel() {
		super();
		
		this.setStyleName("leftMenuPanel");
		this.setSpacing(10);		
		this.init();
	}
	
	private void init() {
		personButton = new Button("P");
		personButton.setStyleName("menuButton");
		personButton.addClickHandler(event -> {
			if (personPanel == null) {
				personPanel = new PersonPanel();
			}
			NuuEdScore.GET().showView(personPanel);
		});
		this.add(personButton);
	}
}
