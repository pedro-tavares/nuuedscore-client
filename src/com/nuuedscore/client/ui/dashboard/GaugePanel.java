package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.LayoutPanel;
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
	private AbsolutePanel innerPanel;
	private Image 
		gaugeImage,
		needleImage;
	private Label skillsLabel;
	
	public GaugePanel(RefSkill refSkill, RefScore refScore) {
		this.REF_SKILL = refSkill;
		this.REF_SCORE = refScore;
		
		//this.setStyleName("");
		//this.setSpacing(10);
		
		init();
	}
	
	private void init() {
		gaugeImage = new Image("images/graphx/gauges/" + REF_SKILL.value() + " " + REF_SCORE.value() + " Gauge.png");
		gaugeImage.setStyleName("gaugeImage");
		
		needleImage = new Image("images/graphx/gauges/" + "Needle Indicator.svg");
		needleImage.setStyleName("needleImage");
		
		skillsLabel = new Label(/*REF_SKILL.value() + " " +*/ REF_SCORE.value());
		skillsLabel.setStyleName("skillsLabel");

		innerPanel = new AbsolutePanel();

		this.add(innerPanel);
		this.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		
		innerPanel.setSize("300px", "300px");
		
		innerPanel.add(gaugeImage);
		
		needleImage.setSize("120px", "120px");
		innerPanel.add(needleImage, 100, 110);
		
		this.add(innerPanel);
		this.add(skillsLabel);
		
	}
	
}
