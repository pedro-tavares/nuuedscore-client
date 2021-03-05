package com.nuuedscore.client.ui.person;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.dialogs.CreateAccountDialog;
import com.nuuedscore.shared.dto.Person;

/**
 * Login Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class LoginPanel extends VerticalPanel {
	
	private VerticalPanel
		loginInnerPanel;
	private Button 
		loginButton, 
		createAccountButton,
		dialogCloseButton;
	private Label
		viewTitleLabel,
		//nameLbl, 
		emailLabel, 
		passwordLabel, 
		//reenterPasswordLbl, 
		textToServerLabel, 
		errorLabel;
	private TextBox 
		//nameField, 
		emailValue;
	private PasswordTextBox 
		passwordValue/*, 
		reenterPasswordField*/
		;
	private HTML serverResponseLabel;
	private DialogBox dialogBox;

	public LoginPanel() {
		this.setStyleName("centerPanels");
		this.setSpacing(5);
		this.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		this.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		
		loginInnerPanel = new VerticalPanel();
		loginInnerPanel.setStyleName("loginInnerPanel");
		loginInnerPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
		loginInnerPanel.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		loginInnerPanel.setSpacing(10);
		
		viewTitleLabel = new Label("LOGIN");
		viewTitleLabel.setStyleName("viewTitleLabel");
		
		//nameLbl = new Label("Enter Name:");
		//nameField = new TextBox();

		emailLabel = new Label("Email Address");
		emailValue = new TextBox();

		passwordLabel = new Label("Password");
		passwordValue = new PasswordTextBox();
		passwordValue.addFocusHandler(
			new FocusHandler() {
				@Override
			    public void onFocus(FocusEvent event) {
					errorLabel.setText("");
			    }
			});
/*
		reenterPasswordLbl = new Label("Renter Password:");
		reenterPasswordField = new PasswordTextBox();
		reenterPasswordField.addFocusHandler(
			new FocusHandler() {
				@Override
				public void onFocus(FocusEvent event) {
					errorLbl.setText("");
				}
			});
*/
		emailValue.setFocus(true);
		emailValue.selectAll();
		
		errorLabel = new Label();
		errorLabel.setStyleName("errorLbl");

		createDialogBox();

		loginButton = new Button("LOGIN");
		createAccountButton = new Button("Create Account");
		
		loginButton.addClickHandler(event -> {
			if (emailValue.getText().equals("")) {
				errorLabel.setText("Email cannot be empty!");
			}
			else if (passwordValue.getText().equals("")) {
				errorLabel.setText("Password cannot be empty!");
			}
/*			
			else if (!passwordField.getText().equals(reenterPasswordField.getText())) {
				errorLbl.setText("Passwords must match!");
			} 
*/			
			else {
				textToServerLabel.setText(emailValue.getText());
				//callLoginService();
				
				NuuEdScore.letsGo(emailValue.getText());				
			}
		});
		
		createAccountButton.addClickHandler(event -> {
			CreateAccountDialog createAccountDialog = new CreateAccountDialog(
				emailValue.getText(),
				passwordValue.getText()
			);
			createAccountDialog.show();
		});

		this.add(viewTitleLabel);
		
		this.add(loginInnerPanel);
		loginInnerPanel.add(emailLabel);
		loginInnerPanel.setCellHorizontalAlignment(emailLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(emailValue);
		loginInnerPanel.add(passwordLabel);
		loginInnerPanel.setCellHorizontalAlignment(passwordLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(passwordValue);
//		innerPanel.add(reenterPasswordLbl);
//		innerPanel.add(reenterPasswordField);
		
		this.add(loginButton);
//		this.add(createAccountButton);
		this.add(errorLabel);
	}

	public void clear() {
//		reenterPasswordField.setText("");
	}
	
	private void createDialogBox() {
		dialogBox = new DialogBox();
		dialogBox.setText("Remote Procedure Call");
		dialogBox.setAnimationEnabled(true);

		dialogCloseButton = new Button("Close");
		dialogCloseButton.getElement().setId("closeButton");
		textToServerLabel = new Label();
		serverResponseLabel = new HTML();

		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.addStyleName("dialogVPanel");

		dialogVPanel.add(new HTML("<b>Login via email:</b>"));
		dialogVPanel.add(textToServerLabel);

		dialogVPanel.add(new HTML("<br><b>Server replies:</b>"));
		dialogVPanel.add(serverResponseLabel);

		dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
		dialogVPanel.add(dialogCloseButton);
		dialogBox.setWidget(dialogVPanel);

		dialogCloseButton.addClickHandler(event -> {
			dialogBox.hide();
			loginButton.setEnabled(true);
			loginButton.setFocus(true);
		});
	}
	
	private void showDialogBox(String title, String htmlText) {
		dialogBox.setText(title);
		serverResponseLabel.setHTML(htmlText);
		dialogBox.center();
		dialogCloseButton.setFocus(true);
	}

	public void autoLogin() {
		emailValue.setText("pedro.javalabs@gmail.com");
		passwordValue.setText("password"); 
		loginButton.click();
	}
	
	private void callLoginService() {
		//Window.alert("callLoginService");
		
		loginButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);
		
		Person user = new Person();
		user.setName("");
		user.setEmail(emailValue.getText());
		user.setPassword(passwordValue.getText());
		
		ServiceFactory.PERSON_SERVICE.login(user, new MethodCallback<String>() {

			@Override
			public void onSuccess(Method method, String response) {
				
				//Window.alert(response);
				
				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
				
				serverResponseLabel.removeStyleName("errorLbl");
				
				//showDialogBox("Login  - SUCCESS", "");
				//Window.alert("Login SUCCESS");
				
				NuuEdScore.letsGo(response);
			}

			//TODO: Check why its FAILURE, do LOGIN_SUCCESS for now
			@Override
			public void onFailure(Method method, Throwable exception) {
				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
				
				//Window.alert(method.getResponse().getText());
				//Window.alert("Login FAILURE");

				NuuEdScore.letsGo(method.getResponse().getText());
				
				/*
				serverResponseLabel.addStyleName("errorLbl");
				//showDialogBox("Login  - FAILURE", method.getResponse().getText());
				
				JSONValue responseValue = JSONParser.parse(method.getResponse().getText());
		        JSONObject responseObj = responseValue.isObject();
		        
		        errorLbl.setText(responseObj.get("message").isString().stringValue());
		        */
			}
		});
	}

/*	
	private void callLoadService() {
		loadAllButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);
		
		ServiceFactory.USER_SERVICE.getAllUsers(new MethodCallback<List<User>>() {

			@Override
			public void onSuccess(Method method, List<User> response) {
				loadAllButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
				
				serverResponseLabel.removeStyleName("errorLbl");
				String names = response.stream()
					.map(e -> "<li>" + 
						"User name:" + e.getName() +
						", User email:" + e.getEmail() +
						", ID: " + e.getId() + 
						"</li>")
					.collect(Collectors.joining(""));
				showDialogBox("REST endpoint call", "<ul>" + names + "<ul>");
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				loadAllButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
				
				serverResponseLabel.addStyleName("errorLbl");
				showDialogBox("REST endpoint call - Failure", IUIConstants.SERVER_ERROR);
			}
		});
	}
*/	
}
