$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/automation/features/PHPTravels.feature");
formatter.feature({
  "line": 1,
  "name": "Sample test scenarios",
  "description": "",
  "id": "sample-test-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 662908586,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login in PHPTravels",
  "description": "",
  "id": "sample-test-scenarios;login-in-phptravels",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@php"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigated to \"https://www.phptravels.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login icon",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I login using credentials",
  "rows": [
    {
      "cells": [
        "user@phptravels.com",
        "demouser"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net",
      "offset": 16
    }
  ],
  "location": "Sapphire_StepDefs.openURL(String)"
});
formatter.result({
  "duration": 16656439040,
  "status": "passed"
});
formatter.match({
  "location": "PhpTravels.click_login_icon()"
});
formatter.result({
  "duration": 22424712960,
  "status": "passed"
});
formatter.match({
  "location": "PhpTravels.loginUser(DataTable)"
});
formatter.result({
  "duration": 5559292587,
  "status": "passed"
});
formatter.after({
  "duration": 1486717013,
  "status": "passed"
});
formatter.uri("com/automation/features/myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Proof of Concept that my framework works",
  "description": "",
  "id": "proof-of-concept-that-my-framework-works",
  "keyword": "Feature"
});
formatter.before({
  "duration": 275200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "My First Test",
  "description": "",
  "id": "proof-of-concept-that-my-framework-works;my-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I navigated to \"https://www.youtube.in\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on element",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the element",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter the text",
  "rows": [
    {
      "cells": [
        "SearchText",
        "Cucumber"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I clicked on searchicon",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.youtube.in",
      "offset": 16
    }
  ],
  "location": "Sapphire_StepDefs.openURL(String)"
});
formatter.result({
  "duration": 11503583573,
  "status": "passed"
});
formatter.match({
  "location": "Sapphire_StepDefs.clickSearchbox()"
});
formatter.result({
  "duration": 822340266,
  "status": "passed"
});
formatter.match({
  "location": "Sapphire_StepDefs.verifyElement()"
});
formatter.result({
  "duration": 715133440,
  "status": "passed"
});
formatter.match({
  "location": "Sapphire_StepDefs.enterSearchText(DataTable)"
});
formatter.result({
  "duration": 792465494,
  "status": "passed"
});
formatter.match({
  "location": "Sapphire_StepDefs.clickSearchIcon()"
});
formatter.result({
  "duration": 848628480,
  "status": "passed"
});
formatter.after({
  "duration": 1381021440,
  "status": "passed"
});
});