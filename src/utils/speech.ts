// Simple Web Speech API helper for reading Vietnamese legal text aloud on mobile phones

export function speakVietnamese(text: string, onEnd?: () => void): boolean {
  if (!('speechSynthesis' in window)) {
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text from symbols/markdown
  const cleanText = text
    .replace(/[#*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) return false;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.95; // Slightly slower for better clarity, especially for seniors

  // Find a Vietnamese voice if available
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find((v) => v.lang.includes('vi') || v.lang.includes('VI'));
  if (viVoice) {
    utterance.voice = viVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeaking(): boolean {
  if (!('speechSynthesis' in window)) return false;
  return window.speechSynthesis.speaking;
}
