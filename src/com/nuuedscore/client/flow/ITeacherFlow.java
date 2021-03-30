package com.nuuedscore.client.flow;

import java.util.List;

import com.nuuedscore.shared.dto.TeacherResource;

/**
 * Flow the Teacher Resources
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public interface ITeacherFlow {

	void flow(List<TeacherResource> teaacherResources);
}
