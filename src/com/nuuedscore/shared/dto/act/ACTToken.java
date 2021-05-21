package com.nuuedscore.shared.dto.act;

import javax.ws.rs.QueryParam;

import com.nuuedscore.shared.dto.IModel;

/**
 * Token Model
 * 
 * @author PATavares
 * @since May 2021
 * 
 */
public class ACTToken implements IModel {

	private static final long serialVersionUID = -7305705989524733106L;
	
	@QueryParam("access_token")
	private String accessToken;
	@QueryParam("scope")
	private String scope;
	@QueryParam("expires_in")
	private String expiresIn;
	@QueryParam("token_type")
	private String tokenType;

	public ACTToken() {
		this("", "", "", "");
	}

	public ACTToken(String accessToken, String scope, String expiresIn, String tokenType) {
		this.accessToken = accessToken;
		this.scope = scope;
		this.expiresIn = expiresIn;
		this.tokenType = tokenType;
	}
	
}
