package com.zuehlke.ng2retroboard.repository;

import com.zuehlke.ng2retroboard.domain.ActionItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by vlto on 12/19/2016.
 */
@RepositoryRestResource(path = "actionitems", collectionResourceRel = "actionitems")
public interface ActionItemRepository extends CrudRepository<ActionItem, Long> {
}
