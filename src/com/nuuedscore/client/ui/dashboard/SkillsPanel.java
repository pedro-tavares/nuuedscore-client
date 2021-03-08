package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.VerticalPanel;
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
	private Image 
		gaugeSoftSkillsHighImage,
		gaugeSoftSkillsLowImage,
		gaugeHardSkillsHighImage,
		gaugeHardSkillsLowImage;
	
	public SkillsPanel(RefSkill refSkill) {
		this.REF_SKILL = refSkill;
		
		this.setStyleName("skillsPanel");
		this.setSpacing(20);
		
		init();
	}
	
	private void init() {		
		switch (REF_SKILL) {
		case SOFT:
			skillsButton = new Button("SOFT SKILLS");
			this.add(skillsButton);
			gaugeSoftSkillsHighImage = new Image("images/graphx/gauges/Soft-Gauge1.svg");
			this.add(gaugeSoftSkillsHighImage);
			gaugeSoftSkillsLowImage = new Image("images/graphx/gauges/Soft-Gauge2.svg");
			this.add(gaugeSoftSkillsLowImage);
			break;
		case HARD:
			skillsButton = new Button("HARD SKILLS");
			this.add(skillsButton);
			gaugeHardSkillsHighImage = new Image("images/graphx/gauges/Hard-Gauge1.svg");
			this.add(gaugeHardSkillsHighImage);
			gaugeHardSkillsLowImage = new Image("images/graphx/gauges/Hard-Gauge2.svg");
			this.add(gaugeHardSkillsLowImage);
			break;
		default:
			break;
		}
		
		skillsButton.setStyleName("gwt-Button-grey");
		skillsButton.setWidth("300px");

//		this.add(new HTML(" &nbsp"));
	}
}
