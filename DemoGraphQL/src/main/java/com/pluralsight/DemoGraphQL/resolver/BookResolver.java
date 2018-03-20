package com.pluralsight.DemoGraphQL.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.pluralsight.DemoGraphQL.model.Author;
import com.pluralsight.DemoGraphQL.model.Book;
import com.pluralsight.DemoGraphQL.repository.AuthorRepository;

public class BookResolver implements GraphQLResolver<Book> {
	private AuthorRepository authorRepository;

	public BookResolver(AuthorRepository authorRepository) {
		this.authorRepository = authorRepository;
	}

	public Author getAuthor(Book book) {
		return authorRepository.findOne(book.getAuthor().getId());
	}
}
