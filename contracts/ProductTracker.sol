pragma solidity ^0.5.0;

contract ProductTracker{
	uint public productCount=0;
	uint public transitCount=0;
	struct Product{
		uint id;
		string productName;
		string Manufacturer;
		string Origin;
		string On;
	}
	struct Transit{
	    uint id;
	    string From;
	    string To;
	    string On;
	    string In;
	    bool transitStatus;
	}
	mapping(uint => Product) public products;
	mapping(uint=> Transit) public transitRecords;

	constructor() public{
		addNewProduct("Me","God","Earth","Birth");
		transitUpdate(1,"Earth","Heaven","Birth","Lifetime");
	}

	function addNewProduct(string memory _productName,string memory _Manufacturer,string memory _Origin,string memory _On) public{
		productCount ++;
		products[productCount]=Product(productCount,_productName,_Manufacturer,_Origin,_On);
	}
	function transitUpdate(uint _id,string memory _From, string memory  _To, string memory _On, string memory _In) public{
		transitCount ++;
		bool result=keccak256(bytes(_From))==keccak256(bytes(_To));
		transitRecords[transitCount]=Transit(_id,_From,_To,_On,_In,result);
	}

}
// string memory _From, string memory  _To, string memory _On, string memory _In
// ,"Earth","Heaven","Death","Some days"
// 		bool result=keccak256(bytes(_From))==keccak256(bytes(_To));