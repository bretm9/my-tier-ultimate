import { Selector } from 'testcafe';
    
// The following line fixes testcafe + jest type collision
declare const test: TestFn;

fixture `Header`
  .page `http://localhost:3000`;

test('should render Mains', async t => {
  const mainsText = Selector('#mains');
  const mainsExists = mainsText.exists;

  await t
    .expect(mainsExists).ok()
});

test('Mains should have the attribute href=\'/mains\'', async t => {
  const mainsText = Selector('#mains');

  await t
    .expect(mainsText.getAttribute('href')).eql('/mains');
});