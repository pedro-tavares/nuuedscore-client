package com.nuuedscore.client.ui.dashboard.teacher;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.TeacherResource;

/**
 * Resource Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class ResourcePanel extends VerticalPanel implements ITeacherFlow {

	private List<String> topics = new ArrayList<String>();
	
	public ResourcePanel() {
		
		this.setSpacing(10);
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
				topicButton.addClickHandler(event -> {
					Window.alert(teacherResource.getTopic());
					// TODO can do features on resource
					//Window.open(studentResource.getResource(), studentResource.getName(), "");
				});
				this.add(topicButton);
				topics.add(topic);
			}
		}

	}

}
