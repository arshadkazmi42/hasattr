var expect = require('chai').expect;
var hasAttr = require('../index');

var SINGLE_LEVEL_JSON = {
  'name': 'Arshad Kazmi',
  'github': 'arshadkazmi42',
  'twitter': '@arshadkazmi42',
};

var MULTI_LEVEL_JSON = {
  'name': 'Arshad Kazmi',
  'profile': {
    'github': {
      'username': 'arshadkazmi42',
      'repos': [
        {
          'repo_name': 'hasattr',
          'url': 'https://github.com/arshadkazmi42/hasattr',
        },
      ],
    },
    'twitter': {
      'username': 'arshadkazmi42',
    },
  },
};


describe('Search the key in all types of json', function() {

  it('should find the key in single level json', function() {

    var hasKey = hasAttr('name', SINGLE_LEVEL_JSON);
    expect(hasKey).to.be.true;

    hasKey = hasAttr('repo_name', SINGLE_LEVEL_JSON);
    expect(hasKey).to.be.false;
  });

  it('should find the key in nested level json', function() {

    var hasKey = hasAttr('github', MULTI_LEVEL_JSON);
    expect(hasKey).to.be.true;

    hasKey = hasAttr('repo_name', MULTI_LEVEL_JSON);
    expect(hasKey).to.be.true;
  });
});
