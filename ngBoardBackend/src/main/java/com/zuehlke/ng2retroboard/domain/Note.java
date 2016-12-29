package com.zuehlke.ng2retroboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by vlto on 12/19/2016.
 */
@Entity
public class Note {

    @Id
    @GeneratedValue
    private Long id;
    private Long boardId;
    private Long authorId;
    private String content;
    private int posX;
    private int posY;
    private int positiveVotes;
    private int negativeVotes;
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

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) { this.authorId = authorId; }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

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

    public int getPositiveVotes() { return positiveVotes; }

    public void setPositiveVotes(int positiveVotes) { this.positiveVotes = positiveVotes; }

    public int getNegativeVotes() { return negativeVotes; }

    public void setNegativeVotes(int negativeVotes) { this.negativeVotes = negativeVotes; }

    public int getzIndex() { return zIndex; }

    public void setzIndex(int zIndex) { this.zIndex = zIndex; }
}
