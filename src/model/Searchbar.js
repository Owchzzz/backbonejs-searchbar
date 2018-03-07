var Backbone = require('backbone');
var Items = require('./Items');
var _ = require('underscore');
module.exports = Backbone.Model.extend({
    
    initialize(o) {
        this.collection = new Items(o.items);
        this.set('items',o.collection);
        this.set('searchModel',o.searchModel);
        this.set('filtered',[]);
        this.set('term','');
        this.set('onChangeCallback',false);
        this.set('onInputCallback',false);
        this.on("change:term",this.search);

    },

    updateCollection(items) {
        this.collection = new Items(items);
    },

    search() {
        var term = this.get('term');
        var searchModel = this.get('searchAttr');
        var filter = this.collection.filter(function(model){
            var vModel = model.get(searchModel).toLowerCase();
            return ~vModel.search(term.toLowerCase());
            
        })
        this.set('filtered',filter);
        if(this.get('onInputCallback')){
            console.log('changecallback fired:');
            var fn = this.get('onInputCallback');
            fn({resultSet:filter});
        }
    },

    add(item) {
        var items = this.get('items');
        items.push(item);
    },

    remove(item) {
        var items = this.get('items');
    }
});