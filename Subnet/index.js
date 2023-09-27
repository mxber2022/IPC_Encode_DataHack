var ethers = require("ethers")
var provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:1251/rpc/v1");
//console.log(provider);



	provider.getBlockNumber().then((result)=>{
		console.log("1. Latest block is ",result);
		
		
	})
	
	provider.getGasPrice().then((result)=>{
		console.log("2. The gas price is ",result);
		console.log("3. The block data is ");
		
	})
	


for (let i=3000;i<4000;i++)
{

	provider.getBlockWithTransactions(i).then((result)=>{
		
		if(result.transactions.length ===0) {
			
		}
		
		else {
		console.log(result.transactions);
		}
		
		
	})
}
	

