package com.nuuedscore.client.ui.portal.teacher;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.nuuedscore.client.ui.portal.BasePortalPanel;
import com.nuuedscore.client.ui.portal.PortalTitlePanel;
import com.nuuedscore.client.ui.resource.ResourceCard;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * TEACHER Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalPanel extends BasePortalPanel {
	
	private RefTopic REF_TOPIC;
	private List<TeacherResource> teacherResources;
	private FlowPanel flowPanel;
	
	public PortalPanel(RefTopic refTopic, List<TeacherResource> teacherResources) {
		super(refTopic.value() + " PORTAL");
		
		this.teacherResources = teacherResources;
		this.REF_TOPIC = refTopic;
		
		this.setSpacing(20);

		init();
		
		Button backToDashboardButton = this.backToDashboardButton();					
		backToDashboardButton.setStyleName("gwt-Button-green");
		this.add(backToDashboardButton);
	}
	
	private void init() {
		GWT.log("\n\nTEACHER PortalPanel for:\n" + this.REF_TOPIC + "\n"/* + teacherResources*/);
				
		PortalTitlePanel titlePanel = new PortalTitlePanel(this.REF_TOPIC);
		this.add(titlePanel);
		this.setCellHorizontalAlignment(titlePanel, HasHorizontalAlignment.ALIGN_LEFT);
		
		// I AM THE MATRIX
		//this.add(new HTML(teacherResources.toString()));
		
		// Flow Topics
		this.flowPanel = new FlowPanel();
		//flowPanel.getElement().getStyle().setProperty("spacing", "10px");
		//flowPanel.getElement().getStyle().setProperty("padding", "10px");
		//flowPanel.getElement().getStyle().setProperty("background", "yellow");
		flowPanel.getElement().getStyle().setProperty("width", "100%");
		//flowPanel.getElement().getStyle().setFloat(Style.Float.RIGHT);
		
		for (TeacherResource teacherResource: this.teacherResources) {
//			addButton(teacherResource);
			addCard(teacherResource);
		}
		this.add(flowPanel);

	}	
	
	public void addButton(TeacherResource teacherResource) {
		Button resourceButton = new Button(teacherResource.getName());		
		resourceButton.getElement().getStyle().setProperty("margin", "10px");
		resourceButton.addClickHandler(event -> {
			// TODO can do features on resource
			Window.open(teacherResource.getResource(), teacherResource.getName(), "");
		});
		this.flowPanel.add(resourceButton);				
	}
	
	public void addCard(TeacherResource teacherResource) {
		ResourceCard resourceCard = new ResourceCard(teacherResource);
		resourceCard.setStyleName("resourceCard-low");
		resourceCard.getElement().getStyle().setDisplay(Display.INLINE_BLOCK); //!important
		this.flowPanel.add(resourceCard);
	}
	
}
