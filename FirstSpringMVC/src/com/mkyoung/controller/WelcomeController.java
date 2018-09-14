package com.mkyoung.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


//https://www.mkyong.com/spring-mvc/spring-mvc-internationalization-example/
@Controller
public class WelcomeController {
	
	@RequestMapping(value="/welcomeForm.htm", method = RequestMethod.GET)
	public ModelAndView getWelcome(){
		ModelAndView model = new ModelAndView("WelcomeForm");
		
		return model;
	}

}
