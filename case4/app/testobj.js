define(["dojo/_base/declare"], function(declare) {
    return declare("Testobj", null,  {
        constructor : function() {

        },

        title: "testobj",

        testMethod: function() {
            alert(this.title);
        }
    });
});

/*
declare("Testobj", null,  {
    title: "testobj",

    testMethod: function() {
        alert(this.title);
    }
});
*/
