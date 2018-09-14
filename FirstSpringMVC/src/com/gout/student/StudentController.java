package com.gout.student;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StudentController {
	
	@InitBinder
	public void InitBinder(WebDataBinder binder){ 
		//binder.setDisallowedFields(new String[] {"studentMobile"});
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy****MM****dd");
		binder.registerCustomEditor(Date.class, "studentDOB", new CustomDateEditor(dateFormat, false));
		binder.registerCustomEditor(String.class, "studentName", new StudentNameEditor());
	}
	
	@RequestMapping(value="/admissionForm.htm", method = RequestMethod.GET)
	public ModelAndView getAdmissionForm(){
		ModelAndView model = new ModelAndView("AdmissionForm");
		
		return model;
	}
	
	@ModelAttribute
	public void addingCommonObject(Model model){
		model.addAttribute("headerName", "Admission Success");
	}
	
	@RequestMapping(value="/submitAdmissionForm.htm", method = RequestMethod.POST)
	public ModelAndView submitAdmissionForm(@RequestParam(value = "studentName", defaultValue = "Aung") String name, @RequestParam("hobby") String hobby ){
		ModelAndView model = new ModelAndView("AdmissionSuccess");
		model.addObject("student1", new Student(name, hobby));
		
		return model;
	}
	
	@RequestMapping(value="/submitAdmissionForm2.htm", method = RequestMethod.POST)
	public ModelAndView submitAdmissionForm(@Valid @ModelAttribute("student1") Student student1, BindingResult result){
			if(result.hasErrors()){
				ModelAndView model = new ModelAndView("AdmissionForm");
				return model;
			}
		ModelAndView model = new ModelAndView("AdmissionSuccess");
		return model;
	}
	
	@RequestMapping(value="/submitAdmissionForm1.htm", method = RequestMethod.POST)
	public ModelAndView submitAdmissionForm(@RequestParam Map<String,String> reqVar){
		ModelAndView model = new ModelAndView("AdmissionSuccess");
		model.addObject("msg" , "Details submitted by you: Name : " + reqVar.get("studentName") + " Hobby: " + reqVar.get("hobby"));
		return model;
	}
}
