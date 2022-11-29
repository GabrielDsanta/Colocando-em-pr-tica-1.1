const readXlsxFile  =  require ( 'read-excel-file/node' ) 
let validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')


readXlsxFile('./doc/Alunos.xlsx').then((rows) => {
    for (let index = 0; index < rows.length; index++) {
        let counter = 0
        const name = rows[index][0]
        const email = rows[index][1]
        const age = rows[index][2]
        const registry = rows[index][3]

        !name && (counter++)
        age <= 0 && (counter++)

        const registryIsValid = validator.isAlphanumeric(registry)
        const isEmailValid = isEmail(email)

        !registryIsValid && (counter++)
        !isEmailValid && (counter++)

        counter === 0 && (console.log(`
        Olá meu nome é ${name}, Email ${email}, Tenho ${age} de idade, Minha matricula é a ${registry}
        `))
    }
})