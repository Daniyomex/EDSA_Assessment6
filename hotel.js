// Read input data from console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let month, stays;
rl.question('Enter the month (May, June, July, August, September or October): ', (m) => {
    month = m;
    rl.question('Enter the number of stays (integer within the range [0 ...200]): ', (s) => {
        stays = parseInt(s);
        rl.close();
        
        // Calculate prices
        let studioPrice, apartmentPrice;
        switch (month) {
            case 'May':
            case 'October':
                studioPrice = 50 * stays;
                apartmentPrice = 65 * stays;
                if (stays > 14) {
                    studioPrice *= 0.7;
                } else if (stays > 7) {
                    studioPrice *= 0.95;
                }
                break;
            case 'June':
            case 'September':
                studioPrice = 75.2 * stays;
                apartmentPrice = 68.7 * stays;
                if (stays > 14) {
                    studioPrice *= 0.8;
                }
                break;
            case 'July':
            case 'August':
                studioPrice = 76 * stays;
                apartmentPrice = 77 * stays;
                break;
            default:
                console.log('Invalid month!');
                return;
        }
        if (stays > 14 && apartmentPrice) {
            apartmentPrice *= 0.9;
        }
        
        // Print prices
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} NGN.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} NGN.`);
    });
});
