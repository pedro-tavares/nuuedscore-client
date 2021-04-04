package com.nuuedscore.client.ui.dashboard.teacher;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.ui.ResourceAnchor;

/**
 * Assessment Panel
 * 
 * @author PATavares
 * @since Apr 2021
 * 
 */
public class AssessmentPanel extends VerticalPanel {

	public AssessmentPanel() {
		
		this.setStyleName("simpleBorderPanel-grey");
		this.setWidth("100%");
		this.setSpacing(20);
		
		init();
	}
	
	private void init() {
		Button assessmentsHeaderButton = new Button("ASSESSMENTS");
		assessmentsHeaderButton.setStyleName("gwt-Button-green");
		//assessmentsHeaderButton.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForItem(""));
		assessmentsHeaderButton.getElement().getStyle().setProperty("width", "100%");
		assessmentsHeaderButton.addClickHandler(event -> {
		});
		this.add(assessmentsHeaderButton);
		
/*
SBAC: http://SBAC
Test Gorilla: https://www.testgorilla.com
IXL Diagnostic: https://www.ixl.com/standards/california/math/high-school
MAP Growth: https://teach.mapnwea.org/impl/maphelp/Content/Testing/PracticeTest.htm
STAR Testing: http://starsamplequestions.org/starRTQ/search.jsp
Lumos Learning: https://www.lumoslearning.com/llwp/resources/free-standardized-test-practice.html
*/

		ResourceAnchor assessmentAnchor1 = new ResourceAnchor("Test Gorilla" , "https://www.testgorilla.com");
		ResourceAnchor assessmentAnchor2 = new ResourceAnchor("IXL Diagnostic" , "https://www.ixl.com/standards/california/math/high-school");
		ResourceAnchor assessmentAnchor3 = new ResourceAnchor("MAP Growth" , "https://teach.mapnwea.org/impl/maphelp/Content/Testing/PracticeTest.htm");
		ResourceAnchor assessmentAnchor4 = new ResourceAnchor("STAR Testing" , "http://starsamplequestions.org/starRTQ/search.jsp");
		ResourceAnchor assessmentAnchor5 = new ResourceAnchor("Lumos Learning" , "https://www.lumoslearning.com/llwp/resources/free-standardized-test-practice.html");
		
		this.add(assessmentAnchor1);
		this.add(assessmentAnchor2);
		this.add(assessmentAnchor3);
		this.add(assessmentAnchor4);
		this.add(assessmentAnchor5);
		
	}
	
}