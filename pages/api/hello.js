export default function handler(req, res) {
  try {
    res.status(200).json({ text: "Hello" });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
