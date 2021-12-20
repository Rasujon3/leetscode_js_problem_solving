function coinChange(coins, amount) {
    let dpMincoins = new Array(amount+1).fill(Infinity);
    dpMincoins[0] = 0;

    for (let i = 0; i < dpMincoins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinValue = coins[j];
            if (coinValue <= i) {
                dpMincoins[i] = Math.min(dpMincoins[i-coinValue]+1,dpMincoins[i]);
            }
            
        }  
    }
    const answer = dpMincoins[dpMincoins.length - 1];
    return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;
