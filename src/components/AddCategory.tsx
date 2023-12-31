import React, { useState } from "react"

interface IAddCategory {

    onNewCategory: (value:string) => void
    
}

export const AddCategory:React.FC<IAddCategory> = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState<string>("One punch")

    const onInputChange = ( input: React.ChangeEvent<HTMLInputElement> ):void => {
        
        setInputValue( input.target.value );

    }

    const onSubmit = ( e: React.FormEvent<HTMLFormElement> ):void => {

        e.preventDefault();

        if(inputValue.trim().length <= 0) return

        onNewCategory( inputValue.trim() );

        setInputValue("");
        
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gif"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}

