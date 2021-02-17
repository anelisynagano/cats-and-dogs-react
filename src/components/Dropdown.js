const Dropdown = ({ handleSelect }) => {

    return(
        <select onChange={handleSelect} name="animals" id="animals">
            <option value="All">All animals</option>
            <option value="Dogs">Just Dogs :)</option>
            <option value="Cats">Just Cats :)</option>
        </select>
    )
}

export default Dropdown;