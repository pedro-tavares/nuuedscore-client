package com.nuuedscore.shared.dto;

/**
 * Resource Interface
 * Any Resource 
 * 
 * @author PATavares
 * @since Apr 2021
 * 
 */
public interface IResource extends IModel {
	
	Long getId();
	String getName();
	String getResource();
}
