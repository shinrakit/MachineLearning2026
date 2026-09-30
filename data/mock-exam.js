import { questions } from "./questions.js";

// Mock exam is deterministic, balanced (10 questions/chapter), and independent
// of the practice session so its timer/progress can be recovered.
export const mockExam = questions.filter((_, i) => i % 3 === 0);
