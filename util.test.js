import u from './util';

test("typo_ajust should relace ' by ’", () => {
  expect(u.typo_ajust("l'école de l'oie")).toBe("l’école de l’oie");
});
test('normalize should remove acents', () => {
  expect(u.normalize('Élève')).toBe('Eleve');
});
test('normalize should replace "().-" characters with spaces', () => {
  expect(u.normalize('(pp.qq-)r')).toBe(' pp qq  r');
});
