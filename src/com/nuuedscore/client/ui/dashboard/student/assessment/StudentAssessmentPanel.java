package com.nuuedscore.client.ui.dashboard.student.assessment;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.client.flow.IStudentAssess;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.Person;
import com.nuuedscore.shared.dto.act.ACTToken;

/**
 * STUDENT ASSESSMENT Panel
 * 
 * @author PATavares
 * @since May 2021
 * 
 */
public class StudentAssessmentPanel extends TitledPanel implements IStudentAssess {

	private Button assessmentButton;
	private VerticalPanel innerPanel = new VerticalPanel();
	private HTML serverResponseLabel;
	
	public StudentAssessmentPanel(Button assessmentButton) {
		super(NuuEdScore.GET_PERSON().getFirstName() +  "'s Assessment");

		this.assessmentButton = assessmentButton;
		
		this.setSpacing(20);
		this.init();
	}

	private void init() {
		this.add(innerPanel);
		
		serverResponseLabel = new HTML();
		serverResponseLabel.setStyleName("infoLabel");		
		innerPanel.add(serverResponseLabel);
		
		GWT.log("Initialising Student Assessment...");
		callACTAuthenticationService();
		
		/*
		LiveResourcePanel assessmentPanel = new LiveResourcePanel("https://www.act.org");		
		innerPanel.add(assessmentPanel);
		this.add(innerPanel);
		*/
	}

	@Override
	public void page() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void launch() {
		// TODO Auto-generated method stub
		
	}
	
	private void callACTAuthenticationService() {
		GWT.log("callACTAuthenticationService:\n" + DATA.ACT_AUTH_ID);

		assessmentButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		ServiceFactory.ACT_RESOURCE_SERVICE.oauthToken(DATA.ACT_AUTH_ID, new MethodCallback<ACTToken>() {			
			@Override
			public void onSuccess(Method method, ACTToken response) {
				GWT.log("ACT_RESOURCE_SERVICE.oauthToken.onSuccess:" + response);

				assessmentButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				serverResponseLabel.removeStyleName("errorLabel");
				serverResponseLabel.setText("ACT Authentication Successful!");
				
				doAssessment();
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				assessmentButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				String response = method.getResponse().getText();		
				
				GWT.log("ACT_RESOURCE_SERVICE.oauthToken.onFailure:" + response);
				
				serverResponseLabel.setStyleName("errorLabel");					
				serverResponseLabel.setText(response);				
			}
		});
	}
	
	private void doAssessment() {
		GWT.log("doAssessment");		
	}
	
}