import React from "react";
import { withSelect } from "@wordpress/data";
import { STORE_NAME } from "./store";

class CandidateListCompoent extends React.Component {
  render() {
    if (!this.props.candidates.length) {
      return <h1>No candidates</h1>;
    }
    return (
      <div>
        {(this.props.candidates || []).map((candidate) => (
          <ul key={candidate.id}>
            <li>{candidate.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const CandidateList = withSelect((select) => ({
  candidates: select(STORE_NAME).getCandidates(),
}))(CandidateListCompoent);

export { CandidateList };
