package com.orderservice.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.orderservice.model.OrderDet;
import com.orderservice.repository.orderRepo;

@Service
public class orderServiceImpl implements OrderService {

	@Autowired
	private orderRepo repo;

	

	@Override
	public void addOrder(OrderDet order) {
		// TODO Auto-generated method stub
		repo.save(order);
	}

	








	public void deleteById(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);;
	}









	@Override
	public List<OrderDet> details() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}










	




	



	

	
}
