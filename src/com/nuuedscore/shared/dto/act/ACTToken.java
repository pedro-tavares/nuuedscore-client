package com.nuuedscore.shared.dto.act;

import javax.ws.rs.QueryParam;

/**
 * Token Model
 * 
 * @author PATavares
 * @since May 2021
 * 
 */
public class ACTToken {

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
