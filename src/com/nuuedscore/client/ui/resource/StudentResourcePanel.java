package com.nuuedscore.client.ui.resource;

import java.util.Date;
import java.util.List;

import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.BrowserEvents;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DecoratedPopupPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.CellPreviewEvent;
import com.google.gwt.view.client.CellPreviewEvent.Handler;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.nuuedscore.client.service.ServiceFactory;
import com.nuuedscore.client.ui.TitledPanel;
//import com.nuuedscore.client.ui.StudentResource.StudentResourceEditPanel;
import com.nuuedscore.client.ui.style.NuuEdScoreCellTable;
import com.nuuedscore.shared.dto.StudentResource;

/**
 * Student Resource Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class StudentResourcePanel extends TitledPanel {

	private CellTable.Resources NuuEdScoreCellTableResources = GWT.create(NuuEdScoreCellTable.class);

	private List<StudentResource> STUDENT_RESOURCE_DATA;
	private StudentResource selectedStudentResource;

	private HorizontalPanel tablePanel = new HorizontalPanel();
	private CellTable<StudentResource> table;
	private DecoratedPopupPanel resourcePreviewPopup;
	//private StudentResourceEditPanel StudentResourceEditPanel;
	private Button newStudentResourceButton, deleteStudentResourceButton;
	private Label fetchInfoLabel = new Label("Fetching...");
	private Date startDate;
	private Date endDate;

	public StudentResourcePanel() {
		super("Student Resources");

		this.setSpacing(20);
		this.init();

		callGetStudentResourceService();
	}

	private void init() {
		table = new CellTable<StudentResource>(10, NuuEdScoreCellTableResources);
		table.setKeyboardSelectionPolicy(KeyboardSelectionPolicy.ENABLED);

		TextColumn<StudentResource> idColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getId() != null ? object.getId().toString() : "";
			}
		};
		table.addColumn(idColumn, "ID");

		TextColumn<StudentResource> topicColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getTopic() != null ? object.getTopic().toString() : "";
			}
		};
		table.addColumn(topicColumn, "Topic");

		TextColumn<StudentResource> scoreColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getScore() != null ? object.getScore().toString() : "";
			}
		};
		table.addColumn(scoreColumn, "Score");
		
		TextColumn<StudentResource> learningPersonalityColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getLearningPersonality() != null ? object.getLearningPersonality().toString() : "";
			}
		};
		table.addColumn(learningPersonalityColumn, "Learning Personality");
		
		TextColumn<StudentResource> bloomColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getBloom().toString();
			}
		};
		table.addColumn(bloomColumn, "Bloom");
		
		TextColumn<StudentResource> subjectColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getSubject() != null ? object.getSubject().toString() : "";
			}
		};
		table.addColumn(subjectColumn, "Subject");

		TextColumn<StudentResource> nameColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getName() != null ? object.getName().toString() : "";
			}
		};
		table.addColumn(nameColumn, "Name");

		TextColumn<StudentResource> resourceColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getResource() != null ? object.getResource().toString() : "";
			}
		};
		table.addColumn(resourceColumn, "Resource");

		TextColumn<StudentResource> createdOnColumn = new TextColumn<StudentResource>() {
			@Override
			public String getValue(StudentResource object) {
				return object.getCreatedOn() != null ? object.getCreatedOn().toString() : "";
			}
		};
		table.addColumn(createdOnColumn, "Created on");

		/*
		 * Disable the magic for now :)
		 */
		//initPreview();

		/*
		 * SimplePager.Resources resources = GWT.create(SimplePager.Resources.class);
		 * SimplePager simplePager = new SimplePager(TextLocation.CENTER, resources ,
		 * false, 0, true); simplePager.setDisplay(table); simplePager.setPageSize(5);
		 * this.add(simplePager);
		 */

		// Add a selection model to handle StudentResource selection.
		final SingleSelectionModel<StudentResource> selectionModel = new SingleSelectionModel<StudentResource>();
		table.setSelectionModel(selectionModel);
		selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
			public void onSelectionChange(SelectionChangeEvent event) {
				StudentResource selected = selectionModel.getSelectedObject();
				if (selected != null) {
					// Window.alert("You selected: " + selected.getId());
					selectedStudentResource = selected;
					initModelPanel(selected);
					deleteStudentResourceButton.setEnabled(true);
				}
			}
		});

		// panel.setBorderWidth(1);

		this.add(fetchInfoLabel);

		tablePanel.setStyleName("tabelPanel");
		tablePanel.setSpacing(10);
		tablePanel.add(table);

		// Buttons
		newStudentResourceButton = new Button("New Student Resource");
		newStudentResourceButton.setStyleName("gwt-Button-green");
		newStudentResourceButton.addClickHandler(event -> {
			initModelPanelNew();
		});

		deleteStudentResourceButton = new Button("Delete Student Resource");
		deleteStudentResourceButton.addClickHandler(event -> {
			//callDeleteStudentResourceService();
		});

		HorizontalPanel panelButtons = new HorizontalPanel();
		panelButtons.setSpacing(10);
		panelButtons.add(newStudentResourceButton);
		//panelButtons.add(buttonDeleteUser);

		this.add(panelButtons);

		this.add(tablePanel);
	}

	private void showPreviewPopup(CellPreviewEvent<StudentResource> event) {
		resourcePreviewPopup = new DecoratedPopupPanel(true);
		resourcePreviewPopup.setWidth("150px");
		resourcePreviewPopup.setWidget(new ResourcePreviewPanel(event.getValue().getResource()));
		resourcePreviewPopup.setPopupPosition(event.getNativeEvent().getClientX(), event.getNativeEvent().getClientY());
		resourcePreviewPopup.show();
	}

	private void initPreview() {
		table.addCellPreviewHandler(new Handler<StudentResource>() {
			@Override
			public void onCellPreview(CellPreviewEvent<StudentResource> event) {
				//GWT.log(event.getValue().getResource());
				if (BrowserEvents.MOUSEOVER.equals(event.getNativeEvent().getType())) {
					showPreviewPopup(event);
				} else if (BrowserEvents.MOUSEOUT.equals(event.getNativeEvent().getType())) {
					resourcePreviewPopup.hide();
				}
			}
		});
	}

	private void initModelPanelNew() {
		/*
		if (StudentResourceEditPanel != null) {
			StudentResourceEditPanel.removeFromParent();
		}
		
		StudentResourceEditPanel = new StudentResourceEditPanel(this, null);
		tablePanel.add(StudentResourceEditPanel);
		*/
	}

	private void initModelPanel(StudentResource StudentResource) {
		/*
		if (StudentResourceEditPanel != null) {
			StudentResourceEditPanel.removeFromParent();
		}
		StudentResourceEditPanel = new StudentResourceEditPanel(this, StudentResource);
		this.add(StudentResourceEditPanel);
		*/
	}

	public void setModel(List<StudentResource> model) {
		STUDENT_RESOURCE_DATA = model;

		GWT.log("STUDENT_RESOURCE_DATA.size: " + STUDENT_RESOURCE_DATA.size());

		table.setPageSize(50);
		table.setRowData(0, STUDENT_RESOURCE_DATA);
		table.setRowCount(STUDENT_RESOURCE_DATA.size(), true);
	}

	public boolean StudentResourceExists(String resource) {
		for (StudentResource StudentResource : STUDENT_RESOURCE_DATA) {
			if (StudentResource.getResource().equals(resource)) {
				return true;
			}
		}

		return false;
	}

	public void refresh() {
		callGetStudentResourceService();
	}

	private void callGetStudentResourceService() {
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		startDate = new Date();
		ServiceFactory.STUDENT_RESOURCE_SERVICE.list(new MethodCallback<List<StudentResource>>() {

			@Override
			public void onSuccess(Method method, List<StudentResource> response) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("callGetStudentResourceService - SUCCESS:\n" + response.toString());

				setModel(response);

				endDate = new Date();
				fetchInfoLabel.setText("Fetched " + response.size() + " Student Resources in "
						+ (endDate.getTime() - startDate.getTime()) + "ms");
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("callGetStudentResourceService - FAILURE:\n" + method.getResponse().getText());
			}
		});
	}

}
