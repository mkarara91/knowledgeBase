function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;
  const secretCount: { [key: string]: number } = {};
  const guessCount: { [key: string]: number } = {};

  // First pass: Count bulls and track unmatched characters
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      // Count characters in both secret and guess
      secretCount[secret[i]] = (secretCount[secret[i]] || 0) + 1;
      guessCount[guess[i]] = (guessCount[guess[i]] || 0) + 1;
    }
  }

  // Second pass: Count cows
  for (const char in guessCount) {
    if (secretCount[char]) {
      // Cows are the minimum of the counts in unmatched characters
      cows += Math.min(secretCount[char], guessCount[char]);
    }
  }

  return `${bulls}A${cows}B`;
}