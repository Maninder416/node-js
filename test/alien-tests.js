var chai = require('chai')
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var server = require('../app')
const supertest = require('supertest');

let chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp)

describe('Task API', function(){

    it('get alien ', function(done){
        chai.request(server)
        .get('/aliens')
        .end((err, response)=>{
            expect(response.status).to.be.equal(200);
            expect(response.body.forEach(element => {
                expect(element).to.have.all.keys('_id','name','tech','sub','__v');
                
            }));
            done();
        })
    })
})
