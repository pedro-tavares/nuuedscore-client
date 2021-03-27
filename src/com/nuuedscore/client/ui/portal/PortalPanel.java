package com.nuuedscore.client.ui.portal;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * Portal Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class PortalPanel extends TitledPanel {

	private RefAptitude REF_APTITUDE;
	private RefTopic REF_TOPIC;
	private List<StudentResource> studentResources;
	
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
	}
	
	private void init() {
		GWT.log("\n\nI AM PortalPanel:" + this.REF_APTITUDE.value() + "\n"/* + studentResources*/);
		
		PortalTitlePanel titlePanel = new PortalTitlePanel(this.REF_TOPIC);
		this.add(titlePanel);

		HorizontalPanel academicsPanel = new HorizontalPanel();
		//academicsPanel.getElement().getStyle().setProperty("backgroundColor", "orange");
		
		// Flow Subjects
		if (this.REF_TOPIC.equals(RefTopic.Academics)) { 
			
			LearningPersonalityNavigationPanel learningPersonalityNavigationPanel = new LearningPersonalityNavigationPanel();
			academicsPanel.add(learningPersonalityNavigationPanel);
			
			PortalTopicAcademicsPanel portalTopicPanel = new PortalTopicAcademicsPanel();
			//portalTopicPanel.getElement().getStyle().setProperty("backgroundColor", "yellow");

			ScrollPanel scrollPanel = new ScrollPanel(portalTopicPanel);
			//scrollPanel.getElement().getStyle().setProperty("backgroundColor", "green");
		    scrollPanel.setSize("1200px", "500px");
			
			//academicsPanel.add(portalTopicPanel);
		    academicsPanel.add(scrollPanel);
			
			this.add(academicsPanel);
			
		} 
		// Flow just Resources ...
		else if (this.REF_TOPIC.equals(RefTopic.Financial_Literacy)) {
			// NO RESOURCES in Main Flow
		}
		else if (this.REF_TOPIC.equals(RefTopic.Hard_Skills)) {
			// NO RESOURCES in Main Flow
		}
		else {
			GWT.log("\n\n\nTODO topic:" + this.REF_TOPIC.value() + "\n\n\n");
		}

	}
	
}
