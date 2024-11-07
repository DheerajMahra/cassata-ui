import React from "react";
import { getThemeSemanticTokens } from "../../../../src/tokens/theme";
import { color } from "../../../../src/tokens";

function findColorPath(hexCode) {
  const formattedHex = hexCode.toUpperCase();

  function search(obj, path = "") {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const result = search(obj[key], `${path}${key}.`);

        if (result) return result;
      } else if (obj[key] === formattedHex) {
        return `color.${path}${key}`;
      }
    }
    return null;
  }

  return search(color);
}

export const ColorTable = () => {
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
        entries.push([`theme.color.${tokenName}`, value]);
      }
    }
    return entries;
  };

  const flattenedTokens = flattenTokens(theme.color);

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
    >
      <thead>
        <tr>
          <th>Semantic Token Name</th>
          <th>Primitive Token Name</th>
          <th>Raw Value</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        {flattenedTokens.map(([tokenName, value]) => (
          <tr key={tokenName}>
            <td>
              <code>{tokenName}</code>
            </td>
            <td>
              <code>{findColorPath(value)}</code>
            </td>
            <td>
              <code>{value}</code>
            </td>
            <td>
              <input style={{ width: "100%" }} type="color" value={value} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
