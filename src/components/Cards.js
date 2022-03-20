import { useState } from 'react';
import Card from './Card'

function Cards(){
  const [itemsCards, setItemCards] = useState([
    { type: 1, img: '/img/angular.png', status: "" },
    { type: 1, img: '/img/angular.png', status: "" },
    { type: 2, img: '/img/css.png', status: "" },
    { type: 2, img: '/img/css.png', status: "" },
    { type: 3, img: '/img/html.png', status: "" },
    { type: 3, img: '/img/html.png', status: "" },
    { type: 4, img: '/img/js.png', status: "" },
    { type: 4, img: '/img/js.png', status: "" },
    { type: 5, img: '/img/nodejs.png', status: "" },
    { type: 5, img: '/img/nodejs.png', status: "" },
    { type: 6, img: '/img/react.png', status: "" },
    { type: 6, img: '/img/react.png', status: "" },
    { type: 7, img: '/img/scss.png', status: "" },
    { type: 7, img: '/img/scss.png', status: "" },
    { type: 8, img: '/img/vue.png', status: "" },
    { type: 8, img: '/img/vue.png', status: "" },
  ].sort(()=> Math.random() - 0.5))

  const [prev, setPrev] = useState(-1)

  /**
   * Handle click event on Card component
   *
   * @param {number} id index of the object in array.
   * Call checkCardStatus to set Css status
   */
  function handleClick(id){
    if(prev === -1){
      itemsCards[id].status = "active"
      setItemCards([...itemsCards])
      setPrev(id)
    }else{
      checkCardStatus(id)
    }
  }
  /**
   * Set Css style to Card component
   *
   * @param {object} current object state of current event.
   * Compare objects types ans set Css properties based on conditional
   * and set  value to previous state
   */
  function checkCardStatus(current){
    if(itemsCards[current].type === itemsCards[prev].type){
      itemsCards[current].status = "correct"
      itemsCards[prev].status = "correct"
      setItemCards([...itemsCards])
      setPrev(-1)
    }else{
      itemsCards[current].status = "wrong"
      itemsCards[prev].status = "wrong"
      setItemCards([...itemsCards])
      // 1 second to set initial css properties and previous state
      setTimeout(() => {
        itemsCards[current].status = ""
        itemsCards[prev].status = ""
        setItemCards([...itemsCards])
        setPrev(-1)
      }, 1000)
    }
}

  return (
    <div className="container">
      {
        itemsCards.map((item, index) =>
          <Card key={index} item={item} id={index} handleClick={handleClick}/>
        )
      }
    </div>
  )
}

export default Cards;
