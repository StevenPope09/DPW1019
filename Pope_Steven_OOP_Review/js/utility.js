class Utils {
    constructor() {

    }
    static getAverage(arr) {
        let total = 0
        arr.forEach(e => {
            total+= e
        });
        return total / arr.length
    }
}