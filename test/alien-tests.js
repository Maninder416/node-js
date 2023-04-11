var chai = require('chai')
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
const supertest = require('supertest');
var server = require('../app')

let chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Task API', function(){

    it('get alien ', function(done){
        chai.request(server)
        .get('/aliens')
        .end((err, response)=>{
            expect(response.status).to.be.equal(201111);
            done();
        })
    })
})

