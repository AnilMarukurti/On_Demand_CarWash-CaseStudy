package com.adminservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Admin")
public class AdminDetails {

	@Id
	private Integer id;
	private String name;
	
	
	public AdminDetails() {
		super();
	}
	public AdminDetails(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "AdminDetails [id=" + id + ", name=" + name + "]";
	}
	
	
}
