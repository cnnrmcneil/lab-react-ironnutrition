import React from "react";
import foods from '../foods.json';
import 'bulma/css/bulma.css';
import ShowFood from './ShowFood'
import CreateFood from './CreateFood'
import TodayFood from './TodayFood.js'
let originalFoodArr = foods

const Main = () => {
    const [foodArr, setFoodArr] = React.useState(originalFoodArr)
    const [searchbar, setSearchbar] = React.useState('')
    const [fullArr, setFullArr] = React.useState(originalFoodArr)
    const [saveArr, setSaveArr] = React.useState([])

    React.useEffect(() => {
        let lowerText = searchbar.toLowerCase();
        let newArr = [...fullArr];
        newArr = newArr.filter((food) =>{
            return food.name.toLowerCase().includes(lowerText)
        })
        setFoodArr(newArr);
    }, [searchbar])

    const searchWhileTyping = (val) => {
        setSearchbar(val)
    }
    
    const addFood = (addFood) => {
        console.log('Food called at main', addFood)
        let newArr = [...foodArr];
        newArr = newArr.concat(addFood)
        setFoodArr(newArr)
        setFullArr(newArr)
        console.log(foodArr)
    }

    const saveFood = (saveFood) => {
        let newArr= [...foodArr]
        newArr = newArr.filter((food) => {
            return food.name === saveFood.name
        })
        newArr = newArr.concat(saveArr)
        if (newArr.filter((food) => {
            
        }))
        setSaveArr(newArr)
    }

    const updateQuantity = (foodName, newQuantity) => {
        let newArr = [...foodArr]
        let foodPosition = newArr.findIndex((food) => {
            return food.name === foodName
        })
        console.log(foodPosition)
        newArr[foodPosition].quantity = newQuantity
        

    }

    return(
        <div>
        <div className='search-bar'>
            <p>Search</p>
            <input name='search'
                placeholder='Search Foods'
                value={searchbar}
                onChange={(e) => searchWhileTyping(e.target.value)}
            />
        </div>
        <div class="columns">
            <div class="column">
        <ShowFood foodArr={foodArr} saveFood={saveFood} 
        updateQuantity={updateQuantity}

        />
        <CreateFood addFood={addFood}/>
            </div>
            <div class="column">
        <TodayFood saveArr={saveArr}/>
            </div>
        </div>
        </div>
    )       
}

export default Main