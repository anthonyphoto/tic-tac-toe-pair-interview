import React from 'react';
import {connect} from 'react-redux';
import GridCell from './grid-cell';
// import {fetchData} from '../actions';


export class LandingPage extends React.Component{

    // componentDidMount() {
    //     this.props.dispatch(fetchData());
    //     console.log(this.props.demo.data.message);
    // }
    handleClick(e) {
        e.preventDefault();

    }

    render() {
        const {grid, player, gameOver} = this.props;
        console.log("grid", grid);
        console.log("player", player);

        const cellJsx = [];
        for (let y = 0; y < 3; y++){
            for (let x = 0; x < 3; x++) {
                cellJsx.push(<GridCell key={`${x}${y}`} x={x} y={y} content={grid[y][x]} />);
            }
        }

        return (
        <main>
            <h1 className='al-c'>Tic Tac Toe</h1>
            {
                gameOver ?
                <React.Fragment>
                    <h2 className='al-c'>Game Over</h2>
                    <a href="" onClick={e => this.handleClick(e)}>Play Again?</a>
                </React.Fragment>
                :
                    ""
            }

            <h2 className='al-c'>Player {player}</h2>
            <div className='grid-sec'>
                {cellJsx}
            </div>

        </main>
        );
    }
}

const mapStateToProps = state => {

    return {
        grid: state.demo.grid,
        player: state.demo.player,
        gameOver: state.demo.gameOver

    }
}

export default connect(mapStateToProps)(LandingPage);