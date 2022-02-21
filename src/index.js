module.exports = function check(str, bracketsConfig) {
  const brackets = [...str];
  const config = Object.fromEntries(bracketsConfig);
  const arr = [];
  let isStop = false;
  let i = 0;

  // bracketsConfig.map(([key, val]) => {
  //   if(key === val) {
  //     str.replace()
  //   }
  //   console.log(key, val);
  // })
  


console.log(brackets);
  while(!isStop && i < brackets.length) {
    const bracket = brackets[i]; 
    
    if(config[bracket]) {
      if(bracket === config[bracket]) {
        const openBracket = arr.pop(); 
        if(openBracket !== bracket) {
          arr.push(openBracket);
          arr.push(bracket);
        }
      } else
        arr.push(bracket);
    } else {
      const openBracket = arr.length && arr.pop(); console.log('openBracket: ', openBracket, bracket);
      if(!openBracket || config[openBracket] !== bracket) {
        isStop = true;
      }
    }
    i++;
  };
 console.log(!isStop);
console.log(arr.length);
  return isStop ? !isStop : arr.length === 0;

}
