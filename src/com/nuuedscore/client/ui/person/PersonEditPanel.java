package com.nuuedscore.client.ui.person;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.ModelType;
import com.nuuedscore.client.ui.NameValuePanel;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.Person;

/**
 * Person Edit Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class PersonEditPanel extends TitledPanel {

	private boolean isNew;
	
	private Person person;
	private PersonPanel parent;
	
	private NameValuePanel panelFirstName;
	private NameValuePanel panelLastName;
	private NameValuePanel panelEmail;
	private NameValuePanel panelPassword;
	private NameValuePanel panelConfirmPassword;
	
	private Button saveButton = new Button("Save");
	private Label msgLabel = new Label("");
	
	public PersonEditPanel(PersonPanel parent, Person person) {
		super(person == null ? "New Person" : "Edit Person");

		this.parent = parent;
		this.person = person;
	
		this.setStyleName("subTitledPanel-blue");
		this.titleLabel.setStyleName("subTitledPanelLabel");
		this.setSpacing(10);
		
		init();
	}
	
	@SuppressWarnings("deprecation")
	private void init() {
		
		if (person == null) { // create blank
			isNew = true;
			person = new Person();
		}

		HorizontalPanel panelNameSection = new HorizontalPanel();
		panelNameSection.setSpacing(10);
		
		panelFirstName = new NameValuePanel("First Name", ModelType.STRING);
		((TextBox)panelFirstName.getWidgetValue()).setText(person.getFirstName());
		panelNameSection.add(panelFirstName);

		panelLastName = new NameValuePanel("Last Name", ModelType.STRING);
		((TextBox)panelLastName.getWidgetValue()).setText(person.getLastName());
		panelNameSection.add(panelLastName);
		
		this.add(panelNameSection);

		HorizontalPanel panelEmailSection = new HorizontalPanel();
		panelEmailSection.setSpacing(10);
		
		panelEmail = new NameValuePanel("Email", ModelType.STRING);
		((TextBox)panelEmail.getWidgetValue()).setText(person.getEmail());
		panelEmailSection.add(panelEmail);

		this.add(panelEmailSection);

		HorizontalPanel panelPasswordSection = new HorizontalPanel();
		panelPasswordSection.setSpacing(10);

		panelPassword = new NameValuePanel("Password", ModelType.PASSWORD);	
		((TextBox)panelPassword.getWidgetValue()).setText(person.getPassword());
		panelPasswordSection.add(panelPassword);

		panelConfirmPassword = new NameValuePanel("Confirm Password", ModelType.PASSWORD);
		((TextBox)panelConfirmPassword.getWidgetValue()).setText(person.getPassword());
		panelPasswordSection.add(panelConfirmPassword);
		
		this.add(panelPasswordSection);
		
		saveButton.addClickHandler(event -> {
			if (this.isNew && parent.personExists(((TextBox)panelEmail.getWidgetValue()).getText())) {
				this.msgLabel.setText("Person already exists!");
				return;
			}
			
			person.setFirstName(((TextBox)panelFirstName.getWidgetValue()).getText());
			person.setLastName(((TextBox)panelLastName.getWidgetValue()).getText());
			person.setEmail(((TextBox)panelEmail.getWidgetValue()).getText());
			person.setPassword(((TextBox)panelPassword.getWidgetValue()).getText());
						
			callPersonSaveService();
		});

		//saveButton.setEnabled(false);		
		this.add(saveButton);

		msgLabel.setStyleName("errorLbl");
		this.add(msgLabel);
	}
		
	private boolean validate() {
		if (((TextBox)panelFirstName.getWidgetValue()).getText().equals("")) {
			this.msgLabel.setText("First Name cannot be empty!");
			return false;
		}
		if (((TextBox)panelLastName.getWidgetValue()).getText().equals("")) {
			this.msgLabel.setText("Last Name cannot be empty!");
			return false;
		}
		if (((TextBox)panelEmail.getWidgetValue()).getText().equals("")) {
			this.msgLabel.setText("Email cannot be empty!");
			return false;
		}
		if (((TextBox)panelPassword.getWidgetValue()).getText().equals("")) {
			this.msgLabel.setText("Password cannot be empty!");
			return false;
		}		
		if (!((TextBox)panelPassword.getWidgetValue()).getText().equals(((TextBox)panelConfirmPassword.getWidgetValue()).getText())) {
			this.msgLabel.setText("Password and Confirm must match!");
			return false;			
		}
		
		this.msgLabel.setText("");
		
		return true;
	}
	
	private void callPersonSaveService() {
		//saveButton.getElement().getStyle().setCursor(Cursor.WAIT);
		//RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);
		
		if (!validate()) {
			return;
		}
		
		//Window.alert("callUserSaveService()");
		
		ServiceFactory.PERSON_SERVICE.save(person, new MethodCallback<Person>() {

			@Override
			public void onSuccess(Method method, Person response) {
				saveButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
				
				parent.refresh();
				
				msgLabel.setStyleName("infoLbl");
				msgLabel.setText("User Saved!");
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				saveButton.getElement().getStyle().setCursor(Cursor.DEFAULT);
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
			}
		});
	}
	
}
