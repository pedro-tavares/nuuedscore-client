package com.nuuedscore.client.ui.dashboard;

import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.TitledPanel;

/**
 * Dashboard Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class DashboardPanel extends TitledPanel {

	public DashboardPanel() {
		super(NuuEdScore.GET_USER().getFirstName() +  "'s Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
	}
}
