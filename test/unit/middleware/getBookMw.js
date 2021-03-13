var expect = require('chai').expect;
var getBookMw = require('./../../../middleware/book/getBookMw');

describe('getBook middleware ', function () {

  it('should get back all the books from db', function (done) {
    var req = {};
    var res = {
      locals: {}
    };
    var fakeBookModel = {
      find: function (some, cb) {
        cb(undefined, ['user1', 'user2'])
      }
    };

    getBookMw({
      bookModel: fakeBookModel
    })(req, res, function (err) {
      expect(res.locals.book).to.eql(['user1', 'user2']);
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should return error when db returns error', function (done) {
    var fakeBookModel = {
      find: function (some, cb) {
        cb('error_value', undefined)
      }
    };

    getBookMw({
      bookModel: fakeBookModel
    })({}, {}, function (err) {
      expect(err).to.eql('error_value');
      done();
    });
  });
});