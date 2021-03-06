package com.nuuedscore.client.ui.person;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.Image;
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
public class LoginRegisterPanel extends VerticalPanel {

	private boolean register;
	private Image imageLogo = new Image("images/Logo_New_WEBSITE.svg");
	private VerticalPanel loginInnerPanel;
	private Button loginButton, registerButton, dialogCloseButton;
	private Label viewTitleLabel, firstNameLabel, lastNameLabel, emailLabel, passwordLabel, confirmPasswordLabel,
			textToServerLabel, errorLabel;
	private TextBox firstNameValue, lastNameValue, emailValue;
	private PasswordTextBox passwordValue, confirmPasswordValue;
	private HTML serverResponseLabel;
	private DialogBox dialogBox;

	public LoginRegisterPanel() {
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

		firstNameLabel = new Label("First Name");
		firstNameValue = new TextBox();

		lastNameLabel = new Label("Last Name");
		lastNameValue = new TextBox();

		emailLabel = new Label("Email Address");
		emailValue = new TextBox();

		passwordLabel = new Label("Password");
		passwordValue = new PasswordTextBox();
		passwordValue.addFocusHandler(new FocusHandler() {
			@Override
			public void onFocus(FocusEvent event) {
				errorLabel.setText("");
			}
		});

		confirmPasswordLabel = new Label("Confirm Password:");
		confirmPasswordValue = new PasswordTextBox();
		confirmPasswordValue.addFocusHandler(new FocusHandler() {
			@Override
			public void onFocus(FocusEvent event) {
				errorLabel.setText("");
			}
		});

		emailValue.setFocus(true);
		emailValue.selectAll();

		errorLabel = new Label();
		errorLabel.setStyleName("errorLbl");

		createDialogBox();

		loginButton = new Button("LOGIN");
		loginButton.addClickHandler(event -> {
			if (validate()) {
				textToServerLabel.setText(emailValue.getText());
				callLoginService();
			}
		});

		registerButton = new Button("Register");
		registerButton.addClickHandler(event -> {
			if (validate()) {
				textToServerLabel.setText(emailValue.getText());
				callRegisterService();
			}
		});

		this.add(imageLogo);
		imageLogo.setPixelSize(400, 75);

		this.add(viewTitleLabel);

		this.add(loginInnerPanel);
		loginInnerPanel.add(firstNameLabel);
		loginInnerPanel.setCellHorizontalAlignment(firstNameLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(firstNameValue);
		loginInnerPanel.add(lastNameLabel);
		loginInnerPanel.setCellHorizontalAlignment(lastNameLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(lastNameValue);
		loginInnerPanel.add(emailLabel);
		loginInnerPanel.setCellHorizontalAlignment(emailLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(emailValue);
		loginInnerPanel.add(passwordLabel);
		loginInnerPanel.setCellHorizontalAlignment(passwordLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(passwordValue);
		loginInnerPanel.add(confirmPasswordLabel);
		loginInnerPanel.setCellHorizontalAlignment(confirmPasswordLabel, HasHorizontalAlignment.ALIGN_LEFT);
		loginInnerPanel.add(confirmPasswordValue);

		loginInnerPanel.add(errorLabel);

		this.add(loginButton);
		this.add(registerButton);
	}

	public boolean validate() {
		if (register) {
			if (firstNameValue.getText().equals("")) {
				errorLabel.setText("First Name cannot be empty!");
				return false;
			}
			if (lastNameValue.getText().equals("")) {
				errorLabel.setText("Last Name cannot be empty!");
				return false;
			}
		}
		if (emailValue.getText().equals("")) {
			errorLabel.setText("Email cannot be empty!");
			return false;
		}
		if (passwordValue.getText().equals("")) {
			errorLabel.setText("Password cannot be empty!");
			return false;
		}
		if (register) {
			if (confirmPasswordValue.getText().equals("")) {
				errorLabel.setText("Confirm Password cannot be empty!");
				return false;
			}
			if (!passwordValue.getText().equals(confirmPasswordValue.getText())) {
				errorLabel.setText("Passwords must match!");
				return false;
			}
		}
		return true;
	}

	public void clear() {
	}

	public Person getPerson() {
		Person person = new Person();
		person.setFirstName(this.firstNameValue.getText());
		person.setLastName(this.lastNameValue.getText());
		person.setEmail(emailValue.getText());
		person.setPassword(passwordValue.getText());
		return person;
	}

	public void setRegister(boolean register) {
		this.register = register;
		viewTitleLabel.setText(register ? "REGISTER" : "LOGIN");

		firstNameLabel.setVisible(register);
		lastNameLabel.setVisible(register);
		confirmPasswordLabel.setVisible(register);
		firstNameValue.setVisible(register);
		lastNameValue.setVisible(register);
		confirmPasswordValue.setVisible(register);

		loginButton.setVisible(!register);
		registerButton.setVisible(register);
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
		GWT.log("callLoginService");

		loginButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		Person person = this.getPerson();

		ServiceFactory.PERSON_SERVICE.login(person, new MethodCallback<String>() {

			@Override
			public void onSuccess(Method method, String response) {

				// Window.alert(response);
				GWT.log(response);

				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				serverResponseLabel.removeStyleName("errorLbl");

				// showDialogBox("Login - SUCCESS", "");
				// Window.alert("Login SUCCESS");

				NuuEdScore.letsGo(response);
			}

			// TODO: Check why its FAILURE, do LOGIN_SUCCESS for now
			@Override
			public void onFailure(Method method, Throwable exception) {
				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("Login FAILURE:" + method.getResponse().getText());
				// Window.alert(method.getResponse().getText());
				// Window.alert("Login FAILURE");

				// NuuEdScore.letsGo(method.getResponse().getText());

				serverResponseLabel.addStyleName("errorLbl");
				// showDialogBox("Login - FAILURE", method.getResponse().getText());

				JSONValue responseValue = JSONParser.parse(method.getResponse().getText());
				JSONObject responseObj = responseValue.isObject();

				errorLabel.setText(responseObj.get("message").isString().stringValue());

				// NuuEdScore.letsGo(method.getResponse().getText());
			}
		});
	}

	private void callRegisterService() {
		GWT.log("callRegisterinService");

		loginButton.getElement().getStyle().setCursor(Cursor.WAIT);
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		Person person = this.getPerson();

		ServiceFactory.PERSON_SERVICE.register(person, new MethodCallback<Person>() {

			@Override
			public void onSuccess(Method method, Person response) {

				// Window.alert(response);
				GWT.log(response.toString());

				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				serverResponseLabel.removeStyleName("errorLbl");

				Window.alert("Login SUCCESS");

				// NuuEdScore.letsGo(response);
			}

			// TODO: Check why its FAILURE, do LOGIN_SUCCESS for now
			@Override
			public void onFailure(Method method, Throwable exception) {
				loginButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("Login FAILURE:" + method.getResponse().getText());
				// Window.alert(method.getResponse().getText());
				// Window.alert("Login FAILURE");

				// NuuEdScore.letsGo(method.getResponse().getText());

				serverResponseLabel.addStyleName("errorLbl");
				// showDialogBox("Login - FAILURE", method.getResponse().getText());

				JSONValue responseValue = JSONParser.parse(method.getResponse().getText());
				JSONObject responseObj = responseValue.isObject();

				errorLabel.setText(responseObj.get("message").isString().stringValue());

				// NuuEdScore.letsGo(method.getResponse().getText());
			}
		});
	}

	/*
	 * private void callLoadService() {
	 * loadAllButton.getElement().getStyle().setCursor(Cursor.WAIT);
	 * RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);
	 * 
	 * ServiceFactory.USER_SERVICE.getAllUsers(new MethodCallback<List<User>>() {
	 * 
	 * @Override public void onSuccess(Method method, List<User> response) {
	 * loadAllButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
	 * RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
	 * 
	 * serverResponseLabel.removeStyleName("errorLbl"); String names =
	 * response.stream() .map(e -> "<li>" + "User name:" + e.getName() +
	 * ", User email:" + e.getEmail() + ", ID: " + e.getId() + "</li>")
	 * .collect(Collectors.joining("")); showDialogBox("REST endpoint call", "<ul>"
	 * + names + "<ul>"); }
	 * 
	 * @Override public void onFailure(Method method, Throwable exception) {
	 * loadAllButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
	 * RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
	 * 
	 * serverResponseLabel.addStyleName("errorLbl");
	 * showDialogBox("REST endpoint call - Failure", IUIConstants.SERVER_ERROR); }
	 * }); }
	 */
}
