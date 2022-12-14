const fs = require('fs');

let topHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- link to bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- link to CSS-->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- header for page -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center head">Team</h1>
                <p class="lead text-center head">Here is the profile for each member in your team.</p>
            </div>
        </div>
    </div>`;

const bottomHTML = ` <!-- boostrap bundle link  -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>`;

const renderPage = (people) => {
    let cardHTML = '';
    console.log(people)
    for (const person of people) {
        switch (person.getRole()) {
            case 'Manager':
                cardHTML += `
                <div class="container card-container">
                <div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header manager">
                    <h5 class="card-title"> ${person.name}</h5>
                    <p class="card-text">Role: Manager</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.id}:</li>
                        <li class="list-group-item">Email: <a href="mailto:${person.email}"> ${person.email} </a></li>
                        <li class="list-group-item">Office Number: ${person.officeNumber}</li>
                    </ul>
                </div>
            </div>`
                break;
            case 'Engineer':
                cardHTML += `
                <div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header engineer">
                    <h5 class="card-title"> ${person.name}</h5>
                    <p class="card-text">Role: Engineer</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${person.email}"> ${person.email} </a></li>
                        <li class="list-group-item">GitHub Username: <a href="https://github.com/${person.gitHub}" target="_blank" rel="noopener noreferrer"> ${person.gitHub} </a> </li>
                    </ul>
                </div>
            </div>`
                break;
            case 'Intern':
                cardHTML += `
                <div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header intern">
                    <h5 class="card-title"> ${person.name}</h5>
                    <p class="card-text">Role: Intern</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${person.email}"> ${person.email} </a></li>
                        <li class="list-group-item">School: ${person.school} </li>
                    </ul>
                </div>
                </div>`
                break;
        }



    }
    const finalHTML = topHTML + cardHTML + bottomHTML;
    return finalHTML
}

module.exports = renderPage;