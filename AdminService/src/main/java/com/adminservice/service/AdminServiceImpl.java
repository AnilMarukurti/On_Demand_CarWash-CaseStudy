package com.adminservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adminservice.model.AdminDetails;


import com.adminservice.model.Wash;
import com.adminservice.model.washerRating;
import com.adminservice.repository.AdminRepository;

import com.adminservice.repository.RatingRepository;
import com.adminservice.repository.WashRepository;

	
@Service
	public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository repo;
    @Autowired
	private WashRepository repo1;
	@Autowired
	private RatingRepository repo2;
	

	@Override
	public List<AdminDetails> findAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}


	@Override
	public void updateadmin(AdminDetails admin) {
		// TODO Auto-generated method stub
		repo.save(admin);
	}

	@Override
	public void deleteadmin(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

	@Override
	public void addadmin(AdminDetails admin) {
		// TODO Auto-generated method stub
		repo.save(admin);
	}

//wash
	@Override
	public void save(Wash wash) {
		// TODO Auto-generated method stub
		repo1.save(wash);
	}

	
	
	@Override
	public List<Wash> getwashers() {
		List<Wash> washer =repo1.findAll();
		System.out.println("Getting data from DB :" +washer);
		return washer;
	}
	
	
	
	
	
	
	/*
	 * @Override public List<Wash> findAllpacks() { // TODO Auto-generated method
	 * stub return repo1.findAll(); }
	 */

	@Override
	public void deletepack(int id) {
		// TODO Auto-generated method stub
		repo1.deleteById(id);
	}

	@Override
	public void updatepacks(Wash wash) {
		// TODO Auto-generated method stub
		repo1.save(wash);
	}

	//Ratings

	
	
	

	@Override
	public void save(washerRating ratings) {
		// TODO Auto-generated method stub
		repo2.save(ratings);
	}
	
	@Override
	public List<washerRating> findAllRatings() {
		// TODO Auto-generated method stub
		return repo2.findAll();
	}

	
	
	/*
	 * //order
	 * 
	 * 
	 * @Override public void cancelorder(int id) { // TODO Auto-generated method
	 * repo3.deleteById(id); }
	 * 
	 * 
	 * @Override public void addOrder(OrderDetails order) { // TODO Auto-generated
	 * method stub repo3.save(order); }
	 * 
	 */


	
	 
	

	

	

	


	


}