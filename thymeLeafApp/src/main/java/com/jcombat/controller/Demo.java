package com.jcombat.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Demo {
 
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public ModelAndView showMessage() {
		ModelAndView model = null;
		try {
			Map<String, String> sampleDropdownMap = new HashMap<String, String>();
			sampleDropdownMap.put("Java", "java");
			sampleDropdownMap.put("PHP", "php");
			model = new ModelAndView("hello", "dropDownItems", sampleDropdownMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return model;
	}
	
	/***********************************************************
	 * Controller mapping to render the landing page - index.html
	 ***********************************************************/
	@RequestMapping(value="/index", method=RequestMethod.GET)
	public ModelAndView showLandingPage() {
		ModelAndView model = null;
		try {
			model = new ModelAndView("index");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return model;
	}
}