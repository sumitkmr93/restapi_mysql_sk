var webdriver = require('selenium-webdriver');
 
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
 
driver.get('https://productsdemoazure.azurewebsites.net');
// driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.quit();