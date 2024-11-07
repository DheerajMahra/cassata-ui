import React from "react";
import { border } from "../../../../src/tokens/primitives";

export const BorderTable = () => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
    >
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Raw Value</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through flattened tokens and add section headers */}
        {Object.entries(border).map(([section, tokens]) => (
          <React.Fragment key={section}>
            {/* Section heading row */}
            <tr>
              <td
                colSpan="2"
                style={{
                  padding: "6px 14px",
                  fontWeight: "bold",
                  backgroundColor: "#ededed"
                }}
              >
                Border {section}
              </td>
            </tr>

            {/* Tokens within each section */}
            {Object.entries(tokens).map(([key, value]) => (
              <tr key={`${section}.${key}`}>
                <td>
                  <code>{`border.${section}.${key}`}</code>
                </td>
                <td>
                  <code>{value}</code>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
