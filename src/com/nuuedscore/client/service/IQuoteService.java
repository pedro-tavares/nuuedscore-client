package com.nuuedscore.client.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import com.nuuedscore.shared.dto.Person;

/**
 * Quote Service
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
@Path("http://localhost:8081/quote")
public interface IQuoteService extends RestService {

	@GET
	@Path("/daily")
	public void daily(MethodCallback<List<Person>> callback);
	
}
