package com.nuuedscore.client.ui.dashboard.skill;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.dashboard.GaugePanel;
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
	private Button skillsTitleButton;
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
			skillsTitleButton = new Button("SOFT SKILLS");
			skillsTitleButton.setStyleName("gwt-Button-grey");
			skillsTitleButton.setWidth("100%");
			this.add(skillsTitleButton);
			gaugePanel.add(skillsSoftHighGaugePanel);
			gaugePanel.add(skillsSoftLowGaugePanel);
			break;
		case HARD:
			skillsTitleButton = new Button("HARD SKILLS");
			skillsTitleButton.setStyleName("gwt-Button-grey");
			skillsTitleButton.setWidth("100%");
			this.add(skillsTitleButton);
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
