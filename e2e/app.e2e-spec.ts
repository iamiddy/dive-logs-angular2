import { DiveAppPage } from './app.po';

describe('dive-app App', function() {
  let page: DiveAppPage;

  beforeEach(() => {
    page = new DiveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
