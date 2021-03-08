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
		gaugePanel = new VerticalPanel(),
		skillsLegendPanel;
	private Image 
		gaugeSoftSkillsHighImage,
		gaugeSoftSkillsLowImage,
		gaugeHardSkillsHighImage,
		gaugeHardSkillsLowImage;
	private Label 
		softSkillsHighLabel,
		softSkillsLowLabel,
		hardSkillsHighLabel,
		hardSkillsLowLabel;
	
	public SkillsPanel(RefSkill refSkill) {
		this.REF_SKILL = refSkill;
		
		this.setStyleName("skillsPanel");
		this.setSpacing(10);
		
		init();
	}
	
	private void init() {		
		switch (REF_SKILL) {
		case SOFT:
			skillsButton = new Button("SOFT SKILLS");
			this.add(skillsButton);
			// HIGH
			gaugeSoftSkillsHighImage = new Image("images/graphx/gauges/Soft-Gauge1.svg");
			gaugeSoftSkillsHighImage.setStyleName("gaugeImage");
			gaugePanel.add(gaugeSoftSkillsHighImage);
			softSkillsHighLabel = new Label(RefScore.HIGH.value());
			softSkillsHighLabel.setStyleName("skillsLabel");
			softSkillsHighLabel.setHorizontalAlignment(ALIGN_CENTER);
			gaugePanel.add(softSkillsHighLabel);
			// LOW
			gaugeSoftSkillsLowImage = new Image("images/graphx/gauges/Soft-Gauge2.svg");
			gaugeSoftSkillsLowImage.setStyleName("gaugeImage");
			gaugePanel.add(gaugeSoftSkillsLowImage);
			softSkillsLowLabel = new Label(RefScore.LOW.value());
			softSkillsLowLabel.setStyleName("skillsLabel");
			softSkillsLowLabel.setHorizontalAlignment(ALIGN_CENTER);
			gaugePanel.add(softSkillsLowLabel);
			// SKILLS LEGEND
			skillsLegendPanel = new SkillsLegendPanel(this.REF_SKILL);
			break;
		case HARD:
			skillsButton = new Button("HARD SKILLS");
			this.add(skillsButton);
			// HIGH
			gaugeHardSkillsHighImage = new Image("images/graphx/gauges/Hard-Gauge1.svg");
			gaugeHardSkillsHighImage.setStyleName("gaugeImage");
			gaugePanel.add(gaugeHardSkillsHighImage);
			hardSkillsHighLabel = new Label(RefScore.HIGH.value());
			hardSkillsHighLabel.setStyleName("skillsLabel");
			hardSkillsHighLabel.setHorizontalAlignment(ALIGN_CENTER);
			gaugePanel.add(hardSkillsHighLabel);
			// LOW
			gaugeHardSkillsLowImage = new Image("images/graphx/gauges/Hard-Gauge2.svg");
			gaugeHardSkillsLowImage.setStyleName("gaugeImage");
			gaugePanel.add(gaugeHardSkillsLowImage);
			hardSkillsLowLabel = new Label(RefScore.HIGH.value());
			hardSkillsLowLabel.setStyleName("skillsLabel");
			hardSkillsLowLabel.setHorizontalAlignment(ALIGN_CENTER);
			gaugePanel.add(hardSkillsLowLabel);			
			// SKILLS LEGEND
			skillsLegendPanel = new SkillsLegendPanel(this.REF_SKILL);
			break;
		default:
			break;
		}
		
		skillsButton.setStyleName("gwt-Button-grey");
		skillsButton.setWidth("100%");

		this.add(innerPanel);
		innerPanel.add(gaugePanel);
		innerPanel.add(skillsLegendPanel);
	}
}
