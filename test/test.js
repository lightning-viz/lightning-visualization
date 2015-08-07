/* global describe, it */
'use strict';

var expect = require('expect.js');
var Viz = require('..');

describe('line-viz', function(){

    it('renders canvas with data', function(){
        document.createElement('div');

        var CustomViz = Viz.extend({

            formatData: function(data) {
                return data;
            },

            init: function() {
            }
        })

        var viz = new CustomViz('div');
        expect(viz).to.be.a(CustomViz);
    });

});
