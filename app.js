Vue.component('greeting', {
    template: '<p> {{name}} is here. <button v-on:click="changeName"> Change Name </button></p>',
    data : function(){
        return {
            name : "Yashida"
        }
    },
    methods :{
        changeName : function () {
            this.name = "KoKilo"
        }
    }
});

var one = new Vue({
    el: "#vue-app-one",

});

var two = new Vue({
    el: "#vue-app-two",

});

