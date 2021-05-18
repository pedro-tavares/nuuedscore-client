package com.nuuedscore.client.ui.dashboard.student.assessment;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.IStudentAssess;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.resource.LiveResourcePanel;
import com.nuuedscore.shared.dto.Person;

/**
 * STUDENT ASSESSMENT Panel
 * 
 * @author PATavares
 * @since May 2021
 * 
 */
public class StudentAssessmentPanel extends TitledPanel implements IStudentAssess {

	private VerticalPanel innerPanel = new VerticalPanel();
	
	public StudentAssessmentPanel() {
		super(NuuEdScore.GET_PERSON().getFirstName() +  "'s Assessment");

		this.setSpacing(20);
		this.init();
	}

	private void init() {
		
		Window.alert("FOK!");
		
		LiveResourcePanel assessmentPanel = new LiveResourcePanel("https://www.act.org");		
		innerPanel.add(assessmentPanel);
		
		this.add(innerPanel);
	}

	@Override
	public void page() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void launch() {
		// TODO Auto-generated method stub
		
	}
	
	private void callAuthenticateService(Person person) {
		GWT.log("callLoginService");

		loginButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		ServiceFactory.ACT_RESOURCE_SERVICE.login(person, new MethodCallback<String>() {
			
			@Override
			public void onSuccess(Method method, String response) {
				GWT.log("PERSON_SERVICE.loginS:" + response);

				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

//				serverResponseLabel.removeStyleName("errorLabel");
				serverResponseLabel.setText("Login Successful for:" + person.getEmail());
				
				NuuEdScore.GET().letsGo(/*person*/ARCHITECT_PERSON());
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("PERSON_SERVICE.loginF:" + method.getResponse().getText());
				String response = method.getResponse().getText();
								
				if (response.indexOf("ERROR:") == -1) {
					NuuEdScore.GET().letsGo(/*person*/ARCHITECT_PERSON());
				} else {
					serverResponseLabel.setStyleName("errorLabel");					
					serverResponseLabel.setText(response);				
				}
			}
		});
	}
	
}