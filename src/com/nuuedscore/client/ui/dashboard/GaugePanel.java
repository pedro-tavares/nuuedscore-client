package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefSkill;

/**
 * Gauge Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class GaugePanel extends VerticalPanel {
	
	private RefSkill REF_SKILL;
	private RefScore REF_SCORE;
	private Image skillsGauge;
	private Label skillsLabel;
	
	public GaugePanel(RefSkill refSkill, RefScore refScore) {
		this.REF_SKILL = refSkill;
		this.REF_SCORE = refScore;
		
		//this.setStyleName("");
		this.setSpacing(10);
		
		init();
	}
	
	private void init() {
		skillsGauge = new Image("images/graphx/gauges/" + REF_SKILL.value() + " " + REF_SCORE.value() + " Gauge.svg");
		skillsGauge.setStyleName("gaugeImage");
		
		skillsLabel = new Label(REF_SKILL.value() + " " + REF_SCORE.value());
		skillsLabel.setStyleName("skillsLabel");
		
		this.add(skillsGauge);
		this.add(skillsLabel);
	}
	
}
