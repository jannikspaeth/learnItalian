import { Star } from 'lucide-react';

// The months a profile has won in THE RACE, shown behind their name: one star
// each up to five, then a single star with a count.
export default function Stars({ n, className = '' }: { n: number; className?: string }) {
  if (!n || n <= 0) return null;
  const star = <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden />;
  return (
    <span className={`inline-flex items-center gap-0.5 align-middle ml-1 ${className}`} title={`${n}`}>
      {n <= 5
        ? Array.from({ length: n }, (_, i) => <span key={i}>{star}</span>)
        : <>{star}<span className="text-xs font-semibold text-amber-600 tabular-nums">×{n}</span></>}
    </span>
  );
}
