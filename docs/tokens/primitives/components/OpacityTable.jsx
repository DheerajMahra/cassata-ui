import React from "react";
import { opacity } from "../../../../src/tokens/primitives";

export const OpacityTable = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Raw Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(opacity).map(([key, value]) => (
          <tr key={value}>
            <td>
              <code>{`opacity.${key}`}</code>
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
