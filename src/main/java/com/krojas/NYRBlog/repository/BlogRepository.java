package com.krojas.NYRBlog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krojas.NYRBlog.info.Blog;


public interface BlogRepository extends JpaRepository<Blog, Integer>{

	List<Blog> findFirst3ByOrderByPublishDateDesc();

}
