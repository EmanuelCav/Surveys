
const SelectGender = () => {
  return (
    <select className="input-form" >
        <option selected={true} value="Select your gender" disabled>GENDER</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
  )
}

export default SelectGender