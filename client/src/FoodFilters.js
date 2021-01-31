import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
 
const FoodFilters = () => {
    return (
        <div>
            <form>
                <label for="quantity">Select Time:</label>
                <select>
                    <option value="0-20">0-20 Minutes</option>
                    <option value="20-40">20-40 Minutes</option>
                    <option value="40-60">40-60 Minutes</option>
                    <option value="60-120">1-2 Hours</option>
                    <option value="120+">2+ Hours</option>                   
                </select>
                <div >
                    <div className="FoodFilter">
                    <Checkbox label='Dairy-Free' />
                    <Checkbox label='Nut-Free' />
                    <Checkbox label='Low-Fat' />
                    <Checkbox label='Exotic' />
                    <Checkbox label='American' />                
                    </div>
                </div>
                <input type="submit" value="Submit"></input>

            </form>
        </div>
    )
}
export default FoodFilters
