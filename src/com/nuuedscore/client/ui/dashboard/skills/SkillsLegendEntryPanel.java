package com.nuuedscore.client.ui.dashboard.skills;

import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;

/**
 * Skills Legend Entry Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SkillsLegendEntryPanel extends HorizontalPanel {

	private Image skillImage; 
	private Label skillLabel;
	
	public SkillsLegendEntryPanel(String image, String skill) {
		this.skillImage = new Image(image);
		this.skillLabel = new Label(skill);

		this.setStyleName("skillsLegendEntryPanel");
		this.setSpacing(2);
		
		init();
	}
	
	private void init() {
		this.skillImage.setPixelSize(25, 25);
		
		this.add(this.skillImage);
		this.add(this.skillLabel);
		this.setCellHorizontalAlignment(skillLabel, HasHorizontalAlignment.ALIGN_LEFT);
		this.setCellVerticalAlignment(skillLabel, HasVerticalAlignment.ALIGN_MIDDLE);
	}
}
