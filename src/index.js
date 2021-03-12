module.exports = function check(str, bracketsConfig) {
  //hhelp(str);
  let arr = ['(' , ')'];
  let arr2 = ['[' , ']'];
  let arr3 = ['{' , '}'];
  let arr4 =[ '|'];
  let arr5 = [];
  let arr6 = [];
  let arr7 = [];
  let q = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let temp = 0;
  let temp2 = 0;
  let temp3 = 0;
  let temp4 = 0;
  let k = 0;
  let z = 0;
  let len = str.length;
  if( len % 2 == 1){
    return false;
  }
  for( let i = 0; i < len; i++){
    if( str[i] == arr[0]){ one++; temp++}
    else if( str[i] == arr[1]) one--;
    if( str[i] == arr2[0]){ two++; temp2++; k++}
    else if( str[i] == arr2[1]) { two--; k--}
    if( str[i] == arr3[0]) { three++; temp3++}
    else if( str[i] == arr3[1]) three--;
    if( str[i] == arr4[0]) { four++; temp4++}
    if( one < 0) return false;
    if( two < 0) return false;
    if( three < 0) return false;
    if( four < 0) return false;
  }
  for( let i = 0; i < len-2; i++){
    if ( str[i] == arr2[0] && str[i+1] != arr2[0] &&str[i+1] != arr2[1] && str[i+2] == arr2[1])
    return false;
  }
  for( let i = 0; i < len-2; i++){
    if ( str[i] == arr[0] && str[i+1] != arr[0] &&str[i+1] != arr[1] && str[i+2] == arr[1])
    return false;
  }

  if( temp > 0 && temp2 == 0 && temp3 == 0 && temp4 == 0 && one ==0) return true;
  if( temp2 > 0 && temp == 0 && temp3 == 0 && temp4 == 0 && two ==0) return true;
  if( temp3 > 0 && temp2 == 0 && temp == 0 && temp4 == 0 && three ==0) return true;
  if( temp4 > 0 && temp2 == 0 && temp3 == 0 && temp == 0 && four %2 == 0) return true;
  if( temp > 0 && temp2 > 0 && temp3 == 0 && temp4 == 0 && one == 0 && two == 0) return true;
  if( temp > 0 && temp4 > 0 && temp3 == 0 && temp2 == 0 && two == 0 && four % 2 == 0 ) return true;
  if( temp > 0 && temp2 > 0 && temp3 > 0 && temp4 == 0 && one == 0 && two == 0 && three == 0) return true;
  if( temp > 0 && temp2 > 0 && temp3 > 0 && temp4 > 0 && one == 0 && two == 0 && three == 0 && four % 2 == 0) return true;

  arr5.push(str[0]);
  for( let i = 0; i < len; i++){
    if(str[i] != arr[0] && str[i] != arr[1] && str[i] != arr2[0] && str[i] != arr2[1] && str[i] != arr3[0] && str[i] != arr3[1] && str[i] != arr4[0] && str[i] != arr4[1] ){
      q = 0;
    for( let c = 0; c < arr5.length; c++){    
      if( str[i] == arr5[c]){
        q++;
      }
    }
     if( q > 0){
       continue;
     }
     else if ( q == 0){
      arr5.push(str[i]);
     }
    } 
  }
  console.log('arr5l');
  console.log();
  console.log('arr5l');
  console.log(arr5);
  console.log(str);
  for( let i = 0; i < len-2; i+=2){
    q = 0;
    if(str[i] == str[i+1]){
      arr6[q] = str[i];
      q++;
    }
    for( let j = 0; j < i; j++){
      arr7 = str[j];
    }
    str = arr6.concat(arr7);
    arr6 = [];
    arr7 = [];
  }
  console.log('streeq');
  console.log();
  console.log('str');
  console.log(str);
}

function  hhelp (str){
  console.log( 'str' );
  console.log( str );
  console.log( 'str.length' );
  console.log( str.length );
  console.log( 'str[0]' );
  console.log( str[0] );
  console.log( 'str[1]' );
  console.log( str[1] );
  console.log( 'str[2]' );
  console.log( str[2] );
  console.log( 'str[3]' );
  console.log( str[3] );
  console.log( 'str[4]' );
  console.log( str[4] );
  console.log( 'str[5]' );
  console.log( str[5] );
  console.log( 'str[6]' );
  console.log( str[6] );
}