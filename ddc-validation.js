(function (root) {
  "use strict";

  function extractValidDdcValues(value) {
    const values = Array.isArray(value) ? value : value == null ? [] : [value];
    return [...new Set(values
      .map(item => String(item).trim())
      // DDC notation starts with a three-digit class; collection labels are not DDC.
      .filter(item => /^\\d{3}(?:\\.\\d+)?$/.test(item)))];
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { extractValidDdcValues };
  } else {
    root.extractValidDdcValues = extractValidDdcValues;
  }
})(typeof window !== "undefined" ? window : globalThis);
