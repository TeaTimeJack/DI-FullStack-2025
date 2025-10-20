
fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data)
  });

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>
        <p>${item.id} # ${item.name} # ${item.username} # ${item.email}</p>
        </div>`;
  });

  document.getElementById("root").innerHTML = html.join("");
};

function addUser(event) {
    event.preventDefault();
    const  email = event.target.email.value;
    const  username = event.target.username.value;
    const  name = event.target.name.value;

    console.log(email,username,name);

    fetch("http://localhost:3001/users", {
        method: "POST",
        headers:{
            "content-type":"application/json",
        },
        body: JSON.stringify({name, username, email})
    })
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
}

