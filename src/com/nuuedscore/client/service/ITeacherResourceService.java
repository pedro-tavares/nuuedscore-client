package com.nuuedscore.client.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import com.nuuedscore.shared.dto.TeacherResource;

/**
 * Teacher Resource Service
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
@Path("http://localhost:8081/teacher_resource")
public interface ITeacherResourceService extends RestService {

	@GET
	@Path("/list")
	public void list(MethodCallback<List<TeacherResource>> callback);

}
