package com.nuuedscore.client.ui.dashboard.scores;

import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Scores Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class ScoresPanel extends TitledPanel {
	
	private RefScore REF_SCORE;
	
	public ScoresPanel(RefScore refScore) {
		super(refScore.value() + " SCORES");
		this.REF_SCORE = refScore;
		
		this.titleLabel.setStyleName("subTitledPanelLabel");
		this.setSpacing(10);
		
		init();
	}
	
	private void init() {
		switch (REF_SCORE) {
		case HIGH:
			this.setStyleName("highTitledPanel");
			break;
		case LOW:
			this.setStyleName("lowTitledPanel");			
			break;
		default:
			break;
		}
		
		this.add(new Label(this.titleLabel.getText() + " content"));
	}

}
