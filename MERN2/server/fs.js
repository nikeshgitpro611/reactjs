const fs = require('fs');
const name = 'MaxEwlll';

fs.writeFileSync('creat-path.txt', 'name : ' +  name, (err) => {
    if (err) {
        console.log(err.message);
        return 0;
    }
    console.log('Wrote File');
})