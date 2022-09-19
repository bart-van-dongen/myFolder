function consecutiveSum(n) {
    let res = false;
    if (n<3) return false;
    
    for (let k = 1; k < n; k++) {
        let sum = 0;
        for (let i = k; i < n; i++) {
            sum +=i;
            if (sum == n ) return true;
        }

    }
    return res;
}

console.log(consecutiveSum(9));
