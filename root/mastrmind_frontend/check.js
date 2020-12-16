function passwordStrength(password){
    var strength = 0;
    if(password.length < 8){
        return false;
    }
    if(password.match(/[a-z]+/)){
        strength +=1;
    }
    if(password.match(/[A-Z]+/)){
        strength += 1;
    }
    if(password.match(/[0-9]+/)){
        strength += 1;
    }
    if(password.match(/[!@#$%^&*()]+/)){
        strength += 1;   
    }
    if(strength == 4){
        return true;
    }
    else
    {
        return false;
    }

}
