import { useState } from 'react'
import PropTypes from 'prop-types'
import useInterval from '../../util/UseInterval'

function Card({apiPath: path, text: title, iconClass: icon}) {
    const [value, setValue] = useState(0)
    useInterval(() => {
        // XXX remove if statement
        if(path === "dev")
            fetch(`${path}}`)
                .then(response => response.json())
                .then(data => setValue(data.value));
        setValue(value + 1)
    }, 10000)

    return (
        <div className="cards-single">
            <div>
                <h1>{value}</h1>
                <span>{title}</span>
            </div>
            <div>
                <span className={icon} />
            </div>
        </div>
    )
};

Card.propTypes = {
    apiPath: PropTypes.string, 
    text: PropTypes.string, 
    iconClass: PropTypes.string
}

Card.defaultProps = {
    apiPath: '/' ,
    text: 'Loding',
    iconClass: ''
}


export default Card;
