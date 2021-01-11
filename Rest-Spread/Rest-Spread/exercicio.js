const sum = (...valores) => {
    let total = 0;
     valores.map(item => {
         total += item;
     });
}

console.log(sum(1,4,1,5,8));

