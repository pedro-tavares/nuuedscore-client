package com.nuuedscore.client.ui.portal;

import com.google.gwt.user.client.ui.Button;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.TitledPanel;

/**
 * Base Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class BasePortalPanel extends TitledPanel {

	public BasePortalPanel(String title) {
		super(title);
		
		this.setHorizontalAlignment(ALIGN_CENTER);
	}
	
	protected Button backToDashboardButton() {
		Button backToDashboardButton = new Button("BACK TO DASHBOARD");		
		backToDashboardButton.getElement().getStyle().setProperty("margin", "10px");
		backToDashboardButton.addClickHandler(event -> {
			NuuEdScore.GET().getNavigation().showLastDashboard();
		});		
		return backToDashboardButton;
	}
	
}
