//DO NOT MODIFY THIS FILE

var fishData = {
  1: {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  2: {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  3:{
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? They\'re terrifying.'
  }
};

angular.module('fish-pond', [])
.component('app', {
  controller: function() {
    this.fishes = fishData;
  },
  template: '<fish-table fishes="$ctrl.fishes"></fish-table>',
});
