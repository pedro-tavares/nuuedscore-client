package com.nuuedscore.client.ui.dashboard.score;

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
			
			SubjectScorePanel ssp1Panel = new SubjectScorePanel(RefScore.HIGH, "MATHEMATICS", 1, 99);
			this.add(ssp1Panel);
			
			SubjectScorePanel ssp2Panel = new SubjectScorePanel(RefScore.HIGH, "READING", 1, 76);
			this.add(ssp2Panel);
			
			SubjectScorePanel ssp3Panel = new SubjectScorePanel(RefScore.HIGH, "SCIENCE", 1, 50);
			this.add(ssp3Panel);
			
			break;
		case LOW:
			this.setStyleName("lowTitledPanel");			
			break;
		default:
			break;
		}
		
	}

}
