#!/usr/bin/node
const createPerson = require('./costructor.js')
const salva = new createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
