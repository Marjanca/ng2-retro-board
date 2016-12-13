package com.zuehlke.ng2board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.zuehlke.ng2board.domain.User;

@SpringBootApplication
public class Ng2boardApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ng2boardApplication.class, args);
		User user1 = new User(1,"admin","admin");
		User user2 = new User(2,"pera","pera");
		User user3 = new User(3,"mika","mika");
	}
}
