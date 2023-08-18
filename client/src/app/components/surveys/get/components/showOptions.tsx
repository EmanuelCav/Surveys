import { IOption } from "../../../../interfaces/Survey"

const ShowOption = ({ option }: { option: IOption }) => {
  return (
    <button>{option.name}</button>
  )
}

export default ShowOption