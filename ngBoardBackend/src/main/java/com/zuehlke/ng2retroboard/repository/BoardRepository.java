package com.zuehlke.ng2retroboard.repository;

import com.zuehlke.ng2retroboard.domain.Board;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by vlto on 12/19/2016.
 */
@RepositoryRestResource(path = "boards", collectionResourceRel = "boards")
public interface BoardRepository extends CrudRepository<Board, Long> {
}
