package com.nuuedscore.client.ui.dashboard.student.skill;

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
			this.add(new SkillsLegendEntryPanel("images/topics/Communication Icon.svg", "Communication Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Leadership Icon.svg", "Leadership Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Responsibility Icon.svg", "Responsibility Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Problem Solving Icon.svg", "Problem Solving Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Teamwork Icon.svg", "Teamwork Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Work Under Pressure.svg", "Under Pressure Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Time Management.svg", "Time Managing Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Flexibility.svg", "Flexibility Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Negotiation.svg", "Negotiation Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Decisiveness.svg", "Decisiveness Skills"));
			break;
		case HARD:
			this.add(new SkillsLegendEntryPanel("images/topics/Technical.svg", "Technical Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Office.svg", "Office Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Marketing.svg", "Marketing Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Management.svg", "Management Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Writing.svg", "Writing Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Design.svg", "Design Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Computer.svg", "Computer Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Analytical.svg", "Analytical Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Presentation.svg", "Presentation Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Project Mgmt.svg", "Project Mgmt Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Language.svg", "Language Skills"));
			this.add(new SkillsLegendEntryPanel("images/topics/Mechanical.svg", "Mechanical Skills"));
			break;
		default:
			break;		
		}
	}
}