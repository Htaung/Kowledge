package com.pluralsight.DemoGraphQL.repository;

import org.springframework.data.repository.CrudRepository;

import com.pluralsight.DemoGraphQL.model.Author;

public interface AuthorRepository extends CrudRepository<Author, Long> {
}
