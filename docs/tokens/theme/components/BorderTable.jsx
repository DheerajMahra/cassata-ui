import React from "react";
import { getThemeSemanticTokens } from "../../../../src/tokens/theme";
import { border } from "../../../../src/tokens";

function findPrimitiveToken(borderProperty, rawValue) {
  // Check if the specified borderProperty exists in the border object
  if (!border[borderProperty]) return null;

  // Recursive function to search within the specified borderProperty
  function search(obj, path = "") {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = search(obj[key], `${path}${key}.`);
        if (result) return result;
      } else if (obj[key] === rawValue) {
        return `border.${path}${key}`;
      }
    }
    return null;
  }
  // Start searching within the specified property
  return search(border[borderProperty], `${borderProperty}.`);
}

export const BorderTable = () => {
  const theme = getThemeSemanticTokens("base");

  const flattenTokens = (tokens, prefix = "") => {
    let entries = [];

    for (const [key, value] of Object.entries(tokens)) {
      const tokenName = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "object" && !Array.isArray(value)) {
        // Recursively flatten if the value is an object
        entries = entries.concat(flattenTokens(value, tokenName));
      } else {
        // Base case: add the token path and its value
        entries.push([`theme.border.${tokenName}`, value]);
      }
    }
    return entries;
  };

  const flattenedTokens = flattenTokens(theme.border);

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
        {flattenedTokens.map(([tokenName, value]) => (
          <tr key={tokenName}>
            <td>
              <code>{tokenName}</code>
            </td>
            <td>
              <code>{findPrimitiveToken(tokenName.split(".")[2], value)}</code>
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
