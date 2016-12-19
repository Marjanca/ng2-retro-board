package com.zuehlke.ng2retroboard.repository;

import com.zuehlke.ng2retroboard.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by ugpa on 12/16/2016.
 */
@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface UserRepository extends CrudRepository<User, Long> {
}
