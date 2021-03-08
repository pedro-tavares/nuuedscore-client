package com.nuuedscore.client.ui.dashboard;

import com.google.gwt.user.client.ui.VerticalPanel;
import com.nuuedscore.shared.dto.refdata.RefSkill;

/**
 * Skills Legend Panel
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class SkillsLegendPanel extends VerticalPanel {

	private RefSkill REF_SKILL;
	
	public SkillsLegendPanel(RefSkill refSkill) {
		this.REF_SKILL = refSkill;

		this.setStyleName("skillsLegendPanel");
		this.setSpacing(5);
		
		init();
	}
	
	private void init() {	
		switch (REF_SKILL) {
		case HARD:
			break;
		case SOFT:
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Communication Icon.svg", "Communication Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Leadership Icon.svg", "Leadership Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Responsibility Icon.svg", "Responsibility Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Problem Solving Icon.svg", "Problem Solving Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Teamwork Icon.svg", "Teamwork Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Work Under Pressure.svg", "Under Pressure Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Time Management.svg", "Time Managing Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Flexibility.svg", "Flexibility Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Negotiation.svg", "Negotiation Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Decisiveness.svg", "Decisiveness Skills"));
			break;
		default:
			break;		
		}
	}
}
