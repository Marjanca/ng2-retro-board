package com.zuehlke.ng2board.domain;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;

	public User() {
	}

	public User(int id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username
	 *            the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password
	 *            the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

}
