// Requires Ember-Data

RealTeam.Store = DS.Store.extend({
  revision: 11,
  //adapter: 'DS.FixtureAdapter'
  //adapter: 'RealTeam.SocketAdapter'
  adapter: 'DS.RESTAdapter'
});