var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
App.Router.map(function () {
    this.route('credits', { path: '/thanks' });
    this.resource('products', function() {
        this.resource('product', { path: '/:title' });
    });
    this.resource('contacts', function(){
        this.resource('contact', { path: '/:name' });
    });
});
App.IndexController = Ember.Controller.extend({
    productsCount: 42,
    logo: 'images/logo-small.png',
    time: function () {
        return (new Date()).toDateString();
    }.property()
});


App.ProductsRoute = Ember.Route.extend({
    model: function () {
        return App.PRODUCTS;
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function(params) {
        return App.PRODUCTS.findBy('title', params.title);
    }
});

App.ContactsRoute = Ember.Route.extend({
    model: function () {
        return App.CONTACTS;
    }
});

App.ContactsIndexController = Ember.Controller.extend({
    contactName: 'VieuxChameau',
    avatar: 'images/avatar.png',
    open: function () {
        var currentDay = (new Date()).getDay();
        if (currentDay === 0) {
            return "The store is close on Sunday";
        }
        return "Store open";
    }.property()
});

App.ContactRoute = Ember.Route.extend({
    model: function(params) {
        return App.CONTACTS.findBy('name', params.name);
    }
});

App.PRODUCTS = [
    {
        title: 'Flint',
        price: 99,
        description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
        isOnSale: true,
        image: 'images/products/flint.png'
    },
    {
        title: 'Kindling',
        price: 249,
        description: 'Easily combustible small sticks or twigs used for starting a fire.',
        isOnSale: false,
        image: 'images/products/kindling.png'
    }
];
App.CONTACTS = [
    {
        name: 'Giama',
        avatar: 'images/contacts/giamia.png',
        about: 'Giama'
    },
    {
        name: 'anostagia',
        avatar: 'images/contacts/anostagia.png',
        about: 'anostagia'
    }];