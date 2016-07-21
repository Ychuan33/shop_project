(function(){

	angular
		.module('shopApp')
		.service('productSrv',ProductService);

	function ProductService($state,api){
		var self = this;
		//public variables
		self.products = [];
<<<<<<< Updated upstream
=======
		
		var newprod = [
		
		{
		    name: "Blue Plaid",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "5",
		    image: "assets/img/shirts/blue_plaid_shirt.jpg",
		    status: "active",
		 }, 

		 {
		    name: "Blue Dot",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "4",
		    image: "assets/img/shirts/blue_dot_shirt.jpg",
		    status: "active",
		 },
		 
		 {
		    name: "Charcoal Gingham",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/charcoal_gingham_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Charcoal Melange",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/charcoal_melange_cotton_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Dot",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/dot_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Indigo",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/indigo_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Blue Chambrey",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/mid_blue_chambrey_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Gingham",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/navy_gingham_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Square",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/navy_square_print_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "White Square",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: "$99.99",
		    quantity: "6",
		    image: "assets/img/shirts/white_square_print_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Narrow Blue Fade",
		    description: "12oz Denim",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "9",
		    image: "assets/img/shirts/12oz-narrow-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Arctic Grey",
		    description: "12.5oz Denim Narrow Fit",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "12",
		    image: "assets/img/shirts/arctic-grey-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Grey Tonal",
		    description: "14oz Denim Narrow Fit",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "14",
		    image: "assets/img/shirtgrey-jeans.jpg",
		    status: "active",
		 },



    ];

    getProducts().then(function(){
    	if (self.products.length == 0){
    		for (var i = 0; i < newprod.length; i++){
    			addProduct(newprod[i]);
    		}
    	
    	}
    	getProducts();
    	// console.log("added");
    })
    
		
>>>>>>> Stashed changes

		//public functions
		self.getProduct = getProduct;
		self.getProducts = getProducts;
		self.addProduct = addProduct;
		self.updateProduct = updateProduct;
		self.updateProductList = updateProductList;
		self.removeProduct = removeProduct;
		self.deleteProduct = deleteProduct;

		function getProducts(){
			return api.request('/products',{},'GET')
			.then(function(res){
				//success callback
				console.log(res);
				self.products = res.data.products;
				return res.data.products;
			},function(res){
				//error callback
				console.log(res);
				return;
			})
		}

		function addProduct(product){
			api.request('/products',product,'POST')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was added successfully
					self.products.push(res.data.product);
					$state.go('admin.dash');
				}
			})
		}

		function updateProduct(product,productId){
			api.request('/products/'+productId,product,'PUT')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was updated successfully
					self.updateProductList(product,productId);
					
				}
			})
		}

		function deleteProduct(productId){
			return api.request('/products/'+productId,{},'DEL')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was deleted successfully
					self.removeProduct(productId);
					
					return self.getProducts()
					.then(function(data){
					$state.go('admin.dash');})
					
				}
			})
		}

		function getProduct(productId){
			return api.request('/products/'+productId,{},'GET');
		}

		function updateProductList(product,productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					self.products[i].name = product.name;
					self.products[i].image = product.image;
					self.products[i].description = product.description;
					self.products[i].category = product.category;
					self.products[i].price = product.price;
					self.products[i].quantity = product.quantity;
				}
			}
		}

		function removeProduct(productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					delete self.products[i];
				}
			}
		}
	}
})();