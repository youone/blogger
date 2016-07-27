'use strict'

$.widget("namespace.myWidget", {

    //default options
    options: {opt1: 'opt1', opt2: 2},

    //constructor
    _create: function () {

        //a "public" variable
        this.variable = 'var1';

        //jQuery object containing widget element
        console.log(this.element);

        //the widget options object
        console.log(this.options);
    },

    //method
    method1: function () {
        var WIDGET = this;
    },

    //destructor
    _destroy: function () {
    }
});

$(document).ready(function () {
    $('<div>').myWidget({opt3: 'opt3'});
});

    
        