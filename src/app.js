App={
	contracts:async()=>{},
	load: async()=>{
		console.log("app loading");
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContract();
		await App.renderAccount();
		await App.pullBlockchainData();	
	},
	loadWeb3: async () => {
		if (typeof web3 !== 'undefined') {
			App.web3Provider = web3.currentProvider
			web3 = new Web3(web3.currentProvider)
		} else {
			window.alert("Please connect to Metamask.")
		}
	    // Modern dapp browsers...
	    if (window.ethereum) {
	    	window.web3 = new Web3(ethereum)
	    	try {
	        // Request account access if needed
	        await ethereum.enable()
	        // Acccounts now exposed
	    	web3.eth.sendTransaction({/* ... */})
		}
		catch (error) {
		        // User denied account access...
		    }
		}
			    // Legacy dapp browsers...
			    else if (window.web3) {
			    	App.web3Provider = web3.currentProvider
			    	window.web3 = new Web3(web3.currentProvider)
			      	// Acccounts always exposed
			  		web3.eth.sendTransaction({/* ... */})
				}
			    // Non-dapp browsers...
			    else {
			    	console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
	    		}
	},
	loadAccount: async () => {
		App.account = web3.eth.accounts[0]
	},
	loadContract: async()=>{
		const ProductTracker= await $.getJSON('ProductTracker.json')
		App.contracts.ProductTracker=TruffleContract(ProductTracker)
		App.contracts.ProductTracker.setProvider(App.web3Provider)
		// Hydrate values from the block chain
		App.ProductTracker=await App.contracts.ProductTracker.deployed()

	},
	renderAccount:async () =>{

		$('#account').html(App.account)

	},
	pullBlockchainData: async()=>{
		App.transitCount=await App.ProductTracker.transitCount();
		App.transitHistory=[];
		for(var i=1;i<=App.transitCount;i++){
			var x=await App.ProductTracker.transitRecords(i);
			x[0]=x[0].toNumber();
			App.transitHistory.push(x);
		}
		App.productCount=await App.ProductTracker.productCount();
		App.products=[];
		for(var i=1;i<=App.productCount;i++){
			var x=await App.ProductTracker.products(i);
			x[0]=x[0].toNumber();
			App.products.push(x);
		}
		console.log(App.products);
	},

	renderRecords:async()=>{
		// hide all alerts and infos
		$("#alertNoTransit").hide()
		$("#alertNoProduct").hide()
		$("#productInfo").hide()
		$("#transitRecords").hide()
		// initialise records and products
		App.idRequired=$('#productId').val();
		console.log( App.transitHistory);
		App.filteredTransits= await App.transitHistory.filter(function(e){
			return e[0]==App.idRequired;
		});
		console.log(App.filteredTransits);
		App.productInfo = await App.products.filter(function(e){
			return e[0]==App.idRequired;
		});
		console.log(App.productInfo)

		// check conditions and render based on results
		if (App.productInfo.length==1) {
			if (App.filteredTransits.length>0) {
				$("#alertNoTransit").hide()
				$("#alertNoProduct").hide()
				$("#productInfo").show()
				$('#productName').empty().append('Product Name : '+App.productInfo[0][1]).show();
				$('#manufacturedBy').empty().append('Manufactured By : '+App.productInfo[0][2]).show();
				$('#originFrom').empty().append('Origin : '+App.productInfo[0][3]).show();
				$('#manufacturingDate').empty().append('Manufactured On : '+App.productInfo[0][4]).show();
				$("#transitRecords").empty().show()
				for(var i=0;i<App.filteredTransits.length;i++){
					var temp=App.filteredTransits[i]
					var str='<br>The product left from '+temp[1]+' for '+temp[2]+' on '+temp[3]+'.'
					console.log(str)					
					if (temp[5]) {
						str=str+'<br> The Product has been delivered.<br>'
					} else {
						str=str+'<br>The estimated delivery time is '+temp[4]+ '. The product is still enroute.<br>'
					}
					$('#transitRecords').append(str)
				}

			} else {
				$("#alertNoTransit").show()
				$("#alertNoProduct").hide()
				$("#productInfo").show()
				$('#productName').empty().append('Product Name : '+App.productInfo[0][1]).show();
				$('#manufacturedBy').empty().append('Manufactured By : '+App.productInfo[0][2]).show();
				$('#originFrom').empty().append('Origin : '+App.productInfo[0][3]).show();
				$('#manufacturingDate').empty().append('Manufactured On : '+App.productInfo[0][4]).show();
			}
		} else {
			$("#alertNoTransit").hide()
			$("#alertNoProduct").show()
			$("#productInfo").hide()
			$("#transitRecords").hide()
		}	
	},
	addNewProduct: async()=>{
		var p0=$('#productName1').val()
		var p1=$('#manufacturedBy1').val()
		var p2=$('#Origin1').val()
		var p3=$('#manufacturingDate1').val()
		console.log(typeof p3)
		await App.ProductTracker.addNewProduct(p0,p1,p2,p3);
		window.location.reload()
	},
	transitUpdate: async()=>{
		var p4=$('#productId2').val()
		var p0=$('#from2').val()
		var p1=$('#to2').val()
		var p2=$('#on2').val()
		var p3=$('#in2').val()
		await App.ProductTracker.transitUpdate(p4,p0,p1,p2,p3);
		window.location.reload()

	}

}
$(()=>{
	$(window).load(()=>{
		App.load()
	})
})
