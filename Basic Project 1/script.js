const history1 = [];
const buttons = document.querySelectorAll('.button');
const body = document.getElementById('body');
const history_list = document.getElementById('history_list');

// body.addEventListener('click',()=>{

// });

buttons.forEach(b => {
    b.addEventListener('mouseover', (e) => {
        if (e.target.id == 'red') {
            history1.push(e.target.id);
            ListHistory();
            return body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'green') {
            history1.push(e.target.id);
            ListHistory();
            return body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'yellow') {
            history1.push(e.target.id);
            ListHistory();
            return body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'blue') {
            history1.push(e.target.id);
            ListHistory();
            return body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'purple') {
            history1.push(e.target.id);
            ListHistory();
            return body.style.backgroundColor = e.target.id;
        }
    });
});

function ListHistory() {
    history_list.innerHTML = '';
    history1.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        history_list.appendChild(li);
    });
}