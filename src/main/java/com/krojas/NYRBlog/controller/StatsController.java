package com.krojas.NYRBlog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.krojas.NYRBlog.GamesList;

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
}
