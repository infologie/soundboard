define("views/soundboard.a52b7194",function(require){"use strict";var e,i=require("marionette"),s=require("views/filter.4bb05f38"),t=require("views/random.8bf4698b"),n=require("views/sounds.e61b9c22"),o=require("hbs!templates/soundboard.4dd5a243");return e=i.LayoutView.extend({template:o,regions:{regFilter:"#filter",regRandom:"#random",regList:"#list"},initialize:function(e){this.slug="undefined"!=typeof e.slug?e.slug:""},onShow:function(){this.showChildView("regFilter",new s),this.showChildView("regRandom",new t),this.showChildView("regList",new n({slug:this.slug}))}})});