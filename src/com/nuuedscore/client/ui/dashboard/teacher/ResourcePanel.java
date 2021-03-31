package com.nuuedscore.client.ui.dashboard.teacher;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.NuuEdScore;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.client.ui.portal.teacher.PortalPanel;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.refdata.RefTopic;

/**
 * Resource Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class ResourcePanel extends VerticalPanel implements ITeacherFlow {

	private List<String> topics = new ArrayList<String>();
	private PortalPanel teacherPortalPanel;
	
	public ResourcePanel() {
		
		this.setStyleName("simpleBorderPanel-green");
		this.setSpacing(20);
		
		init();
	}
	
	private void init() {
	}
	
	@Override
	public void flow(List<TeacherResource> teacherResources) {
		GWT.log("Teacher ResourcePanel: Flow teacherResources:\n"/* + teacherResources*/);

		for (TeacherResource teacherResource: teacherResources) {
			String topic = teacherResource.getTopic();
			if (topics.indexOf(topic) == -1) {

				Button topicButton = new Button(teacherResource.getTopic());
				topicButton.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForItem(topic));
				topicButton.getElement().getStyle().setProperty("width", "100%");
				topicButton.addClickHandler(event -> {
					
					// TODO Map to singleton by Topic	
					List<TeacherResource> teacherResourcesForTopic = getTeacherResourcesForTopic(teacherResources, topic);
					
					GWT.log("TOPIC:" + RefTopic.get(topic));
					
					teacherPortalPanel = new PortalPanel(RefTopic.get(topic), teacherResourcesForTopic);					
					NuuEdScore.GET().showView(teacherPortalPanel);
					
				});
				this.add(topicButton);
				topics.add(topic);
			}
		}
		
		flowMore();
	}
	
	public List<TeacherResource> getTeacherResourcesForTopic(List<TeacherResource> resources, String topic) {
		List<TeacherResource> resourcesForTopic = new ArrayList<TeacherResource>();
		for (TeacherResource teacherResource: resources) {
			if (teacherResource.getTopic().equals(topic)) {
				resourcesForTopic.add(teacherResource);
			}
		}

		GWT.log("TEACHER getTeacherResourcesForTopic:" + topic + "\n" + resourcesForTopic.toString());	
		
		return resourcesForTopic;
	}

	private void flowMore() {
		Button topicButton = new Button(RefTopic.ASSESSMENT_SCORES.value());
		topicButton.getElement().getStyle().setProperty("backgroundColor", UiUx.colourForItem(RefTopic.ASSESSMENT_SCORES.value()));
		topicButton.getElement().getStyle().setProperty("width", "100%");
		topicButton.addClickHandler(event -> {
			Window.alert("Assessment Scores coming soon...");
		});
		this.add(topicButton);		
	}
}
