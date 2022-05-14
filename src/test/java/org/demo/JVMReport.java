package org.demo;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static void generateJVMreport(String name) {
		// 1-Step
		File f= new File("C:\\Users\\zubee\\ClassWorkSpace\\Cucumber11.30am\\reports\\JVMreport");
		// 2- Cofiguration CLass
	
		Configuration  c = new Configuration(f, "Facebook");
		c.addClassifications("OS", "Windows");
		c.addClassifications("Tool", "Eclipse");
		c.addClassifications("Lang", "Java");
		c.addClassifications("Date", "28/04/2015");
		// 3 to add json file path
		List<String> l= new ArrayList<String>();
		l.add(name);
		
		
		ReportBuilder r =new ReportBuilder(l, c);
		r.generateReports();
		
	}
	

}
