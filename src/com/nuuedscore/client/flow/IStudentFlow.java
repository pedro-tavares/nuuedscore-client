package com.nuuedscore.client.flow;

import java.util.List;

import com.nuuedscore.shared.dto.StudentResource;

/**
 * Flow the Student Resources
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public interface IStudentFlow {

	void flow(List<StudentResource> studentResources);
}
