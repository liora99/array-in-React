import React from 'react'

const Grid= ({arrOfObj})=> {

    const even=(n)=>{
        return n!==2 && n % 2=== 0 ; //pair
      }


      const isPrime=(num) =>{
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
              return false; 
        return num > 1;
    }
   
  
  const cells = arrOfObj.map(obj => 
    <div style={{color:'white', backgroundColor: even(obj) ? '#00cc66' : (isPrime(obj)? '#ff6666':'#ffcc00')}} >{obj}</div>)


  return (

    <div className='container'>
      {cells}
    </div>
  )
}
export default Grid