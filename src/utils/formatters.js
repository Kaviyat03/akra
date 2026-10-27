/**
 * Format product prices in Indian Rupee (INR) format (e.g., ₹1,499, ₹1,399).
 * Handles numbers, strings, and missing values gracefully.
 *
 * @param {number|string|null|undefined} price
 * @returns {string|null} Formatted price string with Rupee symbol, or null if unconfirmed.
 */
export function formatPrice(price) {
  if (price === null || price === undefined || price === '') {
    return null;
  }

  if (typeof price === 'number') {
    return `₹${price.toLocaleString('en-IN')}`;
  }

  if (typeof price === 'string') {
    const trimmed = price.trim();
    if (trimmed.startsWith('₹')) {
      return trimmed;
    }
    if (/^rs\.?/i.test(trimmed) || /^inr/i.test(trimmed)) {
      const num = Number(trimmed.replace(/[^0-9.]/g, ''));
      return !isNaN(num) && num > 0 ? `₹${num.toLocaleString('en-IN')}` : trimmed;
    }
    const cleanNum = Number(trimmed.replace(/[^0-9.]/g, ''));
    if (!isNaN(cleanNum) && cleanNum > 0) {
      return `₹${cleanNum.toLocaleString('en-IN')}`;
    }
    return trimmed;
  }

  return null;
}
