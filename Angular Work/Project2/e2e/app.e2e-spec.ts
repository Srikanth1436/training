import { ProjecttsPage } from './app.po';

describe('projectts App', function() {
  let page: ProjecttsPage;

  beforeEach(() => {
    page = new ProjecttsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
