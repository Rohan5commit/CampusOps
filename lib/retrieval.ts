const tokenize = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);

export function rankContext(question: string, docs: { name: string; content: string }[], topK = 2) {
  const q = new Set(tokenize(question));
  const scored = docs.map((doc) => {
    const tokens = tokenize(doc.content);
    const overlap = tokens.reduce((acc, t) => acc + (q.has(t) ? 1 : 0), 0);
    return { ...doc, score: overlap / Math.max(tokens.length, 1) };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, topK);
}
