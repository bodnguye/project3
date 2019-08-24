/* eslint-disable default-case */

const deckReducer = (state = {
    trailDeck: [],
    supplyDeck: [],
    trailHand: [],
    supplyHand: [],
    calamityDeck: [],
    miscCards: [],
    activeTrail: []
}, action) => {
    switch (action.type) {
        case "DEAL_DECK":
            state = {
                ...state,
                trailDeck: action.trailDeck,
                supplyDeck: action.supplyDeck,
                trailHand: action.trailHand,
                supplyHand: action.supplyHand
            }
            break;
        case "TRAIL_CLICK":
            state = {
                ...state,
                activeTrail: action.activeTrail,
                trailHand: action.trailHand
            };
            break;
    }
    return state;
};

export default deckReducer;