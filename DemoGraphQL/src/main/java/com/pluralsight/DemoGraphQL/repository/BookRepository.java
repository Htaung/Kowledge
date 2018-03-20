package com.pluralsight.DemoGraphQL.repository;

import org.springframework.data.repository.CrudRepository;

import com.pluralsight.DemoGraphQL.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> { }