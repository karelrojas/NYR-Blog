package com.krojas.NYRBlog.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.krojas.NYRBlog.info.GamesList;
import com.krojas.NYRBlog.info.Goalies;
import com.krojas.NYRBlog.info.SeasonStats;

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
	
	@GetMapping(value = "/season")
	public ArrayList<Integer> getSeasonRecord() {
		String uri = "https://api-web.nhle.com/v1/club-stats/NYR/20232024/2";
		RestTemplate resTemp = new RestTemplate();
		
		SeasonStats regStats = resTemp.getForObject(uri, SeasonStats.class);
		ArrayList<Integer> record = new ArrayList<Integer>();
		for(int i = 0; i < 3; i++) {
			record.add(0);
		}
		for(Goalies g : regStats.getGoalies()) {
			record.set(0, record.get(0) + g.getWins());
			record.set(1, record.get(1) + g.getLosses());
			record.set(2, record.get(2) + g.getOvertimeLosses());
		}
		System.out.println(record);
		return record;
	}
	
	@GetMapping(value = "/postseason")
	public SeasonStats getPostSeasonRecord() {
		String uri = "https://api-web.nhle.com/v1/club-stats/NYR/20232024/3";
		RestTemplate resTemp = new RestTemplate();
		
		SeasonStats postStats = resTemp.getForObject(uri, SeasonStats.class);
		
		System.out.println(postStats);
		return postStats;
	}
}
