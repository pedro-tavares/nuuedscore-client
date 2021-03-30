package com.nuuedscore.client.ui.dashboard.student.score;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Subject Score Bar Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SubjectScoreBarPanel extends HorizontalPanel {
	
	private RefAptitude REF_APTITUDE;
	private RefScore REF_SCORE;
	private int score;
	private Label scoreLabel;
	
	public SubjectScoreBarPanel(RefAptitude refAptitude, RefScore refScore, int score) {
		this.REF_APTITUDE = refAptitude;
		this.REF_SCORE = refScore;
		this.score = score;
		
		//this.setStyleName("subjectScoreBarPanel");
		this.setWidth("100%");
		//this.setSpacing(0);
		
		init();
	}
	
	private void init() {

		scoreLabel = new Label(Integer.toString(score) + "");
		scoreLabel.setWidth(score + "%");
		
		switch (REF_SCORE) {
		case HIGH:
			scoreLabel.setStyleName("subjectScoreBarPanel-score-high");
			break;
		case LOW:
			scoreLabel.setStyleName("subjectScoreBarPanel-score-low");
			break;
		default:
			break;
		}

		this.add(scoreLabel);
	}
	
}
