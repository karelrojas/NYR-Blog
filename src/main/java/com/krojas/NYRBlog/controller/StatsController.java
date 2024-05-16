package com.krojas.NYRBlog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.krojas.NYRBlog.info.GamesList;
import com.krojas.NYRBlog.info.PostSeasonStats;

@RestController
public class StatsController {
		
	@GetMapping(value = "/games")
	public GamesList getGames() {
		String uri = "https://api-web.nhle.com/v1/scoreboard/NYR/now";
		RestTemplate resTemp = new RestTemplate();
		
		GamesList games = resTemp.getForObject(uri, GamesList.class);
		
		System.out.println(games);
		return games;
	}
	
	@GetMapping(value = "/postseason")
	public PostSeasonStats getPostSeasonRecord() {
		String uri = "https://api-web.nhle.com/v1/club-stats/NYR/20232024/3";
		RestTemplate resTemp = new RestTemplate();
		
		PostSeasonStats stats = resTemp.getForObject(uri, PostSeasonStats.class);
		
		System.out.println(stats);
		return stats;
	}
}
