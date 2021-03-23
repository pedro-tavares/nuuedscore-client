package com.nuuedscore.client.ui.dashboard.aptitude;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.flow.IStudentFlow;
import com.nuuedscore.client.ui.dashboard.score.ScoresPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Aptitude Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class AptitudePanel extends VerticalPanel implements IStudentFlow {

	private RefAptitude REF_APTITUDE;
	private Button aptitudeButton;
	private ScoresPanel lowScoresPanel;
	private ScoresPanel highScoresPanel;
	
	public AptitudePanel(RefAptitude refAptitude) {
		this.REF_APTITUDE = refAptitude;
		
		this.setSpacing(20);

		init();
	}
	
	private void init() {
		switch (REF_APTITUDE) {
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

		lowScoresPanel = new ScoresPanel(this.REF_APTITUDE, RefScore.LOW);
		this.add(lowScoresPanel);
		
		highScoresPanel = new ScoresPanel(this.REF_APTITUDE, RefScore.HIGH);
		this.add(highScoresPanel);		
	}
	
	List<String> topics = new ArrayList<String>();
	
	@Override
	public void flow(List<StudentResource> studentResources) {
		Window.alert("I AM Aptitude:" + this.REF_APTITUDE + ": Flow listenToStudentResources");
		
//		Button topicButton = new Button(studentResource.getTopic());

	}
}
