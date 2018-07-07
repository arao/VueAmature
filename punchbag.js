new Vue({
    el:"#punchbag-app",
    data:{
        health:100,
        ended:false,
        lowHealth: false
    },
    methods:{
        punch:function () {
            this.health -= 10;
            this.ended = this.health <= 0? true : false;
            this.lowHealth = this.health <40 ? true : false;
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
            this.lowHealth = false;
        }
    },
    computed:{

    }
})