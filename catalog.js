// ai-filter.js — Content moderation filter

const BANNED_WORDS = [
  "porn", "sex", "xxx", "abuse", "fuck", "bitch", "shit", "ass",
  "bastard", "damn", "crap", "idiot", "stupid", "hate", "kill",
  "nude", "naked", "rape", "drug", "alcohol", "violence"
];

/**
 * Returns true if the text contains inappropriate content
 */
function detectAbuse(text) {
  const lower = text.toLowerCase();
  // Check for banned words (including partial matches within words)
  for (let word of BANNED_WORDS) {
    if (lower.includes(word)) return true;
  }
  // Check for repeated characters (spam detection)
  if (/(.)\1{4,}/.test(text)) return true;
  // Check for ALL CAPS shouting (more than 10 caps letters in a row)
  if (/[A-Z]{10,}/.test(text)) return true;
  // Check for excessive punctuation
  if (/[!?]{5,}/.test(text)) return true;
  return false;
}

/**
 * Basic spam detection — checks if comment is too short or repetitive
 */
function isSpam(text) {
  const trimmed = text.trim();
  if (trimmed.length < 5) return true;
  // Check if comment is just one repeated word
  const words = trimmed.split(/\s+/);
  if (words.length > 3) {
    const unique = new Set(words);
    if (unique.size === 1) return true;
  }
  return false;
}
