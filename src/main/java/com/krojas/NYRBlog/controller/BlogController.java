package com.krojas.NYRBlog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.krojas.NYRBlog.info.Blog;
import com.krojas.NYRBlog.service.BlogService;

@RestController
public class BlogController {

	private BlogService blogService;
	
	public BlogController(BlogService blogService) {
		this.blogService = blogService;
	}
	
	@GetMapping(value = "/recent-blogs")
	public List<Blog> getRecentBlogs() {
		return blogService.getRecentBlogs();
	}
	
	@GetMapping(value = "/blogs")
	public List<Blog> getAllblogs() {
		return blogService.getAllBlogs();
	}
	
	@PostMapping(value = "/blogs")
	public void addNewBlog(@RequestBody Blog newBlog) {
		blogService.addNewBlog(newBlog);
	}
	
	@DeleteMapping(value = "/blogs/{blogId}")
	public void deleteBlog(@PathVariable Integer blogId) {
		blogService.deleteBlog(blogId);
	}
}
