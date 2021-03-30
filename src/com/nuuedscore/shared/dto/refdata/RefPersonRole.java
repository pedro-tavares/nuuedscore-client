package com.nuuedscore.shared.dto.refdata;

/**
 * Person Role enum  
 * Constants that classify a Persons role
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public enum RefPersonRole {
	
    ROLE_TEACHER("ROLE_TEACHER"),
    ROLE_STUDENT("ROLE_STUDENT");

    private String role;

    RefPersonRole(String role) {
        this.role = role;
    }

    public String status() {
        return role;
    }
}