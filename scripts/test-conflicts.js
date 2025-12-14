import { sampleConflicts, parseFirstConflict, applyResolution } from '../src/components/utils/ConflictUtils.jsx';

console.log('Running merge conflict utilities smoke tests...');

for (const f of sampleConflicts) {
  console.log(`\nFile: ${f.name}`);
  const parsed = parseFirstConflict(f.content);
  if (!parsed) {
    console.error('  No conflict found (unexpected)');
    continue;
  }
  console.log('  Ours snippet:\n', parsed.ours);
  console.log('  Theirs snippet:\n', parsed.theirs);
  console.log('  Resolved (ours):\n', applyResolution(f.content, 'ours'));
}

console.log('\nDone');
