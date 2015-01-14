'use strict';

/* jasmine specs for controllers go here */
describe('Angular1View controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('wex1View'));

  describe('ExpensesSearchCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('expenses').
          respond({ result:[
                    {
                    id: 1,
                    category: 'Pharmacy',
                    description: 'Pain Reliever 123',
                    date: '2012-01-20T18:25:43.511Z',
                    amount: '10.50',
                    provider: {
                                name: "CVS",
                                address: "1048 Farmington Ave, West Hartford, CT 06107"
                     }
                },{
                    id: 2,
                    category: 'Pharmacy',
                    description: 'Bandages 456',
                    date: '2012-02-18T18:25:43.511Z',
                    amount: '5.60',
                            provider: {
                                name: "CVS",
                                address: "1048 Farmington Ave, West Hartford, CT 06107"
                            }
                }]
              });
      $httpBackend.expectGET('app/partials/expenses.html').respond( '<html/>');

      scope = $rootScope.$new();
      ctrl = $controller('ExpensesSearchCtrl', {$scope: scope});
    }));


    it('should create "expenses" model with 2 expenses fetched from xhr', function() {
      expect(scope.expenses).toEqualData([]);
      $httpBackend.flush();
      expect(scope.expenses).toEqualData(
          [
                      {
                      id: 1,
                      category: 'Pharmacy',
                      description: 'Pain Reliever 123',
                      date: '2012-01-20T18:25:43.511Z',
                      amount: '10.50',
                      provider: {
                                  name: "CVS",
                                  address: "1048 Farmington Ave, West Hartford, CT 06107"
                       }
                  },{
                      id: 2,
                      category: 'Pharmacy',
                      description: 'Bandages 456',
                      date: '2012-02-18T18:25:43.511Z',
                      amount: '5.60',
                              provider: {
                                  name: "CVS",
                                  address: "1048 Farmington Ave, West Hartford, CT 06107"
                              }
                  }]
                );
    });



  });


});
