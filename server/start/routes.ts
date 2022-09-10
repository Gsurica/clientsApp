import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/clients', 'ClientsController').apiOnly();
}).prefix('/api');
