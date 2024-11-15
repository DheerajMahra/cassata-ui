import React from "react";
import { getThemeSemanticTokens } from "../../../../src/tokens/theme";
import { opacity } from "../../../../src/tokens";

function findPrimitiveToken(rawValue) {
  function search(obj, path = "") {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = search(obj[key], `${path}${key}.`);

        if (result) return result;
      } else if (obj[key] === rawValue) {
        return `opacity.${path}${key}`;
      }
    }
    return null;
  }

  return search(opacity);
}

export const OpacityTable = () => {
  const theme = getThemeSemanticTokens("base");

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Semantic Token Name</th>
          <th>Primitive Token Name</th>
          <th>Raw Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(theme.opacity).map(([tokenName, value]) => (
          <tr key={tokenName}>
            <td>
              <code>{`theme.opacity.${tokenName}`}</code>
            </td>
            <td>
              <code>{findPrimitiveToken(value)}</code>
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
