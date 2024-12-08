// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).


const getCount = (str)=> {
    let vowelsCount = 0;
    // Used coditionals to add 1
    for(letter of str){
    if(letter === 'a'){
    vowelsCount +=1;
    }else if(letter === 'e'){
    vowelsCount +=1;
    }else if(letter === 'i'){
    vowelsCount +=1;
    }else if(letter === 'o'){
    vowelsCount +=1;
    }else if(letter === 'u'){
    vowelsCount +=1;
    }
    }
    
    return vowelsCount;
}
