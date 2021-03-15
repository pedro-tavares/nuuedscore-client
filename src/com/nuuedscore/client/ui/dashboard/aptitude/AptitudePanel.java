package com.nuuedscore.client.ui.dashboard.aptitude;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.dashboard.score.ScoresPanel;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Aptitude Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class AptitudePanel extends VerticalPanel {

	private RefScore REF_SCORE;
	private Button aptitudeButton;
	private ScoresPanel highScoresPanel;
	private ScoresPanel lowScoresPanel;
	
	public AptitudePanel(RefScore refScore) {
		this.REF_SCORE = refScore;
		
		this.setSpacing(20);

		init();
	}
	
	private void init() {
		switch (REF_SCORE) {
		case LOW:
			this.setStyleName("lowAptitudePanel");
			aptitudeButton = new Button("LOW APTITUDE");
			break;
		case HIGH:
			this.setStyleName("highAptitudePanel");
			aptitudeButton = new Button("HIGH APTITUDE");
			aptitudeButton.setStyleName("gwt-Button-green");
			break;
		default:
			break;			
		}
		this.add(aptitudeButton);
		
		highScoresPanel = new ScoresPanel(RefScore.HIGH);
		this.add(highScoresPanel);
		
		lowScoresPanel = new ScoresPanel(RefScore.LOW);
		this.add(lowScoresPanel);
		
	}
}
