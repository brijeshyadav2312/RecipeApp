import React from "react";
const Search = (props) => {
  return (
    <>
      <div className='containers'>
        <div className='card'>
          <a href={props.imageSrc} target="_ "><div className='bgImage' style={{ backgroundImage: `url(${props.imageSrc})` }}></div></a>
          <p className='title'>{props.title}</p>
          <span className='ingridients'>
            <span><span>{0}&nbsp;</span>CALORIES</span>
            <span><span>{23}&nbsp;</span>INGRIDIENTS</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Search;
