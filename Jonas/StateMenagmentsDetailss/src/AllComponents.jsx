export const FormCheck = () => {
  return (
    <form className="add-form">
         <h3>What do you need for your 😍 trip?</h3>
         <select>
            <option value="1">Book Flights</option>
            <option value="2">Reserve Hotels</option>
            <option value="3">Plan Activities</option>
         </select>

         <input type="text"  placeholder="Add Items..."/>
         <button>Add</button>
    </form> 
   
  )
}                         