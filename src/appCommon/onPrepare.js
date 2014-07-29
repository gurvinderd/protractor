
// At this point, global 'protractor' object will be set up, and jasmine
// will be available. For example, you can add a Jasmine reporter with:
//     jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
//         'outputdir/', true, true));
global.isAngularSite = function(flag){
	browser.ignoreSynchronization = !flag;
};