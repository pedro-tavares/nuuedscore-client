package com.nuuedscore.shared.dto.act;

import javax.ws.rs.QueryParam;

import com.nuuedscore.shared.dto.IModel;

/**
 * ACT Token  
 *
 * @author PATavares
 * @since May 2021
 * 
 */
public class ACTAuthId implements IModel {

	private static final long serialVersionUID = 2096179087049632620L;
		
	public ACTAuthId() {
		this("", "", "", "");
	}
	
	public ACTAuthId(String clientId, String clientSecret, String audience, String grantType) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.audience = audience;
		this.grantType = grantType;
	}
	
	@QueryParam("client_id")
	private String clientId;
	@QueryParam("client_secret")
	private String clientSecret;
	@QueryParam("audience")
	private String audience;
	@QueryParam("grant_type")
	private String grantType;

	@Override
	public String toString() {
		return "{" + "client_id=" + clientId + ", client_secret=" + clientSecret + ", audience=" + audience + ", grant_type=" + grantType + "}";
	}	
	
}
