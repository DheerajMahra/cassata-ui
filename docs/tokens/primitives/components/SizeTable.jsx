import React from "react";
import { size } from "../../../../src/tokens/primitives";

export const SizeTable = () => {
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
        {Object.entries(size).map(([key, value]) => (
          <tr key={value}>
            <td>
              <code>{`size.${key}`}</code>
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
