package com.nuuedscore.client.ui.person;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.style.NuuEdScoreCellTable;
import com.nuuedscore.shared.dto.Person;

/**
 * Person Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class PersonPanel extends TitledPanel {

	private CellTable.Resources NuuEdScoreCellTableResources = GWT.create(NuuEdScoreCellTable.class);

	private List<Person> PERSON_DATA;
	private Person selectedPerson;

	private HorizontalPanel tablePanel = new HorizontalPanel();
	private CellTable<Person> table;
	private PersonEditPanel personEditPanel;
	private Button 
		newPersonButton, 
		deletePersonButton;
	private Label fectchInfoLabel = new Label("Fetching...");
	private Date startDate;
	private Date endDate;

	public PersonPanel() {
		super("Person Administration");

		this.setSpacing(20);
		this.init();

		callGetPersonsService();
	}

	private void init() {
		table = new CellTable<Person>(10, NuuEdScoreCellTableResources);
		table.setKeyboardSelectionPolicy(KeyboardSelectionPolicy.ENABLED);

		TextColumn<Person> idColumn = new TextColumn<Person>() {
			@Override
			public String getValue(Person object) {
				return object.getId() != null ? object.getId().toString() : "";
			}
		};
		table.addColumn(idColumn, "ID");

		TextColumn<Person> nameColumn = new TextColumn<Person>() {
			@Override
			public String getValue(Person object) {
				return object.getFirstName() != null ? object.getFirstName().toString() : "";
			}
		};
		table.addColumn(nameColumn, "First Name");

		TextColumn<Person> lastNameColumn = new TextColumn<Person>() {
			@Override
			public String getValue(Person object) {
				return object.getLastName() != null ? object.getLastName().toString() : "";
			}
		};
		table.addColumn(lastNameColumn, "Last Name");

		TextColumn<Person> emailColumn = new TextColumn<Person>() {
			@Override
			public String getValue(Person object) {
				return object.getEmail().toString();
			}
		};
		table.addColumn(emailColumn, "Email");

		TextColumn<Person> statusColumn = new TextColumn<Person>() {
			@Override
			public String getValue(Person object) {
				return object.getStatus();
			}
		};
		table.addColumn(statusColumn, "Status");

		/*
		 * SimplePager.Resources resources = GWT.create(SimplePager.Resources.class);
		 * SimplePager simplePager = new SimplePager(TextLocation.CENTER, resources ,
		 * false, 0, true); simplePager.setDisplay(table); simplePager.setPageSize(5);
		 * this.add(simplePager);
		 */

		// Add a selection model to handle Person selection.
		final SingleSelectionModel<Person> selectionModel = new SingleSelectionModel<Person>();
		table.setSelectionModel(selectionModel);
		selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
			public void onSelectionChange(SelectionChangeEvent event) {
				Person selected = selectionModel.getSelectedObject();
				if (selected != null) {
					// Window.alert("You selected: " + selected.getId());
					selectedPerson = selected;
					initModelPanel(selected);
					deletePersonButton.setEnabled(true);
				}
			}
		});

		// panel.setBorderWidth(1);
		
		tablePanel.setStyleName("tabelPanel");
		tablePanel.setSpacing(10);
		tablePanel.add(table);

		// this.add(labelFectchInfo);

		// Buttons
		newPersonButton = new Button("New Person");
		newPersonButton.setStyleName("gwt-Button-green");
		newPersonButton.addClickHandler(event -> {
			initModelPanelNewUser();
		});

		deletePersonButton = new Button("Delete Person");
		deletePersonButton.addClickHandler(event -> {
			callDeletePersonService();
		});

		HorizontalPanel panelButtons = new HorizontalPanel();
		panelButtons.setSpacing(10);
		panelButtons.add(newPersonButton);
//		  panelButtons.add(buttonDeleteUser);

		this.add(panelButtons);

		this.add(tablePanel);
	}

	private void initModelPanelNewUser() {
		if (personEditPanel != null) {
			personEditPanel.removeFromParent();
		}

		personEditPanel = new PersonEditPanel(this, null);
		tablePanel.add(personEditPanel);
	}

	private void initModelPanel(Person user) {
		if (personEditPanel != null) {
			personEditPanel.removeFromParent();
		}
		personEditPanel = new PersonEditPanel(this, user);
		this.add(personEditPanel);
	}

	public void setModel(List<Person> model) {
		PERSON_DATA = model;

		GWT.log("PERSON_DATA.size: " + PERSON_DATA.size());

		table.setPageSize(50);
		table.setRowData(0, PERSON_DATA);
		table.setRowCount(PERSON_DATA.size(), true);
	}

	public boolean personExists(String email) {
		for (Person person : PERSON_DATA) {
			if (person.getEmail().equals(email)) {
				return true;
			}
		}

		return false;
	}

	public void refresh() {
		callGetPersonsService();
	}

	private void callGetPersonsService() {
		// RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		startDate = new Date();

		List<Person> personList = new ArrayList<Person>();
		Person person1 = new Person("Derrick", "ONeal", "doneal@nuueducation.com", "password");
		person1.setId(1L);
		Person person2 = new Person("Derrick", "Hardy", "dphardy66@gmail.com", "password");
		person2.setId(2L);
		Person person3 = new Person("Yalonda", "Keaton", "ykeaton.nuuedscore@gmail.com", "password");
		person3.setId(3L);
		Person person4 = new Person("The Architect", "PPII-ESi7", "pedro.javalabs@gmail.com", "javalabs");
		person4.setId(4L);

		personList.add(person1);
		personList.add(person2);
		personList.add(person3);
		personList.add(person4);

		setModel(personList);
		return;
		/*
		 * ServiceFactory.PERSON_SERVICE.flux(new MethodCallback<List<Person>>() {
		 * 
		 * @Override public void onSuccess(Method method, List<Person> response) {
		 * RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
		 * 
		 * //Window.alert("callGetPersonsService - SUCCESS\n");
		 * //GWT.log(response.toString()); setModel(response);
		 * 
		 * endDate = new Date(); labelFectchInfo.setText("Fetched " + response.size() +
		 * " Accounts in " + (endDate.getTime()-startDate.getTime()) + "ms" ); }
		 * 
		 * @Override public void onFailure(Method method, Throwable exception) {
		 * RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);
		 * 
		 * Window.alert("callGetPersonsService - FAILURE:\n" +
		 * method.getResponse().getText()); } });
		 */
	}

	private void callDeletePersonService() {
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		ServiceFactory.PERSON_SERVICE.delete(selectedPerson, new MethodCallback<List<Person>>() {

			@Override
			public void onSuccess(Method method, List<Person> response) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				// Window.alert("callDeletePersonService - SUCCESS\n");

				setModel(response);
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				Window.alert("callDeletePersonService - FAILURE:\n" + method.getResponse().getText());
			}
		});
	}

}
