Day 03 - task table user name / email 

const mainTable = document.getElementById('main-table')
const table = document.getElementById('table');    


fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>{
    return res.json();
}).then(data =>{

    data.forEach(user =>{
        const tr = `<tr>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                    </tr>`
        table?.insertAdjacentHTML('beforeend' ,tr);
    
    })   
}).catch(error =>{
    console.log(error);
})

// @ts-ignore
container?.appendChild(mainTable);
