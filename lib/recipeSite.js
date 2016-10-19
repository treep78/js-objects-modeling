'use strict'

const recipe =
{
  name: "",
  author: "",
  steps: [],
  ingredientQs:
  {
    ingredient: "",
    unit: "",
    quantity: 0,
    notes: ""
  },
  servings: 0
};

const ingredient =
{
  name: "",
  inFridge: false,
  putInFridge: function(){if(this.inFridge){return "Put it in the fridge.";} else{return "Put it in the pantry.";}}
};
