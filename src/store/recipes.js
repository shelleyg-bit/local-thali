export default {
  name: 'recipes',
  state: {
    recipesDb: [
      {
        location: 'Portland, OR, USA',
        recipes: [
          {
            name: 'Potato onion soup',
            ingredients: [{
              name: 'potato',
              category: 'produce',
              quantity: 2,
              units: 'x'
            },
            {
              name: 'onion',
              category: 'produce',
              quantity: 2,
              units: 'x'
            },
            {
              name: 'salt',
              category: 'spice',
              quantity: 2,
              units: 'tsp'
            }],
            steps: [
              'boil & mash potatoes',
              'finely chop onions',
              'throw in a pot & boil'
            ]
          }
        ]
      },
      {
        location: 'Lucknow, UP, India',
        recipes: [
          {
            name: 'aaloo dum banarsi',
            ingredients: [{
              name: 'potato',
              category: 'produce',
              quantity: 4,
              units: 'x'
            },
            {
              name: 'onion',
              category: 'produce',
              quantity: 3,
              units: 'x'
            },
            {
              name: 'salt',
              category: 'spice',
              quantity: 4,
              units: 'tsp'
            },
            {
              name: 'coriander powder',
              category: 'spice',
              quantity: 2,
              units: 'tsp'
            }],
            steps: [
              'boil & lightly fry potatoes',
              'finely chop onions',
              'throw in a pot & let it simmer'
            ]
          }
        ]
      }
    ]

  }
}