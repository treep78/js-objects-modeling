'use strict';

const television =
{
 isOn: false,
 togglePower: function(){return this.isOn = !this.isOn;},
 volume: 0,
 increaseVolume: function(d){this.volume += (d || 1); return "Volume set to "+this.volume;},
 decreaseVolume: function(d){this.volume -= (d || 1); if(this.volume < 0){this.volume = 0;}} return "Volume set to "+this.volume;},
 channel: 0,
 increaseChannel: function(d){this.channel += (d || 1); return "Channel set to "+this.channel;},
 decreaseChannel: function(d){if(this.channel > 0){this.channel -= (d || 1);} return "Channel set to "+this.channel;},
 screenType: "LCD",
 resolution: [0,0],
 powerConsumption: 0
};

console.log(television.volume);
television.increaseVolume();
console.log(television.volume);

module.exports = television;
// counterPart to export: let television = require('./television.js');
