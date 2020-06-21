import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { storeConfig, actions, STORE_NAME } from "./store";
import { registerStore } from "@wordpress/data";
import { CandidateList } from "./CandidateList";

//this version of react + jest + @testing-library/react has this issue: https://github.com/testing-library/dom-testing-library/issues/477

function setupStoreWithCandidates(candidates) {
  const testStoreConfig = {
    ...storeConfig,
    resolvers: {},
  };
  let store = registerStore(STORE_NAME, testStoreConfig);
  store.dispatch(actions.addMany(candidates));
  return store;
}

it("No candidates, CandidateList should display No Candidates when there aren't any", async () => {
  setupStoreWithCandidates([]);
  const { findByText } = render(<CandidateList />);

  expect(await findByText("No candidates")).toBeInTheDocument();
});

it("One candidate named George, CandidateList should display No Candidates when there aren't any", async () => {
  setupStoreWithCandidates([{ id: 1, name: "George" }]);
  const { findByText } = render(<CandidateList />);

  expect(await findByText("George")).toBeInTheDocument();
});
