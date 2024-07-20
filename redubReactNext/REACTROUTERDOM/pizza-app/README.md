> Requirment and Feature
- where user can order one more pizza from menu
- Requirment no user account and no login : user just input there name before login
- the pizza menu will be change if page loaded.
- user can add multiple pizza in cart before order.
- for ordering requirment - name,mobile, and adress
- if possible gps location should also will provide to maik delivery eassy
- user can mark thier order "priority" for an additional 20% cart price.
- order made sending post request with the ored date(user Data + selected pizza) to the api
- payments are made on deliver
- each order will be get unique id that should display so uder can look up thier order.
- USER,MENU,CART,ORDER


> divide application into pages
- HOME '/' (Global Ui)
- Pizza Menu '/menu' (Menu is fetching from API)
- cart '/cart' (just store in app no need Api)
- placing a new order '/order/new (fetch and submitting)
- looking up an order '/order/:orderid
::::::::::::::Page Connection :::::::::::::::::::::::::
Home ---- User(page)
Menu --------- Menu
cart -------- cart
order ------placing new order and order

> devide application into feature category.
- thik about state menagment and data flow

> Focus On which Liberay actualy need to be use
- tailwincss
- rect-router-dom
- Redux (use for State menagment)