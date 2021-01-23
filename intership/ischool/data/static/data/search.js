
function search() {
    let url = document.querySelector('#search-url').value;
    let searchFor = document.getElementById('search-for').value;
    let extra = document.querySelector('#extra').value;
    let string = url + "?search=" + searchFor + extra;
    console.log(string);
    //console.log(extra);
    fetch(string, {
        headers:{
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then(res => { return res.json()})
      .then(data => {
        console.log(data);
        let con = document.getElementById('elements');
        while(con.firstChild){
          con.removeChild(con.firstChild);
        }

        if(extra === "") {
        for (let i = 0; i < data.length; i++) {
        // append each person to our page
            const div = document.createElement('div');
            const a = document.createElement('a');
            const button = document.createElement('button');
            div.className = "bg-light flex";
            a.className = "text-dark";
            a.href = `/course/${data[i].id}`;
            a.innerText = `${data[i].title}`;
            button.className = "btn btn-danger flex-right";
            button.onClick = "return search()";
            button.innerText = "Delete";
            div.appendChild(a);
            div.appendChild(button);
            con.appendChild(div);
        }
        }
        else if(extra.slice(1,7) == "course"){
        for (let i = 0; i < data.length; i++) {
            const div = document.createElement('div');
            const a = document.createElement('a');
            const s1 = document.createElement('span');
            const s2 = document.createElement('span');
            const button = document.createElement('button');
            div.className = "bg-light flex";
            a.className = "text-dark";
            a.href = `/division/${data[i].id}`;
            s1.innerText = `Division: ${data[i].title} `;
            s2.innerText = `Room no: ${data[i].room}`;
            button.className = "btn btn-danger flex-right";
            button.onClick = "return search()";
            button.innerText = "Delete";
            a.appendChild(s1);
            a.appendChild(s2);
            div.appendChild(a);
            div.appendChild(button);
            con.appendChild(div);
            console.log("course")
        }
        }
        else if(extra.slice(1,9) == "division"){
        console.log("division")
        }

      }).catch(error =>{
        console.log(error);
      });
    return false;

}

function course(){
            const div = document.createElement('div');
            const a = document.createElement('a');
            const button = document.createElement('button');
            div.className = "bg-light flex";
            a.className = "text-dark";
            a.href = `/course/${data[i].id}`;
            a.innerText = `${data[i].title}`;
            button.className = "btn btn-danger flex-right";
            button.onClick = "return search()";
            button.innerText = "Delete";
            div.appendChild(a);
            div.appendChild(button);
            con.appendChild(div);
}