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
//import com.nuuedscore.client.ui.TeacherResource.TeacherResourceEditPanel;
import com.nuuedscore.client.ui.style.NuuEdScoreCellTable;
import com.nuuedscore.shared.dto.TeacherResource;

/**
 * TeacherResource Panel
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class TeacherResourcePanel extends TitledPanel {

	private CellTable.Resources NuuEdScoreCellTableResources = GWT.create(NuuEdScoreCellTable.class);

	private List<TeacherResource> TEACHER_RESOURCE_DATA;
	private TeacherResource selectedTeacherResource;

	private HorizontalPanel tablePanel = new HorizontalPanel();
	private CellTable<TeacherResource> table;
	private DecoratedPopupPanel resourcePreviewPopup;
	//private TeacherResourceEditPanel teacherResourceEditPanel;
	private Button newTeacherResourceButton, deleteTeacherResourceButton;
	private Label fetchInfoLabel = new Label("Fetching...");
	private Date startDate;
	private Date endDate;

	public TeacherResourcePanel() {
		super("Teacher Resources");

		this.setSpacing(20);
		this.init();

		callGetTeacherResourceService();
	}

	private void init() {
		table = new CellTable<TeacherResource>(10, NuuEdScoreCellTableResources);
		table.setKeyboardSelectionPolicy(KeyboardSelectionPolicy.ENABLED);

		TextColumn<TeacherResource> idColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getId() != null ? object.getId().toString() : "";
			}
		};
		table.addColumn(idColumn, "ID");

		TextColumn<TeacherResource> topicColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getTopic() != null ? object.getTopic().toString() : "";
			}
		};
		table.addColumn(topicColumn, "Topic");
		/*
				TextColumn<TeacherResource> learningPersonalityColumn = new TextColumn<TeacherResource>() {
					@Override
					public String getValue(TeacherResource object) {
						return object.getLearningPersonality() != null ? object.getLearningPersonality().toString() : "";
					}
				};
				table.addColumn(learningPersonalityColumn, "Learning Personality");
		*/
		/*
				TextColumn<TeacherResource> bloomColumn = new TextColumn<TeacherResource>() {
					@Override
					public String getValue(TeacherResource object) {
						return object.getBloom().toString();
					}
				};
				table.addColumn(bloomColumn, "Bloom");
		*/
		TextColumn<TeacherResource> subjectColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getSubject() != null ? object.getSubject().toString() : "";
			}
		};
		table.addColumn(subjectColumn, "Subject");

		TextColumn<TeacherResource> nameColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getName() != null ? object.getName().toString() : "";
			}
		};
		table.addColumn(nameColumn, "Name");

		TextColumn<TeacherResource> resourceColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getResource() != null ? object.getResource().toString() : "";
			}
		};
		table.addColumn(resourceColumn, "Resource");
		
		TextColumn<TeacherResource> createdOnColumn = new TextColumn<TeacherResource>() {
			@Override
			public String getValue(TeacherResource object) {
				return object.getCreatedOn() != null ? object.getCreatedOn().toString() : "";
			}
		};
		table.addColumn(createdOnColumn, "Created on");

		initPreview();

		/*
		 * SimplePager.Resources resources = GWT.create(SimplePager.Resources.class);
		 * SimplePager simplePager = new SimplePager(TextLocation.CENTER, resources ,
		 * false, 0, true); simplePager.setDisplay(table); simplePager.setPageSize(5);
		 * this.add(simplePager);
		 */

		// Add a selection model to handle TeacherResource selection.
		final SingleSelectionModel<TeacherResource> selectionModel = new SingleSelectionModel<TeacherResource>();
		table.setSelectionModel(selectionModel);
		selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
			public void onSelectionChange(SelectionChangeEvent event) {
				TeacherResource selected = selectionModel.getSelectedObject();
				if (selected != null) {
					// Window.alert("You selected: " + selected.getId());
					selectedTeacherResource = selected;
					initModelPanel(selected);
					deleteTeacherResourceButton.setEnabled(true);
				}
			}
		});

		// panel.setBorderWidth(1);

		this.add(fetchInfoLabel);

		tablePanel.setStyleName("tabelPanel");
		tablePanel.setSpacing(10);
		tablePanel.add(table);

		// Buttons
		newTeacherResourceButton = new Button("New Teacher Resource");
		newTeacherResourceButton.setStyleName("gwt-Button-green");
		newTeacherResourceButton.addClickHandler(event -> {
			initModelPanelNew();
		});

		deleteTeacherResourceButton = new Button("Delete Teacher Resource");
		deleteTeacherResourceButton.addClickHandler(event -> {
			//callDeleteTeacherResourceService();
		});

		HorizontalPanel panelButtons = new HorizontalPanel();
		panelButtons.setSpacing(10);
		panelButtons.add(newTeacherResourceButton);
		//panelButtons.add(buttonDeleteUser);

		this.add(panelButtons);

		this.add(tablePanel);
	}
	
	private void showPreviewPopup(CellPreviewEvent<TeacherResource> event) {
		resourcePreviewPopup = new DecoratedPopupPanel(true);
		resourcePreviewPopup.setWidth("150px");
		resourcePreviewPopup.setWidget(new ResourcePreviewPanel(event.getValue().getResource()));
		resourcePreviewPopup.setPopupPosition(event.getNativeEvent().getClientX(), event.getNativeEvent().getClientY());
		resourcePreviewPopup.show();
	}

	private void initPreview() {
		table.addCellPreviewHandler(new Handler<TeacherResource>() {
			@Override
			public void onCellPreview(CellPreviewEvent<TeacherResource> event) {
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
		if (TeacherResourceEditPanel != null) {
			TeacherResourceEditPanel.removeFromParent();
		}
		
		TeacherResourceEditPanel = new TeacherResourceEditPanel(this, null);
		tablePanel.add(TeacherResourceEditPanel);
		*/
	}

	private void initModelPanel(TeacherResource teacherResource) {
		/*
		if (TeacherResourceEditPanel != null) {
			TeacherResourceEditPanel.removeFromParent();
		}
		TeacherResourceEditPanel = new TeacherResourceEditPanel(this, teacherResource);
		this.add(TeacherResourceEditPanel);
		*/
	}

	public void setModel(List<TeacherResource> model) {
		TEACHER_RESOURCE_DATA = model;

		GWT.log("TeacherResource_DATA.size: " + TEACHER_RESOURCE_DATA.size());

		table.setPageSize(50);
		table.setRowData(0, TEACHER_RESOURCE_DATA);
		table.setRowCount(TEACHER_RESOURCE_DATA.size(), true);
	}

	public boolean teacherResourceExists(String resource) {
		for (TeacherResource TeacherResource : TEACHER_RESOURCE_DATA) {
			if (TeacherResource.getResource().equals(resource)) {
				return true;
			}
		}

		return false;
	}

	public void refresh() {
		callGetTeacherResourceService();
	}

	private void callGetTeacherResourceService() {
		RootPanel.getBodyElement().getStyle().setCursor(Cursor.WAIT);

		startDate = new Date();
		ServiceFactory.TEACHER_RESOURCE_SERVICE.list(new MethodCallback<List<TeacherResource>>() {

			@Override
			public void onSuccess(Method method, List<TeacherResource> response) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("callGetTeacherResourceService - SUCCESS:\n" + response.toString());

				setModel(response);

				endDate = new Date();
				fetchInfoLabel.setText("Fetched " + response.size() + " Teacher Resources in "
						+ (endDate.getTime() - startDate.getTime()) + "ms");
			}

			@Override
			public void onFailure(Method method, Throwable exception) {
				RootPanel.getBodyElement().getStyle().setCursor(Cursor.DEFAULT);

				GWT.log("callGetTeacherResourceService - FAILURE:\n" + method.getResponse().getText());
			}
		});
	}

}
