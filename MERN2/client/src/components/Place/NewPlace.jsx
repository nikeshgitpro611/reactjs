import React from 'react'
import PlaceItems from './PlaceItems'
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils/Validate';
import { useForm } from '../Hook/FormHook';
import '../../assets/Css/NewPlace.css'

const initialInputs = {
  title: {
    value: '',
    isValid: false
  },
  description: {
    value: '',
    isValid: false
  },
  address: {
    value: '',
    isValid: false
  }
}

const NewPlace = () => {
  //custom Hook
  const [formState, inputHandler] = useForm(initialInputs, false);
  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
   };

  return (
    <div>
      <h2>Add New Place</h2>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={formState.isValid}>
          
          ADD PLACE
        </Button>
      </form>
      <PlaceItems />
    </div>
  )
}

export default NewPlace
