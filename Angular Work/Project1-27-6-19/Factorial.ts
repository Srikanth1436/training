class factorial{
    fac(num:number){
        var f:number=1;
        var i:number;
        if(num!=0)
        {
        for(i=1;i<=num;i++){
            f=f*i;
        }
        }
    console.log("factorial numer of  "+num+"is:  "+f);
    }
    }
    
    var o=new factorial();
    o.fac(5);
    
    