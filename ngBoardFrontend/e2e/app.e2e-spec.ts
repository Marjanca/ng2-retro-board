import { NgBoardPage } from './app.po';

describe('ng-board App', function() {
  let page: NgBoardPage;

  beforeEach(() => {
    page = new NgBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
