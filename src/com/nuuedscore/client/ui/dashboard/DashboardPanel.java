package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.dashboard.aptitude.AptitudePanel;
import com.nuuedscore.client.ui.dashboard.skills.SkillsMasterPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Dashboard Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class DashboardPanel extends TitledPanel {

	private HorizontalPanel innerPanel = new HorizontalPanel();
	private AptitudePanel lowAptitudePanel = new AptitudePanel(RefScore.LOW);
	private SkillsMasterPanel skillsMasterPanel = new SkillsMasterPanel();
	private AptitudePanel highAptitudePanel = new AptitudePanel(RefScore.HIGH);
	
	public DashboardPanel() {
		super(NuuEdScore.GET_USER().getFirstName() +  "'s Dashboard");

		this.setSpacing(20);
		this.init();

	}

	private void init() {
		innerPanel.add(lowAptitudePanel);
		innerPanel.add(skillsMasterPanel);
		innerPanel.add(highAptitudePanel);
		
		this.add(innerPanel);
	}
}
