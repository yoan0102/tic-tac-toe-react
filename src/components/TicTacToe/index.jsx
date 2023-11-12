import { useRef, useState } from "react";
import "./TicTacToe.css";



let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)

  const titleRef = useRef(null)

  const toogle = (e, num) => {
    if(lock){
      return 0
    }
    if(count%2===0){
      e.target.innerHTML = `
      
        <span class="x">X</span>
      `;
      data[num]='x'
      setCount(count+1)
    }
    else{
      e.target.innerHTML = `
      
      <span class="o">O</span>
    `;
    data[num]='o'
    setCount(count+1)
    }
    checkWin()
  }


  const checkWin = () => {
    if(data[0]===data[1] && data[1] === data[2] && data[2]!==""){
      won(data[2])
    }else if(data[3]===data[4] && data[4] === data[5] && data[5]!==""){
      won(data[5])
    }else if(data[6]===data[7] && data[7] === data[8] && data[8]!==""){
      won(data[8])
    }else if(data[0]===data[3] && data[3] === data[6] && data[6]!==""){
      won(data[6])
    }else if(data[1]===data[4] && data[4] === data[7] && data[7]!==""){
      won(data[7])
    }else if(data[2]===data[5] && data[5] === data[8] && data[8]!==""){
      won(data[8])
    }else if(data[0]===data[4] && data[4] === data[8] && data[8]!==""){
      won(data[8])
    }
    // else if(data[0]===data[1] && data[1] === data[2] && data[2]!==""){
    //   won(data)
    // }
    else if(data[2]===data[4] && data[4] === data[6] && data[6]!==""){
      won(data[6])
    }
  }

  const won = (winner) => {
    setLock(true)
    if(winner==="x"){
      titleRef.current.innerHTML = `Congratulations: <span style={margin-right:2px;}>X</span> WIN`
    }
    else{
      titleRef.current.innerHTML = `Congratulations: <span style={margin-right:2px;}>O</span> WIN`
    }
  }


  const reset = () => {
    setLock(false)
    data = ["", "", "", "", "", "", "", "", ""]
    titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`
  }


  return <div className="container">
    <h1 className="title" ref={titleRef} >Tic Tac Toe Game In <span>React</span></h1>
    <div className="board">
      <div className="row1">
        <div className="boxes" onClick={(e) => toogle(e, 0)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 1)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 2)}></div>
      </div>
      <div className="row2">
        <div className="boxes" onClick={(e) => toogle(e, 3)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 4)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 5)}></div>
      </div>
      <div className="row3">
        <div className="boxes" onClick={(e) => toogle(e, 6)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 7)}></div>
        <div className="boxes" onClick={(e) => toogle(e, 8)}></div>
      </div>
    </div>
    <button className="reset" onClick={reset}>Reset</button>
  </div>;
};
export default TicTacToe;
