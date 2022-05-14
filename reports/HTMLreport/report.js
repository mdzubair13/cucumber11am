$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/createaccount.feature");
formatter.feature({
  "name": "To validate fb funct",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@newaccount"
    }
  ]
});
formatter.scenario({
  "name": "to check create new Accout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@newaccount"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "check fb function through chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.checkFbFunctionThroughChromeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click creat new account button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.toClickCreatNewAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click sign up button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.toClickSignUpButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//a[@role\u003d\u0027butto\u0027])[] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//a[@role\u003d\u0027butto\u0027])[]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d101.0.4951.41)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-RIGKATV\u0027, ip: \u0027192.168.126.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [804f9b0746637a2b31c4eb73b54923be, findElement {using\u003dxpath, value\u003d(//a[@role\u003d\u0027butto\u0027])[]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.41, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\zubee\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59739}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59739/devtoo..., se:cdpVersion: 101.0.4951.41, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 804f9b0746637a2b31c4eb73b54923be\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.demo.stepDefinition.toClickSignUpButton(stepDefinition.java:34)\r\n\tat ✽.To click sign up button(file:src/test/resources/FeatureFiles/createaccount.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});