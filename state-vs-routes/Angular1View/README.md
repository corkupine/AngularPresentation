# Angular1View
Changes to express-base

This project showcase an example using $stateProvider for user interfaces involving nested states.
ui-router is an open source component available form https://github.com/angular-ui/ui-router
In this example user can expand/collapse an expense from the list to see further details.
Expanding an item changes the URL, e.g. expanding expense id 3 will change URL to /#/expenses/view/3

Compared to default $routeProvider based example notice that the list remains visible while viewing details.
The same approach allows transitioning to editing of an exapense as well using URL /#/expenes/edit/3

