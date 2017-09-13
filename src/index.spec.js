var expect = require('chai').expect;
var chai = require('chai')
chai.use(require('chai-dom'))
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  const index = fs.readFileSync('./dist/index.html', "utf-8");

  it('it should have all h1', (done) => {
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('News');
      done(); // important! to match string is equal
      window.close();
    });
  });

  it('it should have a nav list', (done) => {
    jsdom.env(index, function (err, window) {
      const nav = window.document.getElementsByClassName('nav');
      expect(nav.length).to.equal(1);
      done();
      window.close();
    });
  });

  it('it should have a nav tag', () => {
    jsdom.env(index, function (err, window) {
      const nav = window.document.getElementsByTagName('nav');
      expect(nav.length).to.equal(1);
      done();
      window.close();
    });
  });
});

