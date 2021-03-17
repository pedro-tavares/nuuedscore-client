package com.nuuedscore.shared.dto;

import java.util.Date;

import javax.ws.rs.QueryParam;

import com.nuuedscore.shared.dto.refdata.RefBloom;
import com.nuuedscore.shared.dto.refdata.RefLearningPersonality;
import com.nuuedscore.shared.dto.refdata.RefScore;

/**
 * Student Resource Model
 * Any Resource for a Student 
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public class StudentResource implements Model {
	
	private static final long serialVersionUID = -9100127812169529898L;
	
	@QueryParam("id")
	private Long id;	
	@QueryParam("topic")
	private String topic;
	@QueryParam("score")
	private RefScore score;
	@QueryParam("learning_personality")
	private RefLearningPersonality learningPersonality;
	@QueryParam("bloom")
	private RefBloom bloom;
	@QueryParam("subject")
	private String subject;
	@QueryParam("name")
	private String name;
	@QueryParam("resource")
    private String resource;
	@QueryParam("created_on")
    private Date createdOn;

	public StudentResource() {}
	
    public StudentResource(Long id, String topic, String score, String learningPersonality, String bloom, String subject, String name, String resource) {
    	this(id, topic, RefScore.get(score), RefLearningPersonality.get(learningPersonality), RefBloom.get(bloom), subject, name, resource);
    }
    
    public StudentResource(Long id, String topic, RefScore score, RefLearningPersonality learningPersonality, RefBloom bloom, String subject, String name, String resource) {
    	this.id =id;
    	this.topic = topic;
    	this.score = score;
    	this.learningPersonality = learningPersonality;
    	this.bloom = bloom;
    	this.subject = subject;
    	this.name = name;
    	this.resource = resource;
    }

	@Override
	public String toString() {
		return "StudentResource [id=" + id + ", topic=" + topic + ", learningPersonality=" + learningPersonality
				+ ", bloom=" + bloom + ", subject=" + subject + ", name=" + name + ", resource=" + resource
				+ ", createdOn=" + createdOn + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public RefScore getScore() {
		return score;
	}

	public void setScore(RefScore score) {
		this.score = score;
	}
	
	public RefLearningPersonality getLearningPersonality() {
		return learningPersonality;
	}

	public void setLearningPersonality(RefLearningPersonality learningPersonality) {
		this.learningPersonality = learningPersonality;
	}

	public RefBloom getBloom() {
		return bloom;
	}

	public void setBloom(RefBloom bloom) {
		this.bloom = bloom;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getResource() {
		return resource;
	}

	public void setResource(String resource) {
		this.resource = resource;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

}