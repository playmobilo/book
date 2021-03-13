var expect = require('chai').expect;
var sendPwMw = require('./../../../middleware/generic/sendPwMw');


describe('sendPwMw middleware ', function () {

  it('should send a positive feedback to a user if email was given by a user.', function (done) {
    var req = {
      body: {
              email: 'asd@asd.com',
              send: 'Send'
      }
    };
    var res = {
          locals: {
                msg : '',
                error: ''
                 

          },
        }
        sendPwMw({})(req,res,function (){
          expect(req.body.send).to.be.eql('Send');
          expect(res.locals.msg).to.be.eql('The email is sent if it has already registered in our database!');
          done();
        });

 
  });

  it('should send a negativ feedback to a user if email was not given by a user.', function (done) {
    var req = {
      body: {
              email: '',
              send: 'Send'
      }
    };
    var res = {
          locals: {
                msg : '',
                error: ''
                 

          },
        }
        sendPwMw({})(req,res,function (){
          expect(req.body.email).to.be.eql('');
          expect(res.locals.error).to.be.eql('Please add a valid e-mail address!');
          done();
        });

 
  });

});