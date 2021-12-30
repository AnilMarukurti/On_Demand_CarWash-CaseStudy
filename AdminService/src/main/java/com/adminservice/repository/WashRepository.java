package com.adminservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.adminservice.model.Wash;


@Repository
public interface WashRepository extends MongoRepository<Wash, Integer> {

}
