package com.nuuedscore.shared.dto.refdata;

/**
 * LearningPersonality enum 
 * Constants that classify a Persons Learning Personality
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public enum RefLearningPersonality {
	
	TODO("TODO"),
	VISUAL("Visual"), 
	AURAL("Aural"), 
	VERBAL("Verbal"),
	SOCIAL("Social"),
	LOGICAL("Logical"),
	PHYSICAL("Physical"),
	SOLITARY("Solitary"),
	EGP("EGP");

	private String value;

	RefLearningPersonality(String value) {
		this.value = value;
	}

	public String value() {
		return value;
	}

	public static RefLearningPersonality get(String value) {
		for(RefLearningPersonality r: RefLearningPersonality.values()) {
			if (r.value.equals(value)) {
				return r;
			}
		}
		return null;
	}

}