import React from "react";
import { color } from "../../../../src/tokens/primitives";

export const ColorsTable = () => {
  const flattenedColors = Object.entries(color).flatMap(([key, value]) => {
    if (typeof value === "string") {
      return [[key, value]];
    } else {
      return Object.entries(value).map(([shade, colorValue]) => [`${key}.${shade}`, colorValue]);
    }
  });

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Raw Value</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        {flattenedColors.map(([colorName, colorValue]) => (
          <tr key={colorName}>
            <td>
              <code>{`color.${colorName}`}</code>
            </td>
            <td>
              <code>{colorValue}</code>
            </td>
            <td>
              <input style={{ width: "100%" }} type="color" value={colorValue} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
