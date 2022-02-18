const Wb3 = require('web3')

export const web3 = new Wb3(window.ethereum);

export const accounts = web3.eth.getAccounts()

// total abi
export const abiObject = {
    PerSaleAbi: require('../abis/perSale.json'),
    spacePiAbi: require('../abis/spacePi.json'),
    DogiAbi: require('../abis/Dogi.json'),
    InviteAbi: require('../abis/Invite.json'),
    StakePoolAbi: require('../abis/StakePool.json'),
}
// output contract Object and address
export function getAbi (params) {
    let {abi,address} = params
    // const address = networks[ID].address
    const contractObject= new web3.eth.Contract(abi,address);
    return {contractObject,address}
}

// format Decimals
export const  formatDecimal = (num, decimal) =>{
    num = num.toString()
    let index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
}
// format Number
export function thousands(num){
	let splits=[],res=[];
	 splits = num.toString().split(".");
	splits[0].split("").reverse().map(function(item,i){
		if(i%3 == 0 && i!=0){ res.push(","); }
		res.push(item);
	});
	return res.reverse().join("")+(splits.length>1 ? "."+splits[1] : "");
}
