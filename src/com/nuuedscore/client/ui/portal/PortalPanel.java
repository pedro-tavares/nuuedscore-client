package com.nuuedscore.client.ui.portal;

import java.util.List;

import com.nuuedscore.client.ui.TitledPanel;
import com.nuuedscore.shared.dto.StudentResource;
import com.nuuedscore.shared.dto.refdata.RefAptitude;

public class PortalPanel extends TitledPanel {

	private RefAptitude REF_APTITUDE;
	private List<StudentResource> studentResources;
	
	public PortalPanel(RefAptitude refAptitude, List<StudentResource> studentResources) {
		super(refAptitude.value() + " APTITUDE PORTAL");
		this.REF_APTITUDE = refAptitude;
		this.studentResources = studentResources;
		
		this.setSpacing(20);

		init();
	}
	
	private void init() {
		
	}
}
