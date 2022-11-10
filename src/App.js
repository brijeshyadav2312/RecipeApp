import Search from './components/Search';
import React, { useEffect, useState} from 'react'
import Axios from 'axios'
import logo from './recipe-book.png'
const APP_ID= "aec7d495";
const APP_KEY= "0902d75eb59a7d85bf81c85823404cb0";
function App() {
  const [isclicked,setIsClicked]=useState(false);
  const [query, setQuery]=useState("paneer");
  const [recipies, setRecipies]=useState([]);
  useEffect(() => {
    fetchData();
  }, [isclicked]);

    const fetchData = async () => {
    const response = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`,
    )
    const data = response.data;
    setRecipies(data.hits)
    console.log(data.hits)
    };
  return (
    <div className='main'>
      <div className='header'>
        <div className='logoArea'>
          <img src={logo} alt="logo" />
          <span>Reciepe<br/>Book</span>
        </div>
        <div className='inputArea'>
          <input type="text"  onChange={(e) => { setQuery(e.target.value) }} placeholder='Search Reciepe'/>
          <span onClick={() => { setIsClicked((prevState) => !prevState) }}></span>
        </div>
      </div>
      <div className='cardFlex'>
        {recipies.map((item, idx) => (
            <Search key={idx}
              title={item.recipe.label}
              imageSrc={item.recipe.image}
         />
      ))}
      </div>
    </div>
  );
}

export default App;
