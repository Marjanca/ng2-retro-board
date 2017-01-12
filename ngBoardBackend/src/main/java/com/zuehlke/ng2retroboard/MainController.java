package com.zuehlke.ng2retroboard;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ugpa on 12/16/2016.
 */
@RestController
@RequestMapping(value = "/", method = RequestMethod.GET)
public class MainController {

    public String index() {
        return "index";
    }

}
