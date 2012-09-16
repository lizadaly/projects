/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, regexp: true, white: true, nomen: false, onevar: false, undef: true, plusplus: false, white: true, indent: 2 */
/*global window $ confirm alert */

function register_tilt_events(element, use_x, use_y) {

  // Position Variables
  var x = 0;
  var y = 0;
  
  // Speed - Velocity
  var vx = 0;
  var vy = 0;
  
  // Acceleration
  var ax = 0;
  var ay = 0;
  
  var delay = 1;
  var vMultiplier = 0.01;
  
  window.ondevicemotion = function (event) {
    ax = event.accelerationIncludingGravity.x;
    ay = event.accelerationIncludingGravity.y;
  };
    
  setInterval(function () {
    vy = vy + -(ay);
    vx = vx + ax;
    
    y = parseInt(y + vy * vMultiplier, 10);
    x = parseInt(x + vx * vMultiplier, 10);
    
    if (x < 0) { 
      x = 0; 
      vx = 0; 
    }
    if (y < 0) { 
      y = 0; 
      vy = 0; 
    }
    if (x > document.documentElement.clientWidth - 20) { 
      x = document.documentElement.clientWidth - 20; 
      vx = 0; 
    }
    if (y > document.documentElement.clientHeight - 20) { 
      y = document.documentElement.clientHeight - 20; 
      vy = 0; 
    }
    
    if (use_y) {
      element.style.top = y + "px";
    }
    else if (use_x) {
      
      if (x > 400) {
        x = 400;
      }
      if (x < 50) {
        x = 50;
      }
      element.style.left = x + "px";
    }
  }, delay);

};