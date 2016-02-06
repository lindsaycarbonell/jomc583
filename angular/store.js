(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [{
            name: 'Dodecahedron',
            price: 2.95,
            description: 'dodeca whatever',
            canPurchase: false,
            soldOut: true,
            images: [
                {
                full: 'image-full.jpg',
                thumb: 'image-thumb.jpg'
                
                }
            ]
            },

            {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . .",
            canPurchase: false
            },
            
            
               
    ];
    
})();

