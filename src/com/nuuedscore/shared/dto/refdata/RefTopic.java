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
	
	/**
	 * TEACHER
	 */
	Personality_Test("Personality Test"),
	Career_Aptitude("Career Aptitude"),
	Learning_Styles("Learning Styles"),
	Social_Emotional_Learning("Social Emotional Learning"),
	Education_Loans("Education Loans"),
	/**
	 * STUDENT
	 */
	Academics("Academics"), 
	Financial_Literacy("Financial Literacy"),
	Hard_Skills("Hard Skills"),
	Soft_Skills("Soft Skills"),
	Practice_Civil_Service_Exam("Practice Civil Service Exam"),
	Tutoring_Options("Tutoring Options"),
	Personal_Growth("Personal Growth"),
	HBCUs("HBCUs"),
	College_Prep_Exams("College Prep Exams"),
	Practice_College_Exams_PSAT_ACT_SAT("Practice College Exams - PSAT/ACT/SAT"),
	Practice_College_Exams_K_12_Academic_Assessments("Practice College Exams - K-12 Academic Assessments"),
	College_Alternatives_Entrepreneurship("College Alternatives - Entrepreneurship"),
	Military_Service_US_Defense("Military Service - US Defense"),
	California_Common_Core_Standards("California Common Core Standards");

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