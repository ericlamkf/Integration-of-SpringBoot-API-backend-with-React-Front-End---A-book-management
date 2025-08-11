package com.bookrestful.learn.repository;

import com.bookrestful.learn.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
