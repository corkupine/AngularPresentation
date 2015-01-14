'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Angular1View App', function() {

  it('should redirect index.html to index.html#/expenses', function() {
    browser.get('/');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/expenses');
      });
  });


    describe('expense detail view', function() {

      beforeEach(function() {
        browser.get('/#/expenses/4');
        browser.sleep(3000);
      });


      it('should display expense # 4', function() {
        expect(browser.findElement(By.xpath("//span[@data-id='4']")).getText()).toBe('Expense Details for 4 ....');
      });
    });

    describe('expense editing', function() {

      beforeEach(function() {
        browser.get('/#/expenses/5/edit');
        browser.sleep(3000);
      });


      it('should display expense # 5', function() {
        expect(browser.findElement(By.xpath("//span[@data-id='5']")).getText()).toBe('Expense Details for 5 ....');
      });


      function clearInput(elem, length) {
          length = length || 100;
          var backspaceSeries = '';
          for (var i = 0; i < length; i++) {
              backspaceSeries += protractor.Key.BACK_SPACE;
          }
          elem.sendKeys(backspaceSeries);
      }

      it('should display input field for amount 110.85', function() {
        var input = browser.findElement(By.xpath("//input[@name='amount']"));

        expect(input.getAttribute('value')).toBe('110.85');

        clearInput(input, input.getAttribute('value').length);
        input.sendKeys('123');
        browser.sleep(2000);
        expect(input.getAttribute('value')).toBe('123');

       });
    });
});
