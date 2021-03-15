package com.nuuedscore.shared.dto.refdata;

/**
 * Score enum 
 * Constants that classify an Aptitude
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public enum RefAptitude {
	
	LOW("LOW"), 
	HIGH("HIGH");

	private String value;

	RefAptitude(String value) {
		this.value = value;
	}

	public String value() {
		return value;
	}
	
	public static RefAptitude get(String value) {
		for(RefAptitude r: RefAptitude.values()) {
			if (r.value.equals(value)) {
				return r;
			}
		}
		return null;
	}
}