package com.krojas.NYRBlog.info;

import java.util.List;

public class GameInfo {

	private String date;
	private List<Game> games;
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public List<Game> getGames() {
		return games;
	}
	public void setGames(List<Game> games) {
		this.games = games;
	}
}
