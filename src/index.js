
var Searchbar = require('./model/Searchbar');
var SearchbarView = require('./view/SearchBarView');

var Backbone = require('backbone');
var _ = require('underscore');


module.exports = Backbone.View.extend({
    initialize(o) {
        this.sb = new Searchbar(o);
        this.sbv = new SearchbarView({model:this.sb});
        _.bindAll(this,'onInput','onChange');
    },

    updateCollection(collection) {
        this.sb.updateCollection(collection);
    },
    
    getResults() {
        return this.sb.get('filtered');
    },

    onInput(fn) {
        this.sb.set('onInputCallback',fn);
    },

    onChange(fn) {
        this.sb.set('onChangeCallback',fn);
    },
    
    render() {
        return this.sbv.render();
    }
});