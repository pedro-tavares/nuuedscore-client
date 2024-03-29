package com.nuuedscore.client.ui.portal.student;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.nuuedscore.client.ui.portal.BasePortalPanel;
import com.nuuedscore.client.ui.portal.PortalTitlePanel;
import com.nuuedscore.client.ui.resource.ResourceCard;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefScore;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalPanel extends BasePortalPanel {
	
	private RefAptitude REF_APTITUDE;
	private RefTopic REF_TOPIC;
	private List<StudentResource> studentResources;
	private FlowPanel flowPanel;
	
	public PortalPanel(RefAptitude refAptitude, List<StudentResource> studentResources) {
		super(refAptitude.value() + " APTITUDE PORTAL");
		
		this.REF_APTITUDE = refAptitude;
		this.studentResources = studentResources;
		this.REF_TOPIC = RefTopic.get(studentResources.get(0).getTopic());
		
		if (this.REF_APTITUDE.equals(RefAptitude.HIGH)) {
			this.titleLabel.setStyleName("titledPanelLabel-high");
		}

		this.setSpacing(20);

		init();
		
		Button backToDashboardButton = this.backToDashboardButton();		
		if (REF_APTITUDE.value().equals(RefAptitude.LOW.value())) {
			backToDashboardButton.setStyleName("gwt-Button-green");
		}
		this.add(backToDashboardButton);
	}
	
	private void init() {
		GWT.log("\n\nSTUDENT PortalPanel for:\n" + this.REF_TOPIC + " " + this.REF_APTITUDE.value() + "\n"/* + studentResources*/);
				
		PortalTitlePanel titlePanel = new PortalTitlePanel(this.REF_TOPIC);
		this.add(titlePanel);
		this.setCellHorizontalAlignment(titlePanel, HasHorizontalAlignment.ALIGN_LEFT);

		// I AM THE MATRIX
		//this.add(new HTML(studentResources.toString()));
		
		// Flow Subjects
		if (this.REF_TOPIC.equals(RefTopic.Academics)) { 

			HorizontalPanel academicsPanel = new HorizontalPanel();
			//academicsPanel.getElement().getStyle().setProperty("backgroundColor", "orange");

			LearningPersonalityNavigationPanel learningPersonalityNavigationPanel = new LearningPersonalityNavigationPanel();
			academicsPanel.add(learningPersonalityNavigationPanel);
			
			PortalTopicAcademicsPanel portalTopicPanel = new PortalTopicAcademicsPanel();
			//portalTopicPanel.getElement().getStyle().setProperty("backgroundColor", "yellow");
			
			ScrollPanel scrollPanel = new ScrollPanel(portalTopicPanel);
			//scrollPanel.getElement().getStyle().setProperty("backgroundColor", "green");

			//1900,970
			//Window.alert(Window.getClientWidth() + "," + Window.getClientHeight());			

			scrollPanel.setSize(Window.getClientWidth()-300 + "px", Window.getClientHeight()-350 + "px");
			
			//academicsPanel.add(portalTopicPanel);
		    academicsPanel.add(scrollPanel);
			
			this.add(academicsPanel);
			
		} 
		else {
			this.flowPanel = new FlowPanel();
			//flowPanel.getElement().getStyle().setProperty("spacing", "10px");
			//flowPanel.getElement().getStyle().setProperty("padding", "10px");
			//flowPanel.getElement().getStyle().setProperty("background", "yellow");
			flowPanel.getElement().getStyle().setProperty("width", "100%");
			//flowPanel.getElement().getStyle().setFloat(Style.Float.RIGHT);
			
			for (StudentResource studentResource: this.studentResources) {
				if (!studentResource.getResource().contains("youtube.com")) {
					addButton(studentResource);
					//addCard(studentResource);
				}
			}
			this.add(flowPanel);
		}
	}	
	
	public void addButton(StudentResource studentResource) {
		Button resourceButton = new Button(studentResource.getName());		
		if (RefScore.HIGH.equals(studentResource.getScore())) {
			resourceButton.setStyleName("gwt-Button-green");
		}
		resourceButton.getElement().getStyle().setProperty("margin", "10px");
		resourceButton.addClickHandler(event -> {
			// TODO can do features on resource
			Window.open(studentResource.getResource(), studentResource.getName(), "");
		});		
		this.flowPanel.add(resourceButton);		
	}
	
	public void addCard(StudentResource studentResource) {
		ResourceCard resourceCard = new ResourceCard(studentResource);
		resourceCard.setStyleName(studentResource.getScore().equals(RefScore.HIGH) ? "resourceCard-high" : "resourceCard-low");
		resourceCard.getElement().getStyle().setDisplay(Display.INLINE_BLOCK); //!important
		this.flowPanel.add(resourceCard);
	}

}
