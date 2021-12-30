package com.adminservice.service;

import java.util.List;

import com.adminservice.model.AdminDetails;


import com.adminservice.model.Wash;
import com.adminservice.model.washerRating;



public interface AdminService {

	
	//admin
	public List<AdminDetails> findAll();
    public void updateadmin(AdminDetails admin);
    public void deleteadmin(int id);
    public void addadmin(AdminDetails admin);

    
     //Washpacks    
	public void save(Wash wash);
	public List<Wash> getwashers();
	public void deletepack(int id);
	public void updatepacks(Wash wash);

	//Ratings
	
	public void save(washerRating ratings);
	public List<washerRating> findAllRatings();
	
	/*
	 * //Order public void addOrder(OrderDetails order);
	 * 
	 * public void cancelorder(int id);
	 */
	
	
}
