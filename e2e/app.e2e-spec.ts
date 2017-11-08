import { TreeePage } from './app.po';

describe('treee App', () => {
  let page: TreeePage;

  beforeEach(() => {
    page = new TreeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
