
var one = new Vue({
    el: "#vue-app",
    data:{
        output:"Chole Bhature"
    },
    methods:{
        readRef: function () {
            this.output = this.$refs.input.value;
            console.log(this.$refs.text.innerHTML);
        }
    }
});
