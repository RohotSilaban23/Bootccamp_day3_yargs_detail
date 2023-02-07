
const readline = require('readline');
const { resolve } = require('path');
const fs = require('fs')
const validate = require('validator')

// memeriksan apakah folder ada atau tidak jika tidak maka buat
if (!fs.existsSync('data')){
    fs.mkdirSync('data')
    console.log("Folder Tidak DiTemukan, Menbuat Folder Baru")
  };
  // memeriksan apakah file ada atau tidak jika tidak maka buat
if(!fs.existsSync('data/contacts.json')){
fs.writeFileSync('data/contacts.json', JSON.stringify([]))
console.log("File Tidak DiTemukan, Menbuat File Baru")
 }
 
// funsi untuk menyimpan data
const savedate =  async(name, email, mobile) =>{
    //fungsi untuk mencek data didalam json
    var data = fs.readFileSync('data/contacts.json', 'utf8')
    //men parse data dalam json
    var obj =  JSON.parse(data)
   // untuk memeriksa apakah ada nama yang di input 
   //sudah ada pada database atai tidak
    for(let i=0 ; i<obj.length ;i++){
        
        if(obj[i].name.toLowerCase()== name.toLowerCase()){
            console.log('nama sudah ada pada data')
            process.exit(0)
        }
    }
    //melihat apakah data email yg false ada atau tidak
    // jika tidak ada maka tetap diinput ke json
    if(email == null ){
        obj.push({name, mobile})
    } else {
        obj.push({name, mobile, email})
    }
    // untuk mebuat data yg di input ke array
    json = JSON.stringify(obj)
    //untuk menulis data pada json
    fs.writeFileSync('data/contacts.json', json)
    process.exit(0)
}

module.exports = { savedate};
