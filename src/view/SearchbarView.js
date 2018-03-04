var Backbone = require('backbone');
var _ = require('underscore');
module.exports = Backbone.View.extend({
    template:_.template(`
    <div class="searchbar">
        <input type="text" class="search" placeholder="" id="searchterm"/>
    </div>`),


    initialize(o) {
        _.bindAll(this,'changeTerm');
        this.$el.html(this.template());
        this.search = this.$el.find('#searchterm');
        this.model = o.model;
        this.search.on('input',this.changeTerm);
        this.search.on('change',this.onChangeCallback);
        this.afterCall = ()=>{};
    },

    changeTerm() {
        this.model.set('term',this.search.val())
        console.log('model term set');
    },

    onChangeCallback() {
        if(this.model.get('onChangeCallback'))
            this.model.onChangeCallback(this.model.get('filtered'));
    },

    render() {
        return this.$el;
    }
});