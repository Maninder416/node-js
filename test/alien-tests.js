process.env.NODE_ENV = 'test';

let mongoose = require('mongoose')
let Alien = require('../model/alien')

var chai = require('chai')
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var server = require('../app')
const supertest = require('supertest');

let chaiHttp = require('chai-http');
const app = require('../app');
const assertTemp = require('assert')
chai.use(chaiHttp)
let id;


describe('Aliens', ()=>{
    beforeEach((done) => {
        Alien.remove({}, (err) => {
            done();
        })

    })
});


describe('Get Alien Task API', function(){

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
});

describe('Post Alien Task API', function() {

    let alien = {
        name: "Brijesh",
        tech: "full-stack",
        sub: false
    }
    it('Post Alien', function(done){

        chai.request(server)
        .post('/aliens')
        .send(alien)
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.should.have.property('name'));
            expect(response.body.should.have.property('tech'));
            expect(response.body.should.have.property('sub'));
            expect(response.body.should.have.property('_id'));
            id = response.body._id;
            done();
            
        })

    })

});

describe('GET Alien by Id', function(){
    it('Get Alien by Id', function(done){
        let alien = new Alien({
            name: "Brijesh",
            tech: "full-stack",
            sub: false
        });
        chai.request(server)
        .get('/aliens/'+id)
        .send(alien)
        .end((err,response) => {
            expect(response.status).to.be.equal(200);
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('tech');
            response.body.should.have.property('sub');
            response.body.should.have.property('_id');
            response.body._id = id;
            expect('Brijesh').to.equal(response.body.name);
            expect('full-stack').to.equal(response.body.tech);
            expect(false).to.equal(response.body.sub);
            done();
            });

        })
        
});

describe('Put Alien ', function(){
    it('Put Alien', function(done){
        let alien = new Alien({
            name: "Brijesh-new",
            tech: "full-stack-new",
            sub: true
        });
        console.log('Alien id: '+id)

        chai.request(server)
        .put('/aliens/'+id)
        .send(alien)
        .end((err,response) => {
            expect(response.status).to.be.equal(200);
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('tech');
            response.body.should.have.property('sub');
            response.body.should.have.property('_id');
            response.body._id = id;
            expect('Brijesh-new').to.equal(response.body.name);
            expect('full-stack-new').to.equal(response.body.tech);
            expect(true).to.equal(response.body.sub);
            done();
            });

        })

    })

    describe('Delete Alien API task', function(){
        it('Delete Alien', function(done){
            console.log('Alien id: '+id)
    
            chai.request(server)
            .delete('/aliens/'+id)
            .end((err,response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body).equal('***** Data deleted successfully. ******');
                done();
                });
    
            })
    
        })

