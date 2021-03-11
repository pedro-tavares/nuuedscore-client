package com.nuuedscore.client.service;

import com.google.gwt.core.client.GWT;

/**
 * Service Factory
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class ServiceFactory {

	public static final IPersonService PERSON_SERVICE = GWT.create(IPersonService.class);
	public static final ITeacherResourceService TEACHER_RESOURCE_SERVICE = GWT.create(ITeacherResourceService.class);
	public static final IStudentResourceService STUDENT_RESOURCE_SERVICE = GWT.create(IStudentResourceService.class);
}
