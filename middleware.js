"use strict"

var express = require('express');

var grpc = require('grpc');

var PROTO_PATH = __dirname + '/v2018.7.7/core.proto';

var app = express();
var server = require('http').createServer(app);

var proto = grpc.load(PROTO_PATH);
const connectionString = 'localhost:50051'
let client = new proto.Core(connectionString, grpc.credentials.createInsecure());
let request = new proto.HelloRequest;

client.Hello(request, function(err, response) {
  if (err) {
    console.log("Error!Hello", err);
    // sessionVar.connected = false;
    // waiting = false;
    // we do not reject here, because ta2 can becaome available at some point
    // reject(err);
  } else {
    // sessionVar.connected = true;
    console.log("Success!Hello", response);
    // sessionVar.ta2Ident = response;
    // fulfill(sessionVar);
  }
});

