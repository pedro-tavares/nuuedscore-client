package com.nuuedscore.shared.dto;

import javax.ws.rs.QueryParam;

import com.nuuedscore.shared.dto.refdata.RefPersonStatus;

/**
 * Person Model
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class Person implements Model {

	private static final long serialVersionUID = -4044000771030154419L;
	
	@QueryParam("id")
	private Long id;
	@QueryParam("first_name")
	private String firstName;
	@QueryParam("last_name")
	private String lastName;
	@QueryParam("username")
	private String username; 
	@QueryParam("email")
	private String email;
	@QueryParam("phone")
	private String phone;
	@QueryParam("password")
	private String password;
	@QueryParam("status")
	private String status;
	
	public Person() {
		this("", "", "", "");
	}
	
	public Person(String email) {
		this.username = email; 
		this.email = email;
	}

	public Person(String firstName, String lastName, String email, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = email; 
		this.email = email;
		this.password = password;
		this.status = RefPersonStatus.ACTIVE.status();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.username =  email;
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
