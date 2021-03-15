package com.nuuedscore.client.ui.dashboard.score;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Subject Score Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SubjectScorePanel extends VerticalPanel {
	
	private RefAptitude REF_APTITUDE;	
	private RefScore REF_SCORE;
	private String subject; 
	private int 
		level,
		score;
	private Label subjectLabel;
	private SubjectScoreBarPanel subjectScoreBarPanel;
	private Label levelLabel;
	
	public SubjectScorePanel(RefAptitude refAptitude, RefScore refScore, String subject, int level, int score) {
		this.REF_APTITUDE = refAptitude;
		this.REF_SCORE = refScore;
		this.subject = subject;
		this.score = score;
		this.level = level;
		
		this.setSpacing(5);
		this.setStyleName("subjectScorePanel");
		this.setWidth("100%");
		
		init();
	}
	
	private void init() {
		this.subjectLabel = new Label(subject);
		this.subjectLabel.setStyleName("subjectLabel");
		
		this.subjectScoreBarPanel = new SubjectScoreBarPanel(this.REF_APTITUDE, this.REF_SCORE, this.score); 
		this.subjectScoreBarPanel.setWidth("100%");
		
		this.levelLabel = new Label("Level " + this.level + "Score: " + score);
		this.levelLabel.setStyleName("levelLabel");
		
		this.add(subjectLabel);
		this.add(subjectScoreBarPanel);
		this.add(levelLabel);
	}

}
