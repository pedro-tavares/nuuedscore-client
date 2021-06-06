package com.nuuedscore.client.domain;

import java.util.List;

import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.TeacherResource;
import com.nuuedscore.shared.dto.act.ACTAuthId;

/**
 * DATA
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class DATA {

	public static String PERSON_FIRSTNAME = "Coach DERRICK";
	public static String PERSON_LASTNAME = "O'NEAL";
	public static String PERSON_EMAIL = "doneal@nuueducation.com"; 
	public static String PERSON_PASSWORD = "password"; 
	public static String PERSON_AVATAR = "Derrick ONeill Quote.jpg";

	/*
	public static String PERSON_FIRSTNAME = "THE";
	public static String PERSON_LASTNAME = "ARCHITECT PP||-Esi7";
	public static String PERSON_EMAIL = "pedro.tavares@gmail.com"; 
	public static String PERSON_AVATAR = "The Architect.png";
	*/	
	
	public static List<TeacherResource> TEACHER_RESOURCES;
	public static List<StudentResource> STUDENT_RESOURCES;

	public static ACTAuthId ACT_AUTH_ID = new ACTAuthId(
		"GL3nYdxNixGsLw0oW2CrwMLNBL5f92E5",
		"cDYAbwvXdk3IHkHvWPnni_DuTz2Cu7lbKFEM_D6eJIMV58sAfGnMv0ybqhUPkrud",
		"dev-minerva",
		"client_credentials",
		"NuuEdScoreC Client"
	);

}
