import React from "react";
import { spacing } from "../../../../src/tokens/primitives";

export const SpacingTable = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Raw Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(spacing).map(([key, value]) => (
          <tr key={value}>
            <td>
              <code>{`spacing.${key}`}</code>
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
