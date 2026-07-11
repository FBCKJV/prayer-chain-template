// Starting content for the standing Weekly Prayer List. This is what everyone
// sees until a moderator edits + saves it in the app (which stores it in
// Firestore and takes over from this seed).
//
// You can rename, add, or remove categories below to fit your church. Each
// section is one item per line (moderators edit the actual entries inside the
// app, not here).

export const LIST_SECTIONS = [
  'The Lost',
  'Praise',
  'Health',
  'Government',
  'Church',
  'Missionaries',
  'Unspoken',
  'Other',
];

// Empty to start — moderators fill these in from inside the app
// (⋯ menu is not used here; open “📋 Prayer List” → Edit).
export const LIST_SEED = {
  'The Lost': '',
  'Praise': '',
  'Health': '',
  'Government': '',
  'Church': '',
  'Missionaries': '',
  'Unspoken': '',
  'Other': '',
};
