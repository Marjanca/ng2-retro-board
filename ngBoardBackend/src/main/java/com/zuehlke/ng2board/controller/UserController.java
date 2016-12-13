package com.zuehlke.ng2board.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zuehlke.ng2board.domain.User;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
	
	
//	@GetMapping
//	public ResponseEntity<List<User>> getAllUsers() {
//		return new ResponseEntity<>();
//	}
//
//	@GetMapping("{id}")
//	public ResponseEntity<User> getUser(@PathVariable long id) {
//		User user = UserDAO.getById(id);
//		return new ResponseEntity<>(user, user == null ? HttpStatus.BAD_REQUEST : HttpStatus.OK);
//	}

//	@GetMapping("{username}")
//	public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
//		User user = UserDAO.getByUsername(username);
//		return new ResponseEntity<>(user, user == null ? HttpStatus.BAD_REQUEST : HttpStatus.OK);
//	}

//	@PostMapping
//	public ResponseEntity<User> insertOrUpdateUser(@RequestBody User user) {
//		User test = UserDAO.getById(user.getId());
//		if (test == null) {
//			long result = UserDAO.insert(user);
//			if (result == -1)
//				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
//			User u = UserDAO.getById(result);
//			return new ResponseEntity<>(u, HttpStatus.OK);
//		} else {
//			long result = UserDAO.update(user);
//			return new ResponseEntity<>(user, result == 1 ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
//		}
//	}
//
//	@DeleteMapping("{id}")
//	public ResponseEntity<Long> deleteUser(@PathVariable long id) {
//		long result = UserDAO.delete(id);
//		return new ResponseEntity<>(result, result == 1 ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
//	}
}