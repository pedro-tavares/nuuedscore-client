package com.nuuedscore.client.ui.portal.student;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefLearningPersonality;

/**
 * Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class LearningPersonalityNavigationPanel extends VerticalPanel {

	public LearningPersonalityNavigationPanel() {
		
		this.setStyleName("learningPersonalityNavigationPanel");
		
		init();
	}
	
	protected void init() {
		Button headerButton = new Button("Learning Personality");
		headerButton.setStyleName("gwt-Button-grey");
		this.add(headerButton);
	
		// TODO default selected
		Label visualLabel = new Label(RefLearningPersonality.VISUAL.value());
		visualLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(visualLabel);
		
		Label auditoryLabel = new Label(RefLearningPersonality.AURAL.value());
		auditoryLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(auditoryLabel);

		Label verbalLabel = new Label(RefLearningPersonality.VERBAL.value());
		verbalLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(verbalLabel);

		Label socialLabel = new Label(RefLearningPersonality.SOCIAL.value());
		socialLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(socialLabel);

		Label logicalLabel = new Label(RefLearningPersonality.LOGICAL.value());
		logicalLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(logicalLabel);
		
		Label kinestheticLabel = new Label(RefLearningPersonality.KINESTHETIC.value());
		kinestheticLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(kinestheticLabel);

		Label solitaryLabel = new Label(RefLearningPersonality.SOLITARY.value());
		solitaryLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(solitaryLabel);
/*		
		Label egpLabel = new Label(RefLearningPersonality.EGP.value());
		egpLabel.setStyleName("learningPersonalityNavigationPanel-text");
		this.add(egpLabel);
*/	
	}
	
	
	
}
