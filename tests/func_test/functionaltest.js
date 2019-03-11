
var assert = require('assert');
let chai = require('chai');
let should = chai.should();
// test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
{ describe , before , after , it }  require('selenium-webdriver/testing');
 
describe('Open webapp', ()=>{
   it('should work', ()=>{
   var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).build();
      driver.get('https://azuredevopsdemosumit.azurewebsites.net').then(function(){
         driver.getTitle().then(function(title){
            title.should.equal('Rest API Demo')
            console.log('Functional Test Passed');
            driver.quit();
         });    
      });
  });
});
