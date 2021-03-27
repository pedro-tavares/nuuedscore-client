package com.nuuedscore.shared.dto.refdata;

/**
 * Topic enum 
 * Constants that classify a Topic
 * 
 * TMP TODO: update dynamically from DB
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public enum RefTopic {
	
	Academics("Academics"), 
	Financial_Literacy("Financial Literacy"),
	Hard_Skills("Hard Skills");

	private String value;

	RefTopic(String value) {
		this.value = value;
	}

	public String value() {
		return value;
	}
	
	public static RefTopic get(String value) {
		for(RefTopic r: RefTopic.values()) {
			if (r.value.equals(value)) {
				return r;
			}
		}
		return null;
	}
}