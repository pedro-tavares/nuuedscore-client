package com.nuuedscore.client.ui.dashboard.skill;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefSkill;

/**
 * Skills Master Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class SkillsMasterPanel extends VerticalPanel {

	private SkillsPanel 
		softSkillsPanel,
		hardSkillsPanel;
	
	public SkillsMasterPanel() {
		
		this.setStyleName("skillsMasterPanel");
		this.setSpacing(10);
		init();
	}
	
	private void init() {
		softSkillsPanel = new SkillsPanel(RefSkill.SOFT);
		hardSkillsPanel = new SkillsPanel(RefSkill.HARD);
		
		this.add(softSkillsPanel);
		this.add(hardSkillsPanel);
	}
}
