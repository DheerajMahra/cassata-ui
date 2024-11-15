import React from "react";
import { breakpoint } from "../../../../src/tokens/primitives";

export const BreakpointTable = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Raw Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(breakpoint).map(([key, value]) => (
          <tr key={value}>
            <td>
              <code>{`breakpoint.${key}`}</code>
            </td>
            <td>
              <code>{value}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
