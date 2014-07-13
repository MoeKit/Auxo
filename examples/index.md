# Demo

---

## Normal usage

````javascript
seajs.use('index', function(Auxo) {

    Auxo.ready().then(function(next,arg){
        console.log('next argument is ',arg);
    });

    Auxo.ready().then(function(next,arg){
           console.log('next argument is ',arg);
     });

});
````
