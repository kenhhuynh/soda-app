import { BTeamPage } from './app.po';

describe('b-team App', () => {
  let page: BTeamPage;

  beforeEach(() => {
    page = new BTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
