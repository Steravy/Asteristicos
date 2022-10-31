

function bigerString(list) {
    let pos = 0
    let stringLenght = 0

    for (i in list) {


        if (list[i].length > stringLenght) {
            pos = i
            stringLenght = list[i].length
        }

    }

    return list[pos]
}



function returnAsteristicos(list) {
    total = bigerString(list).length
    asteristics = ""

    for (i=0; i < total + 4; i++) {
        asteristics += '*'
    }
    
    return asteristics
}



function stringAndAsteristics(list) {
    bigerString(list)

    asteristics = returnAsteristicos(list)
    console.log(asteristics)


    for (let i of list) {

    let finalWord = '* '

        let arrayOfString = i.split(',')
        for (let x of arrayOfString) {
            finalWord += x
        }
        while (finalWord.length < asteristics.length - 2) {
            finalWord += ' '
        } 

        finalWord += ' *\n'

        console.log(finalWord)

    
    }

    console.log(asteristics)

}

// stringAndAsteristics(returnAsteristicos, bigerString, ['ana', 'mariapaula', 'SINTAXY_ACADEMY', 'STEFAN_JUNIOR_FULLSTACK_DEVELOPER', 'its_working_bro', 'nhaManoHericles'])