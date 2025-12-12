 import React, { Component } from "react";
import "./recipes.css";

// Extended recipe data with detailed information
const recipeData = {
  Vegetarian: [
    {
      id: 1,
      name: "Vegetable Biryani",
      time: "45 min",
      difficulty: "Medium",
      rating: "4.5",
      description:
        "A flavorful rice dish with mixed vegetables and aromatic spices.",
      ingredients: [
        "Basmati rice (2 cups)",
        "Mixed vegetables (carrots, peas, beans)",
        "Onions (2, thinly sliced)",
        "Tomatoes (3, chopped)",
        "Yogurt (1/2 cup)",
        "Spices (garam masala, turmeric, cumin)",
        "Mint leaves (handful)",
        "Coriander leaves (for garnish)",
        "Ghee (3 tbsp)",
      ],
      steps: [
        "Wash and soak basmati rice for 30 minutes",
        "Heat ghee in a large pot, sauté onions until golden brown",
        "Add chopped tomatoes and cook until soft",
        "Add mixed vegetables and spices, cook for 5 minutes",
        "Add yogurt and mix well",
        "Layer rice over vegetables, add 4 cups of water",
        "Cover and cook on low heat for 20 minutes",
        "Garnish with mint and coriander leaves before serving",
      ],
      servings: 4,
      calories: 350,
      cookTime: "45 minutes",
      prepTime: "15 minutes",
      author: "Chef Sarah",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      time: "30 min",
      difficulty: "Easy",
      rating: "4.7",
      description: "Marinated cottage cheese cubes grilled to perfection.",
      ingredients: [
        "Paneer (250g, cubed)",
        "Bell peppers (2, cubed)",
        "Onions (2, cubed)",
        "Yogurt (1 cup)",
        "Ginger-garlic paste (2 tsp)",
        "Spices (cumin, coriander, paprika)",
        "Lemon juice (2 tbsp)",
        "Oil (2 tbsp)",
        "Chat masala (for sprinkling)",
      ],
      steps: [
        "Cut paneer and vegetables into 1-inch cubes",
        "Mix yogurt with all spices and lemon juice",
        "Marinate paneer and vegetables for at least 1 hour",
        "Skewer alternately with paneer and vegetables",
        "Grill for 10-15 minutes until golden brown",
        "Sprinkle chat masala before serving",
        "Serve hot with mint chutney",
      ],
      servings: 3,
      calories: 280,
      cookTime: "15 minutes",
      prepTime: "15 minutes",
      author: "Chef Raj",
    },
    {
      id: 3,
      name: "Palak Paneer",
      time: "40 min",
      difficulty: "Medium",
      rating: "4.6",
      description: "Creamy spinach curry with soft paneer cubes.",
      ingredients: [
        "Paneer (200g, cubed)",
        "Spinach (500g, washed)",
        "Onions (2, chopped)",
        "Tomatoes (2, chopped)",
        "Ginger (1 inch)",
        "Garlic (4 cloves)",
        "Green chilies (2)",
        "Cream (2 tbsp)",
        "Spices (cumin, coriander, garam masala)",
        "Oil (3 tbsp)",
      ],
      steps: [
        "Blanch spinach in boiling water for 2 minutes",
        "Grind spinach with ginger, garlic, and green chilies",
        "Heat oil, sauté onions until golden",
        "Add tomatoes and cook until soft",
        "Add spinach puree and cook for 10 minutes",
        "Add paneer cubes and simmer for 5 minutes",
        "Add cream and mix gently",
        "Serve hot with naan or rice",
      ],
      servings: 4,
      calories: 320,
      cookTime: "20 minutes",
      prepTime: "20 minutes",
      author: "Chef Priya",
    },
    {
      id: 4,
      name: "Vegetable Curry",
      time: "35 min",
      difficulty: "Easy",
      rating: "4.3",
      description: "Mixed vegetables in rich tomato gravy.",
      ingredients: [
        "Mixed vegetables (potato, carrot, beans, peas)",
        "Onions (2, finely chopped)",
        "Tomatoes (3, pureed)",
        "Ginger-garlic paste (1 tbsp)",
        "Coconut milk (1/2 cup)",
        "Spices (turmeric, red chili, coriander)",
        "Oil (3 tbsp)",
        "Coriander leaves (for garnish)",
      ],
      steps: [
        "Heat oil, sauté onions until golden",
        "Add ginger-garlic paste, cook for 2 minutes",
        "Add tomato puree and spices, cook until oil separates",
        "Add vegetables and water, cook until tender",
        "Add coconut milk and simmer for 5 minutes",
        "Garnish with coriander leaves",
        "Serve with rice or bread",
      ],
      servings: 4,
      calories: 280,
      cookTime: "25 minutes",
      prepTime: "10 minutes",
      author: "Chef Anil",
    },
    {
    id: 5,
    name: "Aloo Gobi",
    time: "30 min",
    difficulty: "Easy",
    rating: "4.4",
    description: "Potato and cauliflower curry with spices.",
    ingredients: [
      "Potatoes (2, cubed)",
      "Cauliflower (1 medium, chopped)",
      "Onions (1, chopped)",
      "Tomatoes (2, chopped)",
      "Ginger-garlic paste (1 tsp)",
      "Spices: turmeric, cumin, coriander, chili powder",
      "Oil (3 tbsp)",
      "Coriander leaves (for garnish)"
    ],
    steps: [
      "Heat oil in a pan and sauté onions until golden.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add tomatoes and spices, cook until oil separates.",
      "Add potatoes and cauliflower, mix well.",
      "Cover and cook on low heat for 15-20 minutes until vegetables are tender.",
      "Garnish with coriander leaves and serve hot."
    ],
    servings: 4,
    calories: 270,
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    author: "Chef Meera"
  },
  {
    id: 6,
    name: "Chole Masala",
    time: "40 min",
    difficulty: "Medium",
    rating: "4.5",
    description: "Spicy chickpea curry served with rice or bread.",
    ingredients: [
      "Chickpeas (1 cup, soaked overnight)",
      "Onions (2, chopped)",
      "Tomatoes (3, chopped)",
      "Ginger-garlic paste (1 tbsp)",
      "Spices: cumin, coriander, garam masala, chili powder",
      "Oil (3 tbsp)",
      "Coriander leaves (for garnish)"
    ],
    steps: [
      "Boil chickpeas until soft and set aside.",
      "Heat oil and sauté onions until golden.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add tomatoes and spices, cook until oil separates.",
      "Add boiled chickpeas and 1 cup water, simmer for 10 minutes.",
      "Garnish with coriander leaves and serve hot."
    ],
    servings: 4,
    calories: 300,
    cookTime: "30 minutes",
    prepTime: "10 minutes",
    author: "Chef Ravi"
  }
  ],
  "Non-Veg": [
    {
    id: 1,
    name: "Chicken Biryani",
    time: "60 min",
    difficulty: "Medium",
    rating: "4.7",
    description: "Aromatic basmati rice cooked with spicy chicken.",
    ingredients: [
      "Basmati rice (2 cups)",
      "Chicken (500g, cut into pieces)",
      "Onions (2, sliced)",
      "Tomatoes (2, chopped)",
      "Yogurt (1/2 cup)",
      "Ginger-garlic paste (2 tsp)",
      "Spices: garam masala, turmeric, chili powder, cumin",
      "Mint and coriander leaves (handful)",
      "Ghee (3 tbsp)"
    ],
    steps: [
      "Wash and soak rice for 30 minutes.",
      "Heat ghee and sauté onions until golden brown.",
      "Add ginger-garlic paste, tomatoes, and spices; cook until oil separates.",
      "Add chicken and yogurt, cook for 15-20 minutes.",
      "Layer rice over chicken, sprinkle mint and coriander leaves.",
      "Cover and cook on low heat for 20 minutes until rice is done.",
      "Serve hot with raita."
    ],
    servings: 4,
    calories: 450,
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    author: "Chef Ali"
  },
  {
    id: 2,
    name: "Butter Chicken",
    time: "50 min",
    difficulty: "Medium",
    rating: "4.8",
    description: "Creamy tomato-based chicken curry.",
    ingredients: [
      "Chicken (500g, boneless)",
      "Butter (4 tbsp)",
      "Onions (2, chopped)",
      "Tomatoes (3, pureed)",
      "Cream (1/2 cup)",
      "Ginger-garlic paste (2 tsp)",
      "Spices: garam masala, chili powder, cumin",
      "Oil (2 tbsp)"
    ],
    steps: [
      "Marinate chicken with spices and a little yogurt for 1 hour.",
      "Heat butter and oil, sauté onions until golden.",
      "Add ginger-garlic paste and tomato puree, cook 5-7 minutes.",
      "Add chicken and cook until tender.",
      "Stir in cream and simmer for 5 minutes.",
      "Serve hot with naan or rice."
    ],
    servings: 4,
    calories: 480,
    cookTime: "35 minutes",
    prepTime: "15 minutes",
    author: "Chef Sameer"
  },
  {
    id: 3,
    name: "Mutton Curry",
    time: "70 min",
    difficulty: "Hard",
    rating: "4.6",
    description: "Tender mutton cooked in rich spices.",
    ingredients: [
      "Mutton (500g, bone-in)",
      "Onions (2, sliced)",
      "Tomatoes (2, chopped)",
      "Ginger-garlic paste (2 tbsp)",
      "Spices: turmeric, cumin, coriander, garam masala, chili powder",
      "Oil (4 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Heat oil and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook 2 minutes.",
      "Add tomatoes and spices, cook until oil separates.",
      "Add mutton and water, cover and cook for 45-50 minutes until tender.",
      "Garnish with coriander leaves and serve hot with rice."
    ],
    servings: 4,
    calories: 550,
    cookTime: "60 minutes",
    prepTime: "10 minutes",
    author: "Chef Farhan"
  },
  {
    id: 4,
    name: "Grilled Fish",
    time: "25 min",
    difficulty: "Easy",
    rating: "4.5",
    description: "Spicy marinated fish grilled to perfection.",
    ingredients: [
      "Fish fillets (500g)",
      "Lemon juice (2 tbsp)",
      "Ginger-garlic paste (1 tsp)",
      "Spices: chili powder, cumin, turmeric, salt",
      "Oil (2 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Marinate fish with lemon juice, ginger-garlic paste, and spices for 15 minutes.",
      "Heat grill pan and brush with oil.",
      "Grill fish for 5-7 minutes on each side until cooked.",
      "Garnish with coriander leaves and serve hot."
    ],
    servings: 4,
    calories: 300,
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    author: "Chef Neha"
  },
  {
    id: 5,
    name: "Prawn Masala",
    time: "30 min",
    difficulty: "Medium",
    rating: "4.6",
    description: "Spicy prawn curry in rich tomato gravy.",
    ingredients: [
      "Prawns (500g, cleaned)",
      "Onions (2, chopped)",
      "Tomatoes (3, chopped)",
      "Ginger-garlic paste (1 tbsp)",
      "Spices: turmeric, chili powder, coriander powder, garam masala",
      "Oil (3 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Heat oil and sauté onions until golden.",
      "Add ginger-garlic paste and cook 1-2 minutes.",
      "Add tomatoes and spices, cook until oil separates.",
      "Add prawns and cook for 8-10 minutes until done.",
      "Garnish with coriander leaves and serve with rice."
    ],
    servings: 4,
    calories: 350,
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    author: "Chef Akash"
  },
  {
    id: 6,
    name: "Egg Curry",
    time: "35 min",
    difficulty: "Easy",
    rating: "4.4",
    description: "Boiled eggs cooked in spicy onion-tomato gravy.",
    ingredients: [
      "Eggs (6, boiled)",
      "Onions (2, chopped)",
      "Tomatoes (3, chopped)",
      "Ginger-garlic paste (1 tbsp)",
      "Spices: turmeric, cumin, coriander, chili powder, garam masala",
      "Oil (3 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Heat oil and sauté onions until golden.",
      "Add ginger-garlic paste and cook 1-2 minutes.",
      "Add tomatoes and spices, cook until oil separates.",
      "Add boiled eggs, simmer for 5 minutes.",
      "Garnish with coriander leaves and serve hot with rice or roti."
    ],
    servings: 4,
    calories: 320,
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    author: "Chef Ananya"
  }
  ],
  Desserts: [
   {
    id: 1,
    name: "Gulab Jamun",
    time: "30 min",
    difficulty: "Medium",
    rating: "4.8",
    description: "Soft milk-based balls soaked in sugar syrup.",
    ingredients: [
      "Milk powder (1 cup)",
      "All-purpose flour (2 tbsp)",
      "Ghee (2 tbsp)",
      "Milk (1/4 cup)",
      "Sugar (2 cups)",
      "Water (1 cup)",
      "Cardamom powder (1/2 tsp)",
      "Rose water (1 tsp, optional)"
    ],
    steps: [
      "Mix milk powder, flour, and ghee to make a smooth dough with milk.",
      "Shape small balls from the dough.",
      "Heat oil or ghee for frying and fry the balls until golden brown.",
      "Boil sugar and water to make syrup, add cardamom and rose water.",
      "Soak fried balls in warm sugar syrup for at least 10 minutes.",
      "Serve warm."
    ],
    servings: 4,
    calories: 350,
    cookTime: "15 minutes",
    prepTime: "15 minutes",
    author: "Chef Meera"
  },
  {
    id: 2,
    name: "Rasmalai",
    time: "40 min",
    difficulty: "Medium",
    rating: "4.7",
    description: "Soft cheese patties in sweetened milk with cardamom.",
    ingredients: [
      "Paneer or ricotta (200g)",
      "Milk (1 liter)",
      "Sugar (1/2 cup for milk + 1/4 cup for patties)",
      "Cardamom powder (1/2 tsp)",
      "Saffron strands (optional)",
      "Rose water (1 tsp, optional)"
    ],
    steps: [
      "Knead paneer and shape into small flat balls.",
      "Boil water with 1/4 cup sugar and cook the balls for 10 minutes.",
      "Boil milk, add sugar, cardamom, saffron, and rose water.",
      "Add cooked balls to milk and simmer for 5 minutes.",
      "Chill and serve."
    ],
    servings: 4,
    calories: 250,
    cookTime: "20 minutes",
    prepTime: "20 minutes",
    author: "Chef Priya"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    time: "50 min",
    difficulty: "Medium",
    rating: "4.9",
    description: "Soft and moist chocolate cake.",
    ingredients: [
      "All-purpose flour (1.5 cups)",
      "Sugar (1 cup)",
      "Cocoa powder (1/2 cup)",
      "Baking powder (1 tsp)",
      "Baking soda (1/2 tsp)",
      "Eggs (2)",
      "Milk (1/2 cup)",
      "Oil (1/4 cup)",
      "Vanilla extract (1 tsp)"
    ],
    steps: [
      "Preheat oven to 180°C (350°F) and grease a cake pan.",
      "Mix dry ingredients: flour, sugar, cocoa, baking powder, and baking soda.",
      "Add eggs, milk, oil, and vanilla, whisk to a smooth batter.",
      "Pour into cake pan and bake for 30-35 minutes.",
      "Cool, slice, and serve."
    ],
    servings: 6,
    calories: 400,
    cookTime: "35 minutes",
    prepTime: "15 minutes",
    author: "Chef Raj"
  },
  {
    id: 4,
    name: "Kheer",
    time: "45 min",
    difficulty: "Easy",
    rating: "4.6",
    description: "Creamy rice pudding flavored with cardamom and nuts.",
    ingredients: [
      "Rice (1/2 cup)",
      "Milk (1 liter)",
      "Sugar (1/2 cup)",
      "Cardamom powder (1/2 tsp)",
      "Cashews and almonds (handful, chopped)"
    ],
    steps: [
      "Wash rice and soak for 10 minutes.",
      "Boil milk in a pan and add rice.",
      "Cook on low heat until rice is soft and milk thickens.",
      "Add sugar, cardamom, and nuts; simmer for 5 minutes.",
      "Serve warm or chilled."
    ],
    servings: 4,
    calories: 300,
    cookTime: "35 minutes",
    prepTime: "10 minutes",
    author: "Chef Anil"
  },
  {
    id: 5,
    name: "Jalebi",
    time: "30 min",
    difficulty: "Medium",
    rating: "4.7",
    description: "Crispy, syrup-soaked Indian dessert.",
    ingredients: [
      "All-purpose flour (1 cup)",
      "Yogurt (1/4 cup)",
      "Water (as needed for batter)",
      "Sugar (1 cup)",
      "Water (1/2 cup for syrup)",
      "Saffron strands (optional)",
      "Oil or ghee for frying"
    ],
    steps: [
      "Prepare a smooth, slightly thick batter with flour and yogurt.",
      "Heat oil for frying and pour batter in circular shapes.",
      "Fry until golden and crispy.",
      "Boil sugar and water to make syrup, add saffron.",
      "Dip fried jalebis into syrup for 1-2 minutes.",
      "Serve hot."
    ],
    servings: 4,
    calories: 400,
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    author: "Chef Neha"
  },
  {
    id: 6,
    name: "Ice Cream Sundae",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.5",
    description: "Delicious ice cream topped with chocolate and nuts.",
    ingredients: [
      "Vanilla ice cream (2 scoops per serving)",
      "Chocolate syrup (2 tbsp per serving)",
      "Whipped cream (optional)",
      "Chopped nuts (1 tbsp)",
      "Cherries (for garnish)"
    ],
    steps: [
      "Scoop ice cream into bowls.",
      "Drizzle chocolate syrup on top.",
      "Add whipped cream and sprinkle chopped nuts.",
      "Garnish with cherries.",
      "Serve immediately."
    ],
    servings: 2,
    calories: 350,
    cookTime: "5 minutes",
    prepTime: "10 minutes",
    author: "Chef Akash"
  }
  ],

  Dinner: [
    {
    id: 1,
    name: "Pasta Alfredo",
    time: "30 min",
    difficulty: "Easy",
    rating: "4.5",
    description: "Creamy white sauce pasta with garlic and cheese.",
    ingredients: [
      "Pasta (200g)",
      "Butter (2 tbsp)",
      "Garlic (2 cloves, minced)",
      "Cream (1/2 cup)",
      "Parmesan cheese (1/4 cup, grated)",
      "Salt and pepper to taste",
      "Parsley (for garnish)"
    ],
    steps: [
      "Cook pasta as per package instructions and drain.",
      "Heat butter in a pan, sauté garlic until fragrant.",
      "Add cream and cook for 2-3 minutes.",
      "Stir in Parmesan cheese, salt, and pepper.",
      "Add cooked pasta and toss to coat.",
      "Garnish with parsley and serve hot."
    ],
    servings: 2,
    calories: 400,
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    author: "Chef Priya"
  },
  {
    id: 2,
    name: "Grilled Chicken",
    time: "40 min",
    difficulty: "Medium",
    rating: "4.7",
    description: "Juicy marinated chicken grilled to perfection.",
    ingredients: [
      "Chicken breasts (500g)",
      "Olive oil (2 tbsp)",
      "Lemon juice (2 tbsp)",
      "Garlic (2 cloves, minced)",
      "Spices: paprika, cumin, salt, pepper",
      "Parsley for garnish"
    ],
    steps: [
      "Marinate chicken with olive oil, lemon juice, garlic, and spices for 30 minutes.",
      "Preheat grill pan and grill chicken for 6-7 minutes each side.",
      "Check if fully cooked and golden brown.",
      "Garnish with parsley and serve hot."
    ],
    servings: 4,
    calories: 350,
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    author: "Chef Ali"
  },
  {
    id: 3,
    name: "Veg Stir Fry",
    time: "25 min",
    difficulty: "Easy",
    rating: "4.4",
    description: "Mixed vegetables sautéed with soy sauce and spices.",
    ingredients: [
      "Broccoli (1 cup, chopped)",
      "Carrots (1 cup, sliced)",
      "Bell peppers (1 cup, sliced)",
      "Onions (1, sliced)",
      "Garlic (2 cloves, minced)",
      "Soy sauce (2 tbsp)",
      "Oil (2 tbsp)",
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat oil in a pan and sauté garlic until fragrant.",
      "Add onions, carrots, broccoli, and bell peppers.",
      "Stir-fry on high heat for 5-7 minutes.",
      "Add soy sauce, salt, and pepper; cook for 2 minutes.",
      "Serve hot."
    ],
    servings: 2,
    calories: 220,
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    author: "Chef Meera"
  },
  {
    id: 4,
    name: "Fish Curry",
    time: "35 min",
    difficulty: "Medium",
    rating: "4.6",
    description: "Spicy and tangy fish curry with rich tomato base.",
    ingredients: [
      "Fish fillets (500g)",
      "Onions (2, chopped)",
      "Tomatoes (3, chopped)",
      "Ginger-garlic paste (1 tbsp)",
      "Spices: turmeric, chili powder, coriander powder, cumin",
      "Oil (3 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Heat oil and sauté onions until golden.",
      "Add ginger-garlic paste and cook 2 minutes.",
      "Add tomatoes and spices; cook until oil separates.",
      "Add fish fillets and cook covered for 10 minutes until fish is done.",
      "Garnish with coriander leaves and serve hot with rice."
    ],
    servings: 4,
    calories: 300,
    cookTime: "25 minutes",
    prepTime: "10 minutes",
    author: "Chef Neha"
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    time: "30 min",
    difficulty: "Easy",
    rating: "4.8",
    description: "Soft paneer cubes in creamy tomato gravy.",
    ingredients: [
      "Paneer (250g, cubed)",
      "Onions (2, chopped)",
      "Tomatoes (3, pureed)",
      "Butter (2 tbsp)",
      "Cream (1/4 cup)",
      "Ginger-garlic paste (1 tsp)",
      "Spices: cumin, coriander, garam masala, chili powder",
      "Oil (2 tbsp)",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Heat oil and butter, sauté onions until golden.",
      "Add ginger-garlic paste and cook 1 minute.",
      "Add tomato puree and spices, cook for 5-7 minutes.",
      "Add paneer and cream; simmer for 5 minutes.",
      "Garnish with coriander leaves and serve hot with naan or rice."
    ],
    servings: 4,
    calories: 400,
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    author: "Chef Ananya"
  },
  {
    id: 6,
    name: "Soup of the Day",
    time: "20 min",
    difficulty: "Easy",
    rating: "4.3",
    description: "Healthy and warm soup made with fresh vegetables.",
    ingredients: [
      "Mixed vegetables (1 cup, chopped)",
      "Onions (1, chopped)",
      "Garlic (2 cloves, minced)",
      "Vegetable broth (3 cups)",
      "Salt and pepper to taste",
      "Olive oil (1 tbsp)",
      "Herbs: parsley or thyme for garnish"
    ],
    steps: [
      "Heat olive oil in a pot and sauté onions and garlic until fragrant.",
      "Add mixed vegetables and cook for 5 minutes.",
      "Pour in vegetable broth and bring to boil.",
      "Simmer for 10 minutes until vegetables are tender.",
      "Blend if desired for smooth texture, season with salt and pepper.",
      "Garnish with herbs and serve hot."
    ],
    servings: 2,
    calories: 150,
    cookTime: "15 minutes",
    prepTime: "5 minutes",
    author: "Chef Farhan"
  }
  ],
  Breakfast: [
     {
    id: 1,
    name: "Pancakes",
    time: "20 min",
    difficulty: "Easy",
    rating: "4.7",
    description: "Fluffy pancakes served with syrup and fruits.",
    ingredients: [
      "All-purpose flour (1 cup)",
      "Milk (1 cup)",
      "Egg (1)",
      "Sugar (2 tbsp)",
      "Baking powder (1 tsp)",
      "Salt (a pinch)",
      "Butter (2 tbsp, for cooking)",
      "Maple syrup and fruits for serving"
    ],
    steps: [
      "Mix flour, sugar, baking powder, and salt in a bowl.",
      "Whisk milk and egg, then combine with dry ingredients to form batter.",
      "Heat a pan and melt butter.",
      "Pour batter to form pancakes, cook until bubbles form, flip and cook other side.",
      "Serve with maple syrup and fruits."
    ],
    servings: 2,
    calories: 350,
    cookTime: "15 minutes",
    prepTime: "5 minutes",
    author: "Chef Priya"
  },
  {
    id: 2,
    name: "Omelette",
    time: "10 min",
    difficulty: "Easy",
    rating: "4.6",
    description: "Classic egg omelette with vegetables.",
    ingredients: [
      "Eggs (2)",
      "Onion (1, chopped)",
      "Tomatoes (1, chopped)",
      "Bell pepper (1/2, chopped)",
      "Salt and pepper to taste",
      "Oil or butter (1 tbsp)"
    ],
    steps: [
      "Beat eggs with salt and pepper.",
      "Heat oil in a pan and sauté vegetables for 2-3 minutes.",
      "Pour eggs over vegetables, cook on low heat until set.",
      "Fold omelette and serve hot."
    ],
    servings: 1,
    calories: 200,
    cookTime: "5 minutes",
    prepTime: "5 minutes",
    author: "Chef Ali"
  },
  {
    id: 3,
    name: "French Toast",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.5",
    description: "Bread slices dipped in egg mixture and fried to perfection.",
    ingredients: [
      "Bread slices (4)",
      "Eggs (2)",
      "Milk (1/4 cup)",
      "Sugar (1 tbsp)",
      "Cinnamon powder (1/2 tsp, optional)",
      "Butter (2 tbsp)"
    ],
    steps: [
      "Beat eggs with milk, sugar, and cinnamon.",
      "Dip bread slices in the egg mixture.",
      "Heat butter in a pan and fry bread slices until golden on both sides.",
      "Serve with syrup or honey."
    ],
    servings: 2,
    calories: 300,
    cookTime: "10 minutes",
    prepTime: "5 minutes",
    author: "Chef Meera"
  },
  {
    id: 4,
    name: "Smoothie Bowl",
    time: "10 min",
    difficulty: "Easy",
    rating: "4.8",
    description: "Healthy fruit smoothie topped with nuts and seeds.",
    ingredients: [
      "Banana (1)",
      "Mixed berries (1/2 cup)",
      "Yogurt (1/2 cup)",
      "Honey (1 tbsp)",
      "Chia seeds and nuts for topping"
    ],
    steps: [
      "Blend banana, berries, yogurt, and honey until smooth.",
      "Pour into a bowl and top with chia seeds and nuts.",
      "Serve immediately."
    ],
    servings: 1,
    calories: 250,
    cookTime: "5 minutes",
    prepTime: "5 minutes",
    author: "Chef Raj"
  },
  {
    id: 5,
    name: "Idli Sambhar",
    time: "40 min",
    difficulty: "Medium",
    rating: "4.7",
    description: "Steamed rice cakes served with spicy lentil soup.",
    ingredients: [
      "Idli batter (2 cups)",
      "Water (for steaming)",
      "For Sambhar: Toor dal (1/2 cup), tamarind (1 tbsp), vegetables (1 cup), spices, oil"
    ],
    steps: [
      "Steam idlis in an idli cooker for 10-12 minutes.",
      "Cook dal and vegetables with spices and tamarind to make sambhar.",
      "Serve hot idlis with sambhar and chutney."
    ],
    servings: 4,
    calories: 200,
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    author: "Chef Ananya"
  },
  {
    id: 6,
    name: "Poha",
    time: "20 min",
    difficulty: "Easy",
    rating: "4.5",
    description: "Flattened rice cooked with onions, turmeric, and peanuts.",
    ingredients: [
      "Poha (1 cup)",
      "Onion (1, chopped)",
      "Green chili (1, chopped)",
      "Turmeric powder (1/2 tsp)",
      "Peanuts (2 tbsp)",
      "Oil (2 tbsp)",
      "Salt and lemon juice to taste",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Rinse poha in water and drain.",
      "Heat oil, sauté peanuts, onions, and green chili until onions are soft.",
      "Add turmeric, salt, and poha; mix well and cook for 2-3 minutes.",
      "Add lemon juice, garnish with coriander leaves, and serve."
    ],
    servings: 2,
    calories: 220,
    cookTime: "15 minutes",
    prepTime: "5 minutes",
    author: "Chef Neha"
  }
  ],
  Healthy: [
    
    {
    id: 1,
    name: "Quinoa Salad",
    time: "20 min",
    difficulty: "Easy",
    rating: "4.7",
    description: "Protein-rich quinoa salad with fresh vegetables and lemon dressing.",
    ingredients: [
      "Quinoa (1 cup, cooked)",
      "Cucumber (1, chopped)",
      "Tomatoes (1 cup, chopped)",
      "Bell pepper (1, chopped)",
      "Lemon juice (2 tbsp)",
      "Olive oil (1 tbsp)",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    steps: [
      "Cook quinoa and let it cool.",
      "Mix chopped vegetables with quinoa in a bowl.",
      "Add lemon juice, olive oil, salt, and pepper; toss well.",
      "Garnish with parsley and serve."
    ],
    servings: 2,
    calories: 250,
    cookTime: "10 minutes",
    prepTime: "10 minutes",
    author: "Chef Priya"
  },
  {
    id: 2,
    name: "Grilled Veg Sandwich",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.6",
    description: "Whole grain sandwich with grilled vegetables and light dressing.",
    ingredients: [
      "Whole grain bread slices (4)",
      "Zucchini, bell pepper, carrot (1 cup, sliced)",
      "Olive oil (1 tbsp)",
      "Salt and pepper to taste",
      "Lettuce leaves",
      "Mustard or hummus (optional)"
    ],
    steps: [
      "Toss vegetables with olive oil, salt, and pepper.",
      "Grill vegetables until slightly charred.",
      "Spread mustard or hummus on bread slices.",
      "Layer grilled vegetables and lettuce between bread slices.",
      "Serve immediately."
    ],
    servings: 2,
    calories: 220,
    cookTime: "10 minutes",
    prepTime: "5 minutes",
    author: "Chef Raj"
  },
  {
    id: 3,
    name: "Oats Porridge",
    time: "10 min",
    difficulty: "Easy",
    rating: "4.8",
    description: "Healthy breakfast porridge made with oats and milk, topped with fruits.",
    ingredients: [
      "Rolled oats (1/2 cup)",
      "Milk or plant-based milk (1 cup)",
      "Honey or maple syrup (1 tsp)",
      "Fruits: banana, berries (1/2 cup)",
      "Chia seeds (1 tsp, optional)"
    ],
    steps: [
      "Boil milk and add oats.",
      "Cook on low heat until thickened (5-7 minutes).",
      "Add honey or syrup and mix well.",
      "Pour into a bowl and top with fruits and chia seeds.",
      "Serve warm."
    ],
    servings: 1,
    calories: 200,
    cookTime: "7 minutes",
    prepTime: "3 minutes",
    author: "Chef Meera"
  },
  {
    id: 4,
    name: "Fruit Smoothie",
    time: "5 min",
    difficulty: "Easy",
    rating: "4.9",
    description: "Refreshing smoothie with banana, berries, and yogurt.",
    ingredients: [
      "Banana (1)",
      "Mixed berries (1/2 cup)",
      "Yogurt (1/2 cup)",
      "Honey (1 tsp)",
      "Ice cubes (optional)"
    ],
    steps: [
      "Blend banana, berries, yogurt, honey, and ice cubes until smooth.",
      "Pour into a glass and serve immediately."
    ],
    servings: 1,
    calories: 180,
    cookTime: "5 minutes",
    prepTime: "0 minutes",
    author: "Chef Ali"
  },
  {
    id: 5,
    name: "Chickpea Salad",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.7",
    description: "Protein-packed salad with chickpeas, cucumber, tomato, and herbs.",
    ingredients: [
      "Boiled chickpeas (1 cup)",
      "Cucumber (1, chopped)",
      "Tomatoes (1 cup, chopped)",
      "Red onion (1/2, chopped)",
      "Lemon juice (2 tbsp)",
      "Olive oil (1 tbsp)",
      "Salt, pepper, cumin powder to taste",
      "Fresh coriander for garnish"
    ],
    steps: [
      "Mix chickpeas and chopped vegetables in a bowl.",
      "Add lemon juice, olive oil, salt, pepper, and cumin; toss well.",
      "Garnish with coriander leaves and serve."
    ],
    servings: 2,
    calories: 230,
    cookTime: "10 minutes",
    prepTime: "5 minutes",
    author: "Chef Neha"
  },
  {
    id: 6,
    name: "Sprout Bowl",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.8",
    description: "Nutritious bowl of mixed sprouts with vegetables and dressing.",
    ingredients: [
      "Mixed sprouts (1 cup, boiled)",
      "Cucumber, tomato, carrot (1 cup, chopped)",
      "Lemon juice (2 tbsp)",
      "Olive oil (1 tsp)",
      "Salt and pepper to taste",
      "Chopped coriander for garnish"
    ],
    steps: [
      "Mix boiled sprouts with chopped vegetables.",
      "Add lemon juice, olive oil, salt, and pepper; toss well.",
      "Garnish with coriander leaves and serve."
    ],
    servings: 2,
    calories: 200,
    cookTime: "10 minutes",
    prepTime: "5 minutes",
    author: "Chef Akash"
  }
  ],

};

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "Vegetarian",
      searchQuery: "",
      showRecipeModal: false,
      selectedRecipe: null,
      modalActiveTab: "details",
    };
  }

  handleCategorySelect = (category) => {
    this.setState({
      selectedCategory: category,
      searchQuery: "",
      showRecipeModal: false,
    });
  };

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleViewRecipe = (recipe) => {
    this.setState({
      selectedRecipe: recipe,
      showRecipeModal: true,
      modalActiveTab: "details",
    });
  };

  handleCloseModal = () => {
    this.setState({
      showRecipeModal: false,
      selectedRecipe: null,
    });
  };

  handleTabChange = (tab) => {
    this.setState({ modalActiveTab: tab });
  };

  render() {
    const {
      selectedCategory,
      searchQuery,
      showRecipeModal,
      selectedRecipe,
      modalActiveTab,
    } = this.state;

    const categories = [
      { name: "Vegetarian", icon: "🥬", color: "#2E7D32" },
      { name: "Non-Veg", icon: "🍗", color: "#D32F2F" },
      { name: "Desserts", icon: "🍰", color: "#7B1FA2" },
      { name: "Dinner", icon: "🍽️", color: "#1976D2" },
      { name: "Breakfast", icon: "🍳", color: "#F57C00" },
      { name: "Healthy", icon: "🥗", color: "#388E3C" },
    ];

    const filteredRecipes = recipeData[selectedCategory]?.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
      <div className="recipes-container">
        <div className="recipes-header">
          <h1 className="recipes-title">🍳 Recipe Collection</h1>
          <p className="recipes-subtitle">
            Discover amazing recipes from around the world
          </p>
        </div>

        <div className="recipes-categories">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`recipe-category-item ${
                selectedCategory === category.name ? "active" : ""
              }`}
              style={{ "--category-color": category.color }}
              onClick={() => this.handleCategorySelect(category.name)}
            >
              <span className="recipe-category-icon">{category.icon}</span>
              <span className="recipe-category-name">{category.name}</span>

               
            </div>

          ))}
        </div>

        <div className="category-name-display">
          <h2>
            {categories.find((c) => c.name === selectedCategory)?.icon}{" "}
            {selectedCategory} Recipes
          </h2>
          <p>Browse through our collection of delicious {selectedCategory.toLowerCase()} recipes</p>
        </div>

        <div className="recipes-search">
          <input
            type="text"
            placeholder={`Search ${selectedCategory.toLowerCase()} recipes...`}
            value={searchQuery}
            onChange={this.handleSearch}
            className="recipes-search-input"
          />
          <button className="recipes-search-btn">
            <span className="search-icon">🔍</span>
            Search
          </button>
        </div>

        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <div className="recipe-image-placeholder">
                  {categories.find((c) => c.name === selectedCategory)?.icon}
                </div>
                <div className="recipe-badge">
                  <span className="badge-difficulty">{recipe.difficulty}</span>
                  <span className="badge-time">{recipe.time}</span>
                </div>
                <div className="recipe-favorite">
                  <button
                    className="favorite-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Added ${recipe.name} to favorites!`);
                    }}
                  >
                    ❤️
                  </button>
                </div>
              </div>
              <div className="recipe-content">
                <h3 className="recipe-name">{recipe.name}</h3>
                <div className="recipe-meta">
                  <span className="recipe-time">⏱️ {recipe.time}</span>
                  <span className="recipe-difficulty">⚡ {recipe.difficulty}</span>
                  <span className="recipe-rating">⭐ {recipe.rating}</span>
                </div>
                <p className="recipe-description">
                  {recipe.description?.substring(0, 80)}...
                </p>
                <div className="recipe-actions">
                  <button
                    className="recipe-view-btn"
                    onClick={() => this.handleViewRecipe(recipe)}
                  >
                    👁️ View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRecipeModal && selectedRecipe && (
          <div className="recipe-modal-overlay" onClick={this.handleCloseModal}>
            <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={this.handleCloseModal}>
                ✕
              </button>
              
              <div className="modal-header">
                <div className="modal-category">
                  <span
                    className="category-tag"
                    style={{
                      backgroundColor: categories.find(
                        (c) => c.name === selectedCategory
                      )?.color,
                    }}
                  >
                    {selectedCategory}
                  </span>
                </div>
                <h2 className="modal-recipe-title">{selectedRecipe.name}</h2>
                <div className="modal-recipe-meta">
                  <span>⭐ {selectedRecipe.rating}</span>
                  <span>⏱️ {selectedRecipe.time}</span>
                  <span>⚡ {selectedRecipe.difficulty}</span>
                  <span>👥 {selectedRecipe.servings} servings</span>
                  <span>🔥 {selectedRecipe.calories} cal</span>
                </div>
              </div>

              <div className="modal-tabs">
                <button
                  className={`modal-tab ${modalActiveTab === "details" ? "active" : ""}`}
                  onClick={() => this.handleTabChange("details")}
                >
                  Details
                </button>
                <button
                  className={`modal-tab ${modalActiveTab === "ingredients" ? "active" : ""}`}
                  onClick={() => this.handleTabChange("ingredients")}
                >
                  Ingredients
                </button>
                <button
                  className={`modal-tab ${modalActiveTab === "steps" ? "active" : ""}`}
                  onClick={() => this.handleTabChange("steps")}
                >
                  Steps
                </button>
              </div>

              <div className="modal-content">
                {modalActiveTab === "details" && (
                  <div className="tab-content details-tab">
                    <h3>About this Recipe</h3>
                    <p>{selectedRecipe.description}</p>
                    <div className="recipe-info-grid">
                      <div className="info-item">
                        <span className="info-label">Preparation Time</span>
                        <span className="info-value">{selectedRecipe.prepTime || "15 min"}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Cooking Time</span>
                        <span className="info-value">{selectedRecipe.cookTime || selectedRecipe.time}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Author</span>
                        <span className="info-value">{selectedRecipe.author || "Recipe Book"}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Category</span>
                        <span className="info-value">{selectedCategory}</span>
                      </div>
                    </div>
                  </div>
                )}

                {modalActiveTab === "ingredients" && (
                  <div className="tab-content ingredients-tab">
                    <h3>Ingredients</h3>
                    <ul className="ingredients-list">
                      {selectedRecipe.ingredients?.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                          <span className="ingredient-checkbox">□</span>
                          <span className="ingredient-text">{ingredient}</span>
                        </li>
                      )) || <li>No ingredients listed</li>}
                    </ul>
                  </div>
                )}

                {modalActiveTab === "steps" && (
                  <div className="tab-content steps-tab">
                    <h3>Preparation Steps</h3>
                    <ol className="steps-list">
                      {selectedRecipe.steps?.map((step, index) => (
                        <li key={index} className="step-item">
                          <span className="step-number">{index + 1}</span>
                          <span className="step-text">{step}</span>
                        </li>
                      )) || <li>No steps available</li>}
                    </ol>
                  </div>
                )}
              </div>

              <div className="modal-actions">
                <button
                  className="modal-action-btn save-btn"
                  onClick={() => alert(`Saved ${selectedRecipe.name} to your collection!`)}
                >
                  💾 Save
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="recipes-footer">
          <h3>
            Showing {filteredRecipes.length} of {recipeData[selectedCategory]?.length || 0} recipes in {selectedCategory}
          </h3>
          {filteredRecipes.length === 0 && (
            <p className="no-recipes">
              No recipes found. Try a different search!
            </p>
          )}
        </div>
      </div>
    );
  }
}