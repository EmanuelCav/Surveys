import { TbWorldCheck } from 'react-icons/tb';
import { RiSurveyLine } from "react-icons/ri";

import { cardType } from "../../../../types/index.types";

const CardData = ({ header, text, card }: cardType) => {
    return (
        <div className="container-card-data">
            {
                card ? <RiSurveyLine size={70} /> : <TbWorldCheck size={70} />
            }
            <h1 className='header-card'>{header}</h1>
            <p className='text-card'>{text}</p>
        </div>
    )
}

export default CardData