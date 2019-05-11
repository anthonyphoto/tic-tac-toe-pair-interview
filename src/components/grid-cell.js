import React from 'react';
import {connect} from 'react-redux';
// import {fetchData} from '../actions';
import {updateCell} from '../actions';

function handleClick(e, x, y, dispatch) {
    e.preventDefault();
    dispatch(updateCell([y, x]));
    console.log(x, y);
    
}

export function GridCell(props) {
    const {x, y, content} = props;
    // console.log(x, y, content);
    return (
        <div className='cell'>
            {
                content ? 
                    <div>
                        {content}
                    </div>
                :
                    <a href="" onClick={e=>handleClick(e, x, y, props.dispatch)}>
                        -
                    </a>

            }
        </div>
    );
}

// const mapStateToProps = state => {
//     return state;
// }

export default connect()(GridCell);