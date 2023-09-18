import { useSelector } from 'react-redux'

import img from '../../../loading.gif';

import { IReducer } from '../../interfaces/Reducer'

import { selector } from '../../helper/selector'

const Loading = () => {

    const response = useSelector((state: IReducer) => selector(state).response)

    return (
        <>
            {
                response.loading && 
                <div className='container-loading'>
                    <img src={img} alt="loading..." className='loading-icon' />
                </div>
            }
        </>
    )
}

export default Loading