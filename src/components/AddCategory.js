import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories})=>{

    const [inputValue, setInputValue] = useState('');

    const handleInnputChange = (e)=>{
        setInputValue(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories(cats=>[inputValue,...cats]); 
            setInputValue('');
        }

    }

    return(

        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            value={inputValue}
            onChange={handleInnputChange}
            />

        </form>
    );
}

AddCategory.protoTypes ={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;