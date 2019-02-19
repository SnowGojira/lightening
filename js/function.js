/*定义类Person2*/
     function Person2(){

         }

    /*使用原型方式给类定义public属性和public方法更加优雅的写法*/
     Person2.prototype = {
             name:"",//public属性
             age:0,//public属性
             weight:0,//public属性
             height:0,//public属性
             /*public方法*/
         init:function(_name,_age,_weight,_height) {
                this.name = _name;
                this.age = _age;
                this.weight=_weight;
                this.height=_height;
                document.writeln("this.name="+this.name+",this.age="+this.age+",this.weight="+this.weight+",this.height="+this.height);
             },
        /*public方法*/
          show:function(){
                document.writeln("show method");
             }
    };