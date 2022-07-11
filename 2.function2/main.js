function palindrome(message){
    temp=message.split("").reverse().join("");
    return temp===message?true:false;
  }
console.log(palindrome('hello'));
console.log(palindrome('abcba'));
