package com.nuuedscore.shared.dto.refdata;

/**
 * Person Preferred Contact  
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public enum RefPersonPreferredContact {
   
	PHONE("Phone"),
    EMAIL("Email");

    private String contact;

    RefPersonPreferredContact(String contact) {
        this.contact = contact;
    }

    public String status() {
        return contact;
    }
}