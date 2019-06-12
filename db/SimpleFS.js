
// TODO:
//convert to json
//show all files
//read all files


const fs = require('fs');
const readline = require('readline');
const id = require('./id.json');

class SimpleFS {
    constructor() {
        this.id = id.id;
        this.BDPath = __dirname + '/DB_Files/';
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rf(pathFile) { 
        if(fs.existsSync(pathFile)) {
            return fs.readFileSync(pathFile, 'utf8');
        }
        return 'File don\'t exist!';
    }

    findID(id) {
        let pathFile = this.BDPath +  id + '.json';

        if(fs.existsSync(pathFile)) {
            return fs.readFileSync(pathFile, 'utf8');
        }
        return 'File don\'t exist!';
    }

    write(data) {
        let id = this.id + 1;

        let pathFile = this.BDPath +  id + '.json';

        console.log(pathFile);

        var json = JSON.stringify(data);

        fs.writeFile(pathFile, json, (err) => {
            if (err) throw err;
            return 'File saved';
        });
        this._saveID(id);
    }

    delete(fileName) {
        let filePath = this.BDPath + fileName + '.json';

        fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('File ' + fileParh + ' deleted!');
        });
    }

    _saveID(id) {
        let data = `{ "id" : ${id} }`;

        fs.writeFile('db/id.json',data ,(err) => {
            if (err) throw err;
        });
    }
};

module.exports = SimpleFS;
