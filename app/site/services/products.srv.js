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
		
>>>>>>> Stashed changes
		var newprod = [
		
		{
		    name: "Blue Plaid",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "5",
		    image: "assets/img/shirts/blue_plaid_shirt.jpg",
		    status: "active",
		 }, 

		 {
		    name: "Blue Dot",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "4",
		    image: "assets/img/shirts/blue_dot_shirt.jpg",
		    status: "active",
		 },
		 
		 {
		    name: "Charcoal Gingham",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/charcoal_gingham_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Charcoal Melange",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/charcoal_melange_cotton_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Dot",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/dot_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Indigo",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/indigo_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Blue Chambrey",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/mid_blue_chambrey_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Gingham",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/navy_gingham_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Square",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/navy_square_print_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "White Square",
		    description: "Button-down collar.",
		    category: "Shirts",
		    price: 99.99,
		    quantity: "6",
		    image: "assets/img/shirts/white_square_print_shirt.jpg",
		    status: "active",
		 },

		 {
		    name: "Narrow Blue Fade",
		    description: "12oz Denim",
		    category: "Pants",
		    price: 129.99,
		    quantity: "9",
		    image: "assets/img/pants/12oz-narrow-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Arctic Grey",
		    description: "12.5oz Denim Narrow Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "12",
		    image: "assets/img/pants/arctic-grey-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Grey Tonal",
		    description: "14oz Denim Narrow Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "14",
		    image: "assets/img/pants/grey-tonal-narrow-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Grey Tonal",
		    description: "14oz Denim Slight Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "14",
		    image: "assets/img/pants/grey-tonal-slight-jeans.jpg",
		    status: "active",
<<<<<<< Updated upstream
=======

		 },

		 {
		    name: "Raw Indigo",
		    description: "10oz Denim Narrow Fit",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "14",
		    image: "assets/img/pants/indigo-raw-narrow-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Blue Narrows",
		    description: "12.5oz Denim Narrow Fit",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "14",
		    image: "assets/img/pants/narrow-fit-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Contrast",
		    description: "12.5oz Rinsed Contrast Denim Slight Fit",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "20",
		    image: "assets/img/pants/rinsed-contrast-slight-denim.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Selvage",
		    description: "14oz Japanese Denim Slight Fit",
		    category: "Pants",
		    price: "$149.99",
		    quantity: "25",
		    image: "assets/img/pants/selvage-slight-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Contrast",
		    description: "12.5oz Denim Slight Fit Contrast Stitch",
		    category: "Pants",
		    price: "$129.99",
		    quantity: "11",
		    image: "assets/img/pants/slight-contrast-stitch-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Herfest Leather Card Sleeve",
		    description: "Flexible Red Aniline Leather",
		    category: "Accessories",
		    price: "$99.99",
		    quantity: "11",
		    image: "assets/img/accessories/leather-card-sleeve.jpg",
		    status: "active",
		 },	

		 {
		    name: "Herfest Brass & Leather Key Fob",
		    description: "Brass Hardware & Aniline Leather",
		    category: "Accessories",
		    price: "$99.99",
		    quantity: "5",
		    image: "assets/img/accessories/leather-key-loop.jpg",
		    status: "active",
		 },	 

		 {
		    name: "Express Backpack",
		    description: "Black Canvas & Brass Hardware",
		    category: "Accessories",
		    price: "$199.99",
		    quantity: "10",
		    image: "assets/img/bags/express-backpack.jpg",
		    status: "active",
		 },

		 {
		    name: "The Messenger",
		    description: "Yellow Aniline Leather",
		    category: "Accessories",
		    price: "$349.99",
		    quantity: "18",
		    image: "assets/img/bags/leather-messenger-bag.jpg",
		    status: "active",
		 },

		 {
		    name: "Mismo Briefcase",
		    description: "Navy Canvas & Black Leather Strap",
		    category: "Accessories",
		    price: "$299.99",
		    quantity: "12",
		    image: "assets/img/bags/mismo-briefcase.jpg",
		    status: "active",
		 },

		 {
		    name: "Deerskin Driving Gloves",
		    description: "Geier Glove Company USA",
		    category: "Accessories",
		    price: "$88.99",
		    quantity: "30",
		    image: "assets/img/gloves/deerskin-driving-gloves.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Bomber",
		    description: "Rip-Stop Nylon & Steel Zip",
		    category: "Outerwear",
		    price: "$419.99",
		    quantity: "10",
		    image: "assets/img/outerwear/navy-bomber-jacket.jpg",
		    status: "active",
		 },

		 {
		    name: "Black Bomber",
		    description: "Rip-Stop Nylon & Steel Zip",
		    category: "Outerwear",
		    price: "$419.99",
		    quantity: "19",
		    image: "assets/img/outerwear/black-bomber-jacket.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Black Socks",
		    description: "Cotton",
		    category: "Accessories",
		    price: "$14.99",
		    quantity: "19",
		    image: "assets/img/socks/black-cotton-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Grey Cashmere Blend Socks",
		    description: "Cashmere Blend",
		    category: "Accessories",
		    price: "$14.99",
		    quantity: "19",
		    image: "assets/img/socks/grey-cashmere-blend-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Grey Socks",
		    description: "Cotton",
		    category: "Accessories",
		    price: "$14.99",
		    quantity: "19",
		    image: "assets/img/socks/grey-cotton-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Black Leather Low-Top Sneak",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: "$158.99",
		    quantity: "19",
		    image: "assets/img/shoes/buddy-blk-low-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "White Leather High-Top Sneak",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: "$168.99",
		    quantity: "19",
		    image: "assets/img/shoes/buddy-high-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "White Leather Low-Top Sneak",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: "$158.99",
		    quantity: "13",
		    image: "assets/img/shoes/buddy-low-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "Carlyle Dress Shoe",
		    description: "Allan Edmonds Brown Leather",
		    category: "Shoes",
		    price: "$474.99",
		    quantity: "9",
		    image: "assets/img/shoes/edmonds-carlyle-shoes-dk-brown.jpg",
		    status: "active",
		 },

		 {
		    name: "Carlyle Dress Shoe",
		    description: "Allan Edmonds Tan Leather",
		    category: "Shoes",
		    price: "$474.99",
		    quantity: "9",
		    image: "assets/img/shoes/edmonds-carlyle-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Park Avenue Cap-Toe",
		    description: "Allan Edmonds Black Leather",
		    category: "Shoes",
		    price: "$474.99",
		    quantity: "6",
		    image: "assets/img/shoes/edmonds-park-avenue-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Edmonds Strand Oxford",
		    description: "Allan Edmonds Tan Leather",
		    category: "Shoes",
		    price: "$474.99",
		    quantity: "4",
		    image: "assets/img/shoes/edmonds-strand-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Edmonds Vernon Dress Shoe",
		    description: "Allan Edmonds Chestnut Leather",
		    category: "Shoes",
		    price: "$474.99",
		    quantity: "7",
		    image: "assets/img/shoes/edmonds-vernon-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Feit Hand-Sewn Low Shoe",
		    description: "Feit Black Leather",
		    category: "Shoes",
		    price: "$754.99",
		    quantity: "5",
		    image: "assets/img/shoes/feit-black-hand-sewn-low-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Ignis Derby Nero",
		    description: "Officine Creative Black Leather",
		    category: "Shoes",
		    price: "$624.99",
		    quantity: "4",
		    image: "assets/img/shoes/ignis-derby-nero-shoes.jpg",
		    status: "active",
		 },
>>>>>>> Stashed changes

		 },

		 {
		    name: "Raw Indigo",
		    description: "10oz Denim Narrow Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "14",
		    image: "assets/img/pants/indigo-raw-narrow-jeans.jpg",
		    status: "active",
		 },

