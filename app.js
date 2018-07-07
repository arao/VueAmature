new Vue({
    el:'#vue-app',
    data:{
        name: "Frost",
        job: "new Job",
        website: "https://www.thenetninja.co.uk",
        websiteTag : '<a href= "https://www.thenetninja.co.uk"> The Net Ninja</a>',
        age: 21,
        x : 0,
        y : 0,
        location: 'delhi',
        a:0,
        b:0,
        available: false,
        nearby: false,
        error:false,
        success:false,
        characters:['Mario', 'LuiGi', 'Yoshi', 'Bowser'],
        ninjas:[{name:'Ryu', age:22}, {name:'Yoshi', age:15}, {name:'Nobita', age:12}]
    },
    methods:{
    	greet : function(time){
    		return "good " + time +" " + this.name;
    	},
        add: function (x) {
            x = parseInt(x);
    	    this.age+= x;
        },
        subtract: function (x ) {
    	    x = parseInt(x);
            this.age -= x;
        },
        updateXY: function (event) {
    	    // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click : function () {
            alert('anchor click received');
        },
        logName: function(event){
    	    console.log('Name Received');
    	    console.log(event)
        },
        logAge: function (event) {
            console.log('Age Received');
            console.log(event);
        },
        logLocation : function(event){
    	    console.log('you logged location');
        }

    },
    computed:{
        addToA: function () {
            console.log('Add TO A');
            return this.a+this.age;
        },
        addToB : function () {
            console.log('Add TO B');
            return this.b + this.age;
        },
        compClasses : function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})