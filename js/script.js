// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the sphere.
 */
function calculate() {  
  
  // Data being collected 
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  //Data being processed
  let celsius = 5.0 / 9.0 * (fahrenheit - 32);
  
  // Data being shown
  document.getElementById('degreesInCelsius').innerHTML = 'The degrees in celsius is ' + celsius.toFixed(2) + "°"
}