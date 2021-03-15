package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefSkill;

/**
 * Skills Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SkillsPanel extends VerticalPanel {

	private RefSkill REF_SKILL;
	private Button skillsButton;
	private HorizontalPanel innerPanel = new HorizontalPanel();
	private VerticalPanel 
		gaugePanel,
		skillsLegendPanel;
	private GaugePanel 
		skillsSoftHighGaugePanel = new GaugePanel(RefSkill.SOFT, RefScore.HIGH),
		skillsSoftLowGaugePanel = new GaugePanel(RefSkill.SOFT, RefScore.LOW),
		skillsHardHighGaugePanel = new GaugePanel(RefSkill.HARD, RefScore.HIGH),
		skillsHardLowGaugePanel = new GaugePanel(RefSkill.HARD, RefScore.LOW);
	
	public SkillsPanel(RefSkill refSkill) {
		this.REF_SKILL = refSkill;
		
		this.setStyleName("skillsPanel");
		this.setSpacing(10);
		
		init();
	}
	
	private void init() {		
		gaugePanel = new VerticalPanel();
		
		switch (REF_SKILL) {
		case SOFT:
			skillsButton = new Button("SOFT SKILLS");
			skillsButton.setStyleName("gwt-Button-grey");
			skillsButton.setWidth("100%");
			this.add(skillsButton);
			gaugePanel.add(skillsSoftHighGaugePanel);
			gaugePanel.add(skillsSoftLowGaugePanel);
			break;
		case HARD:
			skillsButton = new Button("HARD SKILLS");
			skillsButton.setStyleName("gwt-Button-grey");
			skillsButton.setWidth("100%");
			this.add(skillsButton);
			gaugePanel.add(skillsHardHighGaugePanel);
			gaugePanel.add(skillsHardLowGaugePanel);			
			break;
		default:
			break;
		}
		
		skillsLegendPanel = new SkillsLegendPanel(this.REF_SKILL);

		this.add(innerPanel);
		
		innerPanel.add(gaugePanel);
		innerPanel.add(skillsLegendPanel);
	}
}
