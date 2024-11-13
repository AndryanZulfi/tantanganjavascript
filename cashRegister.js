function checkCashRegister(price, cash, cid) {
    // Mencari total kembalian
    const kembalian = cash - price;

    // Mencari total kasir
    const totalCid = cid.map(el => el[1]).reduce((acc, curr) => acc + curr, 0);
    // return totalCid
    // Rumus kasir
    const rumuskasir = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100
    };

    // Jika kembalian lebih besar dari total kasir
    if (kembalian > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (kembalian === totalCid) { // Jika kembalian sama dengan total kasir
        return { status: "CLOSED", change: cid };
    } else {
        let newCid = cid.reverse();
        let totalKembalian = [];
        let sisakembalian = kembalian;

        newCid.map(el => {
            let satuan = el[0];
            let pecahan = el[1];
            let jumlah = 0;

            while (pecahan >= rumuskasir[satuan] && sisakembalian >= rumuskasir[satuan]) {
                jumlah += rumuskasir[satuan];
                pecahan -= rumuskasir[satuan];
                sisakembalian = Math.round((sisakembalian - rumuskasir[satuan]) * 100) / 100; 
            }

            if (jumlah > 0) {
                totalKembalian.push([satuan, jumlah]);
            }
            return jumlah
        });
        // return totalKembalian
        if(sisakembalian !== 0){
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }else{
            return { status: "OPEN", change: totalKembalian };
        }
        // return totalKembalian

        // Mengubah hasil akhir ke dalam format array

    }
}

// Test
console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)
