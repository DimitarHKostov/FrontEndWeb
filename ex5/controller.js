function validateEmail(email){
    if(email.length === 0 || email.length < 5){
        return false;
    }

    let containsK = false;
    let containsDot = false;

    for(let i = 0; i < email.length; i++){
        if(email[i] === '@'){
            containsK = true;
        }

        if(email[i] === '.'){
            containsDot = true;
        }
    }

    return containsK && containsDot;
}

function contains(x, list){
    for(let i = 0; i < list.length; i++){
        if(x === list[i]){
            return true;
        }
    }

    return false;
}

function validatePassword(password){
    if(password.length < 6){
        return false;
    }

    let containsB = false;
    let containsD = false;
    let containsS = false;

    for(let i = 0; i < password.length; i++){
        if(password[i]  == password[i].toLowerCase()){
            containsB = true;
        }

        if(/^\d+$/.test(password[i])){
            containsD = true;
        }

        if(password[i] === '!' || password[i] === '@' ||
        password[i] === '#' || password[i] === '$' ||
        password[i] === '%' || password[i] === '^' ||
        password[i] === '&'){
            containsS = true;
        }
    }

    return containsB && containsD && containsS;
}

const button = document.getElementById("button");

button.addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let valEmail = validateEmail(email);
    let valPassword = validatePassword(password);
    
    const finalVal = valEmail && valPassword;
    
    if(finalVal){
        alert("Регистрацията е успешна");
        if(document.getElementById("username") != null){
            const username = document.getElementById("username").value;
            register(username, email, password, () => {alert(1);});
        }
    }else{
        let error = document.getElementById("errors");
        if(!valEmail){
            error.innerHTML += "Invalid email<br>";
        }
        if(!valPassword){
            error.innerHTML += "Invalid password";
        }
    }
})