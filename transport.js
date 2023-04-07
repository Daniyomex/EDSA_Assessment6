function cheapestTransport(n, period) {
    let taxiDayRate = 0.79;
    let taxiNightRate = 0.90;
    let taxiStartingFee = 0.70;
    let busRate = 0.09;
    let trainRate = 0.06;
    let cheapestPrice = Number.MAX_SAFE_INTEGER;
    let taxiPrice = taxiStartingFee + (period === "day" ? taxiDayRate : taxiNightRate) * n;
    let busPrice = busRate * n;
    let trainPrice = trainRate * n;
    if (n >= 100) {
        cheapestPrice = Math.min(cheapestPrice, trainPrice);
    }
    if (n >= 20) {
        cheapestPrice = Math.min(cheapestPrice, busPrice);
    }
    cheapestPrice = Math.min(cheapestPrice, taxiPrice);
    return cheapestPrice.toFixed(2);
}

let n = 50;
let period = "day";
console.log(cheapestTransport(n, period));

transport.cheapestPrice()