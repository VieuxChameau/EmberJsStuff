var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
App.Router.map(function () {
    this.route('credits', { path: '/thanks' });
    this.route('about');
});
App.IndexController = Ember.Controller.extend({
    productsCount: 42,
    logo: 'images/logo-small.png',
    time: function () {
        return (new Date()).toDateString();
    }.property()
});

App.AboutController = Ember.Controller.extend({
    contactName : 'VieuxChameau',
    avatar : 'images/avatar.png',
    open : function(){
        var currentDay = (new Date()).getDay();
        if (currentDay === 0) {
            return "The store is close on Sunday";
        }
        return  "Store open";
    }.property()
});
