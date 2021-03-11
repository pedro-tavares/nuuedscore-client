package com.nuuedscore.client.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import com.nuuedscore.shared.dto.StudentResource;

/**
 * Student Resource Service
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
@Path("http://localhost:8081/student_resource")
public interface IStudentResourceService extends RestService {

	@GET
	@Path("/list")
	public void list(MethodCallback<List<StudentResource>> callback);

}
