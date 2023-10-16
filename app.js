

function shadiscnz(bankbalance) {
    return new Promise((resolve, reject) => {
        if (bankbalance >3000000) {
            resolve('sahadi ky liye hn hai ')
        } else {
            reject('ab apni chalkal nahi dekhana ')
        }
    })
    
}


shadiscnz(2000000).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})



// const dived = document.querySelectorAll('div');

// axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
//     console.log(res.data);
//     dived.innerHTML(`${res.data}`)
// }).catch((err)=>{
//     console.log(err);
//     alert('data not found')
// })


const dived = document.querySelector('div');

axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    console.log(res.data);
    // dived.innerHTML = JSON.stringify(res.data);
    res.data.map((item)=>{
    dived.innerHTML +=`
    <h1> id:${item.id}</h1>
    <h1>Name:${item.name}</h1>
    <h3>Location: ${item.address.street}`
    })
}).catch((err) => {
    console.log(err);
    alert('data not found');
});
