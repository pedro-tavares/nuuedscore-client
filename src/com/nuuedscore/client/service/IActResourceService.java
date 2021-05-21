package com.nuuedscore.client.service;

import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import com.nuuedscore.shared.dto.act.ACTAuthId;
import com.nuuedscore.shared.dto.act.ACTToken;

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
	@Consumes(MediaType.APPLICATION_JSON)
	public void oauthToken(@BeanParam ACTAuthId actAuthId, MethodCallback<ACTToken> callback);

}
