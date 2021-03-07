package com.nuuedscore.client.ui;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.person.PersonPanel;

/**
 * Menu Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class MenuPanel extends HorizontalPanel {

	private Button accountsButton;
	private PersonPanel personPanel;
	
	public MenuPanel() {
		super();
		
		this.setStyleName("menuPanel");
		this.setSpacing(20);		
		this.init();
	}
	
	private void init() {
		accountsButton = new Button("Accounts");
		accountsButton.addClickHandler(event -> {
			if (personPanel == null) {
				personPanel = new PersonPanel();
			}
			NuuEdScore.GET().showView(personPanel);
		});
		this.add(accountsButton);
	}
}
