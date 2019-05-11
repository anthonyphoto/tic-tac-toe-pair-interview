import * as actions from '../actions';

const initialState = {
    loading: false,
    error: null,
    data: {},
    grid: [[undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]],
    player: 1,
    gameOver: false
}

function isGameOver(grid, content) {
    for (let y = 0; y < 3; y++) {
        if (grid[y][0] === content && 
            grid[y][1] === content &&
            grid[y][2] === content) {
                return true;
            }
    }

    for (let x = 0; x < 3; x++) {
        if (grid[0][x] === content && 
            grid[1][x] === content &&
            grid[2][x] === content) {
                return true;
            }
    }

    if (grid[0][0] === content && 
        grid[1][1] === content &&
        grid[2][2] === content) {
            return true;
        }
    if (grid[0][2] === content && 
        grid[1][1] === content &&
        grid[2][0] === content) {
            return true;
        }
    

    return false;

}

export default function reducer (state = initialState, action) {
    switch(action.type) {

        case actions.UPDATE_CELL:
            console.log("arr", action.index);
            const content = state.player === 1 ? "O" : "X";
            state.grid[action.index[0]][action.index[1]] = content;



            return Object.assign({}, state, {
                player: state.player === 1 ? 2 : 1,
                gameOver: isGameOver(state.grid, content)


            });


        case actions.FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.err
            });

        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                error: null
            });
        
        default:
            return state;
    }

}