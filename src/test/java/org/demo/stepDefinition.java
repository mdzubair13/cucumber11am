package org.demo;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.util.HSSFColor.RED;
import org.base.HelperClass;
import org.openqa.selenium.By;
import org.pojoclasses.CreatAccountPojo;
import org.pojoclasses.FbLoginPojoClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition extends HelperClass {

	@Given("check fb function through chrome Browser")
	public void checkFbFunctionThroughChromeBrowser() {
	    launchChromeBrowser();
	    maxi();
	}

	@When("To Click creat new account button")
	public void toClickCreatNewAccountButton() {
	  url("https://www.facebook.com/");
	
	}

	@Then("To click sign up button")
	public void toClickSignUpButton() {
	  
	driver.findElement(By.xpath("(//a[@role='butto'])[]"));
		driver.findElement(By.xpath("(//button[@type='submit'])[2]"));
		
	}

	

	@Then("To click login button")
	public void toClickLoginButton() {
					FbLoginPojoClass f= new FbLoginPojoClass();
					btnClick(f.getLoginBTn());
							
	}

	@When("To Validate invalid username and invalid password")
	public void toValidateInvalidUsernameAndInvalidPassword(io.cucumber.datatable.DataTable d) {
		url("https://www.facebook.com/");
	    //2D list
		
		List<List<String>> alldata = d.asLists();
		String user = alldata.get(2).get(2);
		String pass = alldata.get(1).get(1);
		
		FbLoginPojoClass f= new FbLoginPojoClass();
		fillText(f.getTxtuser(), user);
		fillText(f.getTxtpass(), pass);
	
	}

@When("To Validate invalid username and valid password")
public void toValidateInvalidUsernameAndValidPassword(io.cucumber.datatable.DataTable d) {
	//1D Map
	url("https://www.facebook.com/");		
	Map<String,String > asMap = d.asMap(String.class, String.class);
				
				String username = asMap.get("email");
				String password = asMap.get("pass");
				

				FbLoginPojoClass f= new FbLoginPojoClass();
				fillText(f.getTxtuser(), username);
				fillText(f.getTxtpass(), password);
				
				
	
}


@When("To Validate valid username and valid password")
public void toValidateValidUsernameAndValidPassword(io.cucumber.datatable.DataTable d) {
	//2D Map
	url("https://www.facebook.com/");
	List<Map<String, String>> alldata = d.asMaps(String.class, String.class);
	
	
	
	String user = alldata.get(2).get("email");
	String  pass = alldata.get(2).get("pass");
	
	FbLoginPojoClass f= new FbLoginPojoClass();
	fillText(f.getTxtuser(), user);
	fillText(f.getTxtpass(), pass);
	

}



}
