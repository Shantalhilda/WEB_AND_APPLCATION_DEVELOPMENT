function calculateinternetcost(internetcost,databundle= 50000){
    return internetcost * databundle
}
let numberOfBundles = 3;
let totalCost = calculateinternetcost(numberOfBundles);
console.log(`The total cost for ${numberOfBundles} bundles is UGX ${totalCost}.`);