package com.nuuedscore.client.service;

import java.util.List;

import javax.ws.rs.BeanParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import com.nuuedscore.shared.dto.Email;
import com.nuuedscore.shared.dto.Person;

/**
 * Person Service
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
@Path("http://localhost:8081/person")
public interface IPersonService extends RestService {

	@POST
	@Path("/user_exists")
	public void userExists(@BeanParam Email email, MethodCallback<Person> callback);

	@POST
	@Path("/login")
	public void login(@BeanParam Person user, MethodCallback<String> callback);
	
	@GET
	@Path("/all")
	public void all(MethodCallback<List<Person>> callback);
	
	@POST
	@Path("/save")
	public void save(@BeanParam Person user, MethodCallback<Person> callback);

	@POST
	@Path("/delete")
	public void delete(@BeanParam Person user, MethodCallback<List<Person>> callback);

}
