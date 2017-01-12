package com.zuehlke.ng2retroboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan
@SpringBootApplication
public class Ng2RetroBoardApplication {

	public static void main(String[] args) {

		SpringApplication.run(Ng2RetroBoardApplication.class, args);
	}
}
