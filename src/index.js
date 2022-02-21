module.exports = function check(str, bracketsConfig) {
  const brackets = [...str];
  const config = Object.fromEntries(bracketsConfig);
  const arr = [];
  let isStop = false;
  let i = 0;

  while(!isStop && i < brackets.length) {
    const bracket = brackets[i]; 
    
    if(config[bracket]) {
      if(bracket === config[bracket]) {
        const openBracket = arr.length && arr.pop(); 
        if(openBracket !== bracket) {
          openBracket && arr.push(openBracket);
          arr.push(bracket);
        }
      } else
        arr.push(bracket);
    } else {
      const openBracket = arr.length && arr.pop(); 
      if(!openBracket || config[openBracket] !== bracket) {
        isStop = true;
      }
    }
    i++;
  };

  return isStop ? !isStop : arr.length === 0;
}
