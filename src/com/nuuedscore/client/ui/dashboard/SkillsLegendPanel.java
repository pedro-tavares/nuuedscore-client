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
		case HARD:
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Technical.svg", "Technical Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Office.svg", "Office Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Marketing.svg", "Marketing Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Management.svg", "Management Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Writing.svg", "Writing Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Design.svg", "Design Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Computer.svg", "Computer Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Analytical.svg", "Analytical Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Presentation.svg", "Presentation Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Project Mgmt.svg", "Project Mgmt Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Language.svg", "Language Skills"));
			this.add(new SkillsLegendEntryPanel("images/graphx/gauges/Mechanical.svg", "Mechanical Skills"));
			break;
		default:
			break;		
		}
	}
}
