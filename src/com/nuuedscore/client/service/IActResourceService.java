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
 * ACT Service
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
@Path("https://dev-auth.act-et.org")
public interface IActResourceService extends RestService {

	@POST
	@Path("/oauth/token")
	public void oauthToken(@BeanParam Email email, MethodCallback<Person> callback);

}
