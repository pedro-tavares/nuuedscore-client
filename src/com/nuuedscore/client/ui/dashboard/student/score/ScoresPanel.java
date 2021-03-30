package com.nuuedscore.client.ui.dashboard.student.score;

import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Scores Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class ScoresPanel extends TitledPanel {
	
	private RefAptitude REF_APTITUDE;
	private RefScore REF_SCORE;
	
	public ScoresPanel(RefAptitude refAptitude, RefScore refScore) {
		super(refScore.value() + " SCORES");
		this.REF_APTITUDE = refAptitude;
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

		SubjectScorePanel ssp1Panel = new SubjectScorePanel(REF_APTITUDE, REF_SCORE, REF_APTITUDE.value() + " - " + REF_SCORE.value() + " - SUBJECT 1", 1, (int)(Math.random()*100));
		this.add(ssp1Panel);
		
		SubjectScorePanel ssp2Panel = new SubjectScorePanel(REF_APTITUDE, REF_SCORE, REF_APTITUDE.value() + " - " + REF_SCORE.value() + " - SUBJECT 2", 1, (int)(Math.random()*100));
		this.add(ssp2Panel);
		
		SubjectScorePanel ssp3Panel = new SubjectScorePanel(REF_APTITUDE, REF_SCORE, REF_APTITUDE.value() + " - " + REF_SCORE.value() + " - SUBJECT 3", 1, (int)(Math.random()*100));
		this.add(ssp3Panel);
		
	}

}
