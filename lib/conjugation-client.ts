import type { ConjugationExercise } from './types';
import type { ConjugationRequest } from './conjugation-exercise';

// Builds a verb drill in the browser: the catalogs load on demand (their own
// chunk, cached for offline use) — no server round trip.
export async function getConjugationExercise(req: ConjugationRequest): Promise<ConjugationExercise> {
  const { buildConjugationExercise } = await import('./conjugation-exercise');
  return buildConjugationExercise(req);
}
