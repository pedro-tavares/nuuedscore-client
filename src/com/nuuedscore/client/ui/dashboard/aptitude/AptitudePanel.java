package com.nuuedscore.client.ui.dashboard.aptitude;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.IStudentFlow;
import com.nuuedscore.client.ui.dashboard.score.ScoresPanel;
import com.nuuedscore.client.ui.portal.PortalPanel;
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
	private Button aptitudeHeaderButton;
	private ScoresPanel lowScoresPanel;
	private ScoresPanel highScoresPanel;
	private List<String> topics = new ArrayList<String>();
	private PortalPanel portalPanel;
	
	public AptitudePanel(RefAptitude refAptitude) {
		this.REF_APTITUDE = refAptitude;
		
		this.setSpacing(20);

		init();
	}
	
	private void init() {
		switch (REF_APTITUDE) {
		case LOW:
			this.setStyleName("lowAptitudePanel");
			aptitudeHeaderButton = new Button("LOW APTITUDE");
			aptitudeHeaderButton.setStyleName("gwt-Button-blue-100");
			break;
		case HIGH:
			this.setStyleName("highAptitudePanel");
			aptitudeHeaderButton = new Button("HIGH APTITUDE");
			aptitudeHeaderButton.setStyleName("gwt-Button-green-100");
			break;
		default:
			break;			
		}
		this.add(aptitudeHeaderButton);

		lowScoresPanel = new ScoresPanel(this.REF_APTITUDE, RefScore.LOW);
		this.add(lowScoresPanel);
		
		highScoresPanel = new ScoresPanel(this.REF_APTITUDE, RefScore.HIGH);
		this.add(highScoresPanel);		
	}
		
	@Override
	public void flow(List<StudentResource> studentResources) {
		GWT.log("APTITUDE:" + this.REF_APTITUDE + ": Flow StudentResources:\n" + studentResources.toString());
		
		for (StudentResource studentResource: studentResources) {
			String topic = studentResource.getTopic();
			if (topics.indexOf(topic) == -1) {
				topics.add(topic);
				Button topicButton = new Button(topic);
				topicButton.addClickHandler(event -> {					
					//Student Resources for Topic
					List<StudentResource> studentResourcesForTopic = getStudentResourcesForTopic(studentResources, topic);
					if (portalPanel == null) {
						portalPanel = new PortalPanel(this.REF_APTITUDE, studentResourcesForTopic);
					}
					NuuEdScore.GET().showView(portalPanel);
				});
				
				if (RefScore.HIGH.equals(studentResource.getScore())) {
					topicButton.setStyleName("gwt-Button-green-100");
				}
				topicButton.setStyleName(RefScore.LOW.equals(studentResource.getScore()) ? "gwt-Button-blue-100" : "gwt-Button-green-100");
				this.add(topicButton);
			}		
		}
	}
	
	public List<StudentResource> getStudentResourcesForTopic(List<StudentResource> resources, String topic) {
		List<StudentResource> resourcesForTopic = new ArrayList<StudentResource>();
		for (StudentResource studentResource: resources) {
			if (studentResource.getTopic().equals(topic)) {
				resourcesForTopic.add(studentResource);
			}
		}
		return resourcesForTopic;
	}
}
