const fs = require('fs');
const readline = require('readline');
const validate = require('validator');
const { resolve } = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
if (!fs.existsSync('data')){
        fs.mkdirSync('data')
        console.log("Folder Tidak DiTemukan, Menbuat Folder Baru")
    };
if(!fs.existsSync('data/contacts.json')){
    fs.writeFileSync('data/contacts.json', JSON.stringify([]))
    console.log("File Tidak DiTemukan, Menbuat File Baru")
    }


const ask =  async (question) =>{
    return new Promise((resolve)=>{
        rl.question(question, (answers) =>{
            resolve(answers)
        })
    })
}

const ans = async() => {
    const name = await ask('Nama : ')
    let number;
    do{number = await ask('Nomer Hp : ')
    if(!validate.isMobilePhone(number, 'id-ID')){
        console.log('Nomer yag anda masukkan bukan format indo')
    }} while(!validate.isMobilePhone(number, 'id-ID'))
    let email;
    do{email = await ask('email  : ')
    if(!validate.isEmail(email)){
        console.log('Format email anda salah')
    }} while(!validate.isEmail(email))

    var data = fs.readFileSync('data/contacts.json', 'utf8')
    var obj =  JSON.parse(data)
    obj.push({nama: name,nomer: number, Email: email} )
    json = JSON.stringify(obj)
    fs.writeFileSync('data/contacts.json', json)
    rl.close(); 
}

ans()





// rl.question('Masukkan Nama', (name) => {
//     rl.question('Masukkan nomer', (number) => {
//         if(validate.isMobilePhone(number, 'id-ID')){
//             rl.question('Masukkan email', (email) => {
//                 if(validate.isEmail(email)){
//                     console.log(`nama : ${name}, nomor : ${number}, email : ${email}`)
//                     if (!fs.existsSync('data')){
//                         fs.mkdirSync('data')
//                         console.log("Folder Tidak DiTemukan, Menbuat Folder Baru")
//                     };
//                     if(!fs.existsSync('data/contacts.json')){
//                         fs.writeFileSync('data/contacts.json', JSON.stringify([]))
//                         console.log("File Tidak DiTemukan, Menbuat File Baru")
//                     }
//                     var data = fs.readFileSync('data/contacts.json', 'utf8')
//                     var obj =  JSON.parse(data)
//                     obj.push({nama: name,nomer: number, Email: email} )
//                     json = JSON.stringify(obj)
//                     fs.writeFileSync('data/contacts.json', json)
//                     rl.close(); 
//                 } else (
//                     console.log("email yang anda Masukkan tidak Valid") 
//                 )
//             })
//         } else (
//             console.log('Nomer Anda Salah')
//         )
//     })
// })