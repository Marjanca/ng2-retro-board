package com.zuehlke.ng2retroboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by vlto on 12/19/2016.
 */
@Entity
public class ActionItem {

    @Id
    @GeneratedValue
    private Long id;
    private Long boardId;
    private Long assigneeId;
    private String content;
    private int posX;
    private int posY;
    private int zIndex;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBoardId() {
        return boardId;
    }

    public void setBoardId(Long boardId) {
        this.boardId = boardId;
    }

    public Long getAssigneeId() {
        return assigneeId;
    }

    public void setAssigneeId(Long assigneeId) {
        this.assigneeId = assigneeId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) { this.content = content; }

    public int getPosX() {
        return posX;
    }

    public void setPosX(int posX) {
        this.posX = posX;
    }

    public int getPosY() {
        return posY;
    }

    public void setPosY(int posY) {
        this.posY = posY;
    }

    public int getzIndex() { return zIndex; }

    public void setzIndex(int zIndex) { this.zIndex = zIndex; }
}
