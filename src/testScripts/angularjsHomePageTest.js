describe('AngularJS Guru', function() {

	beforeEach(function() {
		  isAngularSite(false);
		});
	
  it('should greet the named user', function() {
    //var angularHomepage = new AngularHomepage();
	var angularHomepage = require('../pageObject/angularHomePagePO.js');
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.greeting.getText()).toEqual('Hello Julie!');
  });
});