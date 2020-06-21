import { registerStore } from "@wordpress/data";

export const actions = {
  addMany(candidates) {
    return {
      type: "ADD_MANY",
      payload: candidates,
    };
  },
};

export const reducer = function (state = { candidates: [] }, action) {
  switch (action.type) {
    case "ADD_MANY":
      return { ...state, candidates: action.payload };
    default:
      return state;
  }
};

export const selectors = {
  getCandidates: (state) => state.candidates,
};

export const STORE_NAME = "myStore";
export const storeConfig = {
  actions,
  reducer,
  resolvers: {
    *getCandidates() {
      return actions.addMany([
        { id: 1, name: "Jane" },
        { id: 2, name: "John" },
      ]);
    },
  },
  controls: {}, //if this is not here the resolvers don't work???
  selectors,
};

export function setupStore() {
  registerStore(STORE_NAME, storeConfig);
}
