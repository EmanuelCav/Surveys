import { genderType } from "../../../types/auth.types"

const SelectGender = ({ gender, handleChange }: genderType) => {
  return (
    <select name="gender" className="input-form" value={gender} onChange={handleChange} >
        <option value="" disabled>GENDER</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
  )
}

export default SelectGender