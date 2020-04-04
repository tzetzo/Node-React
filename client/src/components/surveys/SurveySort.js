import React from "react";

const SurveySort = ({ sortFields, sortBy, reverse }) => (
  <React.Fragment>
    <div style={{ margin: ".5rem auto", width: "100%" }}>
      <select
        onChange={e => {
          sortBy(e.target.value);
        }}
        className="blue-grey.darken-1 btn"
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          textAlignLast: "center"
        }}
        value="default"
      >
        <option value="default" disabled>
          Sort Surveys By . . .
        </option>
        {sortFields.map(field => {
          return <option key={field.value} value={field.value}>{field.text}</option>;
        })}
      </select>
    </div>

    <button
      onClick={reverse}
      className="blue-grey.darken-1 btn"
      style={{ width: "100%" }}
    >
      Reverse
    </button>
  </React.Fragment>
);

export default SurveySort;
