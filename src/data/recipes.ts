export type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Dessert" | "Snack" | "Soup" | "Appetizer" | "Main Course" | "Side Dish" | "Beverage";

export interface Recipe {
  id: string;
  name: string;
  country: string;
  continent: string;
  cookingTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  dietary: string[];
  category: MealCategory;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    "id": "1",
    "name": "Jollof Rice",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/fc/6c/cf/fc6ccf6314f207173840e9e368cc20b0.jpg",
    "ingredients": [
      "2 cups long-grain rice",
      "6 tomatoes, blended",
      "1 red bell pepper",
      "2 scotch bonnet peppers",
      "1 large onion",
      "any protein of choice (chicken, beef, fish)",
      "3 tbsp tomato paste",
      "1/2 cup vegetable oil",
      "2 tsp thyme",
      "2 tsp curry powder",
      "3 cups protein stock",
      "Salt to taste"
    ],
    "instructions": [
      "Blend tomatoes, red bell pepper, and scotch bonnet peppers until smooth.",
      "Season protein with salt and cook until browned, set aside.",
      "Heat oil in a pot, fry diced onions until golden.",
      "Add tomato paste and fry for 3 minutes.",
      "Pour in blended tomato mixture, cook on medium heat for 30 minutes until oil floats on top.",
      "Add thyme, curry powder, and salt.",
      "Pour in chicken stock and bring to a boil.",
      "Add washed rice, stir well, cover tightly and cook on low heat for 30 minutes.",
      "Fluff with a fork and serve with your cooked protein.",
      "Optional - garnish with fried plantains and salad.",
    ],
    "category": "Dinner"
  },
  {
    "id": "2",
    "name": "Tagine",
    "country": "Morocco",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/44/38/98/443898e057e19f5fa02e2c52f8ce62e7.jpg",
    "ingredients": [
      "500g lamb or beef, cubed",
      "2 onions, diced",
      "3 cloves garlic",
      "1 tsp ginger",
      "1 tsp cinnamon",
      "1 tsp cumin",
      "1 cup dried apricots",
      "1/2 cup almonds",
      "2 tbsp honey",
      "Fresh cilantro",
      "Salt and pepper"
    ],
    "instructions": [
      "Season lamb with salt, pepper, ginger, cinnamon, and cumin.",
      "Heat oil in tagine or heavy pot, brown lamb on all sides.",
      "Add onions and garlic, cook until soft.",
      "Add enough water to cover, bring to simmer.",
      "Cover and cook on low heat for 1 hour.",
      "Add apricots and honey, cook 20 more minutes.",
      "Toast almonds in a dry pan.",
      "Garnish with almonds and fresh cilantro."
    ],
    "category": "Dinner"
  },
  {
    "id": "3",
    "name": "Bobotie",
    "country": "South Africa",
    "continent": "Africa",
    "cookingTime": 75,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/1d/07/e4/1d07e4743db9be9fc01bad10b8cfaae0.jpg",
    "ingredients": [
      "500g ground beef",
      "2 slices bread soaked in milk",
      "1 onion, diced",
      "2 tbsp curry powder",
      "1 tbsp turmeric",
      "2 tbsp chutney",
      "1/4 cup raisins",
      "2 eggs",
      "1 cup milk",
      "Bay leaves",
      "Salt and pepper"
    ],
    "instructions": [
      "Preheat oven to 180\u00b0C.",
      "Saut\u00e9 onion until soft, add curry powder and turmeric.",
      "Add ground beef, cook until browned.",
      "Squeeze milk from bread, add bread to meat mixture.",
      "Stir in chutney, raisins, salt and pepper.",
      "Press into baking dish, tuck in bay leaves.",
      "Beat eggs with milk, pour over meat.",
      "Bake for 35-40 minutes until custard is set and golden."
    ],
    "category": "Dinner"
  },
  {
    "id": "4",
    "name": "Doro Wat",
    "country": "Ethiopia",
    "continent": "Africa",
    "cookingTime": 120,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/94/c0/a4/94c0a41987557606bf8e202aa0723ad0.jpg",
    "ingredients": [
      "1 whole chicken, cut into pieces",
      "4 large onions, finely diced",
      "3 tbsp berbere spice",
      "1/4 cup niter kibbeh (spiced butter)",
      "4 hard-boiled eggs",
      "3 cloves garlic",
      "1 tbsp ginger",
      "Juice of 1 lemon",
      "Salt to taste"
    ],
    "instructions": [
      "Dry-cook onions in a pot, stirring constantly for 15 minutes until golden.",
      "Add niter kibbeh and berbere spice, cook 5 minutes.",
      "Add garlic and ginger, stir well.",
      "Add chicken pieces, coat with sauce.",
      "Add 1 cup water, cover and simmer for 45 minutes.",
      "Score hard-boiled eggs, add to stew.",
      "Cook 15 more minutes.",
      "Serve with injera bread."
    ],
    "category": "Dinner"
  },
  {
    "id": "5",
    "name": "Fufu with Egusi Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 80,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/fb/61/02/fb6102f6d78e91574759bef766adb36e.jpg",
    "ingredients": [
      "2 cups cassava flour",
      "3 cups water",
      "1 cup ground egusi seeds",
      "500g spinach",
      "200g smoked fish",
      "1 onion",
      "2 scotch bonnet peppers",
      "Palm oil",
      "Crayfish",
      "Salt"
    ],
    "instructions": [
      "Boil water, gradually add cassava flour, stirring vigorously.",
      "Stir until smooth and stretchy, set aside.",
      "Heat palm oil, fry onions and peppers.",
      "Add ground egusi, stir for 5 minutes.",
      "Add smoked fish and crayfish.",
      "Pour in 2 cups stock, simmer 20 minutes.",
      "Add chopped spinach, cook 5 minutes.",
      "Serve fufu with egusi soup."
    ],
    "category": "Lunch"
  },
  {
    "id": "6",
    "name": "Bunny Chow",
    "country": "South Africa",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/b0/1d/ca/b01dcaf2a17bca0770524540b769e115.jpg",
    "ingredients": [
      "1 loaf white bread",
      "500g chicken, cubed",
      "2 potatoes, diced",
      "2 onions",
      "3 tbsp curry powder",
      "1 can tomatoes",
      "2 cloves garlic",
      "1 tbsp ginger",
      "Cilantro",
      "Salt"
    ],
    "instructions": [
      "Saut\u00e9 onions, garlic, and ginger.",
      "Add curry powder, cook 2 minutes.",
      "Add chicken, brown on all sides.",
      "Add tomatoes and potatoes, simmer 30 minutes.",
      "Hollow out bread loaf quarter.",
      "Fill bread bowl with curry.",
      "Top with cilantro and serve."
    ],
    "category": "Lunch"
  },
  {
    "id": "7",
    "name": "Koshari",
    "country": "Egypt",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "vegan"
    ],
    "image": "https://i.pinimg.com/1200x/ae/9b/eb/ae9bebdc7df2b4d01bbbd2c89c65124d.jpg",
    "ingredients": [
      "1 cup rice",
      "1 cup lentils",
      "1 cup macaroni",
      "2 onions, sliced",
      "4 tomatoes",
      "2 cloves garlic",
      "2 tbsp vinegar",
      "Chili flakes",
      "Cumin",
      "Oil for frying"
    ],
    "instructions": [
      "Cook rice, lentils, and macaroni separately.",
      "Fry onion slices until crispy and golden.",
      "Make tomato sauce: blend tomatoes, cook with garlic, vinegar, cumin, and chili.",
      "Layer rice, lentils, and macaroni in a bowl.",
      "Top with tomato sauce and crispy onions.",
      "Serve hot."
    ],
    "category": "Lunch"
  },
  {
    "id": "8",
    "name": "Couscous Royal",
    "country": "Tunisia",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/b8/a2/8f/b8a28f6eaefac0647ce4ec32ca0f48bf.jpg",
    "ingredients": [
      "2 cups couscous",
      "300g lamb",
      "2 merguez sausages",
      "2 chicken thighs",
      "4 carrots",
      "3 zucchini",
      "1 can chickpeas",
      "2 turnips",
      "Harissa",
      "Ras el hanout",
      "Salt"
    ],
    "instructions": [
      "Brown lamb and chicken in large pot.",
      "Add onions, carrots, turnips, and spices.",
      "Cover with water, simmer 45 minutes.",
      "Add zucchini and chickpeas, cook 15 minutes.",
      "Grill merguez sausages.",
      "Steam couscous, fluff with butter.",
      "Serve couscous topped with meat and vegetables.",
      "Pass harissa on the side."
    ],
    "category": "Dinner"
  },
  {
    "id": "9",
    "name": "Injera with Misir Wot",
    "country": "Ethiopia",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/a3/78/be/a378bee37a4ee3fac92d209ecb6bb414.jpg",
    "ingredients": [
      "2 cups red lentils",
      "3 onions, diced",
      "3 tbsp berbere spice",
      "2 tbsp oil",
      "3 cloves garlic",
      "1 tbsp ginger",
      "Salt",
      "Injera bread"
    ],
    "instructions": [
      "Dry-cook onions for 10 minutes until deep brown.",
      "Add oil, garlic, and ginger.",
      "Add berbere spice, cook 3 minutes.",
      "Add lentils and 3 cups water.",
      "Simmer 30 minutes until thick.",
      "Season with salt.",
      "Serve on injera bread."
    ],
    "category": "Dinner"
  },
  {
    "id": "10",
    "name": "Thieboudienne",
    "country": "Senegal",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/ea/84/a2/ea84a2bcceb75fc210bc91f3b3fedf53.jpg",
    "ingredients": [
      "500g white fish",
      "2 cups broken rice",
      "4 tomatoes",
      "2 carrots",
      "1 eggplant",
      "1 cabbage wedge",
      "2 tbsp tomato paste",
      "Parsley, garlic stuffing",
      "Tamarind paste",
      "Oil",
      "Salt"
    ],
    "instructions": [
      "Stuff fish with parsley-garlic paste.",
      "Fry fish until golden, set aside.",
      "In same pot, fry onions and tomato paste.",
      "Add vegetables, enough water to cover.",
      "Cook 20 minutes, remove veggies.",
      "Add rice to broth, cook 25 minutes.",
      "Return fish and vegetables on top.",
      "Serve on large platter."
    ],
    "category": "Dinner"
  },
  {
    "id": "11",
    "name": "Shakshuka",
    "country": "Tunisia",
    "continent": "Africa",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/2f/cc/70/2fcc707d513dbf279069c3d5b7ad6100.jpg",
    "ingredients": [
      "6 eggs",
      "4 tomatoes, diced",
      "2 red bell peppers",
      "1 onion",
      "3 cloves garlic",
      "2 tsp cumin",
      "1 tsp paprika",
      "Chili flakes",
      "Fresh cilantro",
      "Feta cheese",
      "Olive oil"
    ],
    "instructions": [
      "Heat olive oil, saut\u00e9 onion and peppers.",
      "Add garlic, cumin, paprika, chili.",
      "Add tomatoes, simmer 15 minutes.",
      "Make wells, crack eggs into sauce.",
      "Cover and cook until eggs are set.",
      "Top with feta and cilantro.",
      "Serve with crusty bread."
    ],
    "category": "Breakfast"
  },
  {
    "id": "12",
    "name": "Piri Piri Chicken",
    "country": "Mozambique",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600",
    "ingredients": [
      "1 whole chicken, spatchcocked",
      "6 piri piri peppers",
      "4 cloves garlic",
      "Juice of 2 lemons",
      "1/4 cup olive oil",
      "1 tsp paprika",
      "1 tsp oregano",
      "Salt and pepper"
    ],
    "instructions": [
      "Blend peppers, garlic, lemon juice, oil, and spices.",
      "Marinate chicken for at least 4 hours.",
      "Preheat grill to medium-high.",
      "Grill chicken 20 minutes per side.",
      "Baste with remaining marinade.",
      "Rest 10 minutes before cutting.",
      "Serve with rice or fries."
    ],
    "category": "Dinner"
  },
  {
    "id": "13",
    "name": "Mandazi",
    "country": "Kenya",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/a2/83/6f/a2836fb2ebf4b56bdfb524597ac12b13.jpg",
    "ingredients": [
      "3 cups flour",
      "1/2 cup sugar",
      "1 tsp cardamom",
      "1 cup coconut milk",
      "1 egg",
      "2 tsp baking powder",
      "Oil for deep frying",
      "Pinch of salt"
    ],
    "instructions": [
      "Mix flour, sugar, baking powder, cardamom, salt.",
      "Add egg and coconut milk, knead into soft dough.",
      "Rest for 30 minutes.",
      "Roll out dough, cut into triangles.",
      "Deep fry until golden on both sides.",
      "Drain on paper towels.",
      "Serve warm with tea."
    ],
    "category": "Snack"
  },
  {
    "id": "14",
    "name": "Suya",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/49/7d/df/497ddfdfb9f827dabdb838d457e7e2f6.jpg",
    "ingredients": [
      "500g beef sirloin, thinly sliced",
      "1/2 cup ground peanuts",
      "2 tbsp paprika",
      "1 tsp cayenne",
      "1 tsp garlic powder",
      "1 tsp ginger powder",
      "1 tbsp oil",
      "Sliced onions",
      "Salt"
    ],
    "instructions": [
      "Mix ground peanuts with all spices and salt.",
      "Thread beef onto skewers.",
      "Coat generously with spice mix.",
      "Grill over charcoal or high heat 3-4 min per side.",
      "Serve with sliced onions and tomatoes."
    ],
    "category": "Snack"
  },
  {
    "id": "15",
    "name": "Chapati",
    "country": "Tanzania",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "vegan"
    ],
    "image": "https://i.pinimg.com/736x/e5/ab/1d/e5ab1d7ec5fa2c470831a6bc584e0f70.jpg",
    "ingredients": [
      "3 cups flour",
      "1 cup warm water",
      "3 tbsp oil",
      "1 tsp salt",
      "Extra oil for layering"
    ],
    "instructions": [
      "Mix flour and salt, add water gradually.",
      "Knead for 10 minutes until smooth.",
      "Divide into balls, rest 20 minutes.",
      "Roll each ball flat, brush with oil, fold and roll again.",
      "Cook on hot skillet, brush with oil.",
      "Flip when golden spots appear.",
      "Serve warm with stew."
    ],
    "category": "Breakfast"
  },
  {
    "id": "16",
    "name": "Mafe",
    "country": "Mali",
    "continent": "Africa",
    "cookingTime": 70,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1220,h_915/k%2FPhoto%2FRecipes%2F2021-11-mafe%2F2021-11-03_ATK11087",
    "ingredients": [
      "500g beef, cubed",
      "1 cup peanut butter",
      "4 tomatoes, blended",
      "2 sweet potatoes",
      "1 onion",
      "2 carrots",
      "1 cabbage wedge",
      "2 tbsp tomato paste",
      "Salt, pepper"
    ],
    "instructions": [
      "Brown beef in oil, set aside.",
      "Saut\u00e9 onions, add tomato paste and blended tomatoes.",
      "Cook 10 minutes.",
      "Add peanut butter, stir until dissolved.",
      "Return beef, add vegetables.",
      "Add water to cover, simmer 40 minutes.",
      "Season with salt and pepper.",
      "Serve over rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "17",
    "name": "Brik",
    "country": "Tunisia",
    "continent": "Africa",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/e6/dd/6a/e6dd6acdc6fcd18ba537403f77b41dce.jpg",
    "ingredients": [
      "4 sheets brick/filo pastry",
      "4 eggs",
      "1 can tuna",
      "1 onion, diced",
      "2 tbsp capers",
      "Fresh parsley",
      "1 tsp harissa",
      "Oil for frying",
      "Salt and pepper"
    ],
    "instructions": [
      "Mix tuna, onion, capers, parsley, harissa.",
      "Place filling on one half of pastry sheet.",
      "Make a well, crack an egg into it.",
      "Fold pastry over, seal edges.",
      "Fry in hot oil until golden on both sides.",
      "Drain on paper towels.",
      "Serve immediately with lemon wedges."
    ],
    "category": "Snack"
  },
  {
    "id": "18",
    "name": "Pad Thai",
    "country": "Thailand",
    "continent": "Asia",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/b9/20/57/b9205787ecff0e0777167c5fe6af3d31.jpg",
    "ingredients": [
      "200g rice noodles",
      "200g shrimp",
      "2 eggs",
      "1 cup bean sprouts",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1 tbsp sugar",
      "3 cloves garlic",
      "Crushed peanuts",
      "Lime wedges",
      "Green onions"
    ],
    "instructions": [
      "Soak rice noodles in warm water 30 minutes.",
      "Mix tamarind paste, fish sauce, and sugar for sauce.",
      "Stir-fry garlic, add shrimp until pink.",
      "Push aside, scramble eggs in same wok.",
      "Add drained noodles and sauce.",
      "Toss with bean sprouts and green onions.",
      "Serve with crushed peanuts and lime."
    ],
    "category": "Dinner"
  },
  {
    "id": "19",
    "name": "Sushi Rolls",
    "country": "Japan",
    "continent": "Asia",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    "ingredients": [
      "2 cups sushi rice",
      "4 nori sheets",
      "200g fresh salmon",
      "1 avocado",
      "1 cucumber",
      "Rice vinegar",
      "Sugar",
      "Soy sauce",
      "Wasabi",
      "Pickled ginger"
    ],
    "instructions": [
      "Cook sushi rice, season with vinegar and sugar.",
      "Place nori on bamboo mat, spread rice evenly.",
      "Lay salmon, avocado, cucumber strips in center.",
      "Roll tightly using the mat.",
      "Wet knife, cut into 8 pieces.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    "category": "Lunch"
  },
  {
    "id": "20",
    "name": "Butter Chicken",
    "country": "India",
    "continent": "Asia",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/c6/13/44/c6134471c2270a9ea9858ae0683b5a77.jpg",
    "ingredients": [
      "500g chicken thighs",
      "1 cup yogurt",
      "2 tbsp garam masala",
      "1 can tomato puree",
      "1/2 cup heavy cream",
      "3 tbsp butter",
      "1 onion",
      "3 cloves garlic",
      "1 tbsp ginger",
      "Fenugreek leaves",
      "Salt"
    ],
    "instructions": [
      "Marinate chicken in yogurt and garam masala for 2 hours.",
      "Grill or pan-fry chicken until charred.",
      "Melt butter, saut\u00e9 onion, garlic, ginger.",
      "Add tomato puree, simmer 15 minutes.",
      "Add cream and fenugreek leaves.",
      "Add chicken, simmer 10 minutes.",
      "Serve with naan or basmati rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "21",
    "name": "Pho",
    "country": "Vietnam",
    "continent": "Asia",
    "cookingTime": 180,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600",
    "ingredients": [
      "1kg beef bones",
      "500g beef brisket",
      "Rice noodles",
      "2 onions, halved",
      "4-inch ginger, halved",
      "3 star anise",
      "4 cloves",
      "1 cinnamon stick",
      "Fish sauce",
      "Bean sprouts",
      "Thai basil",
      "Lime",
      "Hoisin sauce"
    ],
    "instructions": [
      "Char onions and ginger under broiler.",
      "Blanch bones, rinse, add to pot with 4L water.",
      "Add charred aromatics, star anise, cloves, cinnamon.",
      "Simmer 3 hours, skimming frequently.",
      "Add brisket after 1 hour.",
      "Strain broth, season with fish sauce.",
      "Cook rice noodles, place in bowls.",
      "Slice brisket, arrange on noodles.",
      "Pour hot broth over, serve with herbs and sprouts."
    ],
    "category": "Soup"
  },
  {
    "id": "22",
    "name": "Kung Pao Chicken",
    "country": "China",
    "continent": "Asia",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/b0/05/8e/b0058ef9736990925aa0dd8bd6605940.jpg",
    "ingredients": [
      "500g chicken breast, cubed",
      "1/2 cup roasted peanuts",
      "8 dried chilies",
      "3 cloves garlic",
      "1 tbsp ginger",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tbsp sugar",
      "1 tsp cornstarch",
      "2 green onions",
      "Szechuan peppercorns"
    ],
    "instructions": [
      "Mix soy sauce, vinegar, sugar, cornstarch for sauce.",
      "Stir-fry chicken until golden, set aside.",
      "Fry dried chilies and peppercorns until fragrant.",
      "Add garlic and ginger.",
      "Return chicken, pour in sauce.",
      "Add peanuts and green onions.",
      "Serve immediately over rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "23",
    "name": "Bibimbap",
    "country": "South Korea",
    "continent": "Asia",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/f8/fb/dd/f8fbdd326777fccd20c405c99336e9d8.jpg",
    "ingredients": [
      "2 cups rice",
      "200g beef, sliced thin",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "2 cups spinach",
      "1 cup bean sprouts",
      "4 eggs",
      "Gochujang paste",
      "Sesame oil",
      "Soy sauce",
      "Sesame seeds"
    ],
    "instructions": [
      "Cook rice.",
      "Saut\u00e9 each vegetable separately with sesame oil.",
      "Marinate and cook beef with soy sauce.",
      "Fry eggs sunny-side up.",
      "Arrange rice in bowls.",
      "Top with vegetables, beef, and egg.",
      "Serve with gochujang and sesame oil."
    ],
    "category": "Lunch"
  },
  {
    "id": "24",
    "name": "Tom Yum Goong",
    "country": "Thailand",
    "continent": "Asia",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/ee/cb/16/eecb16e23b040a7725ced9dae8ba2c74.jpg",
    "ingredients": [
      "500g shrimp",
      "4 cups chicken broth",
      "3 stalks lemongrass",
      "5 kaffir lime leaves",
      "3 slices galangal",
      "200g mushrooms",
      "3 tbsp fish sauce",
      "3 tbsp lime juice",
      "Thai chili peppers",
      "Cilantro",
      "Coconut milk (optional)"
    ],
    "instructions": [
      "Bring broth to boil with lemongrass, galangal, lime leaves.",
      "Add mushrooms, cook 5 minutes.",
      "Add shrimp, cook until pink.",
      "Season with fish sauce and lime juice.",
      "Add chilies to taste.",
      "Optional: stir in coconut milk.",
      "Garnish with cilantro and serve hot."
    ],
    "category": "Soup"
  },
  {
    "id": "25",
    "name": "Falafel",
    "country": "Lebanon",
    "continent": "Asia",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "vegan"
    ],
    "image": "https://i.pinimg.com/1200x/1e/7b/cf/1e7bcf9d18f4da4fe3df31232179d97e.jpg",
    "ingredients": [
      "2 cups dried chickpeas (soaked overnight)",
      "1 onion",
      "4 cloves garlic",
      "1 cup fresh parsley",
      "1 cup fresh cilantro",
      "2 tsp cumin",
      "1 tsp coriander",
      "1/2 tsp cayenne",
      "1 tsp baking powder",
      "Salt",
      "Oil for frying"
    ],
    "instructions": [
      "Blend soaked chickpeas with onion, garlic, herbs.",
      "Add spices and baking powder, pulse until combined.",
      "Refrigerate mixture 1 hour.",
      "Form into small patties.",
      "Deep fry at 175\u00b0C until golden brown.",
      "Drain on paper towels.",
      "Serve in pita with tahini sauce."
    ],
    "category": "Snack"
  },
  {
    "id": "26",
    "name": "Nasi Goreng",
    "country": "Indonesia",
    "continent": "Asia",
    "cookingTime": 20,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/94/82/ab/9482ab2e248d249e7daa7fd6924c8d3b.jpg",
    "ingredients": [
      "3 cups cold cooked rice",
      "200g chicken, diced",
      "2 eggs",
      "3 tbsp kecap manis",
      "1 tbsp soy sauce",
      "2 cloves garlic",
      "3 shallots",
      "2 red chilies",
      "Shrimp paste",
      "Fried shallots",
      "Cucumber"
    ],
    "instructions": [
      "Blend garlic, shallots, chilies, and shrimp paste.",
      "Stir-fry paste until fragrant.",
      "Add chicken, cook through.",
      "Push aside, scramble eggs.",
      "Add rice, toss with kecap manis and soy sauce.",
      "Fry on high heat until slightly crispy.",
      "Top with fried shallots and cucumber."
    ],
    "category": "Dinner"
  },
  {
    "id": "27",
    "name": "Hummus",
    "country": "Lebanon",
    "continent": "Asia",
    "cookingTime": 15,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/6f/2d/03/6f2d0319e760cd557ba40e5a59b8763e.jpg",
    "ingredients": [
      "2 cans chickpeas",
      "1/4 cup tahini",
      "3 cloves garlic",
      "Juice of 2 lemons",
      "3 tbsp olive oil",
      "1 tsp cumin",
      "Salt",
      "Paprika for garnish",
      "Pine nuts"
    ],
    "instructions": [
      "Blend chickpeas, tahini, garlic, lemon juice.",
      "Add olive oil and cumin, blend until smooth.",
      "Add cold water if needed for consistency.",
      "Spread on plate, drizzle olive oil.",
      "Garnish with paprika and pine nuts.",
      "Serve with warm pita bread."
    ],
    "category": "Appetizer"
  },
  {
    "id": "28",
    "name": "Ramen",
    "country": "Japan",
    "continent": "Asia",
    "cookingTime": 240,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/ae/6d/30/ae6d30e70e656d13b98458cdb1e1e24e.jpg",
    "ingredients": [
      "Pork bones",
      "Chicken carcass",
      "Ramen noodles",
      "Chashu pork belly",
      "Soft-boiled eggs",
      "Nori sheets",
      "Green onions",
      "Soy sauce",
      "Mirin",
      "Garlic",
      "Ginger"
    ],
    "instructions": [
      "Boil pork bones 10 min, drain, rinse.",
      "Return to pot with chicken, garlic, ginger.",
      "Simmer 4 hours for rich broth.",
      "Make tare: combine soy sauce and mirin.",
      "Braise pork belly in soy, mirin, sugar for 2 hours.",
      "Marinate soft-boiled eggs in tare.",
      "Cook noodles al dente.",
      "Assemble: noodles, broth, chashu, egg, nori, scallions."
    ],
    "category": "Dinner"
  },
  {
    "id": "29",
    "name": "Chicken Tikka Masala",
    "country": "India",
    "continent": "Asia",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/ec/d0/c6/ecd0c6ab4b9edb6cb46fdbad94c5d99f.jpg",
    "ingredients": [
      "500g chicken breast",
      "1 cup yogurt",
      "2 tbsp tikka masala spice",
      "1 can tomato sauce",
      "1/2 cup cream",
      "1 onion",
      "3 cloves garlic",
      "1 tbsp ginger",
      "2 tbsp butter",
      "Cilantro",
      "Garam masala"
    ],
    "instructions": [
      "Marinate chicken in yogurt and tikka spice.",
      "Grill or broil chicken until charred.",
      "Saut\u00e9 onion, garlic, ginger in butter.",
      "Add tomato sauce, simmer 15 minutes.",
      "Stir in cream and garam masala.",
      "Add chicken, simmer 10 minutes.",
      "Garnish with cilantro.",
      "Serve with rice or naan."
    ],
    "category": "Dinner"
  },
  {
    "id": "30",
    "name": "Dim Sum Dumplings",
    "country": "China",
    "continent": "Asia",
    "cookingTime": 45,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/f8/be/e8/f8bee8cece9a6c6cd87c87e7a7880d3f.jpg",
    "ingredients": [
      "200g shrimp, minced",
      "200g ground pork",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp ginger, grated",
      "2 green onions",
      "Dumpling wrappers",
      "Chili oil",
      "Rice vinegar"
    ],
    "instructions": [
      "Mix shrimp, pork, soy sauce, sesame oil, ginger, green onions.",
      "Place filling in center of each wrapper.",
      "Pleat edges to seal.",
      "Line steamer with parchment.",
      "Steam dumplings for 10-12 minutes.",
      "Make dipping sauce: soy, vinegar, chili oil.",
      "Serve hot with dipping sauce."
    ],
    "category": "Appetizer"
  },
  {
    "id": "31",
    "name": "Satay",
    "country": "Malaysia",
    "continent": "Asia",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/ed/a4/ba/eda4ba5e0841f9d1b6b7f2b10eed76e5.jpg",
    "ingredients": [
      "500g chicken thighs, cubed",
      "2 stalks lemongrass",
      "2 tbsp turmeric",
      "1 tbsp cumin",
      "2 tbsp sugar",
      "1/2 cup coconut milk",
      "Peanut sauce",
      "Cucumber relish",
      "Bamboo skewers"
    ],
    "instructions": [
      "Blend lemongrass, turmeric, cumin, sugar, coconut milk.",
      "Marinate chicken for 2 hours minimum.",
      "Thread onto soaked bamboo skewers.",
      "Grill over high heat 3-4 minutes per side.",
      "Serve with peanut dipping sauce.",
      "Accompany with cucumber relish."
    ],
    "category": "Snack"
  },
  {
    "id": "32",
    "name": "Miso Soup",
    "country": "Japan",
    "continent": "Asia",
    "cookingTime": 15,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/af/95/a8/af95a8151cbef4170465b71e77ceab99.jpg",
    "ingredients": [
      "4 cups dashi stock",
      "3 tbsp white miso paste",
      "200g silken tofu",
      "2 green onions",
      "1 sheet nori",
      "Wakame seaweed"
    ],
    "instructions": [
      "Heat dashi stock until simmering.",
      "Dissolve miso paste in a ladle of hot stock.",
      "Stir miso back into pot.",
      "Add cubed tofu and wakame.",
      "Do not boil after adding miso.",
      "Garnish with green onions and nori strips.",
      "Serve immediately."
    ],
    "category": "Soup"
  },
  {
    "id": "33",
    "name": "Rendang",
    "country": "Indonesia",
    "continent": "Asia",
    "cookingTime": 180,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/85/00/50/850050dbb355cd64359c0706a1b14e38.jpg",
    "ingredients": [
      "1kg beef chuck, cubed",
      "400ml coconut milk",
      "200ml coconut cream",
      "10 shallots",
      "5 cloves garlic",
      "5cm galangal",
      "3 stalks lemongrass",
      "10 dried chilies",
      "1 tbsp turmeric",
      "Kaffir lime leaves",
      "Toasted coconut"
    ],
    "instructions": [
      "Blend shallots, garlic, galangal, lemongrass, chilies, turmeric.",
      "Cook paste in pot until fragrant.",
      "Add beef, stir to coat.",
      "Pour in coconut milk, add lime leaves.",
      "Simmer uncovered for 2-3 hours.",
      "Stir frequently as liquid reduces.",
      "Add coconut cream, continue cooking until dry.",
      "Stir in toasted coconut. Serve with rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "34",
    "name": "Shawarma",
    "country": "Turkey",
    "continent": "Asia",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600",
    "ingredients": [
      "500g chicken thighs",
      "2 tsp cumin",
      "2 tsp paprika",
      "1 tsp turmeric",
      "1 tsp cinnamon",
      "3 cloves garlic",
      "Juice of 1 lemon",
      "Pita bread",
      "Tahini sauce",
      "Pickled turnips",
      "Tomatoes, lettuce"
    ],
    "instructions": [
      "Mix spices with garlic and lemon juice.",
      "Marinate chicken for 2 hours.",
      "Cook on high heat until charred.",
      "Slice thinly.",
      "Warm pita bread.",
      "Assemble with tahini, veggies, pickles.",
      "Wrap tightly and serve."
    ],
    "category": "Lunch"
  },
  {
    "id": "35",
    "name": "Laksa",
    "country": "Singapore",
    "continent": "Asia",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/72/98/2c/72982cf1c0e705aba1df20896edaf8b1.jpg",
    "ingredients": [
      "Rice vermicelli",
      "200g shrimp",
      "200g chicken, sliced",
      "400ml coconut milk",
      "3 tbsp laksa paste",
      "2 cups chicken stock",
      "Bean sprouts",
      "Hard-boiled eggs",
      "Fried tofu puffs",
      "Laksa leaves"
    ],
    "instructions": [
      "Cook laksa paste in pot until fragrant.",
      "Add coconut milk and stock, bring to boil.",
      "Add chicken, cook 10 minutes.",
      "Add shrimp, cook until pink.",
      "Cook vermicelli, divide into bowls.",
      "Ladle soup over noodles.",
      "Top with egg, tofu, sprouts, laksa leaves."
    ],
    "category": "Dinner"
  },
  {
    "id": "36",
    "name": "Pasta Carbonara",
    "country": "Italy",
    "continent": "Europe",
    "cookingTime": 25,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/7f/ca/87/7fca8779cefce45ca9df0e677c4cfd12.jpg",
    "ingredients": [
      "400g spaghetti",
      "200g guanciale",
      "4 egg yolks",
      "1 whole egg",
      "100g Pecorino Romano",
      "50g Parmesan",
      "Black pepper"
    ],
    "instructions": [
      "Cook pasta in salted water until al dente.",
      "Crisp guanciale in pan, reserve fat.",
      "Whisk egg yolks, egg, and grated cheeses.",
      "Add generous black pepper to egg mixture.",
      "Toss hot pasta with guanciale.",
      "Remove from heat, add egg mixture.",
      "Toss vigorously to create creamy sauce.",
      "Serve immediately with extra cheese and pepper."
    ],
    "category": "Dinner"
  },
  {
    "id": "37",
    "name": "Croissants",
    "country": "France",
    "continent": "Europe",
    "cookingTime": 300,
    "difficulty": "Hard",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/6f/d1/9c/6fd19ce547ef7319e53a6ea37c18bfd9.jpg",
    "ingredients": [
      "500g bread flour",
      "10g salt",
      "80g sugar",
      "10g instant yeast",
      "300ml whole milk",
      "280g cold butter"
    ],
    "instructions": [
      "Mix flour, salt, sugar, yeast, and milk into dough.",
      "Refrigerate overnight.",
      "Pound butter into flat rectangle.",
      "Encase butter in dough.",
      "Roll and fold three times (lamination).",
      "Rest 30 min between each fold.",
      "Shape into triangles, roll up.",
      "Proof 2 hours, brush with egg wash.",
      "Bake at 200\u00b0C for 15 minutes."
    ],
    "category": "Breakfast"
  },
  {
    "id": "38",
    "name": "Paella",
    "country": "Spain",
    "continent": "Europe",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/80/ac/a6/80aca6860f8e9c9a6cfcdf5927f4bf21.jpg",
    "ingredients": [
      "2 cups bomba rice",
      "300g chicken thighs",
      "200g shrimp",
      "200g mussels",
      "1 onion",
      "3 cloves garlic",
      "1 red bell pepper",
      "1 tsp saffron",
      "4 cups chicken stock",
      "1 cup peas",
      "Lemon wedges",
      "Olive oil"
    ],
    "instructions": [
      "Heat oil in paella pan, brown chicken.",
      "Add onion, garlic, pepper, cook 5 minutes.",
      "Add rice and saffron, stir 2 minutes.",
      "Pour in hot stock, arrange evenly.",
      "Do not stir from this point.",
      "Cook 15 minutes, add shrimp and mussels.",
      "Cook 5 more minutes until rice absorbs liquid.",
      "Let rest 5 minutes for socarrat to form.",
      "Serve with lemon wedges."
    ],
    "category": "Dinner"
  },
  {
    "id": "39",
    "name": "Fish and Chips",
    "country": "United Kingdom",
    "continent": "Europe",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/b6/9e/d2/b69ed299694da081a4d4df8a726957b5.jpg",
    "ingredients": [
      "4 cod fillets",
      "4 large potatoes",
      "1 cup flour",
      "1 cup cold beer",
      "1 tsp baking powder",
      "Oil for deep frying",
      "Salt",
      "Malt vinegar",
      "Mushy peas",
      "Tartar sauce"
    ],
    "instructions": [
      "Cut potatoes into thick chips, soak in water.",
      "Mix flour, baking powder, salt, and beer for batter.",
      "Heat oil to 160\u00b0C, par-cook chips 5 minutes.",
      "Increase oil to 190\u00b0C.",
      "Dip fish in batter, fry until golden (5-6 min).",
      "Fry chips again until crispy.",
      "Drain on paper towels.",
      "Serve with vinegar, mushy peas, tartar sauce."
    ],
    "category": "Dinner"
  },
  {
    "id": "40",
    "name": "Moussaka",
    "country": "Greece",
    "continent": "Europe",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/a4/55/39/a45539fbfe455a00fffea9d9903df312.jpg",
    "ingredients": [
      "3 eggplants, sliced",
      "500g ground lamb",
      "1 onion",
      "3 cloves garlic",
      "1 can tomatoes",
      "1 tsp cinnamon",
      "B\u00e9chamel sauce",
      "3 tbsp butter",
      "3 tbsp flour",
      "2 cups milk",
      "Nutmeg",
      "Parmesan"
    ],
    "instructions": [
      "Salt and grill eggplant slices.",
      "Brown lamb with onion and garlic.",
      "Add tomatoes and cinnamon, simmer 20 minutes.",
      "Make b\u00e9chamel: melt butter, add flour, gradually add milk.",
      "Season with nutmeg, stir in Parmesan.",
      "Layer eggplant and meat sauce in baking dish.",
      "Top with b\u00e9chamel.",
      "Bake at 180\u00b0C for 45 minutes until golden."
    ],
    "category": "Dinner"
  },
  {
    "id": "41",
    "name": "Wiener Schnitzel",
    "country": "Austria",
    "continent": "Europe",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/38/9b/86/389b86c64e32df053c92eeda4b0574c6.jpg",
    "ingredients": [
      "4 veal cutlets",
      "1 cup flour",
      "2 eggs, beaten",
      "2 cups breadcrumbs",
      "Butter and oil for frying",
      "Lemon wedges",
      "Parsley",
      "Salt and pepper",
      "Lingonberry jam"
    ],
    "instructions": [
      "Pound veal thin between plastic wrap.",
      "Season with salt and pepper.",
      "Dredge in flour, dip in eggs, coat in breadcrumbs.",
      "Heat butter and oil in large pan.",
      "Fry cutlets 3 minutes per side until golden.",
      "Drain on paper towels.",
      "Serve with lemon wedges and lingonberry jam."
    ],
    "category": "Dinner"
  },
  {
    "id": "42",
    "name": "Beef Bourguignon",
    "country": "France",
    "continent": "Europe",
    "cookingTime": 180,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/ac/34/7f/ac347f9db4fea7e14ac4efe557d37dfc.jpg",
    "ingredients": [
      "1kg beef chuck, cubed",
      "1 bottle red Burgundy wine",
      "200g bacon lardons",
      "20 pearl onions",
      "300g mushrooms",
      "3 carrots",
      "3 cloves garlic",
      "2 tbsp tomato paste",
      "Bouquet garni",
      "Butter",
      "Flour"
    ],
    "instructions": [
      "Marinate beef in wine overnight.",
      "Brown bacon in Dutch oven, set aside.",
      "Pat beef dry, brown in batches.",
      "Saut\u00e9 carrots and garlic.",
      "Add tomato paste, cook 2 minutes.",
      "Return beef and bacon, add wine and bouquet garni.",
      "Cover, braise in 160\u00b0C oven for 2.5 hours.",
      "Saut\u00e9 mushrooms and pearl onions separately.",
      "Add to stew, adjust seasoning.",
      "Serve over mashed potatoes."
    ],
    "category": "Dinner"
  },
  {
    "id": "43",
    "name": "Pierogi",
    "country": "Poland",
    "continent": "Europe",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/a5/14/31/a5143121746870aa4b3101a01fd868d3.jpg",
    "ingredients": [
      "3 cups flour",
      "1 egg",
      "3/4 cup warm water",
      "1 tsp salt",
      "4 potatoes, boiled and mashed",
      "1 cup cheddar cheese",
      "1 onion, caramelized",
      "Butter",
      "Sour cream",
      "Chives"
    ],
    "instructions": [
      "Mix flour, egg, water, salt into smooth dough.",
      "Rest 30 minutes.",
      "Mix mashed potatoes with cheese and onion.",
      "Roll dough thin, cut circles.",
      "Place filling in center, fold and seal edges.",
      "Boil pierogi until they float (3-4 min).",
      "Pan-fry in butter until golden.",
      "Serve with sour cream and chives."
    ],
    "category": "Dinner"
  },
  {
    "id": "44",
    "name": "Ratatouille",
    "country": "France",
    "continent": "Europe",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/b9/3d/87/b93d876592e241165149f96667e34937.jpg",
    "ingredients": [
      "2 zucchini",
      "2 eggplants",
      "4 tomatoes",
      "2 bell peppers",
      "1 onion",
      "4 cloves garlic",
      "Fresh thyme",
      "Fresh basil",
      "Olive oil",
      "Salt and pepper"
    ],
    "instructions": [
      "Slice all vegetables into thin rounds.",
      "Make sauce: cook onion, pepper, garlic with crushed tomato.",
      "Spread sauce in baking dish.",
      "Arrange vegetable slices in alternating pattern.",
      "Drizzle with olive oil, season with thyme.",
      "Cover with foil, bake at 190\u00b0C for 40 minutes.",
      "Remove foil, bake 20 more minutes.",
      "Garnish with fresh basil."
    ],
    "category": "Dinner"
  },
  {
    "id": "45",
    "name": "Goulash",
    "country": "Hungary",
    "continent": "Europe",
    "cookingTime": 120,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/78/f2/56/78f2569aaad96267cfee950db7d6bdf7.jpg",
    "ingredients": [
      "1kg beef shin, cubed",
      "3 onions, diced",
      "3 tbsp sweet paprika",
      "1 tbsp caraway seeds",
      "3 potatoes, cubed",
      "2 carrots",
      "2 bell peppers",
      "2 tomatoes",
      "Egg noodles",
      "Sour cream",
      "Salt"
    ],
    "instructions": [
      "Cook onions slowly until very soft (20 min).",
      "Remove from heat, stir in paprika.",
      "Add beef, brown lightly.",
      "Add tomatoes, peppers, caraway seeds.",
      "Add water to cover, simmer 1.5 hours.",
      "Add potatoes and carrots.",
      "Cook 30 more minutes until tender.",
      "Serve with egg noodles and sour cream."
    ],
    "category": "Dinner"
  },
  {
    "id": "46",
    "name": "Risotto alla Milanese",
    "country": "Italy",
    "continent": "Europe",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/89/63/49/8963494f1f701356341ee5e407dbefda.jpg",
    "ingredients": [
      "2 cups Arborio rice",
      "1 onion, finely diced",
      "1/2 cup white wine",
      "6 cups warm vegetable broth",
      "1 tsp saffron threads",
      "3 tbsp butter",
      "1/2 cup Parmesan",
      "Salt and pepper"
    ],
    "instructions": [
      "Toast saffron in warm broth.",
      "Saut\u00e9 onion in butter until translucent.",
      "Add rice, toast for 2 minutes.",
      "Deglaze with white wine.",
      "Add broth one ladle at a time, stirring constantly.",
      "Continue for 18-20 minutes.",
      "Remove from heat, stir in butter and Parmesan.",
      "Rest 2 minutes, then serve."
    ],
    "category": "Dinner"
  },
  {
    "id": "47",
    "name": "Borscht",
    "country": "Ukraine",
    "continent": "Europe",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/da/48/7e/da487ebad420f7b6db4461bb0b161488.jpg",
    "ingredients": [
      "4 beets, peeled and grated",
      "2 potatoes",
      "1 carrot",
      "1 onion",
      "1/4 cabbage, shredded",
      "3 tbsp tomato paste",
      "1 tbsp vinegar",
      "4 cups vegetable broth",
      "Fresh dill",
      "Sour cream",
      "Salt and pepper"
    ],
    "instructions": [
      "Saut\u00e9 onion and carrot.",
      "Add grated beets, cook 10 minutes.",
      "Add tomato paste and vinegar.",
      "Pour in broth, add potatoes and cabbage.",
      "Simmer 30 minutes until tender.",
      "Season with salt and pepper.",
      "Serve with sour cream and fresh dill."
    ],
    "category": "Soup"
  },
  {
    "id": "48",
    "name": "Gazpacho",
    "country": "Spain",
    "continent": "Europe",
    "cookingTime": 15,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/10/c5/9a/10c59afc5dd493cd01b8dfa7cdc1f503.jpg",
    "ingredients": [
      "6 ripe tomatoes",
      "1 cucumber",
      "1 red bell pepper",
      "2 cloves garlic",
      "3 tbsp olive oil",
      "2 tbsp sherry vinegar",
      "Stale bread (optional)",
      "Salt and pepper",
      "Croutons for serving"
    ],
    "instructions": [
      "Roughly chop all vegetables.",
      "Blend until smooth.",
      "Add olive oil and vinegar, blend again.",
      "Season with salt and pepper.",
      "Strain for smooth texture (optional).",
      "Refrigerate at least 2 hours.",
      "Serve cold with croutons and olive oil drizzle."
    ],
    "category": "Appetizer"
  },
  {
    "id": "49",
    "name": "Bangers and Mash",
    "country": "United Kingdom",
    "continent": "Europe",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/1a/75/50/1a7550b0bce5e7de575393bd4e324526.jpg",
    "ingredients": [
      "8 pork sausages",
      "1kg potatoes",
      "4 tbsp butter",
      "1/2 cup milk",
      "2 onions, sliced",
      "2 cups beef gravy",
      "1 tbsp mustard",
      "Salt and pepper"
    ],
    "instructions": [
      "Boil potatoes until tender, mash with butter and milk.",
      "Brown sausages in oven or pan.",
      "Caramelize onions slowly in butter.",
      "Make onion gravy with beef stock and onions.",
      "Add mustard to gravy.",
      "Pile mash on plates, top with sausages.",
      "Pour over onion gravy."
    ],
    "category": "Dinner"
  },
  {
    "id": "50",
    "name": "Cacio e Pepe",
    "country": "Italy",
    "continent": "Europe",
    "cookingTime": 20,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/ef/98/1a/ef981a009b04f85447cef2363db99912.jpg",
    "ingredients": [
      "400g tonnarelli or spaghetti",
      "200g Pecorino Romano, finely grated",
      "2 tbsp black peppercorns, freshly cracked",
      "Salt"
    ],
    "instructions": [
      "Toast peppercorns in dry pan.",
      "Cook pasta in well-salted water.",
      "Reserve 2 cups pasta water.",
      "Mix Pecorino with small amount of pasta water into paste.",
      "Add pasta to pepper pan with 1/2 cup pasta water.",
      "Toss vigorously, add cheese paste off heat.",
      "Add more pasta water as needed for creamy sauce.",
      "Serve immediately."
    ],
    "category": "Dinner"
  },
  {
    "id": "51",
    "name": "Sauerbraten",
    "country": "Germany",
    "continent": "Europe",
    "cookingTime": 240,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/d4/52/79/d4527934998bb9869c1b98555b137e8e.jpg",
    "ingredients": [
      "1.5kg beef roast",
      "2 cups red wine vinegar",
      "2 cups water",
      "2 onions",
      "2 carrots",
      "10 juniper berries",
      "6 cloves",
      "3 bay leaves",
      "6 peppercorns",
      "3 tbsp sugar",
      "Gingersnap cookies",
      "Salt"
    ],
    "instructions": [
      "Combine vinegar, water, onions, carrots, spices for marinade.",
      "Submerge beef, refrigerate 3-5 days, turning daily.",
      "Remove beef, pat dry, brown on all sides.",
      "Strain marinade, add to pot with beef.",
      "Braise in 160\u00b0C oven for 3 hours.",
      "Remove beef, strain sauce.",
      "Thicken sauce with crushed gingersnaps.",
      "Slice beef, serve with sauce and red cabbage."
    ],
    "category": "Dinner"
  },
  {
    "id": "52",
    "name": "Spanakopita",
    "country": "Greece",
    "continent": "Europe",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/99/79/38/997938c2e032b3204eabb2627667644f.jpg",
    "ingredients": [
      "500g spinach, chopped",
      "200g feta cheese",
      "1 onion, diced",
      "3 eggs",
      "Fresh dill",
      "10 sheets filo pastry",
      "1/2 cup melted butter",
      "Nutmeg",
      "Salt and pepper"
    ],
    "instructions": [
      "Saut\u00e9 onion, add spinach until wilted.",
      "Mix with feta, eggs, dill, nutmeg.",
      "Brush baking dish with butter.",
      "Layer 5 sheets filo, brushing each with butter.",
      "Spread filling evenly.",
      "Layer remaining 5 sheets with butter.",
      "Score top into squares.",
      "Bake at 180\u00b0C for 40 minutes until golden."
    ],
    "category": "Appetizer"
  },
  {
    "id": "53",
    "name": "Swedish Meatballs",
    "country": "Sweden",
    "continent": "Europe",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/2b/6a/eb/2b6aeb48f0120a72486fc9164f75b0f8.jpg",
    "ingredients": [
      "250g ground beef",
      "250g ground pork",
      "1/2 cup breadcrumbs",
      "1/4 cup milk",
      "1 egg",
      "1 onion, grated",
      "1/4 tsp allspice",
      "Butter",
      "2 tbsp flour",
      "1.5 cups beef broth",
      "1/2 cup cream",
      "Lingonberry jam"
    ],
    "instructions": [
      "Soak breadcrumbs in milk.",
      "Mix meats, breadcrumbs, egg, onion, allspice.",
      "Roll into small balls.",
      "Brown in butter, set aside.",
      "Make sauce: add flour to pan drippings.",
      "Gradually add broth and cream.",
      "Return meatballs, simmer 15 minutes.",
      "Serve with mashed potatoes and lingonberry jam."
    ],
    "category": "Dinner"
  },
  {
    "id": "54",
    "name": "Quiche Lorraine",
    "country": "France",
    "continent": "Europe",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/cb/06/a0/cb06a0e7414c8992787181d2c098221c.jpg",
    "ingredients": [
      "1 pie crust",
      "200g bacon lardons",
      "1 cup Gruy\u00e8re cheese",
      "4 eggs",
      "1.5 cups heavy cream",
      "1/4 tsp nutmeg",
      "Salt and pepper",
      "Fresh chives"
    ],
    "instructions": [
      "Blind bake pie crust at 190\u00b0C for 10 minutes.",
      "Cook bacon until crispy.",
      "Scatter bacon and cheese in crust.",
      "Whisk eggs, cream, nutmeg, salt, pepper.",
      "Pour over filling.",
      "Bake at 175\u00b0C for 35-40 minutes.",
      "Cool 10 minutes before slicing.",
      "Garnish with chives."
    ],
    "category": "Breakfast"
  },
  {
    "id": "55",
    "name": "Tiramisu",
    "country": "Italy",
    "continent": "Europe",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/e8/6a/20/e86a201cdef0e26262e27420d4861b17.jpg",
    "ingredients": [
      "6 egg yolks",
      "3/4 cup sugar",
      "500g mascarpone",
      "2 cups strong espresso, cooled",
      "3 tbsp Marsala wine",
      "300g ladyfinger biscuits",
      "Cocoa powder",
      "Dark chocolate shavings"
    ],
    "instructions": [
      "Whisk yolks and sugar until thick and pale.",
      "Fold in mascarpone until smooth.",
      "Mix espresso with Marsala.",
      "Quickly dip ladyfingers in espresso.",
      "Layer dipped biscuits in dish.",
      "Spread half the mascarpone mixture.",
      "Repeat layers.",
      "Dust generously with cocoa powder.",
      "Refrigerate 6 hours minimum."
    ],
    "category": "Dessert"
  },
  {
    "id": "56",
    "name": "BBQ Pulled Pork",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 480,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/fa/c9/94/fac994daab18b6d74e245b456be65845.jpg",
    "ingredients": [
      "2kg pork shoulder",
      "BBQ dry rub",
      "2 cups BBQ sauce",
      "1 cup apple cider vinegar",
      "1/2 cup brown sugar",
      "Burger buns",
      "Coleslaw",
      "Pickles"
    ],
    "instructions": [
      "Apply dry rub generously to pork.",
      "Wrap and refrigerate overnight.",
      "Slow cook at 120\u00b0C for 8 hours.",
      "Shred meat with two forks.",
      "Mix with BBQ sauce and vinegar.",
      "Toast burger buns.",
      "Pile pulled pork on buns.",
      "Top with coleslaw and pickles."
    ],
    "category": "Dinner"
  },
  {
    "id": "57",
    "name": "Tacos al Pastor",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/57/c2/40/57c24032fb79e1da884253333f43ea33.jpg",
    "ingredients": [
      "500g pork shoulder, thinly sliced",
      "3 dried guajillo chilies",
      "2 chipotle peppers in adobo",
      "1/2 pineapple",
      "1 onion",
      "3 cloves garlic",
      "2 tsp cumin",
      "1 tsp oregano",
      "Corn tortillas",
      "Cilantro",
      "Lime",
      "White onion"
    ],
    "instructions": [
      "Blend soaked chilies, chipotle, garlic, cumin, oregano.",
      "Marinate pork in sauce for 4 hours.",
      "Grill pork and pineapple slices.",
      "Dice pork and pineapple.",
      "Warm corn tortillas.",
      "Assemble tacos with meat and pineapple.",
      "Top with cilantro, onion, lime juice.",
      "Serve with salsa verde."
    ],
    "category": "Dinner"
  },
  {
    "id": "58",
    "name": "Poutine",
    "country": "Canada",
    "continent": "North America",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/9a/98/f1/9a98f18bb80bb7b6a6eb9ce652818d56.jpg",
    "ingredients": [
      "4 large russet potatoes",
      "2 cups beef gravy",
      "2 cups cheese curds",
      "Oil for frying",
      "Salt"
    ],
    "instructions": [
      "Cut potatoes into thick fries.",
      "Fry at 160\u00b0C for 5 minutes, drain.",
      "Fry again at 190\u00b0C until crispy.",
      "Heat beef gravy until hot.",
      "Place fries on plate.",
      "Scatter cheese curds over fries.",
      "Pour hot gravy over top.",
      "Serve immediately while curds melt."
    ],
    "category": "Snack"
  },
  {
    "id": "59",
    "name": "Gumbo",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 120,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/5b/4c/d4/5b4cd48a502ad06bdf918a5435016e0b.jpg",
    "ingredients": [
      "500g andouille sausage",
      "500g shrimp",
      "1 cup flour",
      "1 cup oil (for roux)",
      "The holy trinity: onion, celery, bell pepper",
      "4 cloves garlic",
      "6 cups stock",
      "Okra",
      "File powder",
      "White rice",
      "Green onions"
    ],
    "instructions": [
      "Make dark roux: cook flour in oil, stirring constantly for 45 minutes.",
      "Add trinity and garlic to roux.",
      "Add stock gradually, stirring.",
      "Add sliced andouille, simmer 1 hour.",
      "Add okra, cook 15 minutes.",
      "Add shrimp, cook 5 minutes.",
      "Season with file powder.",
      "Serve over white rice with green onions."
    ],
    "category": "Main Course"
  },
  {
    "id": "60",
    "name": "Enchiladas",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/91/57/c2/9157c24095756bafaa74a27166132ec9.jpg",
    "ingredients": [
      "12 corn tortillas",
      "500g shredded chicken",
      "2 cups enchilada sauce",
      "2 cups Mexican cheese blend",
      "1 onion, diced",
      "1 can black beans",
      "Sour cream",
      "Fresh cilantro",
      "Lime wedges"
    ],
    "instructions": [
      "Mix chicken with beans, onion, half the cheese.",
      "Warm tortillas to make pliable.",
      "Fill tortillas, roll up, place seam-down in dish.",
      "Pour enchilada sauce over rolls.",
      "Top with remaining cheese.",
      "Bake at 190\u00b0C for 20 minutes.",
      "Garnish with sour cream, cilantro, lime."
    ],
    "category": "Dinner"
  },
  {
    "id": "61",
    "name": "Jambalaya",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/77/56/68/7756683ae3962e9f9ca209cb66e10b0a.jpg",
    "ingredients": [
      "2 cups long-grain rice",
      "300g andouille sausage",
      "300g chicken thighs",
      "200g shrimp",
      "The trinity: onion, celery, bell pepper",
      "3 cloves garlic",
      "1 can diced tomatoes",
      "3 cups chicken stock",
      "Cajun seasoning",
      "Green onions",
      "Hot sauce"
    ],
    "instructions": [
      "Brown sausage and chicken, set aside.",
      "Saut\u00e9 trinity and garlic.",
      "Add tomatoes, stock, Cajun seasoning.",
      "Return meat, add rice.",
      "Cover, simmer 25 minutes.",
      "Add shrimp last 5 minutes.",
      "Fluff with fork.",
      "Serve with hot sauce and green onions."
    ],
    "category": "Dinner"
  },
  {
    "id": "62",
    "name": "Maple Glazed Salmon",
    "country": "Canada",
    "continent": "North America",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/d5/63/7d/d5637dbb052021930ef4ff20035709db.jpg",
    "ingredients": [
      "4 salmon fillets",
      "1/4 cup maple syrup",
      "2 tbsp soy sauce",
      "1 tbsp Dijon mustard",
      "2 cloves garlic, minced",
      "1 tbsp butter",
      "Lemon juice",
      "Fresh dill",
      "Asparagus"
    ],
    "instructions": [
      "Mix maple syrup, soy sauce, mustard, garlic.",
      "Place salmon on lined baking sheet.",
      "Brush with glaze.",
      "Bake at 200\u00b0C for 12-15 minutes.",
      "Baste with more glaze halfway through.",
      "Broil last 2 minutes for caramelization.",
      "Serve with roasted asparagus and lemon."
    ],
    "category": "Dinner"
  },
  {
    "id": "63",
    "name": "Chili con Carne",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 90,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/c7/c4/6f/c7c46fe61715b3b546584b55f256a5a5.jpg",
    "ingredients": [
      "500g ground beef",
      "2 cans kidney beans",
      "1 can diced tomatoes",
      "1 can tomato paste",
      "1 onion",
      "3 cloves garlic",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp paprika",
      "Cheddar cheese",
      "Sour cream",
      "Jalape\u00f1os"
    ],
    "instructions": [
      "Brown beef with onion and garlic.",
      "Add chili powder, cumin, paprika.",
      "Add tomatoes and tomato paste.",
      "Add drained beans.",
      "Simmer uncovered for 1 hour.",
      "Stir occasionally, add water if needed.",
      "Top with cheese, sour cream, jalape\u00f1os.",
      "Serve with cornbread or rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "64",
    "name": "Lobster Roll",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 20,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/d3/c9/fb/d3c9fb378548b2ceb0f5ef41d7fdc9f5.jpg",
    "ingredients": [
      "500g cooked lobster meat",
      "3 tbsp mayonnaise",
      "1 tbsp lemon juice",
      "1 stalk celery, diced",
      "Chives",
      "4 split-top hot dog buns",
      "Butter",
      "Salt and pepper",
      "Paprika"
    ],
    "instructions": [
      "Chop lobster meat into chunks.",
      "Toss with mayo, lemon juice, celery, chives.",
      "Season with salt and pepper.",
      "Butter outsides of buns.",
      "Toast buns in pan until golden.",
      "Fill buns with lobster salad.",
      "Sprinkle with paprika.",
      "Serve immediately with chips."
    ],
    "category": "Lunch"
  },
  {
    "id": "65",
    "name": "Jerk Chicken",
    "country": "Jamaica",
    "continent": "North America",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/cd/76/64/cd7664a98e7098d33566d15b8ddb2923.jpg",
    "ingredients": [
      "1 whole chicken, cut into pieces",
      "6 scotch bonnet peppers",
      "6 green onions",
      "4 cloves garlic",
      "2 tbsp allspice",
      "1 tbsp thyme",
      "2 tbsp soy sauce",
      "Juice of 2 limes",
      "1 tbsp brown sugar",
      "1 tsp cinnamon",
      "Ginger"
    ],
    "instructions": [
      "Blend all marinade ingredients until smooth.",
      "Score chicken deeply.",
      "Marinate for at least 6 hours.",
      "Grill over medium heat, turning frequently.",
      "Cook 30-40 minutes until charred and cooked through.",
      "Baste with remaining marinade.",
      "Serve with rice and peas and festival."
    ],
    "category": "Dinner"
  },
  {
    "id": "66",
    "name": "Clam Chowder",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/39/77/c9/3977c9af77938deef5703e54ee7386eb.jpg",
    "ingredients": [
      "2 cans clams with juice",
      "4 slices bacon",
      "3 potatoes, cubed",
      "1 onion",
      "2 stalks celery",
      "3 tbsp butter",
      "3 tbsp flour",
      "2 cups milk",
      "1 cup heavy cream",
      "Thyme",
      "Oyster crackers"
    ],
    "instructions": [
      "Cook bacon until crispy, crumble.",
      "Saut\u00e9 onion and celery in bacon fat.",
      "Add butter and flour, cook 2 minutes.",
      "Gradually add clam juice and milk.",
      "Add potatoes, simmer until tender.",
      "Add clams and cream, heat through.",
      "Do not boil after adding cream.",
      "Serve with bacon bits and oyster crackers."
    ],
    "category": "Soup"
  },
  {
    "id": "67",
    "name": "Guacamole",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 10,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/15/55/2c/15552ce96fd65815b659cfbd6cec3596.jpg",
    "ingredients": [
      "3 ripe avocados",
      "1 lime, juiced",
      "1 tsp salt",
      "1/2 cup cilantro",
      "1/2 onion, diced",
      "2 roma tomatoes, diced",
      "1 jalape\u00f1o, seeded and minced",
      "1 clove garlic, minced"
    ],
    "instructions": [
      "Halve avocados, remove pit, scoop into bowl.",
      "Mash to desired consistency.",
      "Add lime juice and salt immediately.",
      "Fold in onion, tomato, cilantro, jalape\u00f1o, garlic.",
      "Taste and adjust seasoning.",
      "Serve with tortilla chips."
    ],
    "category": "Appetizer"
  },
  {
    "id": "68",
    "name": "Mac and Cheese",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/f4/7d/8e/f47d8e49743749c2808bff7efd547733.jpg",
    "ingredients": [
      "500g elbow macaroni",
      "4 tbsp butter",
      "4 tbsp flour",
      "3 cups milk",
      "3 cups sharp cheddar",
      "1 cup Gruy\u00e8re",
      "1 tsp mustard powder",
      "1/2 cup breadcrumbs",
      "Salt and pepper"
    ],
    "instructions": [
      "Cook macaroni al dente.",
      "Melt butter, add flour, cook 2 minutes.",
      "Gradually whisk in milk.",
      "Add cheeses, stir until melted.",
      "Add mustard, salt, pepper.",
      "Combine with pasta, pour in baking dish.",
      "Top with breadcrumbs and extra cheese.",
      "Bake at 190\u00b0C for 15 minutes until bubbly."
    ],
    "category": "Dinner"
  },
  {
    "id": "69",
    "name": "Carnitas",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 180,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/52/6c/6a/526c6ad68098a4f802be708434002971.jpg",
    "ingredients": [
      "2kg pork shoulder",
      "1 orange, juiced",
      "1 lime, juiced",
      "4 cloves garlic",
      "1 onion, quartered",
      "2 tsp cumin",
      "1 tsp oregano",
      "1 bay leaf",
      "Lard or oil",
      "Salt",
      "Corn tortillas"
    ],
    "instructions": [
      "Cut pork into large chunks.",
      "Season with cumin, oregano, salt.",
      "Place in pot with garlic, onion, citrus juices.",
      "Add just enough water to cover.",
      "Simmer uncovered for 2.5 hours until tender.",
      "Shred meat, spread on baking sheet.",
      "Broil until crispy on edges.",
      "Serve in warm tortillas with salsa and onion."
    ],
    "category": "Dinner"
  },
  {
    "id": "70",
    "name": "Bananas Foster",
    "country": "United States",
    "continent": "North America",
    "cookingTime": 15,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/8f/c8/42/8fc84243f8533c4d85cb887b6e08141c.jpg",
    "ingredients": [
      "4 bananas, sliced lengthwise",
      "4 tbsp butter",
      "1/2 cup brown sugar",
      "1/4 cup dark rum",
      "1 tsp cinnamon",
      "Vanilla ice cream",
      "1/4 cup banana liqueur"
    ],
    "instructions": [
      "Melt butter in skillet.",
      "Add brown sugar and cinnamon, stir until dissolved.",
      "Add bananas, cook 2 minutes per side.",
      "Remove pan from heat, add rum.",
      "Carefully ignite with lighter.",
      "Swirl pan until flames subside.",
      "Serve over vanilla ice cream immediately."
    ],
    "category": "Dessert"
  },
  {
    "id": "71",
    "name": "Caesar Salad",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 20,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/f9/be/a1/f9bea17b6ace81729c5183fe4793c44b.jpg",
    "ingredients": [
      "2 heads romaine lettuce",
      "1/2 cup Parmesan shavings",
      "Croutons",
      "2 anchovy fillets",
      "1 egg yolk",
      "2 cloves garlic",
      "1 tbsp Dijon mustard",
      "Juice of 1 lemon",
      "1/2 cup olive oil",
      "Worcestershire sauce"
    ],
    "instructions": [
      "Blend anchovies, garlic, egg yolk, mustard, lemon juice.",
      "Slowly drizzle in olive oil while blending.",
      "Add Worcestershire sauce and Parmesan.",
      "Tear romaine into pieces.",
      "Toss with dressing.",
      "Top with croutons and Parmesan shavings.",
      "Add freshly cracked black pepper."
    ],
    "category": "Dessert"
  },
  {
    "id": "72",
    "name": "Elote (Mexican Street Corn)",
    "country": "Mexico",
    "continent": "North America",
    "cookingTime": 20,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/de/18/68/de18684db4f333068d77614f10f257c5.jpg",
    "ingredients": [
      "6 ears of corn",
      "1/2 cup mayonnaise",
      "1/2 cup sour cream",
      "1 cup cotija cheese",
      "2 tsp chili powder",
      "Juice of 2 limes",
      "Fresh cilantro",
      "Butter"
    ],
    "instructions": [
      "Grill corn until charred on all sides.",
      "Mix mayo and sour cream.",
      "Brush corn with mayo mixture.",
      "Roll in crumbled cotija cheese.",
      "Sprinkle with chili powder.",
      "Squeeze lime juice over top.",
      "Garnish with cilantro."
    ],
    "category": "Snack"
  },
  {
    "id": "73",
    "name": "Feijoada",
    "country": "Brazil",
    "continent": "South America",
    "cookingTime": 240,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/84/87/bc/8487bcccf39fc5577cc616978c8e24be.jpg",
    "ingredients": [
      "500g black beans, soaked",
      "300g smoked pork ribs",
      "200g chorizo",
      "200g bacon",
      "1 smoked pork hock",
      "2 onions",
      "6 cloves garlic",
      "2 bay leaves",
      "Orange slices",
      "Farofa",
      "White rice",
      "Collard greens"
    ],
    "instructions": [
      "Cook soaked beans with pork hock for 1.5 hours.",
      "In separate pan, brown chorizo and bacon.",
      "Add to beans with ribs and bay leaves.",
      "Cook together 1.5 more hours.",
      "Mash some beans for thicker consistency.",
      "Saut\u00e9 garlic and onion, add to pot.",
      "Serve with white rice, farofa, collard greens.",
      "Garnish with orange slices."
    ],
    "category": "Dinner"
  },
  {
    "id": "74",
    "name": "Empanadas",
    "country": "Argentina",
    "continent": "South America",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/a9/9b/8c/a99b8c61829fbfac36fa110193009f59.jpg",
    "ingredients": [
      "3 cups flour",
      "1/2 cup butter, cold",
      "1/2 cup water",
      "500g ground beef",
      "1 onion, diced",
      "2 hard-boiled eggs",
      "Green olives",
      "1 tsp cumin",
      "1 tsp paprika",
      "Salt and pepper"
    ],
    "instructions": [
      "Make dough: cut butter into flour, add water.",
      "Rest 30 minutes.",
      "Cook beef with onion, cumin, paprika.",
      "Add chopped eggs and olives.",
      "Roll dough, cut circles.",
      "Fill with meat mixture.",
      "Fold and crimp edges with fork.",
      "Bake at 200\u00b0C for 20 minutes until golden."
    ],
    "category": "Snack"
  },
  {
    "id": "75",
    "name": "Ceviche",
    "country": "Peru",
    "continent": "South America",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/f2/79/07/f27907a9b018bdf2bb2b255d02671686.jpg",
    "ingredients": [
      "500g fresh white fish, cubed",
      "1 cup lime juice",
      "1 red onion, thinly sliced",
      "2 aji amarillo peppers",
      "Fresh cilantro",
      "1 sweet potato, boiled and sliced",
      "Corn on the cob",
      "Salt",
      "Tiger's milk (leche de tigre)"
    ],
    "instructions": [
      "Cut fish into 2cm cubes.",
      "Cover with lime juice and salt.",
      "Add sliced aji peppers.",
      "Let cure 10-15 minutes (no longer).",
      "Add red onion and cilantro.",
      "Toss gently.",
      "Serve with sweet potato slices and corn.",
      "Drizzle with extra tiger's milk."
    ],
    "category": "Appetizer"
  },
  {
    "id": "76",
    "name": "Arepas",
    "country": "Venezuela",
    "continent": "South America",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/3c/25/f5/3c25f5f2c13d38dc6ce1aa9d3c0b3062.jpg",
    "ingredients": [
      "2 cups pre-cooked white corn flour",
      "2.5 cups warm water",
      "1 tsp salt",
      "Oil or butter for cooking",
      "Black beans",
      "Queso fresco",
      "Avocado",
      "Shredded chicken (optional)"
    ],
    "instructions": [
      "Mix corn flour, salt, and warm water.",
      "Knead until smooth, rest 5 minutes.",
      "Form into thick patties.",
      "Cook on griddle or skillet until golden crust forms.",
      "Flip and cook other side.",
      "Split open like a pocket.",
      "Fill with beans, cheese, avocado.",
      "Serve hot."
    ],
    "category": "Breakfast"
  },
  {
    "id": "77",
    "name": "Lomo Saltado",
    "country": "Peru",
    "continent": "South America",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/02/7c/d6/027cd6fd2e5e47cb9965436373432d7e.jpg",
    "ingredients": [
      "500g beef sirloin, sliced",
      "2 tomatoes, wedged",
      "1 red onion, sliced",
      "2 aji amarillo peppers",
      "3 tbsp soy sauce",
      "2 tbsp red wine vinegar",
      "French fries",
      "White rice",
      "Cilantro",
      "Oil"
    ],
    "instructions": [
      "Cut beef into thick strips.",
      "Heat wok very hot, sear beef quickly.",
      "Remove beef, stir-fry onions and peppers.",
      "Add tomatoes, cook briefly.",
      "Return beef, add soy sauce and vinegar.",
      "Toss with French fries.",
      "Serve alongside white rice.",
      "Garnish with cilantro."
    ],
    "category": "Dinner"
  },
  {
    "id": "78",
    "name": "Asado",
    "country": "Argentina",
    "continent": "South America",
    "cookingTime": 180,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/26/41/3e/26413e4a8af355ec7cd3240c8f387065.jpg",
    "ingredients": [
      "2kg beef ribs",
      "500g chorizo",
      "500g morcilla (blood sausage)",
      "Chimichurri sauce",
      "Coarse salt",
      "Fresh bread",
      "Mixed salad",
      "Provoleta cheese"
    ],
    "instructions": [
      "Build charcoal fire, let burn to embers.",
      "Salt beef generously with coarse salt.",
      "Grill ribs over indirect heat for 2-3 hours.",
      "Add chorizo and morcilla in last 30 minutes.",
      "Grill provoleta until melted and bubbly.",
      "Let meat rest 15 minutes.",
      "Slice and serve with chimichurri.",
      "Accompany with bread and salad."
    ],
    "category": "Dinner"
  },
  {
    "id": "79",
    "name": "Brigadeiro",
    "country": "Brazil",
    "continent": "South America",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/54/53/cb/5453cbd4075a7a2e35651070d4f91fc2.jpg",
    "ingredients": [
      "1 can sweetened condensed milk",
      "3 tbsp cocoa powder",
      "1 tbsp butter",
      "Chocolate sprinkles"
    ],
    "instructions": [
      "Mix condensed milk, cocoa, and butter in saucepan.",
      "Cook on medium heat, stirring constantly.",
      "Cook until mixture pulls away from pan.",
      "Let cool until handleable.",
      "Grease hands with butter.",
      "Roll into small balls.",
      "Roll in chocolate sprinkles.",
      "Place in mini cupcake liners."
    ],
    "category": "Dessert"
  },
  {
    "id": "80",
    "name": "Causa Lime\u00f1a",
    "country": "Peru",
    "continent": "South America",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/40/29/f6/4029f6edd984140cbdb4116c015ae79a.jpg",
    "ingredients": [
      "1kg yellow potatoes",
      "2 aji amarillo peppers, pureed",
      "1/4 cup lime juice",
      "1/4 cup oil",
      "300g cooked chicken or tuna",
      "1 avocado",
      "Mayonnaise",
      "Hard-boiled eggs",
      "Olives",
      "Salt"
    ],
    "instructions": [
      "Boil and mash potatoes while hot.",
      "Mix with aji amarillo, lime juice, oil, salt.",
      "Mix chicken with mayonnaise.",
      "Press half the potato in mold.",
      "Layer chicken filling and avocado.",
      "Top with remaining potato.",
      "Refrigerate 1 hour.",
      "Unmold and garnish with eggs and olives."
    ],
    "category": "Appetizer"
  },
  {
    "id": "81",
    "name": "Chimichurri Steak",
    "country": "Uruguay",
    "continent": "South America",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/84/a1/31/84a13102a90528d97e377cf16bb97b19.jpg",
    "ingredients": [
      "4 ribeye steaks",
      "1 cup flat-leaf parsley",
      "4 cloves garlic",
      "1/4 cup red wine vinegar",
      "1/2 cup olive oil",
      "1 tsp oregano",
      "Red pepper flakes",
      "Salt and pepper"
    ],
    "instructions": [
      "Finely chop parsley and garlic.",
      "Mix with vinegar, oil, oregano, pepper flakes.",
      "Let chimichurri sit 30 minutes.",
      "Season steaks with salt and pepper.",
      "Grill over high heat 4 min per side for medium.",
      "Rest 5 minutes.",
      "Drizzle generously with chimichurri.",
      "Serve with grilled vegetables."
    ],
    "category": "Dinner"
  },
  {
    "id": "82",
    "name": "Pastel de Choclo",
    "country": "Chile",
    "continent": "South America",
    "cookingTime": 75,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/f8/a5/dd/f8a5dd104bec08b397fe3c8b30a27f99.jpg",
    "ingredients": [
      "8 ears fresh corn",
      "500g ground beef",
      "2 onions, diced",
      "2 chicken thighs",
      "Raisins",
      "Black olives",
      "2 hard-boiled eggs",
      "1 tsp cumin",
      "Basil",
      "Sugar",
      "Butter"
    ],
    "instructions": [
      "Blend corn kernels with basil into paste.",
      "Cook corn paste with butter until thick.",
      "Brown beef with onions and cumin.",
      "Boil and shred chicken.",
      "Layer meat in baking dishes.",
      "Add olives, raisins, egg quarters.",
      "Top with corn mixture.",
      "Sprinkle sugar on top.",
      "Bake at 200\u00b0C for 30 minutes until golden."
    ],
    "category": "Dinner"
  },
  {
    "id": "83",
    "name": "Sancocho",
    "country": "Colombia",
    "continent": "South America",
    "cookingTime": 120,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/6f/4e/ef/6f4eef2aa6dbd3fd36fd1397e1c6b037.jpg",
    "ingredients": [
      "1kg chicken pieces",
      "3 corn cobs, cut in thirds",
      "2 plantains",
      "3 potatoes",
      "1 yuca (cassava)",
      "2 onions",
      "4 cloves garlic",
      "Cilantro",
      "Cumin",
      "Salt",
      "Avocado",
      "Rice"
    ],
    "instructions": [
      "Brown chicken in large pot.",
      "Add onions and garlic, saut\u00e9.",
      "Cover with water, add cumin, simmer 30 min.",
      "Add corn, potatoes, yuca, plantains.",
      "Simmer 45 minutes until everything is tender.",
      "Add cilantro.",
      "Season with salt.",
      "Serve with rice and avocado slices."
    ],
    "category": "Soup"
  },
  {
    "id": "84",
    "name": "Alfajores",
    "country": "Argentina",
    "continent": "South America",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/25/32/f5/2532f5cb07ab8235cfa8295c5ef5679d.jpg",
    "ingredients": [
      "2 cups cornstarch",
      "1 cup flour",
      "1/2 cup butter",
      "1/2 cup powdered sugar",
      "3 egg yolks",
      "1 tsp vanilla",
      "Dulce de leche",
      "Coconut flakes",
      "Baking powder"
    ],
    "instructions": [
      "Cream butter and sugar.",
      "Add egg yolks and vanilla.",
      "Sift in cornstarch, flour, baking powder.",
      "Roll out dough, cut circles.",
      "Bake at 170\u00b0C for 10-12 minutes (stay pale).",
      "Cool completely.",
      "Sandwich with dulce de leche.",
      "Roll edges in coconut flakes."
    ],
    "category": "Dessert"
  },
  {
    "id": "85",
    "name": "Bandeja Paisa",
    "country": "Colombia",
    "continent": "South America",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/90/92/fd/9092fdfeefed945fb180c5a91616074c.jpg",
    "ingredients": [
      "Red beans",
      "White rice",
      "Ground beef",
      "Chicharr\u00f3n (fried pork belly)",
      "Fried egg",
      "Plantain",
      "Arepa",
      "Avocado",
      "Hogao sauce (tomato-onion)",
      "Chorizo"
    ],
    "instructions": [
      "Cook red beans until tender.",
      "Cook white rice.",
      "Season and fry ground beef.",
      "Fry pork belly until crispy.",
      "Fry plantain slices until golden.",
      "Make hogao: cook tomato and onion sauce.",
      "Fry eggs sunny-side up.",
      "Grill chorizo.",
      "Arrange everything on large platter with arepa and avocado."
    ],
    "category": "Dinner"
  },
  {
    "id": "86",
    "name": "P\u00e3o de Queijo",
    "country": "Brazil",
    "continent": "South America",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/af/27/97/af2797761a856420abff7395b47e89d2.jpg",
    "ingredients": [
      "2 cups tapioca flour",
      "1 cup milk",
      "1/2 cup oil",
      "2 eggs",
      "1.5 cups Parmesan cheese, grated",
      "1 tsp salt"
    ],
    "instructions": [
      "Heat milk and oil until boiling.",
      "Pour over tapioca flour, mix well.",
      "Let cool slightly, add eggs one at a time.",
      "Mix in cheese and salt.",
      "Roll into small balls.",
      "Place on greased baking sheet.",
      "Bake at 200\u00b0C for 15-20 minutes.",
      "Serve warm \u2014 they puff up beautifully!"
    ],
    "category": "Snack"
  },
  {
    "id": "87",
    "name": "A\u00e7a\u00ed Bowl",
    "country": "Brazil",
    "continent": "South America",
    "cookingTime": 10,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian",
      "vegan",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/20/12/09/201209b6d681b7c8fa09d465ad0d7871.jpg",
    "ingredients": [
      "2 frozen a\u00e7a\u00ed packets",
      "1 banana",
      "1/2 cup blueberries",
      "1/4 cup granola",
      "Honey",
      "Coconut flakes",
      "Chia seeds",
      "Almond milk"
    ],
    "instructions": [
      "Blend a\u00e7a\u00ed packets with banana and splash of almond milk.",
      "Blend until thick and smooth.",
      "Pour into bowl.",
      "Top with granola, blueberries, coconut.",
      "Drizzle with honey.",
      "Sprinkle chia seeds.",
      "Serve immediately."
    ],
    "category": "Breakfast"
  },
  {
    "id": "88",
    "name": "Tamales",
    "country": "Colombia",
    "continent": "South America",
    "cookingTime": 180,
    "difficulty": "Hard",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/19/1e/3b/191e3b0bc8a7f7b79fa6f58a10474058.jpg",
    "ingredients": [
      "Corn masa dough",
      "Banana leaves",
      "500g pork, cooked and shredded",
      "Carrots",
      "Potatoes",
      "Peas",
      "Green olives",
      "Chicken broth",
      "Cumin",
      "Achiote"
    ],
    "instructions": [
      "Prepare masa dough with broth and achiote.",
      "Soften banana leaves over flame.",
      "Spread masa on banana leaf.",
      "Add pork, carrots, potatoes, peas, olives.",
      "Fold banana leaf into package.",
      "Tie securely with string.",
      "Steam for 2 hours.",
      "Serve in banana leaf wrapping."
    ],
    "category": "Dinner"
  },
  {
    "id": "89",
    "name": "Suspiro Lime\u00f1o",
    "country": "Peru",
    "continent": "South America",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/cd/2b/eb/cd2beb1efb7ccdbe68a04c977d225e26.jpg",
    "ingredients": [
      "1 can sweetened condensed milk",
      "1 can evaporated milk",
      "6 egg yolks",
      "1 tsp vanilla",
      "3 egg whites",
      "1/2 cup sugar",
      "1/4 cup port wine",
      "Cinnamon"
    ],
    "instructions": [
      "Blend condensed milk, evaporated milk, egg yolks.",
      "Cook on low heat, stirring constantly until thick.",
      "Add vanilla, pour into dish, let cool.",
      "Make meringue: whip egg whites with sugar.",
      "Add port wine while whipping.",
      "Pipe meringue on top of custard.",
      "Dust with cinnamon.",
      "Refrigerate 2 hours before serving."
    ],
    "category": "Dessert"
  },
  {
    "id": "90",
    "name": "Meat Pie",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 75,
    "difficulty": "Medium",
    "dietary": [],
    "image": "https://i.pinimg.com/736x/53/80/61/53806117c440daa9c30a1b6769141baf.jpg",
    "ingredients": [
      "500g ground beef",
      "1 onion, diced",
      "2 tbsp flour",
      "1 cup beef stock",
      "2 tbsp tomato sauce",
      "1 tbsp Worcestershire sauce",
      "Puff pastry sheets",
      "1 egg for wash",
      "Salt and pepper"
    ],
    "instructions": [
      "Brown beef and onion.",
      "Add flour, stir 1 minute.",
      "Add stock, tomato sauce, Worcestershire.",
      "Simmer 20 minutes until thick.",
      "Cool filling.",
      "Line pie tins with pastry.",
      "Fill with meat mixture.",
      "Top with pastry, seal edges, egg wash.",
      "Bake at 200\u00b0C for 25 minutes until golden."
    ],
    "category": "Dinner"
  },
  {
    "id": "91",
    "name": "Pavlova",
    "country": "New Zealand",
    "continent": "Australia/Oceania",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/f3/44/e6/f344e63918bf8bcbafacc838fe595946.jpg",
    "ingredients": [
      "6 egg whites",
      "1.5 cups caster sugar",
      "1 tbsp cornstarch",
      "1 tsp vanilla",
      "1 tsp white vinegar",
      "2 cups heavy cream",
      "Kiwi fruit",
      "Strawberries",
      "Passionfruit",
      "Blueberries"
    ],
    "instructions": [
      "Whip egg whites until stiff peaks.",
      "Gradually add sugar, beating until glossy.",
      "Fold in cornstarch, vanilla, vinegar.",
      "Shape into circle on lined baking sheet.",
      "Bake at 120\u00b0C for 90 minutes.",
      "Turn off oven, let cool inside.",
      "Whip cream, pile on top.",
      "Decorate with fresh fruits."
    ],
    "category": "Dessert"
  },
  {
    "id": "92",
    "name": "Lamingtons",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/51/8f/c7/518fc7a93585951353840f54edf3be13.jpg",
    "ingredients": [
      "Sponge cake",
      "2 cups powdered sugar",
      "1/3 cup cocoa powder",
      "2 tbsp butter, melted",
      "1/2 cup milk",
      "3 cups desiccated coconut",
      "Raspberry jam (optional)"
    ],
    "instructions": [
      "Cut sponge cake into squares.",
      "Mix powdered sugar, cocoa, butter, milk for chocolate icing.",
      "Dip each square into chocolate icing.",
      "Roll in desiccated coconut.",
      "Optional: slice and fill with jam and cream.",
      "Place on wire rack to set.",
      "Refrigerate 30 minutes.",
      "Serve with tea."
    ],
    "category": "Dessert"
  },
  {
    "id": "93",
    "name": "Hangi",
    "country": "New Zealand",
    "continent": "Australia/Oceania",
    "cookingTime": 240,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/5c/70/a6/5c70a6d9f75cff5213ffdc1863323bac.jpg",
    "ingredients": [
      "2kg lamb shoulder",
      "1kg chicken",
      "Kumara (sweet potatoes)",
      "Potatoes",
      "Pumpkin",
      "Cabbage",
      "Stuffing",
      "Wet cloth sacks",
      "Volcanic rocks (or oven alternative)"
    ],
    "instructions": [
      "Traditional: heat rocks in fire pit.",
      "Wrap meats and vegetables separately in foil and cloth.",
      "Place meat on hot rocks first.",
      "Layer vegetables on top.",
      "Cover with wet sacks and earth.",
      "Cook for 3-4 hours.",
      "Oven alternative: slow cook at 140\u00b0C for 4 hours.",
      "The steam creates incredibly tender, smoky food."
    ],
    "category": "Dinner"
  },
  {
    "id": "94",
    "name": "Barramundi with Macadamia",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
    "ingredients": [
      "4 barramundi fillets",
      "1 cup macadamia nuts, crushed",
      "2 tbsp butter",
      "Lemon myrtle",
      "Finger limes",
      "Asparagus",
      "Olive oil",
      "Salt and pepper"
    ],
    "instructions": [
      "Season barramundi with salt, pepper, lemon myrtle.",
      "Press crushed macadamias onto top of fillets.",
      "Pan-fry skin-side down in butter 3 minutes.",
      "Flip, cook 3 more minutes.",
      "Roast asparagus with olive oil.",
      "Squeeze finger lime pearls over fish.",
      "Serve with roasted asparagus."
    ],
    "category": "Dinner"
  },
  {
    "id": "95",
    "name": "Chicken Parmi",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [],
    "image": "https://i.pinimg.com/1200x/fb/a1/87/fba187228af11c8ea00290b1a66edda1.jpg",
    "ingredients": [
      "4 chicken breasts",
      "1 cup flour",
      "2 eggs",
      "2 cups breadcrumbs",
      "1 cup marinara sauce",
      "1 cup mozzarella",
      "1/2 cup Parmesan",
      "Ham slices",
      "Chips (fries)",
      "Salad"
    ],
    "instructions": [
      "Pound chicken thin.",
      "Dredge in flour, egg, breadcrumbs.",
      "Fry until golden on both sides.",
      "Place on baking sheet.",
      "Top with ham, marinara, cheeses.",
      "Bake at 200\u00b0C for 10 minutes until cheese melts.",
      "Serve with chips and salad.",
      "The true Aussie pub classic!"
    ],
    "category": "Dinner"
  },
  {
    "id": "96",
    "name": "Tim Tam Cheesecake",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/4f/b8/f1/4fb8f135da49187f243009e5cc9a0ff0.jpg",
    "ingredients": [
      "2 packs Tim Tams",
      "100g butter, melted",
      "500g cream cheese",
      "1 cup powdered sugar",
      "300ml heavy cream",
      "200g dark chocolate, melted",
      "1 tsp vanilla",
      "Gelatin sheets"
    ],
    "instructions": [
      "Crush Tim Tams, mix with melted butter.",
      "Press into springform pan base.",
      "Refrigerate while making filling.",
      "Beat cream cheese and sugar until smooth.",
      "Fold in melted chocolate and vanilla.",
      "Whip cream, fold into mixture.",
      "Add dissolved gelatin.",
      "Pour over base, refrigerate overnight.",
      "Decorate with extra Tim Tams."
    ],
    "category": "Dessert"
  },
  {
    "id": "97",
    "name": "Lemon Myrtle Roast Chicken",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/8e/13/6d/8e136d2b0f9039ac13e0c95f303d2106.jpg",
    "ingredients": [
      "1 whole chicken",
      "2 tbsp lemon myrtle, ground",
      "4 tbsp butter, softened",
      "1 lemon",
      "4 cloves garlic",
      "Fresh thyme",
      "Root vegetables",
      "Olive oil",
      "Salt and pepper"
    ],
    "instructions": [
      "Mix butter with lemon myrtle, garlic.",
      "Loosen chicken skin, spread butter underneath.",
      "Stuff cavity with lemon and thyme.",
      "Surround with root vegetables.",
      "Drizzle with olive oil, season generously.",
      "Roast at 200\u00b0C for 1 hour 15 minutes.",
      "Rest 15 minutes before carving.",
      "Serve with pan vegetables and juices."
    ],
    "category": "Dinner"
  },
  {
    "id": "98",
    "name": "Kokoda",
    "country": "Fiji",
    "continent": "Australia/Oceania",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/68/45/89/68458987cf56ee2e20babd3bf4e11b8f.jpg",
    "ingredients": [
      "500g fresh mahi-mahi, cubed",
      "1 cup lime juice",
      "1 cup coconut cream",
      "1 tomato, diced",
      "1 red capsicum, diced",
      "1 red onion, diced",
      "1 chili, minced",
      "Fresh cilantro",
      "Salt"
    ],
    "instructions": [
      "Cube fish into small pieces.",
      "Cover with lime juice, refrigerate 2 hours.",
      "Fish should turn opaque (cooked by acid).",
      "Drain most of the lime juice.",
      "Add coconut cream.",
      "Fold in tomato, capsicum, onion, chili.",
      "Season with salt.",
      "Serve chilled in coconut shell if available."
    ],
    "category": "Appetizer"
  },
  {
    "id": "99",
    "name": "Damper Bread",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/7e/61/18/7e6118a00134fa563e2cce12a7b1b6de.jpg",
    "ingredients": [
      "3 cups self-rising flour",
      "1 tsp salt",
      "1 tbsp butter",
      "1 cup milk",
      "1/4 cup water",
      "Honey",
      "Butter for serving"
    ],
    "instructions": [
      "Mix flour and salt.",
      "Rub in butter with fingertips.",
      "Add milk and water, mix to soft dough.",
      "Shape into round loaf on lined tray.",
      "Score a cross on top.",
      "Bake at 200\u00b0C for 25-30 minutes.",
      "Should sound hollow when tapped.",
      "Serve warm with butter and honey."
    ],
    "category": "Dessert"
  },
  {
    "id": "100",
    "name": "Anzac Biscuits",
    "country": "Australia",
    "continent": "Australia/Oceania",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/ca/da/08/cada083231295640b4e17ef345f83e0c.jpg",
    "ingredients": [
      "1 cup rolled oats",
      "1 cup flour",
      "1 cup desiccated coconut",
      "3/4 cup sugar",
      "125g butter",
      "2 tbsp golden syrup",
      "1 tsp baking soda",
      "2 tbsp boiling water"
    ],
    "instructions": [
      "Mix oats, flour, coconut, sugar.",
      "Melt butter and golden syrup together.",
      "Dissolve baking soda in boiling water, add to butter.",
      "Combine wet and dry ingredients.",
      "Roll into balls, place on lined trays.",
      "Flatten slightly.",
      "Bake at 160\u00b0C for 15-18 minutes.",
      "Cool on tray \u2014 they crisp up as they cool."
    ],
    "category": "Snack"
  },
  {
    "id": "101",
    "name": "Lovo Feast",
    "country": "Fiji",
    "continent": "Australia/Oceania",
    "cookingTime": 300,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/2d/68/87/2d688713f43d881f841ff42979a91caf.jpg",
    "ingredients": [
      "1 whole chicken",
      "1kg pork",
      "Taro root",
      "Cassava",
      "Breadfruit",
      "Coconut cream",
      "Banana leaves",
      "Palusami (taro leaves)",
      "Salt"
    ],
    "instructions": [
      "Wrap meats and root vegetables in banana leaves.",
      "Prepare palusami: fill taro leaves with coconut cream.",
      "Heat rocks in fire pit (or use oven at 150\u00b0C).",
      "Layer wrapped food on hot rocks.",
      "Cover with banana leaves and earth.",
      "Slow cook 4-5 hours.",
      "The earth oven creates smoky, tender food.",
      "Unwrap and serve communally."
    ],
    "category": "Dinner"
  },
  {
    "id": "102",
    "name": "Biryani",
    "country": "India",
    "continent": "Asia",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/99/4e/8c/994e8cd7fef1742f94c32c075f4b9500.jpg",
    "ingredients": [
      "2 cups basmati rice",
      "500g chicken",
      "1 cup yogurt",
      "2 onions, fried crispy",
      "Saffron in warm milk",
      "Whole spices (cardamom, cinnamon, cloves)",
      "2 tbsp biryani masala",
      "Ghee",
      "Mint",
      "Cilantro",
      "Fried cashews and raisins"
    ],
    "instructions": [
      "Marinate chicken in yogurt and biryani masala.",
      "Par-cook rice with whole spices until 70% done.",
      "Fry onions until deep golden.",
      "Layer marinated chicken in heavy pot.",
      "Add half the rice, fried onions, mint, cilantro.",
      "Add remaining rice, saffron milk.",
      "Seal lid with dough or foil.",
      "Cook on lowest heat 30 minutes (dum).",
      "Rest 5 minutes, gently mix layers."
    ],
    "category": "Dinner"
  },
  {
    "id": "103",
    "name": "Pupusas",
    "country": "El Salvador",
    "continent": "North America",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/68/21/2e/68212e3d7cad2f26b447fa140db20fda.jpg",
    "ingredients": [
      "2 cups masa harina",
      "1.5 cups warm water",
      "1 cup refried beans",
      "1 cup quesillo cheese",
      "Curtido (pickled cabbage slaw)",
      "Tomato salsa",
      "Salt"
    ],
    "instructions": [
      "Mix masa harina, water, salt into smooth dough.",
      "Form balls, make a well in center.",
      "Fill with beans and cheese.",
      "Seal and flatten into thick patties.",
      "Cook on hot griddle 3-4 minutes per side.",
      "Should have golden spots.",
      "Serve with curtido and salsa."
    ],
    "category": "Dinner"
  },
  {
    "id": "104",
    "name": "Baklava",
    "country": "Turkey",
    "continent": "Asia",
    "cookingTime": 75,
    "difficulty": "Hard",
    "dietary": [
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/87/35/f3/8735f3759533c8235ccd68bb4901ec68.jpg",
    "ingredients": [
      "1 package filo pastry",
      "2 cups walnuts and pistachios, chopped",
      "1 cup butter, melted",
      "1 cup sugar",
      "1 cup water",
      "1/2 cup honey",
      "1 tsp rose water",
      "1 tsp cinnamon",
      "Pinch of cloves"
    ],
    "instructions": [
      "Layer 8 filo sheets in pan, brushing each with butter.",
      "Spread layer of nuts.",
      "Add 4 more buttered sheets, more nuts.",
      "Repeat until nuts are used.",
      "Top with 8 more buttered sheets.",
      "Cut into diamonds before baking.",
      "Bake at 175\u00b0C for 50 minutes until golden.",
      "Make syrup: boil sugar, water, honey, rose water.",
      "Pour cooled syrup over hot baklava immediately."
    ],
    "category": "Dessert"
  },
  {
    "id": "105",
    "name": "Adobo",
    "country": "Philippines",
    "continent": "Asia",
    "cookingTime": 60,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/b3/7d/57/b37d579ea30918cdf38053e83e3ede62.jpg",
    "ingredients": [
      "1kg chicken thighs",
      "1/2 cup soy sauce",
      "1/2 cup white vinegar",
      "1 head garlic, crushed",
      "2 bay leaves",
      "1 tbsp peppercorns",
      "1 tbsp sugar",
      "Oil",
      "White rice"
    ],
    "instructions": [
      "Combine chicken, soy sauce, vinegar, garlic, bay leaves, peppercorns.",
      "Marinate 30 minutes.",
      "Bring to boil, then simmer 30 minutes.",
      "Remove chicken, pat dry.",
      "Fry chicken in oil until crispy.",
      "Reduce sauce until thick.",
      "Pour sauce over chicken.",
      "Serve with steamed white rice."
    ],
    "category": "Dinner"
  },
  {
    "id": "106",
    "name": "Nigerian Fried Rice",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/44/67/f4/4467f46691bf41143404de960757ddbd.jpg",
    "ingredients": [
      "3 cups long-grain parboiled rice (washed and drained)",
      "1 kg chicken or turkey parts (thighs, drumsticks, or wings)",
      "4 cups chicken stock (well-seasoned)",
      "1/2 cup liver, cooked and cubed (optional)",
      "1 cup shrimps, peeled and deveined",
      "1 cup carrots, diced",
      "1/2 cup green beans, chopped",
      "1/2 cup sweet corn",
      "1/2 cup green peas",
      "1 large onion, finely chopped",
      "2 tbsp curry powder",
      "1 tsp dried thyme",
      "3 tbsp vegetable oil or butter",
      "2 bouillon cubes",
      "Salt and pepper to taste",
      "Chopped scallions for garnish"
    ],
    "instructions": [
      "Season the chicken or turkey with salt, pepper, onions, and curry; boil until tender, then fry or grill until golden brown and set aside for serving.",
      "In a large pot, bring the chicken stock to a boil; add curry powder, thyme, and bouillon cubes.",
      "Add the washed rice to the stock and cook until the liquid is absorbed and rice is nearly tender but still firm (al dente).",
      "Spread the cooked rice on a flat tray to cool completely to prevent it from becoming soggy during stir-frying.",
      "Heat oil in a large wok or frying pan over medium-high heat.",
      "Sauté the onions for 1 minute, then add the shrimps and liver; cook until the shrimps turn pink.",
      "Add the carrots, green beans, peas, and sweet corn; stir-fry for 2-3 minutes until slightly softened but still crunchy.",
      "Add the cooled rice to the pan in batches, tossing constantly to incorporate the vegetables and aromatics.",
      "Adjust seasoning with salt and pepper and stir-fry for another 3-5 minutes.",
      "Garnish with chopped scallions and serve hot alongside the fried chicken or turkey."
    ],
    "category": "Lunch"
  },
  {
    "id": "107",
    "name": "Coconut Rice",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
    ],
    "image": "https://i.pinimg.com/736x/c8/4d/f8/c84df8ea9b8501f647a0836b573be6d7.jpg",
    "ingredients": [
      "3 cups parboiled rice",
      "2 cups thick coconut milk",
      "2 cups meat stock",
      "1 large onion, chopped",
      "2 tbsp ground crayfish",
      "2 bouillon cubes",
      "1/2 cup shrimps or diced liver",
      "Salt and fresh peppers to taste"
    ],
    "instructions": [
      "In a large pot, combine the meat stock and coconut milk and bring to a boil.",
      "Add the washed parboiled rice, onions, crayfish, bouillon cubes, and pepper.",
      "Cover and cook on medium heat until the rice is tender and the liquid is fully absorbed.",
      "Stir in the shrimps or liver if using, and simmer for 5 minutes.",
      "Fluff with a fork and serve with your choice of fried protein."
    ],
    "category": "Lunch"
  },
  {
    "id": "108",
    "name": "Afang Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "low-carb"
    ],
    "image": "https://i.pinimg.com/1200x/63/af/8d/63af8dcfb1e585ab424958f4ced5a419.jpg",
    "ingredients": [
      "4 cups shredded Waterleaves",
      "2 cups ground Afang (Okazi) leaves",
      "1 kg assorted meat (Beef, Tripe, Cow skin, etc.)",
      "2 cups periwinkles (cleaned)",
      "1 cup palm oil",
      "3 tbsp ground crayfish",
      "2 bouillon cubes",
      "Dried fish and Stockfish",
      "Fresh yellow peppers to taste"
    ],
    "instructions": [
      "Boil the assorted meats and stockfish with onions and seasoning until tender.",
      "Add the cleaned periwinkles and dried fish to the pot and simmer for 5 minutes.",
      "Add the palm oil, ground pepper, and crayfish; cook for another 5 minutes.",
      "Add the shredded waterleaves and stir; allow to simmer for 3 minutes.",
      "Add the ground Afang leaves, stir thoroughly, and simmer for 2 minutes before turning off the heat.",
      "Afang soup is traditionally served with fufu, pounded yam, or garri."
    ],
    "category": "Soup"
  },
  {
    "id": "109",
    "name": "Vegetable Soup (Edikang Ikong)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "keto-friendly"
    ],
    "image": "https://i.pinimg.com/736x/2d/cd/c7/2dcdc7df561692939d3b4c674ff6c7b5.jpg",
    "ingredients": [
      "4 cups shredded Waterleaves",
      "2 cups shredded Pumpkin leaves (Ugu)",
      "1 kg assorted meats and Stockfish",
      "1 cup palm oil",
      "3 tbsp ground crayfish",
      "2 bouillon cubes",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Cook the meats and stockfish with minimal water until very soft.",
      "Add the palm oil, crayfish, pepper, and bouillon cubes to the boiling meat.",
      "Add the waterleaves and cook for 3 minutes while stirring.",
      "Add the pumpkin leaves (Ugu) and stir properly.",
      "Allow to simmer for 2-3 minutes, ensuring the vegetables remain green and crunchy, then serve.",
      "Edikang Ikong is often enjoyed with a side of fufu, pounded yam, or rice."
    ],
    "category": "Soup"
  },
  {
    "id": "110",
    "name": "Pepper-Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "low-fat",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/1200x/6a/06/72/6a0672a2ce5888266a5a16e942a2afa8.jpg",
    "ingredients": [
      "1 kg Catfish, Goat meat, beef or protein of choice",
      "2 tbsp Pepper-soup spice mix",
      "1 tbsp ground crayfish",
      "2 tbsp chopped scent leaves or Utazi",
      "1 onion, chopped",
      "Fresh Habanero peppers, blended",
      "2 bouillon cubes",
      "Salt to taste"
    ],
    "instructions": [
      "Place the meat or fish in a pot and add enough water to cover it.",
      "Add the chopped onions, pepper-soup spices, crayfish, and bouillon cubes.",
      "Cook until the meat is tender (if using fish, be careful not to overcook).",
      "Add the fresh blended peppers and salt to taste.",
      "Stir in the chopped scent leaves or Utazi and simmer for 2 minutes before serving hot.",
      "Pepper-soup is often enjoyed on its own or with a side of boiled yams, rice or plantains."
    ],
    "category": "Soup"
  },
  {
    "id": "111",
    "name": "Native Rice",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 45,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/ed/d8/20/edd820024ac415f2814540f059d7114d.jpg",
    "ingredients": [
      "3 cups parboiled rice",
      "1 cup palm oil",
      "1 large onion, sliced",
      "3 tbsp ground crayfish",
      "1/2 cup locust beans (Iru/Ogiri)",
      "Dried fish and Ponmo, chopped",
      "2 bouillon cubes",
      "Fresh peppers, blended"
    ],
    "instructions": [
      "Heat the palm oil in a pot for 2 minutes (do not bleach).",
      "Sauté the onions and locust beans until fragrant.",
      "Add the blended peppers, crayfish, dried fish, and ponmo; cook for 5 minutes.",
      "Add enough water or stock to cook the rice and bring to a boil.",
      "Stir in the rice and bouillon cubes, cover, and cook until the rice is soft and water is dried up.",
      "Fluff the rice with a fork and serve with your choice of protein."
    ],
    "category": "Lunch"
  },
  {
    "id": "112",
    "name": "Native Spaghetti",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/58/4b/a7/584ba76c38c873459d93e7643004db5b.jpg",
    "ingredients": [
      "1 pack Spaghetti",
      "1/2 cup palm oil",
      "1/2 cup locust beans (Iru)",
      "2 tbsp ground crayfish",
      "1 cup smoked fish or dried prawns",
      "1 onion, sliced",
      "Blended pepper mix (Scotch bonnet and Bell peppers)",
      "2 bouillon cubes"
    ],
    "instructions": [
      "Boil the spaghetti until almost tender, drain, and set aside.",
      "Heat palm oil and fry the onions and locust beans for 2 minutes.",
      "Add the pepper mix and fry until the oil separates from the sauce.",
      "Stir in the crayfish, smoked fish, and bouillon cubes.",
      "Add the cooked spaghetti, toss thoroughly to coat in the sauce, and simmer for 3-5 minutes.",
      "Serve hot with a side of fried plantains or a simple salad."
    ],
    "category": "Dinner"
  },
  {
    "id": "113",
    "name": "Editan Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "keto-friendly"
    ],
    "image": "https://i.pinimg.com/736x/dc/cc/50/dccc507a53266f8b0b149e44135ee6fb.jpg",
    "ingredients": [
      "4 cups shredded Editan leaves",
      "2 cups shredded Waterleaves",
      "1 kg assorted meat and Stockfish",
      "2 cups periwinkles",
      "1.5 cups palm oil",
      "4 tbsp ground crayfish",
      "Fresh peppers and 2 bouillon cubes"
    ],
    "instructions": [
      "Wash the shredded Editan leaves with hot water and salt to reduce bitterness.",
      "Cook meats and stockfish until tender with seasoning.",
      "Add palm oil, crayfish, pepper, and periwinkles to the pot; simmer for 5 minutes.",
      "Add the waterleaves and cook for 3 minutes.",
      "Stir in the Editan leaves, simmer for 5-10 minutes on low heat, and serve.",
      "Editan soup is traditionally enjoyed with fufu, pounded yam, or garri."
    ],
    "category": "Soup"
  },
  {
    "id": "114",
    "name": "Amala and Ewedu",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "vegan-option",
      "low-fat"
    ],
    "image": "https://i.pinimg.com/736x/e0/62/9b/e0629bb19f369912998562a7b75e7941.jpg",
    "ingredients": [
      "2 cups Yam flour (Elubo)",
      "2 cups grated Ewedu leaves",
      "1 tsp Iru (Locust beans)",
      "1 tbsp ground crayfish",
      "1/2 tsp Kaun (Potash) - optional for texture",
      "Boiling water",
      "Salt and bouillon to taste"
    ],
    "instructions": [
      "For Ewedu: Boil a small amount of water, add potash (if using) and Ewedu leaves; cook until soft.",
      "Blend the cooked leaves or use a short broom (Ijabe) to whisk until smooth.",
      "Add crayfish, iru, and bouillon; simmer for 2 minutes and set aside.",
      "For Amala: Bring water to a boil in a pot, then reduce heat.",
      "Slowly add yam flour while whisking vigorously with a wooden spatula until smooth and firm.",
      "Serve Amala with Ewedu soup and your choice of protein (like Gbegiri or meat stew)."
    ],
    "category": "Dinner"
  },
  {
    "id": "115",
    "name": "Efo Riro",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "low-carb"
    ],
    "image": "https://i.pinimg.com/1200x/7e/4f/99/7e4f996e0c5fd99c5115460361b7289d.jpg",
    "ingredients": [
      "4 cups chopped Spinach (Efo Tete)",
      "1 cup palm oil",
      "1 cup blended rough pepper mix (Tatase and Shombo)",
      "1/2 cup locust beans (Iru)",
      "1 kg assorted meats, Ponmo, and Smoked fish",
      "3 tbsp ground crayfish",
      "2 bouillon cubes and Salt"
    ],
    "instructions": [
      "Heat palm oil in a pot and fry the onions and iru.",
      "Add the blended pepper mix and fry until the water evaporates and oil floats.",
      "Add the cooked meats, fish, crayfish, and seasoning cubes; simmer for 5 minutes.",
      "Blanch the spinach in hot water, squeeze out excess liquid, and add to the pot.",
      "Stir well and cook for 2-3 minutes to keep the vegetables fresh.",
      "Serve hot with fufu, pounded yam, or rice."
    ],
    "category": "Soup"
  },
  {
    "id": "116",
    "name": "Ofe-Nsala (White Soup)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 35,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/8c/97/a2/8c97a22c1363b89ed83cd6fa8a9e61fb.jpg",
    "ingredients": [
      "1 kg Catfish or Fresh fish",
      "2 slices of Yam or 3 tbsp Cocoyam paste (thickener)",
      "2 tbsp ground Ogiri Okpei",
      "1 tbsp ground Uziza seeds",
      "A handful of Utazi leaves, shredded",
      "2 bouillon cubes",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Boil the yam/cocoyam until soft and pound into a smooth paste.",
      "In a pot, season the fish with salt and bouillon; add water and bring to a boil.",
      "Add the Ogiri Okpei, ground Uziza, and peppers.",
      "Dissolve the thickener (yam paste) into the boiling pot and stir until the soup thickens.",
      "Add the shredded Utazi leaves, simmer for 3 minutes, and serve.",
      "Ofe-Nsala is traditionally enjoyed with pounded yam or fufu."
    ],
    "category": "Soup"
  },
  {
    "id": "117",
    "name": "Banga Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/1200x/b4/41/b7/b441b74f7335e11520beec74f3b7aacd.jpg",
    "ingredients": [
      "1 kg Banga (Palm fruit) or 1 tin Banga concentrate",
      "1 kg Fresh fish or assorted meat",
      "2 tbsp Banga spice mix",
      "1 Beletiete leaf or Scent leaf",
      "1 stick Oburunbebe",
      "1/2 cup crushed dried prawns",
      "Salt and Pepper to taste"
    ],
    "instructions": [
      "Extract palm fruit juice by boiling and pounding the fruits (or dilute the concentrate).",
      "Boil the palm fruit extract until it starts to thicken and oil appears on top.",
      "Add the Banga spices, Oburunbebe stick, pepper, and dried prawns.",
      "Add the fish or cooked meats and simmer until the soup reaches your desired thickness.",
      "Add the leaves, simmer for 2 minutes, and remove the Oburunbebe stick before serving.",
      "Banga soup is traditionally enjoyed with starch (like fufu) or rice."
    ],
    "category": "Soup"
  },
  {
    "id": "118",
    "name": "Ekpang Nkukwo",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/1200x/78/33/22/7833221f834ad3a010a9708929a63ca6.jpg",
    "ingredients": [
      "4 cups grated Cocoyam and Water yam mix",
      "Cocoyam leaves or Pumpkin leaves for wrapping",
      "1 kg assorted meat, dried fish, and periwinkles",
      "1 cup palm oil",
      "4 tbsp ground crayfish",
      "1/2 cup chopped Scent leaves",
      "3 bouillon cubes and Salt"
    ],
    "instructions": [
      "Oil the bottom of a large pot and layer with cleaned periwinkles.",
      "Scoop a small amount of the grated yam mix into a leaf and roll it up tightly.",
      "Arrange the rolls in the pot in circles until the mix is finished.",
      "Add the meat, fish, crayfish, pepper, and bouillon cubes; pour boiling water over it.",
      "Cook on medium heat without stirring for 15 minutes, then add palm oil and scent leaves; simmer until thickened.",
    ],
    "category": "Dinner"
  },
  {
    "id": "119",
    "name": "Abacha (African Salad)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 30,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/35/27/d0/3527d08eb58b1a455bfced17c33c82b9.jpg",
    "ingredients": [
      "3 cups dried Abacha (shredded cassava)",
      "1 cup Ugba (oil bean seeds)",
      "1 cup palm oil",
      "1 tsp Ngu or Potash water",
      "2 tbsp ground crayfish",
      "1 tsp ground Ehuru (African nutmeg)",
      "1 tbsp Ogiri (fermented melon paste)",
      "Sliced Garden eggs and Utazi leaves",
      "Fried fish or Ponmo for serving",
      "Salt and dry pepper to taste"
    ],
    "instructions": [
      "Soak the dried Abacha in cold water for 10 minutes until soft, then drain and set aside.",
      "In a large bowl, mix palm oil and potash water/Ngu; stir until it forms a thick yellow paste.",
      "Add the ground crayfish, pepper, Ehuru, Ogiri, and salt; stir thoroughly.",
      "Add the Ugba and the drained Abacha to the paste and mix well until every strand is coated.",
      "Garnish with sliced garden eggs, onions, and Utazi leaves; serve with fried fish.",
      "Abacha is a popular street food and is often enjoyed as a light meal or snack."
    ],
    "category": "Snack"
  },
  {
    "id": "120",
    "name": "Moi Moi (Steamed Bean Pudding)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "low-fat",
      "high-protein"
    ],
    "image": "https://i.pinimg.com/1200x/6d/a4/51/6da451eff7a08e2067f1ef5a7cb62e96.jpg",
    "ingredients": [
      "3 cups peeled brown or black-eyed beans",
      "1/2 cup vegetable oil",
      "3 large red bell peppers (Tatashe)",
      "2 scotch bonnet peppers",
      "1 large onion",
      "2 tbsp ground crayfish",
      "3 boiled eggs or flaked fish (fillings)",
      "2 bouillon cubes",
      "Salt to taste"
    ],
    "instructions": [
      "Blend the peeled beans with peppers and onions until perfectly smooth.",
      "Add vegetable oil, crayfish, bouillon cubes, and salt to the batter; mix thoroughly.",
      "Slowly add warm water to the batter until it reaches a medium-thin consistency.",
      "Scoop the mix into leaves, foil containers, or plastic cups, adding a piece of egg or fish to each.",
      "Steam in a pot with a little water at the bottom for 45-60 minutes until firm.",
      "Allow to cool slightly before unmolding and serving.",
      "Moi Moi can be enjoyed on its own or as a side dish with rice or bread."
    ],
    "category": "Lunch"
  },
  {
    "id": "121",
    "name": "Okra Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 25,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "keto-friendly"
    ],
    "image": "https://i.pinimg.com/1200x/31/af/77/31af7766796ad1d84baca6e115d653b7.jpg",
    "ingredients": [
      "3 cups chopped Okra",
      "1/2 cup palm oil",
      "1 kg assorted meat and Shaki (tripe)",
      "1 cup Shrimps and Smoked fish",
      "2 tbsp ground crayfish",
      "1 tbsp Locust beans (Iru)",
      "Fresh pepper mix (roughly blended)",
      "A handful of chopped Spinach or Ugu"
    ],
    "instructions": [
      "Boil the meats and shaki until tender, keeping about 1 cup of stock in the pot.",
      "Add the palm oil, iru, pepper mix, and crayfish; simmer for 5 minutes.",
      "Add the chopped okra and stir vigorously to build up the 'draw' (viscosity).",
      "Add the shrimps and smoked fish; cook for 3 minutes.",
      "Stir in the spinach or Ugu, simmer for 1 minute, and turn off the heat.",
      "Okra soup is traditionally enjoyed with fufu, pounded yam, or garri."
    ],
    "category": "Soup"
  },
  {
    "id": "122",
    "name": "Nkwobi",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "low-carb"
    ],
    "image": "https://i.pinimg.com/1200x/36/0d/3a/360d3a041c2629b85274ac2d1c86d14c.jpg",
    "ingredients": [
      "1 kg Cow foot (cut into chunks)",
      "1 cup palm oil",
      "1 tsp edible Potash (Akanwu)",
      "2 tbsp ground crayfish",
      "1 tbsp ground Ehuru",
      "2 tbsp Ugba (optional)",
      "Habenero pepper (blended)",
      "Onion rings and Utazi leaves for garnish"
    ],
    "instructions": [
      "Pressure cook the cow foot with salt and onions until very tender, then drain excess stock.",
      "In a separate pot, mix palm oil and potash water until a thick yellow sauce forms.",
      "Add the crayfish, pepper, Ehuru, and Ugba into the sauce and stir.",
      "Add the cooked cow foot to the sauce and mix until every piece is well coated.",
      "Heat slightly if desired, then serve in a wooden bowl garnished with onion rings and Utazi.",
        "Nkwobi is a popular Nigerian delicacy often enjoyed as a late-night snack or appetizer."
    ],
    "category": "Snack"
  },
  {
    "id": "123",
    "name": "Boli and Fish",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/c2/ef/04/c2ef04c46957ec427c3c4927ccde50fa.jpg",
    "ingredients": [
      "3 ripe but firm Plantains",
      "1 whole Mackerel (Titus fish)",
      "1/2 cup palm oil or vegetable oil",
      "2 tbsp blended dry pepper",
      "1 onion, sliced",
      "Salt and bouillon to taste"
    ],
    "instructions": [
      "Peel the plantains and grill/roast them over charcoal or in an oven at 200°C until golden brown.",
      "Clean the fish, score the sides, and rub with a mix of oil, pepper, and salt.",
      "Grill the fish alongside the plantains until fully cooked and charred at the edges.",
      "Make a quick side sauce by sautéing onions and peppers in oil for 5 minutes.",
      "Serve the roasted plantain and fish hot with the pepper sauce.",
        "Boli and Fish is a beloved Nigerian street food, perfect for a quick meal or snack."
    ],
    "category": "Snack"
  },
  {
    "id": "124",
    "name": "Oha Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/43/38/6a/43386ae2ef29ab41ead9ba3887f111dd.jpg",
    "ingredients": [
      "1 bunch fresh Oha leaves",
      "4 tbsp Cocoyam paste (thickener)",
      "1 kg assorted meat and Stockfish",
      "1 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tbsp Ogiri Igbo",
      "2 tbsp ground Uziza seeds",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Boil the meats and stockfish until tender, ensuring you have enough stock left.",
      "Add the palm oil, crayfish, and blended peppers; cook for 5-10 minutes.",
      "Stir in the cocoyam paste (in small lumps) and allow it to dissolve completely to thicken the soup.",
      "Add the Ogiri Igbo and Uziza seeds; simmer for 3 minutes.",
      "Tear the Oha leaves by hand (do not use a knife) into the pot, stir, and simmer for 2 minutes before serving.",
        "Oha soup is traditionally enjoyed with fufu, pounded yam, or garri."
    ],
    "category": "Soup"
  },
  {
    "id": "125",
    "name": "Yam Porridge (Asaro)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 45,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegan-option"
    ],
    "image": "https://i.pinimg.com/1200x/61/52/f1/6152f161406f4a62e31ff1cf4611a385.jpg",
    "ingredients": [
      "1 medium tuber of Yam, peeled and cubed",
      "1/2 cup palm oil",
      "1 large onion, chopped",
      "1 cup blended pepper mix (Bell peppers and Scotch bonnet)",
      "2 tbsp ground Crayfish",
      "1 smoked fish, deboned",
      "Fresh green vegetables (spinach or ugu)",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Place the yam cubes in a pot with enough water to cover them and bring to a boil.",
      "Add the blended pepper mix, onions, crayfish, and smoked fish once the yam is halfway soft.",
      "Pour in the palm oil and add seasoning cubes; cover and cook until the yam is very soft.",
      "Use a wooden spoon to mash some of the yam cubes to create a thick, creamy sauce.",
      "Add the green vegetables, stir well, simmer for 2 minutes, and serve hot.",
        "Yam porridge is a comforting Nigerian dish that can be enjoyed on its own or with a side of fried plantains."
    ],
    "category": "Breakfast"
  },
  {
    "id": "126",
    "name": "Tuwo Shinkafa and Miyan Kuka",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 55,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "low-fat"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Tuwo_Shinkafa_with_Mia_Kuka_and_Beef.jpg",
    "ingredients": [
      "2 cups soft rice (specifically for Tuwo)",
      "1/2 cup Kuka powder (dried baobab leaves)",
      "1 kg beef and dried fish",
      "1/2 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tbsp Locust beans (Dawa-dawa)",
      "Dry ginger and garlic powder",
      "Salt and dry pepper to taste"
    ],
    "instructions": [
      "For Tuwo: Boil the rice with plenty of water until it is overcooked and very soft, then mash with a wooden spatula until it forms a smooth dough.",
      "For Miyan Kuka: Boil the meat and fish with onions and seasoning until tender.",
      "Add the palm oil, crayfish, dawa-dawa, and peppers; simmer for 10 minutes.",
      "Reduce the heat and slowly whisk in the Kuka powder to avoid lumps until the soup is smooth.",
      "Simmer for another 5 minutes and serve with the molded rice balls.",
          "Tuwo Shinkafa with Miyan Kuka is a traditional Hausa dish enjoyed in Northern Nigeria and is often served during special occasions."
    ],
    "category": "Dinner"
  },
  {
    "id": "127",
    "name": "Gbegiri (Bean Soup)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "high-protein"
    ],
    "image": "https://i.pinimg.com/1200x/73/90/ee/7390ee17564dd91b3b2b1d071a07f827.jpg",
    "ingredients": [
      "2 cups peeled brown beans",
      "1/2 cup palm oil",
      "1 tbsp Locust beans (Iru)",
      "2 tbsp ground Crayfish",
      "1 tbsp blended pepper",
      "Beef or smoked fish (optional)",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Boil the peeled beans until they are extremely soft and mushy.",
      "Sieve the beans or blend them to achieve a very smooth, watery paste.",
      "Pour the bean paste into a pot, add palm oil, iru, crayfish, and pepper.",
      "Add the cooked meat or fish and simmer on medium heat for 15-20 minutes until the oil blends with the soup.",
      "Adjust seasoning and serve, traditionally with Ewedu and Amala (Abula).",
          "Gbegiri is a beloved Nigerian soup that is often enjoyed as part of a larger meal, especially in the southwestern region of Nigeria."
    ],
    "category": "Soup"
  },
  {
    "id": "128",
    "name": "Fried Yam and Akara",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/41/34/16/4134161429017fd76920beb28397b88d.jpg",
    "ingredients": [
      "2 cups peeled and blended beans",
      "1/2 tuber of Yam, sliced into sticks",
      "1 large onion, finely chopped",
      "2 scotch bonnet peppers, chopped",
      "Vegetable oil for deep frying",
      "Salt to taste"
    ],
    "instructions": [
      "For Akara: Whisk the blended beans vigorously until light and airy, then fold in onions, peppers, and salt.",
      "Heat oil and scoop the bean batter into the oil in small balls; fry until golden brown.",
      "For Fried Yam: Soak the yam sticks in salted water for 5 minutes, then drain.",
      "Deep fry the yam in hot oil until the outside is crunchy and the inside is soft.",
      "Serve both hot as a classic Nigerian breakfast or street food snack.",
          "Fried Yam and Akara is a popular Nigerian breakfast combination that can also be enjoyed as a snack throughout the day."
    ],
    "category": "Breakfast"
  },
  {
    "id": "129",
    "name": "Miyan Tushe",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/1200x/98/a5/a7/98a5a717700c377be5eabbd6c246fd32.jpg",
    "ingredients": [
      "2 cups Pumpkin puree",
      "1/2 cup ground Roasted Peanuts",
      "1 kg assorted meats",
      "1/2 cup Palm oil",
      "2 tbsp ground Crayfish",
      "1 tbsp Dawa-dawa (Locust beans)",
      "Fresh Ginger and Garlic, minced",
      "Handful of Yakuwa or Sorrel leaves",
      "Salt and Pepper to taste"
    ],
    "instructions": [
      "Boil the meats with ginger, garlic, onions, and seasoning until very tender.",
      "Add the pumpkin puree and palm oil to the boiling meat stock; stir well.",
      "Stir in the ground roasted peanuts and dawa-dawa; allow the soup to thicken for 10 minutes.",
      "Add the crayfish and fresh peppers; simmer for another 5 minutes.",
      "Add the chopped Yakuwa leaves, simmer for 2 minutes, and serve with Tuwo Shinkafa.",
          "Miyan Tushe is a traditional Hausa soup that is rich, flavorful, and often enjoyed with rice or Tuwo Shinkafa."
    ],
    "category": "Soup"
  },
  {
    "id": "130",
    "name": "Ofe Akwu (Banga Rice Sauce)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/5e/08/1f/5e081f3b7486353040257100ab57a6ef.jpg",
    "ingredients": [
      "1 kg Palm fruit (or concentrate)",
      "1 kg Beef or Goat meat",
      "2 Smoked fish, deboned",
      "1 tbsp Ogiri Igbo",
      "2 tbsp ground Crayfish",
      "A handful of Scent leaves, chopped",
      "A handful of sliced Uziza leaves",
      "Fresh Habanero peppers, blended",
      "Salt and bouillon cubes"
    ],
    "instructions": [
      "Extract the palm fruit juice and boil in a large pot until it thickens and oil starts to float.",
      "Add the cooked meat, meat stock, smoked fish, and Ogiri Igbo.",
      "Add the ground crayfish and blended peppers; stir and cook for 10-15 minutes.",
      "Add the sliced Uziza and Scent leaves; allow to simmer for 3 minutes to infuse the aroma.",
      "Serve hot, traditionally over white boiled rice.",
          "Ofe Akwu is a delicious Nigerian dish that is often enjoyed during special occasions and is known for its rich, savory flavor."
    ],
    "category": "Soup"
  },
  {
    "id": "131",
    "name": "Ukwa (African Breadfruit)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "high-protein"
    ],
    "image": "https://i.pinimg.com/736x/48/54/53/485453f4eb83fcc10764af7ace118185.jpg",
    "ingredients": [
      "4 cups fresh or dried Ukwa",
      "1 tsp edible Potash (Akanwu)",
      "1/2 cup Palm oil",
      "2 tbsp ground Crayfish",
      "2 pieces of dry Fish",
      "Fresh peppers, blended",
      "Bitter leaves (optional)",
      "Salt to taste"
    ],
    "instructions": [
      "Wash the Ukwa thoroughly and place in a large pot with enough water to cover it.",
      "Add the potash and boil until the Ukwa seeds are very soft (this can take over an hour).",
      "Add the palm oil, crayfish, dry fish, and pepper once the seeds are tender.",
      "Stir well and cook until the liquid thickens into a porridge consistency.",
      "Add salt and a few bitter leaves if desired, simmer for 5 minutes, and serve.",
          "Ukwa is a traditional Nigerian dish that is often enjoyed as a hearty breakfast or lunch, especially in the southeastern region of Nigeria."
    ],
    "category": "Lunch"
  },
  {
    "id": "132",
    "name": "Garden Egg Sauce",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 30,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegetarian-option"
    ],
    "image": "https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/156042232_3232377240196303_6496821421144356612_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NgiyQtcwO4wQ7kNvwEcGYJP&_nc_oc=AdryW9IqzYcDkecM5fQyF1LbP5qlq2go3Jkbcaj0mhObCF2dRJurQRIpc0bttQ2KU44&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=KHlKQiBs5qrUvKP6BD7dbA&_nc_ss=7a389&oh=00_Af0YKzda9c6Jzi3WFODWZsMr0r3kKvQ8UMZlXWyeBlOgCQ&oe=69FC4DA0",
    "ingredients": [
      "8-10 large Garden Eggs (white or green)",
      "1/2 cup Palm oil",
      "1 large Onion, chopped",
      "1 cup Smoked fish or boiled Mackerel",
      "2 tbsp ground Crayfish",
      "Blended pepper and tomatoes",
      "Salt and bouillon to taste"
    ],
    "instructions": [
      "Boil the garden eggs for 10 minutes, peel off the skin, and mash them roughly with a fork.",
      "Heat palm oil in a pan and sauté the onions for 2 minutes.",
      "Add the blended pepper and tomato mix; fry until the water evaporates.",
      "Stir in the mashed garden eggs, crayfish, and fish.",
      "Season with salt and bouillon, simmer for 5-7 minutes, and serve with boiled yam or plantain.",
          "Garden Egg Sauce is a popular Nigerian dish that is often enjoyed as a light meal or side dish, especially in the southern regions of Nigeria."
    ],
    "category": "Dinner"
  },
  {
    "id": "133",
    "name": "Fisherman Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 40,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "low-carb"
    ],
    "image": "https://i.pinimg.com/1200x/48/3b/ab/483babcce70224ab98e129ddcc615f60.jpg",
    "ingredients": [
      "1 kg Fresh Fish (Red Snapper or Catfish)",
      "1 cup fresh Prawns and Crab",
      "1/2 cup Palm oil",
      "2 tbsp Cocoyam paste or pounded Yam (thickener)",
      "2 tbsp ground Crayfish",
      "Handful of fresh Basil or Scent leaves",
      "Fresh peppers (blended yellow peppers preferred)",
      "Salt and bouillon to taste"
    ],
    "instructions": [
      "Boil a small amount of water with peppers, crayfish, and palm oil for 5 minutes.",
      "Add the thickener (cocoyam paste) in small lumps and allow to dissolve into the stock.",
      "Carefully add the fresh fish, prawns, and crabs; do not stir too much to avoid breaking the fish.",
      "Simmer on medium heat for 10-15 minutes until the seafood is cooked and the soup is thickened.",
      "Add the scent leaves, adjust salt, and simmer for 2 more minutes before serving.",
          "Fisherman Soup is a delicious Nigerian seafood soup that is often enjoyed with fufu, pounded yam, or rice."
    ],
    "category": "Soup"
  },
  {
    "id": "134",
    "name": "Ofe Owerri",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 55,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/98/5f/89/985f89a5533436000cbb1b7a88911d07.jpg",
    "ingredients": [
      "1 kg assorted meat (Beef, Ponmo, Shaki)",
      "2 cups shredded Uziza and Ugu leaves",
      "1 cup Oha leaves (optional)",
      "4 tbsp Cocoyam paste (thickener)",
      "1/2 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tbsp Ogiri Igbo",
      "Smoked fish and Stockfish",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Boil the assorted meats and stockfish with seasoning until tender.",
      "Add the palm oil and crayfish; cook for 10 minutes.",
      "Stir in the cocoyam paste in small lumps and allow to dissolve to thicken the soup.",
      "Add the Ogiri Igbo and fresh peppers, then stir well.",
      "Add the sliced Uziza and Ugu leaves, simmer for 3-5 minutes, and serve with Fufu or Pounded Yam.",
          "Ofe Owerri is a rich and flavorful Nigerian soup that is often enjoyed during special occasions and is known for its unique combination of leafy greens and meats."
    ],
    "category": "Soup"
  },
  {
    "id": "135",
    "name": "Achara Soup",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://cdn.guardian.ng/wp-content/uploads/2022/04/Ofe-Okazi.-Photo-Sisi-Jemimah-897x598.jpg",
    "ingredients": [
      "2 cups peeled and sliced Achara (Elephant Grass)",
      "1/2 cup Akpuruakpu Egusi (molded melon seeds)",
      "1 kg assorted meat and Stockfish",
      "1 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tsp Ogiri",
      "Handful of sliced Uziza leaves",
      "Fresh yellow peppers and Salt"
    ],
    "instructions": [
      "Boil the meat and stockfish until soft, keeping the stock.",
      "Add the palm oil, crayfish, and peppers; bring to a boil.",
      "Add the molded Egusi balls and Achara slices; cook for 15 minutes without stirring too much.",
      "Add the Ogiri and Uziza leaves for flavor.",
      "Simmer for another 5 minutes until the Achara is tender and the flavors are fused.",
          "Achara Soup is a traditional Nigerian dish that is often enjoyed with fufu or pounded yam and is known for its unique use of elephant grass as a key ingredient."
    ],
    "category": "Soup"
  },
  {
    "id": "136",
    "name": "Dambu Nama",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 120,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "keto-friendly",
      "high-protein"
    ],
    "image": "https://i.pinimg.com/1200x/e7/16/1b/e7161b6ae884a91c341bf78ab194dd79.jpg",
    "ingredients": [
      "1 kg Beef (flank or brisket)",
      "2 tbsp Yaji (Suya spice mix)",
      "1 tsp Garlic and Ginger powder",
      "Vegetable oil for frying",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Boil the beef with seasoning and enough water until it is extremely tender and falling apart.",
      "Drain the water and pound the meat in a mortar or shred with a fork into fine threads.",
      "Season the shredded meat with Yaji spice, ginger, and garlic.",
      "Heat oil in a pan and deep-fry the meat threads in batches until golden and crunchy.",
      "Drain on paper towels and store or serve as a high-protein snack.",
          "Dambu Nama is a traditional Nigerian dish that is often enjoyed as a snack or appetizer, especially in the northern regions of Nigeria. It is known for its spicy and flavorful taste."
    ],
    "category": "Snack"
  },
  {
    "id": "137",
    "name": "Ofe Onugbu (Bitter Leaf Soup)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/1200x/26/7f/06/267f06e49fd14c5d111ccaa63b5bf963.jpg",
    "ingredients": [
      "1 cup washed Bitter leaves (must be thoroughly washed to remove bitterness)",
      "4-5 medium Cocoyams (thickener)",
      "1 kg assorted meat and Stockfish",
      "1 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tbsp Ogiri Igbo",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Boil the cocoyams until soft, peel, and pound into a smooth paste.",
      "Cook the meats and stockfish until tender, then add the palm oil and crayfish.",
      "Add the cocoyam paste in small lumps to the boiling stock and stir until dissolved and the soup thickens.",
      "Add the Ogiri Igbo and peppers; stir well to combine.",
      "Add the washed bitter leaves and simmer for 10 minutes until the leaves are tender and the flavors are fused.",
          "Ofe Onugbu is a traditional Nigerian soup that is often enjoyed with fufu or pounded yam and is known for its unique bitter flavor balanced by the richness of the meat and thickener."
    ],
    "category": "Soup"
  },
  {
    "id": "138",
    "name": "Ewa Aganyin",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 90,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "vegan-option"
    ],
    "image": "https://i.pinimg.com/736x/15/86/a0/1586a0c67e1d516c23306d569e8b8285.jpg",
    "ingredients": [
      "3 cups Honey beans or Brown beans",
      "2 cups Palm oil",
      "1 cup dried Bell peppers (Tatashe)",
      "1/2 cup dried Chili peppers (Shombo)",
      "2 large onions, thinly sliced",
      "1 tbsp ground Crayfish",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Boil the beans with salt and water until they are extremely soft and can be easily mashed.",
      "For the sauce: Soak dried peppers in water, then blend with one onion until roughly smooth (do not add much water).",
      "Heat palm oil in a pot until it starts to smoke slightly (bleaching), then add the sliced onions and fry until they turn dark brown.",
      "Add the pepper blend and fry on low heat for 30-40 minutes, stirring constantly until the sauce is very dark and gritty.",
      "Add crayfish and seasoning; serve the dark sauce over the mashed beans.",
          "Ewa Aganyin is a popular Nigerian dish that is often enjoyed as a hearty breakfast or lunch, especially in the southwestern region of Nigeria. It is known for its unique combination of soft beans and spicy, flavorful sauce."
    ],
    "category": "Lunch"
  },
  {
    "id": "139",
    "name": "Ofe Achii",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 45,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free"
    ],
    "image": "https://i.pinimg.com/736x/02/bd/9e/02bd9ec00ba59255e928938fc56fa5da.jpg",
    "ingredients": [
      "2 tbsp ground Achii seeds (thickener)",
      "1 kg assorted meat and dried fish",
      "1/2 cup palm oil",
      "1 tbsp ground Osu (optional)",
      "2 tbsp ground Crayfish",
      "A handful of Uziza and Ugu leaves",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Season and boil the meats and fish until tender.",
      "Add palm oil, crayfish, and peppers to the pot and simmer for 5 minutes.",
      "Whisk the ground Achii seeds with a little cold water or oil to prevent lumps, then stir into the pot.",
      "Allow the soup to thicken on medium heat for about 10 minutes.",
      "Add the Uziza and Ugu leaves, simmer for 2 minutes, and serve hot with Fufu.",
          "Ofe Achii is a traditional Nigerian soup that is often enjoyed with fufu or pounded yam and is known for its unique thickening agent made from ground Achii seeds."
    ],
    "category": "Soup"
  },
  {
    "id": "140",
    "name": "Adalu (Beans and Corn)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegetarian-option"
    ],
    "image": "https://www.myactivekitchen.com/wp-content/uploads/2025/01/adalu-ewa-alagbado-recipe-img-5.jpg",
    "ingredients": [
      "2 cups Brown beans",
      "1 cup Sweet corn or cooked fresh corn",
      "1/2 cup Palm oil",
      "1 large onion, chopped",
      "2 tbsp ground Crayfish",
      "1 cup blended pepper and tomato mix",
      "Smoked fish or Ponmo",
      "Salt and bouillon to taste"
    ],
    "instructions": [
      "Cook the beans in water until halfway soft.",
      "Add the corn and continue boiling until both the beans and corn are tender.",
      "In a separate pan, fry the onions and pepper mix in palm oil for 10 minutes.",
      "Pour the fried sauce into the beans and corn pot; add crayfish, smoked fish, and seasoning.",
      "Stir well and simmer on low heat for 10-15 minutes until the liquid has thickened into a pottage.",
          "Adalu is a traditional Nigerian dish that is often enjoyed as a hearty breakfast or lunch, especially in the southwestern region of Nigeria. It is known for its unique combination of beans and corn, creating a delicious and filling meal."
    ],
    "category": "Lunch"
  },
  {
    "id": "141",
    "name": "Ofe-Ugba",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 45,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "keto-friendly"
    ],
    "image": "https://i.pinimg.com/736x/b4/86/2c/b4862c2ac5ee59cebc6b6b2f949e7fe0.jpg",
    "ingredients": [
      "2 cups Ugba (Oil bean seeds, fermented)",
      "1 kg assorted meat and Stockfish",
      "1 cup palm oil",
      "2 tbsp ground Crayfish",
      "1 tsp Ogiri",
      "Handful of sliced Okra (as thickener)",
      "Fresh peppers and Salt to taste"
    ],
    "instructions": [
      "Cook the meats and stockfish until very soft.",
      "Add palm oil, crayfish, pepper, and Ogiri to the boiling stock.",
      "Add the sliced okra and cook for 5 minutes until it thickens the base slightly.",
      "Add the Ugba and stir thoroughly; allow to simmer for 10 minutes to let the flavors penetrate.",
      "Adjust seasoning and serve hot with Fufu or Pounded Yam.",
          "Ofe-Ugba is a traditional Nigerian soup that is often enjoyed with fufu or pounded yam and is known for its unique use of fermented oil bean seeds, which add a distinct flavor and texture to the dish."
    ],
    "category": "Soup"
  },
  {
    "id": "142",
    "name": "Plantain Porridge (Asaro Ede)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 35,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/736x/4d/6d/f4/4d6df4c8c4802273a25814b324c6f8c1.jpg",
    "ingredients": [
      "4 unripe Plantains, peeled and cubed",
      "1/2 cup palm oil",
      "1 cup chopped Spinach or Pumpkin leaves",
      "2 tbsp ground Crayfish",
      "Smoked fish or deboned dry fish",
      "1 onion, chopped",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Place the cubed plantains in a pot with enough water to cover them and bring to a boil.",
      "Add the onions, crayfish, smoked fish, and seasoning cubes.",
      "Pour in the palm oil once the plantains are halfway cooked.",
      "Allow it to cook until the plantains are soft and the sauce has thickened.",
      "Add the green vegetables, stir well, simmer for 2 minutes, and serve.",
          "Plantain Porridge is a comforting Nigerian dish that can be enjoyed on its own or with a side of fried plantains. It is a popular breakfast or lunch option in many Nigerian households."
    ],
    "category": "Breakfast"
  },
  {
    "id": "143",
    "name": "Okpa",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Hard",
    "dietary": [
      "gluten-free",
      "high-protein",
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/1200x/82/73/d9/8273d96515c5630042cf69a0738f9c80.jpg",
    "ingredients": [
      "3 cups Okpa flour (Bambara nut flour)",
      "1/2 cup Palm oil",
      "Warm water",
      "Fresh peppers, crushed",
      "Sliced Uziza leaves (optional)",
      "Salt to taste"
    ],
    "instructions": [
      "Sift the Okpa flour into a large bowl and add the palm oil.",
      "Rub the oil into the flour with your hands until the color is uniform (yellow).",
      "Slowly add warm water and whisk until you get a smooth, medium-thick batter without lumps.",
      "Add the crushed peppers, salt, and Uziza leaves; stir well.",
      "Pour into banana leaves or nylon pouches and boil in a large pot of water for 45-60 minutes until firm.",
          "Okpa is a traditional Nigerian dish that is often enjoyed as a breakfast or snack option, especially in the southeastern region of Nigeria. It is known for its unique flavor and dense, cake-like texture."
    ],
    "category": "Snack"
  },
  {
    "id": "144",
    "name": "Rice and Beans Combo",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 60,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "vegan-option",
      "high-fiber"
    ],
    "image": "https://i.pinimg.com/736x/e9/df/bc/e9dfbc30fc9cbcfb30f6d4d1c99196f5.jpg",
    "ingredients": [
      "2 cups parboiled rice",
      "1 cup brown or honey beans",
      "Water for boiling",
      "Salt to taste",
      "Served with: Fried pepper sauce, fish, or meat"
    ],
    "instructions": [
      "Pick the beans and wash thoroughly; place in a pot with water and boil until halfway soft.",
      "Wash the parboiled rice and add it to the pot of beans.",
      "Add more water if necessary to cover the mixture by about an inch and add salt.",
      "Cover the pot and cook on medium heat until both the rice and beans are tender and the water is fully absorbed.",
      "Fluff with a spoon and serve hot with a savory pepper sauce or stew.",
          "Rice and Beans Combo is a classic Nigerian dish that is often enjoyed as a hearty lunch or dinner. It is known for its simplicity and delicious combination of flavors, especially when served with a spicy pepper sauce."
    ],
    "category": "Dinner"
  },
  {
    "id": "145",
    "name": "Nigerian Beans (Ewa)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 50,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "high-protein",
      "vegan-option"
    ],
    "image": "https://i.pinimg.com/736x/61/e5/de/61e5de3813abdeb06a824ecf1f92b513.jpg",
    "ingredients": [
      "3 cups honey beans or brown beans",
      "1 large onion, chopped",
      "1/2 cup palm oil",
      "2 tbsp ground crayfish",
      "2 tbsp blended pepper mix",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Boil the beans with half of the chopped onions until they are very soft (add water as needed).",
      "In a separate small pot, heat the palm oil and sauté the remaining onions and pepper mix.",
      "Once the beans are soft, add the fried palm oil mixture, crayfish, and seasoning to the pot.",
      "Stir thoroughly and mash a small portion of the beans with a wooden spoon to create a thick consistency.",
      "Simmer for 5-10 minutes on low heat and serve with bread, fried plantain, rice or soaked garri.",
          "Nigerian Beans (Ewa) is a popular dish that can be enjoyed as a breakfast, lunch, or dinner option. It is known for its rich flavor and hearty texture, especially when served with a spicy pepper sauce or fried plantains."
    ],
    "category": "Lunch"
  },
  {
    "id": "146",
    "name": "Akamu / Ogi (Pap)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 10,
    "difficulty": "Medium",
    "dietary": [
      "gluten-free",
      "fermented",
      "vegetarian"
    ],
    "image": "https://i.pinimg.com/736x/d7/2b/60/d72b603a31e4bb60c03cc9488ea4e806.jpg",
    "ingredients": [
      "1/2 cup fermented corn paste (white or yellow)",
      "Boiling water (freshly boiled)",
      "Cold water (for mixing)",
      "Optional: Milk, Sugar, or Honey for topping"
    ],
    "instructions": [
      "Place the corn paste in a large bowl and use a spoon to break up any lumps.",
      "Add a small amount of cold water and stir until it forms a smooth, thick consistency (like heavy cream).",
      "Bring water to a rolling boil; once boiling, start pouring it slowly into the paste while stirring constantly in a circular motion.",
      "Continue stirring until the mixture thickens and changes from opaque to a slightly translucent, glossy finish.",
      "Adjust the thickness by adding more boiling water if needed; serve hot with evaporated milk and sugar alongside Akara or Moin Moin.",
          "Akamu, also known as Ogi or Pap, is a traditional Nigerian fermented cereal pudding that is often enjoyed as a breakfast dish. It is typically served with sweeteners and can be paired with savory snacks like Akara (bean cakes) or Moin Moin (steamed bean pudding)."
    ],
    "category": "Breakfast"
  },
  {
    "id": "147",
    "name": "Native Rice and Beans (Palm Oil Combo)",
    "country": "Nigeria",
    "continent": "Africa",
    "cookingTime": 65,
    "difficulty": "Easy",
    "dietary": [
      "gluten-free",
      "dairy-free"
    ],
    "image": "https://i.pinimg.com/1200x/59/f9/bd/59f9bd0c25f602af673a5fe74cd88df1.jpg",
    "ingredients": [
      "2 cups parboiled rice",
      "1 cup brown or honey beans",
      "1/2 cup palm oil",
      "1 large onion, sliced",
      "3 tbsp ground crayfish",
      "1 tbsp locust beans (Iru)",
      "2 tbsp blended scotch bonnet (Rodo)",
      "1 cup smoked fish or dried prawns",
      "Salt and bouillon cubes to taste"
    ],
    "instructions": [
      "Pick and wash the beans, then boil in plenty of water until about 70% soft.",
      "Wash the parboiled rice and add it to the pot of beans; add more water if necessary so the water level is about an inch above the mixture.",
      "Add the palm oil, sliced onions, blended pepper, crayfish, iru, and seasoning cubes directly into the pot.",
      "Stir gently to distribute the ingredients, then top with the smoked fish or dried prawns.",
      "Cover tightly and cook on medium-low heat until the rice and beans are perfectly soft and the liquid is completely dried up.",
      "Stir the pot thoroughly to incorporate the palm oil and aromatics settled at the bottom, then serve hot.",
          "Native Rice and Beans, also known as Palm Oil Combo, is a traditional Nigerian dish that is often enjoyed as a hearty lunch or dinner. It is known for its rich flavor and vibrant color, thanks to the generous use of palm oil and spices."
    ],
    "category": "Lunch"
  }
];

export const continents = [...new Set(recipes.map(r => r.continent))];
export const countries = [...new Set(recipes.map(r => r.country))];
export const cuisines = [...new Set(recipes.map(r => r.country))];
export const mealCategories: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Soup"];
export const difficulties = ["Easy", "Medium", "Hard"] as const;
export const dietaryOptions = ["vegetarian", "vegan", "gluten-free"] as const;