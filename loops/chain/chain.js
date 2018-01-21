const students = [
  {
    focus: 'nagarjuna',
  },
  {
    focus: 'logic',
  },
  {
    focus: 'consciousness',
  },
  {
    focus: '',
  },
  {
    focus: 'logic',
  },
];

const focuses = students
  .map(student => student.focus)
  .filter(focus => focus)
  .reduce((focuses, focus) => {
    const count = focuses.get(focus) || 0;
    focuses.set(focus, count + 1);
    return focuses;
  }, new Map());

const formattedFocus = [...focuses]
  .sort()
  .map(([name, count]) => `${name}: ${count}`);

formattedFocus;

// START:expanded
const sailors = [
  {
    name: 'yi hong',
    active: true,
    email: 'yh@yhproductions.io',
  },
  {
    name: 'alex',
    active: true,
    email: '',
  },
  {
    name: 'nathan',
    active: false,
    email: '',
  },
];
// END:expanded

function sendActiveMemberEmail(sailors, sendEmail) {
// START:email
  sailors
    .filter(sailor => sailor.active)
    .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
    .forEach(sailor => sendEmail(sailor));
// END:email
}

export { sailors, sendActiveMemberEmail };
