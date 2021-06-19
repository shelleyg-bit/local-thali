export default {
	name: 'recipes',
	state: {
		recipesDb:
			[
				{
					"location": "Jaipur, Rajasthan, India",
					"hasMeat": false,
					"recipes": [
						{
							"name": "Baked Masala Baati",
							"ingredients": [
								{
									"name": "Whole wheat flour",
									"category": "grain",
									"quantity": 1,
									"units": "cup"
								},
								{
									"name": "Semolina",
									"category": "grain",
									"quantity": 1,
									"units": "cup"
								},
								{
									"name": "Milk",
									"category": "dairy",
									"quantity": 0.5,
									"units": "cup"
								},
								{
									"name": "Boilded Green Peas",
									"category": "produce",
									"quantity": 1,
									"units": "cup"
								},
								{
									"name": "Garam Masala",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								}
							],
							"steps": [
								"1. Prepare Dough Knead well and divide in 10 portions",
								"2. Stir fry green peas with spices",
								"3. Flatten dough portions in a circular shape",
								"4. Place equal portion of stuffing in the centre of one portion\n5. surround the filling with the dough by slowly streatching it over",
								"6. seal ends tightly",
								"7. Bake baatis at 250'C for 20 mins"
							]
						}
					]
				},
				{
					"location": "Jaipur, Rajasthan, India",
					"hasMeat": true,
					"recipes": [
						{
							"name": "Mamas Bird Grilled Chicken",
							"ingredients": [
								{
									"name": "Chicken legs",
									"category": "meat",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Chicken breast",
									"category": "meat",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Black peppercorn",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								},
								{
									"name": "Corriander seed",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								},
								{
									"name": "Pineapple",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Bay leaves",
									"category": "spice",
									"quantity": 3,
									"units": "x"
								},
								{
									"name": "Thyme",
									"category": "spice",
									"quantity": 5,
									"units": "x"
								},
								{
									"name": "Garlic",
									"category": "spice",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Apple Cider-Vinegar",
									"category": "spice",
									"quantity": 0.5,
									"units": "cup"
								}
							],
							"steps": [
								"1. Toast peppercorns and coriander in an 8-quart stockpot. Add rest of ingredients except chicken, and bring to a boil.",
								"2. Let cool completely before adding chicken. Brine 12 hours, or overnight, in the refrigerator.",
								"3. The morning before grilling, pat chicken dry and store, uncovered, on a wire rack in the refrigerator.",
								"4. Oil grates. Build a medium-heat fire (half of a typical chimney) and evenly disperse coals onto one side of grill for two-zone cooking.",
								"5. Generously salt and pepper the chicken and place, skin side up, over the cool side of the grill. Cover and cook until the internal temperature reaches 140 degrees, about 40 minutes.",
								"6. Move chicken to the hot side of the grill and cook, covered, skin side down, until the internal temperature reaches 155 degrees, about 10 minutes longer. "
							]
						}
					]
				},
				{
					"location": "Portland, Oregon, USA",
					"hasMeat": false,
					"recipes": [
						{
							"name": "Grilled Summer Vegetable Gazpacho",
							"ingredients": [
								{
									"name": "Zucchini",
									"category": "produce",
									"quantity": 2,
									"units": "x"
								},
								{
									"name": "Yellow Squash",
									"category": "produce",
									"quantity": 2,
									"units": "x"
								},
								{
									"name": "Red Bell Peppers",
									"category": "produce",
									"quantity": 3,
									"units": "x"
								},
								{
									"name": "Red Onion",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Red Heirloom Tomatoes",
									"category": "produce",
									"quantity": 3,
									"units": "x"
								},
								{
									"name": "English Cucumber",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Champagne Vinegar",
									"category": "spice",
									"quantity": 6,
									"units": "tsp"
								},
								{
									"name": "Lemon",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Lemon Olive Oil",
									"category": "spice",
									"quantity": 8,
									"units": "tsp"
								}
							],
							"steps": [
								"1. Roast the bell pepper over an open flame until the outside is completely black.",
								"2. Grill the Zucchini, Yellow Squash, and Red Onions on the grill.",
								"3. Next peel the cucumber and slice into ¼ inch rounds (do not remove the seeds) and add the Roasted Bell Peppers.",
								"4. Dice the Heirloom Tomatoes and mix with the Cucumbers/Pepper Mix.",
								"5. Next, roughly chop your now cooled grilled vegetables and add to the mix of veggie.",
								"6. Zest the lemon and remove the white pith.",
								"7. Season with salt until the mixture has a “sandy” feel to it. ",
								"8. Leave this out at room temperature for 6 to 8 hours or refrigerate for 24 hours..",
								"9. Next there should be retaining liquid in your container.  Place vegetables and some of that liquid in a high speed blender and blend.",
								"10. While it’s blending open the top and begin to drizzle in the Lemon Olive Oil and honey until a smooth consistency is reached (5 to 10 minutes).",
								"11. Once smooth you can serve, or strain through a fine mess strainer."
							]
						},
						{
							"name": "Summer Berry + Veggie Smoothie",
							"ingredients": [
								{
									"name": "frozen berries",
									"category": "produce",
									"quantity": 1,
									"units": "cup"
								},
								{
									"name": "Carrots",
									"category": "produce",
									"quantity": 0.5,
									"units": "cup"
								},
								{
									"name": "Cucumber",
									"category": "produce",
									"quantity": 0.5,
									"units": "x"
								},
								{
									"name": "Beetroot",
									"category": "produce",
									"quantity": 0.5,
									"units": "x"
								},
								{
									"name": "Chiaseeds",
									"category": "spice",
									"quantity": 1,
									"units": "tsp\n"
								}
							],
							"steps": [
								"1.To prepare, add all of the ingredients to a blender and process until smooth.",
								"2. Pour into a glass and garnish with a few sprigs of mint."
							]
						},
						{
							"name": "Summer Succotash Salad",
							"ingredients": [
								{
									"name": "Corn",
									"category": "produce",
									"quantity": 2,
									"units": "x"
								},
								{
									"name": "Extra-virgin Olive oil",
									"category": "spice",
									"quantity": 2,
									"units": "tsp"
								},
								{
									"name": "Spanish onion",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Clove garlic",
									"category": "spice",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Summer beans",
									"category": "produce",
									"quantity": 2,
									"units": "cups"
								},
								{
									"name": "Cherry tomatoes",
									"category": "produce",
									"quantity": 2,
									"units": "cups"
								},
								{
									"name": "Fresh basil",
									"category": "spice",
									"quantity": 2,
									"units": "tsp"
								},
								{
									"name": "Cilantro",
									"category": "produce",
									"quantity": 1,
									"units": "tsp"
								},
								{
									"name": "Lemon",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								}
							],
							"steps": [
								"1.Heat a grill pan over medium-high heat. Grill the corn until lightly charred on all sides, about 10 minutes. Set aside to cool slightly, then cut off the kernels and reserve.",
								"2.Heat the oil in a large saute pan over medium heat. Add the onion, peppers and sweat until translucent, about 5 minutes. Add the garlic and cook for another minute. Add the beans cook until tender, about 5 minutes. Let cool.",
								"3.In a salad bowl combine corn, onions, peppers, tomatoes and beans. Add lemon juice, basil and cilantro."
							]
						},
						{
							"name": "Summer Tomato Sauce",
							"ingredients": [
								{
									"name": "Tomatoes",
									"category": "produce",
									"quantity": 12,
									"units": "x"
								},
								{
									"name": "Onion",
									"category": "produce",
									"quantity": 0.5,
									"units": "x"
								},
								{
									"name": "Garlic",
									"category": "spice",
									"quantity": 6,
									"units": "x"
								},
								{
									"name": "Herb",
									"category": "spice",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Olive-Oil",
									"category": "spice",
									"quantity": 0.25,
									"units": "cup"
								},
								{
									"name": "Red-wine vinegar",
									"category": "spice",
									"quantity": 2,
									"units": "tsp"
								},
								{
									"name": "Cayenne pepper",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								}
							],
							"steps": [
								"1. For the tomatoes, bring a large pot of water to a boil. Season with salt. Plunge the cored and scored tomatoes into the boiling water for 45 seconds, then pull them out (careful not to burn yourself in the process).",
								"2. Place the minced onions, smashed garlic and water into a heavy-bottomed stainless steel pan. Bring up to medium heat and let simmer until the water evaporates, about 10 minutes.",
								"3. Add the whole tomatoes, herb bouquet and salt to taste. Bring to a simmer and then cook down until the water from the tomatoes has released and the sauce has a thick consistency (about 30 minutes).",
								"4. Let the sauce cool and add the olive oil, red wine vinegar, salt and cayenne to taste."
							]
						},
						{
							"name": "Panzanella Salad",
							"ingredients": [
								{
									"name": "Bread",
									"category": "grain",
									"quantity": 3,
									"units": "loaf"
								},
								{
									"name": "Tomato",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Cucumber",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Bell-pepper(red and yellow)",
									"category": "produce",
									"quantity": 2,
									"units": "x"
								},
								{
									"name": "Garlic",
									"category": "spice",
									"quantity": 3,
									"units": "x"
								},
								{
									"name": "Red wine vinegar",
									"category": "spice",
									"quantity": 2,
									"units": "tsp"
								},
								{
									"name": "Olive oil",
									"category": "spice",
									"quantity": 0.5,
									"units": "cup"
								},
								{
									"name": "Black pepper",
									"category": "spice",
									"quantity": 0.25,
									"units": "tsp"
								},
								{
									"name": "Basil leaves",
									"category": "spice",
									"quantity": 8,
									"units": "x"
								}
							],
							"steps": [
								"1. Preheat the oven to 475 degrees.",
								"2. Place bread cubes on a lightly greased baking tray and roast it for ten minutes, or until it is golden brown on all sides.",
								"3. Meanwhile, mix garlic, vinegar, olive oil, salt, and black pepper powder well.",
								"4. In a large bowl, add diced tomatoes, sliced cucumber, diced red and yellow bell peppers, sliced onion, and toss it all well with the vinaigrette.",
								"5. Add crisp bread cubes and throw them into the salad.",
								"6. Garnish the salad with fresh basil leaves, serve, and enjoy."
							]
						}
					]
				},
				{
					"location": "Portland, Oregon, USA",
					"hasMeat": true,
					"recipes": [
						{
							"name": "Mamas Bird Grilled Chicken",
							"ingredients": [
								{
									"name": "Chicken legs",
									"category": "meat",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Chicken breast",
									"category": "meat",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Black peppercorn",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								},
								{
									"name": "Corriander seed",
									"category": "spice",
									"quantity": 1,
									"units": "tsp"
								},
								{
									"name": "Pineapple",
									"category": "produce",
									"quantity": 1,
									"units": "x"
								},
								{
									"name": "Bay leaves",
									"category": "spice",
									"quantity": 3,
									"units": "x"
								},
								{
									"name": "Thyme",
									"category": "spice",
									"quantity": 5,
									"units": "x"
								},
								{
									"name": "Garlic",
									"category": "spice",
									"quantity": 4,
									"units": "x"
								},
								{
									"name": "Apple Cider-Vinegar",
									"category": "spice",
									"quantity": 0.5,
									"units": "cup"
								}
							],
							"steps": [
								"1. Toast peppercorns and coriander in an 8-quart stockpot. Add rest of ingredients except chicken, and bring to a boil.",
								"2. Let cool completely before adding chicken. Brine 12 hours, or overnight, in the refrigerator.",
								"3. The morning before grilling, pat chicken dry and store, uncovered, on a wire rack in the refrigerator.",
								"4. Oil grates. Build a medium-heat fire (half of a typical chimney) and evenly disperse coals onto one side of grill for two-zone cooking.",
								"5. Generously salt and pepper the chicken and place, skin side up, over the cool side of the grill. Cover and cook until the internal temperature reaches 140 degrees, about 40 minutes.",
								"6. Move chicken to the hot side of the grill and cook, covered, skin side down, until the internal temperature reaches 155 degrees, about 10 minutes longer. "
							]
						}
					]
				}
			]

	}
}