<<<<<<< Updated upstream
		 {
		    name: "Blue Narrows",
		    description: "12.5oz Denim Narrow Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "14",
		    image: "assets/img/pants/narrow-fit-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Contrast",
		    description: "12.5oz Rinsed Contrast Denim Slight Fit",
		    category: "Pants",
		    price: 129.99,
		    quantity: "20",
		    image: "assets/img/pants/rinsed-contrast-slight-denim.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Selvage",
		    description: "14oz Japanese Denim Slight Fit",
		    category: "Pants",
		    price: 149.99,
		    quantity: "25",
		    image: "assets/img/pants/selvage-slight-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Slight Contrast",
		    description: "12.5oz Denim Slight Fit Contrast Stitch",
		    category: "Pants",
		    price: 129.99,
		    quantity: "11",
		    image: "assets/img/pants/slight-contrast-stitch-jeans.jpg",
		    status: "active",
		 },

		 {
		    name: "Herfest Leather Card Sleeve",
		    description: "Flexible Red Aniline Leather",
		    category: "Accessories",
		    price: 99.99,
		    quantity: "11",
		    image: "assets/img/accessories/leather-card-sleeve.jpg",
		    status: "active",
		 },	

		 {
		    name: "Herfest Brass & Leather",
		    description: "Brass Hardware & Aniline Leather",
		    category: "Accessories",
		    price: 99.99,
		    quantity: "5",
		    image: "assets/img/accessories/leather-key-loop.jpg",
		    status: "active",
		 },	 

		 {
		    name: "Express Backpack",
		    description: "Black Canvas & Brass Hardware",
		    category: "Accessories",
		    price: 199.99,
		    quantity: "10",
		    image: "assets/img/bags/express-backpack.jpg",
		    status: "active",
		 },

		 {
		    name: "The Messenger",
		    description: "Yellow Aniline Leather",
		    category: "Accessories",
		    price: 349.99,
		    quantity: "18",
		    image: "assets/img/bags/leather-messenger-bag.jpg",
		    status: "active",
		 },

		 {
		    name: "Mismo Briefcase",
		    description: "Navy Canvas & Black Leather Strap",
		    category: "Accessories",
		    price: 299.99,
		    quantity: "12",
		    image: "assets/img/bags/mismo-briefcase.jpg",
		    status: "active",
		 },

		 {
		    name: "Deerskin Driving Gloves",
		    description: "Geier Glove Company USA",
		    category: "Accessories",
		    price: 88.99,
		    quantity: "30",
		    image: "assets/img/gloves/deerskin-driving-gloves.jpg",
		    status: "active",
		 },

		 {
		    name: "Navy Bomber",
		    description: "Rip-Stop Nylon & Steel Zip",
		    category: "Outerwear",
		    price: 419.99,
		    quantity: "10",
		    image: "assets/img/outerwear/navy-bomber-jacket.jpg",
		    status: "active",
		 },

		 {
		    name: "Black Bomber",
		    description: "Rip-Stop Nylon & Steel Zip",
		    category: "Outerwear",
		    price: 419.99,
		    quantity: "19",
		    image: "assets/img/outerwear/black-bomber-jacket.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Black Socks",
		    description: "Cotton",
		    category: "Accessories",
		    price: 14.99,
		    quantity: "19",
		    image: "assets/img/socks/black-cotton-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Socks",
		    description: "Cashmere Blend",
		    category: "Accessories",
		    price: 14.99,
		    quantity: "19",
		    image: "assets/img/socks/grey-cashmere-blend-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Pedemeia Grey Socks",
		    description: "Cotton",
		    category: "Accessories",
		    price: 14.99,
		    quantity: "19",
		    image: "assets/img/socks/grey-cotton-socks.jpg",
		    status: "active",
		 },

		 {
		    name: "Black Leather Low-Top",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: 158.99,
		    quantity: "19",
		    image: "assets/img/shoes/buddy-blk-low-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "White Leather High-Top",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: 168.99,
		    quantity: "19",
		    image: "assets/img/shoes/buddy-high-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "White Leather Low-Top",
		    description: "Buddy Japan",
		    category: "Shoes",
		    price: 158.99,
		    quantity: "13",
		    image: "assets/img/shoes/buddy-low-top-leather-sneaker.jpg",
		    status: "active",
		 },

		 {
		    name: "Carlyle Dress Shoe",
		    description: "Allan Edmonds Brown Leather",
		    category: "Shoes",
		    price: 474.99,
		    quantity: "9",
		    image: "assets/img/shoes/edmonds-carlyle-shoes-dk-brown.jpg",
		    status: "active",
		 },

		 {
		    name: "Carlyle Dress Shoe",
		    description: "Allan Edmonds Tan Leather",
		    category: "Shoes",
		    price: 474.99,
		    quantity: "9",
		    image: "assets/img/shoes/edmonds-carlyle-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Park Avenue Cap-Toe",
		    description: "Allan Edmonds Black Leather",
		    category: "Shoes",
		    price: 474.99,
		    quantity: "6",
		    image: "assets/img/shoes/edmonds-park-avenue-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Edmonds Strand Oxford",
		    description: "Allan Edmonds Tan Leather",
		    category: "Shoes",
		    price: 474.99,
		    quantity: "4",
		    image: "assets/img/shoes/edmonds-strand-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Edmonds Vernon Dress Shoe",
		    description: "Allan Edmonds Chestnut Leather",
		    category: "Shoes",
		    price: 474.99,
		    quantity: "7",
		    image: "assets/img/shoes/edmonds-vernon-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Feit Hand-Sewn Low Shoe",
		    description: "Feit Black Leather",
		    category: "Shoes",
		    price: 754.99,
		    quantity: "5",
		    image: "assets/img/shoes/feit-black-hand-sewn-low-shoes.jpg",
		    status: "active",
		 },

		 {
		    name: "Ignis Derby Nero",
		    description: "Officine Creative Black Leather",
		    category: "Shoes",
		    price: 624.99,
		    quantity: "4",
		    image: "assets/img/shoes/ignis-derby-nero-shoes.jpg",
		    status: "active",
		 },
		 ];		
=======
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


	    getProducts().then(function(){
	    	if (self.products.length == 0){
	    		for (var i = 0; i < newprod.length; i++){
	    			addProduct(newprod[i]);
	    		}
	    	
	    	}
	    	getProducts();
	    	$state.go('shop');
	    	// console.log("added");
	    })		

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