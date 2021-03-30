package com.nuuedscore.client.ui.dashboard.teacher;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.client.flow.ITeacherFlow;
import com.nuuedscore.shared.dto.TeacherResource;

/**
 * Resource Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class ResourcePanel extends VerticalPanel implements ITeacherFlow {

	@Override
	public void flow(List<TeacherResource> teacherResources) {
		GWT.log("Teacher ResourcePanel: Flow teacherResources:\n"/* + teacherResources*/);

		this.add(new HTML(teacherResources.toString()));
	}

}
