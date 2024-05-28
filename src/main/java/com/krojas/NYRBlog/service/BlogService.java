package com.krojas.NYRBlog.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.krojas.NYRBlog.info.Blog;
import com.krojas.NYRBlog.repository.BlogRepository;

@Service
public class BlogService {

	private BlogRepository blogRepo;
	
	public BlogService(BlogRepository blogRepo) {
		this.blogRepo = blogRepo;
	}
	
	public List<Blog> getAllBlogs() {
		return blogRepo.findAll();
	}
	
	// Retrieve the three most recent blogs published
	public List<Blog> getRecentBlogs(){
		return blogRepo.findFirst3ByOrderByPublishDateDesc();
	}
	
	// Retrieves a set of three blogs based on current page
//	public List<Blog> getBlogSet(){
//		
//	}
	
	public void addNewBlog(Blog newBlog) {
		blogRepo.save(newBlog);
	}
	
	public void deleteBlog(Integer BlogId) {
		blogRepo.deleteById(BlogId);
	}
	
}
