export function splitTextAfterStops(text: string, minStops: number): string[] {
  const words = text.split(' '); // Split into words
  let currentPart = '';
  let stopCount = 0;

  const parts: string[] = [];

  for (const word of words) {
    currentPart += `${word} `; // Add the word to the current part
    if (word.includes('.')) stopCount++; // Increment full stop count if "." is found

    // Split the text once the required number of full stops is reached
    if (stopCount >= minStops) {
      parts.push(currentPart.trim()); // Push the current part
      currentPart = ''; // Start a new part
      stopCount = 0; // Reset full stop count
    }
  }

  // Push the remaining text as the last part
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }

  return parts;
}
