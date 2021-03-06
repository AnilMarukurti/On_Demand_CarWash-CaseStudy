package com.adminservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="W_Packages")
public class Wash {

	
	@Id
	private Long id;
	private String packagename;
	private float cost;
	private String description;
	
	
	public Wash() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPackagename() {
		return packagename;
	}
	public void setPackagename(String packagename) {
		this.packagename = packagename;
	}
	public float getCost() {
		return cost;
	}
	public void setCost(float cost) {
		this.cost = cost;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	@Override
	public String toString() {
		return "Wash [id=" + id + ", packagename=" + packagename + ", cost=" + cost + ", description=" + description
				+ "]";
	}
	
	
	
	
	
	
	
	
}
