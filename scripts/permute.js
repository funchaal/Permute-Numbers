function permute(array, callback) {

    let a = []
    array.forEach(() => a.push(1))

    let count = 0
    let count_total = 0

    loop1: while (true) {

        for (let i = 1; i <= array[0]; i++) {
            a[0] = i
            count_total++

            if (callback(a, a.length)) {
                count++
                console.log(a)
            }

        }

        if (!a[1]) break

        a[1] = a[1] + 1

        for (let [j, n] of array.slice(1).entries()) {
            let index = j + 1
            if (a[index] > n) {
                
                if (a.every((val, i) => val >= array[i])) break loop1
                if (index === array.length - 1) break
                
                a[index + 1] = a[index + 1] + 1
                a[index] = 1

            } else {
                break
            }
        }

    }

    console.log('\n\nQuantidade de combinações: ' + count)
    console.log('Quantidade total de combinações: ' + count_total)

}

permute([10, 10, 10, 10], (a, q) => (a.reduce((a, b) => a + b) / q === 9))