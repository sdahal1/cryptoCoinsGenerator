import React, {useState} from 'react';
import styles from './Form.module.css';


const Form = () => {

    const [formInfo, setFormInfo] = useState({
        name: "",
        price: 0,
        color: ""
    })


    console.log("LOGGING THE IMPORTED STYLES HERE:", styles)
    const [coinlist, setCoinlist ] = useState([])

    const changeHandler = (event)=>{
        console.log("changin form info right now at this input:", event.target.name )
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("submitted form info", formInfo )
        setCoinlist([...coinlist, formInfo])
        setFormInfo({
            name: "",
            price: 0,
            color: ""
        })

    }




    return (
        <>
            <div>
                <form onSubmit = {submitHandler}>
                    <p>Coin Name: <input type="text" name="name" id="" onChange = {changeHandler} value = {formInfo.name}/></p>
                    <p>Coin Price: <input type="number" name="price" id="" onChange = {changeHandler} value = {formInfo.price}/></p>
                    <p>Coin Color: <input type="text" name="color" id="" onChange = {changeHandler} value = {formInfo.color}/></p>
                    <p><input type="submit" value="Add Crypto coin to watch list"/></p>
                </form>
            </div>
            <div>
                <h1>Here is your cryptocurrency watchlist:</h1>
                <div className = {styles.piggybank}>
                    {
                       
                    }
                    {
                        coinlist.map((coin) => {
                            let widthAndHeight = "150px"
                            if (coin.price > 1000){
                                widthAndHeight = "300px"
                            }

                            // <h1 style="color:blue;text-align:center;">This is a heading</h1>
                            return <div className = {styles.cryptocoin} style = {{backgroundColor: coin.color, width: widthAndHeight, height: widthAndHeight}} >

                                <h3>{coin.name}</h3>
                                <p>Price: {coin.price}</p>
                            </div>
                        })
                    }

                </div>
                
            </div>
        </>
    );
};


export default Form;