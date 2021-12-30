package com.adminservice.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.adminservice.model.AdminDetails;
import com.adminservice.model.OrderDet;
import com.adminservice.model.Wash;
import com.adminservice.model.washerRating;
import com.adminservice.service.AdminServiceImpl;


import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/admin")
public class Controller {

	@Autowired
	private AdminServiceImpl service;
	
	
	@Autowired
	private RestTemplate restTemplate;
	

	// Admin

	@PostMapping("/addadmin")
	public String addadmin(@RequestBody AdminDetails admin) {
		service.addadmin(admin); // User will save details
		return "Admin saved Successfully with id :" + admin.getId();
	}

	@PutMapping("/update")
	public String updateDetails(@RequestBody AdminDetails admin) {
		service.updateadmin(admin);
		return "update Succesfully";

	}

	
	/*
	 * @GetMapping("/alladmins") public List<AdminDetails> getadmin() { return
	 * service.findAll(); }
	 */
	 

	  
	  @GetMapping("/alladmins")
	  @ApiOperation(value = "To Get all User Details")
	  public List<AdminDetails> findAll() {
	  return service.findAll();
	  }
	  
	

	@DeleteMapping("/delete")
	public String deleteadmin(@RequestParam int id) {
		service.deleteadmin(id);
		return "delete Succesfully";
	}

	// Wash packs

	@PostMapping("/addpack")
	public String savepack(@RequestBody Wash wash) {
		service.save(wash);// user will save his details
		return "pack added Succesfully";
	}

	/*
	 * @GetMapping("/allpacks") public List<Wash> findAllpacks() { return
	 * service.findAllpacks(); }
	 */
	
	@GetMapping("/allpacks")
	public List<Wash> findAllwashers() {
		return service. getwashers();
	}
	
	
	
	
	
	@DeleteMapping("/packdelete")

	public String deletepack(@RequestBody Wash wash, @RequestParam int id) {
		service.deletepack(id);
		return "deleted pack Succesfully";
	}

	@PutMapping("/packupdate")
	public String updatepacks(@RequestBody Wash wash, @RequestParam int id) {
		service.updatepacks(wash);
		return "updated pack Succesfully";
	}

	// Ratings

	
	@PostMapping("/addratings")
	@ApiOperation(value = "To Add rating Details")
	public String saveratings(@RequestBody washerRating rating) {
	service.save(rating);
	return "Thanks for ur valuable feedback!!!";
	}



	@GetMapping("/rating/allratings")
	public List<washerRating> findAllRatings() {
		return service.findAllRatings();
	}

	
	
	@GetMapping("/allorders")
	public List<OrderDet> getallorders(){
	String baseurl="http://localhost:8084/od/allorders";
	OrderDet[] allorders=restTemplate.getForObject(baseurl, OrderDet[].class);

	return Arrays.asList(allorders);
	}
	@GetMapping("/allwashers")
	public List<Wash> getallwashers(){
	String baseurl="http://localhost:8083/wash/allwashers";
	Wash[] allwashers=restTemplate.getForObject(baseurl, Wash[].class);

	return Arrays.asList(allwashers);




	}
	
	
	
	
	
	
	
	
	
	
	
}
	//Orders
	
	

	/*
	 * @PostMapping("/addorder") public String addOrder(@RequestBody OrderDetails
	 * order) { service.addOrder(order);
	 * 
	 * return "order placed with washer and will be processed soon" +order; }
	 * 
	 * 
	 * 
	 * @DeleteMapping("/cancelorder") public String cancelorder(@RequestParam int
	 * id) { service.cancelorder(id); return "order cancel Succesfully"; }
	 * 
	 * 
	 * 
	 * 
	 * }
	 */

