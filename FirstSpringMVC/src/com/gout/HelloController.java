package com.gout;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {

	
	@RequestMapping("welcome.htm")
	protected ModelAndView handleRequestInternal(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("dfdsfdsfds");
		ModelAndView mv = new ModelAndView("HelloPage");
		 
		 mv.addObject("welcomeMessage","Hi User, Welcome to the first Spring  MVC Aplication");
		 return mv;
	} 
	
	@RequestMapping("/welcome/{country}/{userName}")
	protected ModelAndView helloWorld(@PathVariable("userName") String name, @PathVariable("country") String country) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("dfdsfdsfds");
		ModelAndView mv = new ModelAndView("HelloPage");
		 
		 mv.addObject("welcomeMessage","Hi " + name + ", Welcome to the " + country + " first Spring  MVC Aplication");
		 return mv;
	} 
	
	@RequestMapping("/welcome1/{country}/{userName}")
	protected ModelAndView helloWorld1(@PathVariable Map<String,String> pathVars) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("dfdsfdsfds");
		ModelAndView mv = new ModelAndView("HelloPage");
		 
		 mv.addObject("welcomeMessage","Hi " + pathVars.get("userName") + ", Welcome to the " + pathVars.get("country") + " first Spring  MVC Aplication");
		 return mv;
	} 

}
