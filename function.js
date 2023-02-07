
const readline = require('readline');
const { resolve } = require('path');
const fs = require('fs')
const validate = require('validator')


if (!fs.existsSync('data')){
    fs.mkdirSync('data')
    console.log("Folder Tidak DiTemukan, Menbuat Folder Baru")
  };
if(!fs.existsSync('data/contacts.json')){
fs.writeFileSync('data/contacts.json', JSON.stringify([]))
console.log("File Tidak DiTemukan, Menbuat File Baru")
 }
 

const savedate =  async(name, email, mobile) =>{

    
    
    var data = fs.readFileSync('data/contacts.json', 'utf8')
    var obj =  JSON.parse(data)
    if(email == null ){
        obj.push({name, mobile})
    } else {
        obj.push({name, mobile, email})
    }

    json = JSON.stringify(obj)
    fs.writeFileSync('data/contacts.json', json)
    process.exit(0)
}

module.exports = { savedate};
