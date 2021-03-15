package com.nuuedscore.client.ui.dashboard.score;

import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Subject Score Bar Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SubjectScoreBarPanel extends HorizontalPanel {
	
	private RefScore REF_SCORE;
	private int score;
	private Label 
		scoreLabel,
		remainderLabel;
	
	public SubjectScoreBarPanel(RefScore refScore, int score) {
		this.REF_SCORE = refScore;
		this.score = score;
		
		this.setStyleName("subjectScoreBarPanel");
		this.setWidth("100%");
		//this.setSpacing(0);
		
		init();
	}
	
	private void init() {

		scoreLabel = new Label(Integer.toString(score) + "");
		scoreLabel.setStyleName("subjectScoreBarPanel-score");
		scoreLabel.setWidth(score + "%");

		/*
		remainderLabel = new Label("100");
		remainderLabel.setStyleName("subjectScoreBarPanel-remainder");
		remainderLabel.setWidth(100-score + "%");
		*/
		
		this.add(scoreLabel);
		//this.add(remainderLabel);
	}
	
}
