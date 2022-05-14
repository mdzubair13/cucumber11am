package org.runnerclass;

import org.demo.JVMReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\resources",
glue="org.demo",dryRun=false,monochrome= true,strict=false,snippets=SnippetType.CAMELCASE,
tags="@newaccount",
plugin= {"html:C:\\Users\\zubee\\ClassWorkSpace\\Cucumber11.30am\\reports\\HTMLreport",
		"json:C:\\Users\\zubee\\ClassWorkSpace\\Cucumber11.30am\\reports\\json\\facebook.json",
		"junit:C:\\Users\\zubee\\ClassWorkSpace\\Cucumber11.30am\\reports\\junit\\fb.xml",
		"rerun:src\\test\\resources\\Rerun\\failed.txt"})
		

public class RunAll {
	
	
	@AfterClass
	public static void report() {
	
		JVMReport.generateJVMreport("C:\\Users\\zubee\\ClassWorkSpace\\Cucumber11.30am\\reports\\json\\facebook.json");
	}

	
	
	
	
}
