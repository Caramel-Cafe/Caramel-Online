const menuItems = [
  {
    category: "Breakfast Menu",
    name: "CARAMEL BREAKY",
    price: "UGX 36,000",
    description: "Our signature breakfast burritos with curried chicken strips, peppers, onions, omelette, pair of sausage, sweet and spicy potatoes with garden salad",
    image: "images/Caramel Breaky.webp"
  },
  {
    category: "Breakfast Menu",
    name: "FARMERS BREAKFAST",
    price: "UGX 32,000",
    description: "Spanish omelette is served with our curried creamy spinach, avocado slice, house gourmet bread, bread, and fresh homemade jam.",
    image: "images/Farmers Breakfast.webp"
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL CHICKEN NUGGETS WRAP",
    price: "UGX 32,000",
    description: "Homemade tortilla, lettuce, tomatoes, red onion, and chicken nuggets are served with chopped salad, egg of your choice, and baked beans.",
    image: "images/CARAMEL CHICKEN NUGGETS WRAP.png"
  },
  {
    category: "Breakfast Menu",
    name: "MUESLI",
    price: "UGX 29,000",
    description: "Plain Yoghurt, Banana & Pineapple, Granola, Honey & Cashew Nuts/Gnuts",
    image: "images/Muesli.webp"
  },
  {
    category: "Breakfast Menu",
    name: "BELGIAN WAFFLE",
    price: "UGX 31,000",
    description: "freshly made waffles served with seasonal fruits and maple syrup, garnished with icing sugar.",
    image: "images/Belgian Waffle.webp"
  },
  {
    category: "Breakfast Menu",
    name: "AMERICAN PANCAKES",
    price: "UGX 31,000",
    description: "freshly made Pancakes served with seasonal fruits and maple syrup, garnished with icing sugar.",
    image: "images/American Pancake.webp"
  },
  {
    category: "Breakfast Menu",
    name: "NORWEGIAN CROISSANT",
    price: "UGX 37,000",
    description: "Butter croissant, smoked salmon, poached egg and hollandaise sauce served with salad.",
    image: "images/Norwegian Croissant.webp"
  },
  {
    category: "Breakfast Menu",
    name: "THE SIMPLE ONE",
    price: "UGX 32,000",
    description: "Omelette of 2 eggs, Tuna and Fresh salad served with bread, butter and Jam.",
    image: "images/The Simple One.webp"
  },
  {
    category: "Breakfast Menu",
    name: "SAMO-MASAI",
    price: "UGX 36,000",
    description: "Pair of samosa, Spanish omelette, sweet and spicy potatoes and garden salad.",
    image: "images/Samo-Masai.webp"
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL COMBO 2",
    price: "UGX 35,000",
    description: "Potato wedges, Beef, Chicken strips, two eggs (of your choice), Avocado, chopped salad and one beef sausage, salad, baked beans and sliced bread.",
    image: "images/Combo 2.webp"
  },
  {
    category: "Breakfast Menu",
    name: "RANCHERS BREAKFAST",
    price: "UGX 36,000",
    description: "Two fried eggs, two beef sausages, beans, beef bacon, grilled tomatoes & fresh avocado.",
    image: "images/Ranchers.webp"
  },
  {
    category: "Breakfast Menu",
    name: "GIANT SALMON OMELETTE",
    price: "UGX 39,000",
    description: "Four eggs, smoked salmon cream cheese and chives, Served with fresh tomatoes and avocado, bread butter and jam, house coffe or black tea.",
    image: "images/Giant Salmon.webp"
  },
  {
    category: "Breakfast Menu",
    name: "SICILIAN BREAKFAST",
    price: "UGX 36,000",
    description: "beef bacon, Potatoes and onion cooked in olive oil with 2 sunny side eggs and avocado cubes.",
    image: "images/Sicilian Breakfast.webp"
  },

  {
    category: "Starters",
    name: "FALAFEL & HUMMUS",
    price: "UGX 31,000",
    description: "Served with chilli sauce, olives & freshly baked focaccia bread.",
    image: "images/Falafel and Humus.webp"
  },
  {
    category: "Starters",
    name: "CARAMEL STICKY WINGS",
    price: "Single UGX 29,000 / Double UGX 42,000",
    description: "served with BBQ or spicy butter sauce",
    image: "images/Chicken Wings.webp"
  },
  {
    category: "Starters",
    name: "CHICKEN LOLLIPOP",
    price: "Single UGX 28,000 / Double UGX 40,000",
    description: "",
    image: "images/Lollypop.webp"
  },
  {
    category: "Starters",
    name: "CHICKEN DRUMSTICKS",
    price: "UGX 34,000",
    description: "Chicken drumsticks in sweet and spicy sauce, served with soft lettuce and coleslaw salad.",
    image: "images/Drumstick.webp"
  },
  {
    category: "Starters",
    name: "CLEAR SOUP",
    price: "UGX 20,000",
    description: "Our signature soup — light, flavorful, and freshly prepared. Choose of Mushroom, Chicken, or Vegetable.",
    image: "images/Soup of the day (Clear chicken).webp"
  },
  {
    category: "Starters",
    name: "CREAMY SOUP",
    price: "UGX 24,000",
    description: "Our signature soup — rich, smooth, and comforting. Choose of Mushroom, Chicken, or Vegetable.",
    image: "images/Soup of the day (Creamy Mushroom).webp"
  },

  {
    category: "Fresh Salads",
    name: "RANCH SALAD",
    price: "UGX 33,000",
    description: "Freshly selected mixed lettuce, cherry tomatoes, green apples, red radish, chicken tenders, spring onions, boiled egg, English cucumber, red onions, julienne carrots dressed with ranch dressing & topped with avocado",
    image: "images/Ranch Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "THAI CHICKEN SALAD",
    price: "UGX 33,000",
    description: "chicken tenders, mint, coriander, red onions, cherry tomatoes, spring onions, mixed fresh lettuce, peanuts and Thai sweet chilli dressing with garlic toasted bread",
    image: "images/Thai Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CRISPY CHICKEN SALAD",
    price: "UGX 33,000",
    description: "crunchy chicken breast, mixed fresh lettuce, beetroots, carrots, red peppers, avocado, honey mustard dressing with garlic-toasted bread",
    image: "images/Crispy Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CAESAR CHICKEN SALAD",
    price: "UGX 32,000",
    description: "mixed fresh lettuce, chicken tenders, croutons, parmesan cheese, avocado, caesar dressing with garlic toasted bread",
    image: "images/Caesar Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "MEXICAN SALAD",
    price: "UGX 32,000",
    description: "chicken tenders, sweetcorn, red peppers, pickled onions, roasted cauliflower, tomatoes, coriander, Gouda cheese, french dressing with garlic toasted bread",
    image: "images/Mexican Salad.webp"
  },

  {
    category: "Main Course (chicken)",
    name: "GRILLED CHICKEN BREAST",
    price: "UGX 42,000",
    description: "chicken breast marinated in aromatic herbs, grilled to perfection, and served alongside freshly steamed vegetables",
    image: "images/Grilled Chicken.webp"
  },
  {
    category: "Main Course (chicken)",
    name: "SWEET & SPICY CHICKEN",
    price: "UGX 41,000",
    description: "Boneless chicken thighs cooked in sweet chilli sauce served with rice and steamed vegetables",
    image: "images/Sweet and Spicy.webp"
  },
  {
    category: "Main Course (chicken)",
    name: "ROASTED CHICKEN",
    price: "UGX 42,000",
    description: "Marinated and slow-roasted half chicken, bursting with flavor and served with your choice of side.",
    image: "images/Roasted Chicken.webp"
  },
  {
    category: "Main Course (chicken)",
    name: "BBQ ROASTED CHICKEN",
    price: "UGX 44,000",
    description: "roasted chicken fried in bbq sauce, served steamed vegetables and your choice of accompaniment.",
    image: "images/BBQ ROASTED CHICKEN.png"
  },
  {
    category: "Main Course (chicken)",
    name: "THAI COCONUT CHICKEN",
    price: "UGX 40,000",
    description: "chicken tender cooked in creamy coconut sauce with tomato, garlic, and spices, served with your choice of accompaniment.",
    image: "images/Thai coconut.webp"
  },
  {
    category: "Main Course (chicken)",
    name: "RED CHICKEN CURRY",
    price: "UGX 42,000",
    description: "chicken tender cooked in aromatic curry spices, rich, cooking cream for a smooth, flavorful finish.",
    image: "images/Red Chicken Curry.webp"
  },
  {
    category: "Main Course (chicken)",
    name: "TUSCAN CHICKEN",
    price: "UGX 43,000",
    description: "chicken breast fillet cooked with spinach, tomato, and garlic in a rich parmesan and cream. Served with rice or accompaniment of your choice.",
    image: "images/Tuscan Chicken.webp"
  },

  {
    category: "Main Course (beef)",
    name: "CHEZA BEEF",
    price: "UGX 41,000",
    description: "stir-fry beef fillet with onions, peppers, ginger, garlic, broccoli, eggplant, oyster mushrooms, chilli & teriyaki sauce, served with white rice",
    image: "images/Cheza Beef.webp"
  },
  {
    category: "Main Course (beef)",
    name: "GRILLED BEEF FILLET",
    price: "UGX 44,000",
    description: "grilled beef fillet served with mushroom sauce & mashed potatoes",
    image: "images/Grilled Beef Fillet.webp"
  },
  {
    category: "Main Course (beef)",
    name: "CARAMEL BEEF STEW",
    price: "UGX 41,000",
    description: "slow-cooked beef cubes with carrots, celery, onions & garlic served with mashed potatoes.",
    image: "images/Beef Stew.webp"
  },

  {
    category: "Main Course (fish)",
    name: "FISH & CHIPS",
    price: "UGX 43,000",
    description: "marinated fish fillet coated with bread crumbs, served with french fries and coleslaw.",
    image: "images/Fish n Chips.webp"
  },
  {
    category: "Main Course (fish)",
    name: "SALMON FILLET",
    price: "UGX 67,000",
    description: "grilled with olive oil, garlic, chilli, fresh herbs served with steamed vegetables",
    image: "images/Salmon Fillet.webp"
  },
  {
    category: "Main Course (fish)",
    name: "GRILLED FISH",
    price: "UGX 43,000",
    description: "Grilled fish fillet coated with fresh spices served with mushroom sauce and steamed vegetables.",
    image: "images/Grilled Fish.webp"
  },
  {
    category: "Main Course (fish)",
    name: "FISH CURRY",
    price: "UGX 44,000",
    description: "fresh tilapia fillet cutlets, cooked in a creamy coconut curry sauce.",
    image: "images/Fish Curry.webp"
  },

  {
    category: "Habesha",
    name: "FISH GOULASH",
    price: "UGX 44,000",
    description: "fish cubes cooked with onions, garlic, tomatoes, butter, and a blend of aromatic spices for a rich and flavorful dish.",
    image: "images/Fish goulash.webp"
  },
  {
    category: "Habesha",
    name: "GOAT SHEKLA",
    price: "UGX 48,000",
    description: "Pan-fried goat meat with peppers, soy sauce, and traditional Habesha spices.",
    image: "images/Goat Shekla.webp"
  },
  {
    category: "Habesha",
    name: "CHICKEN SHEKLA",
    price: "UGX 44,000",
    description: "Pan-fried chicken meat with peppers, soy sauce, and traditional Habesha spices.",
    image: "images/Chicken Shekla.webp"
  },
  {
    category: "Habesha",
    name: "FISH SHEKLA",
    price: "UGX 44,000",
    description: "Pan-fried fish cubs meat with peppers, soy sauce, and traditional Habesha spices.",
    image: "images/Fish Shekla.webp"
  },
  {
    category: "Habesha",
    name: "RED OR WHITE TIBS",
    price: "UGX 35,000",
    description: "pan fried meat cubes, onion & garlic served with gluten free taff injera",
    image: "images/Red Tibs.webp"
  },
  {
    category: "Habesha",
    name: "BAYENET MEAT SPECIAL",
    price: "UGX 49,000",
    description: "mix of different habesha dishes served in one plate with brown or white injera bread (can be Meat or Veg)",
    image: "images/Bayenet Meat Special.webp"
  },
  {
    category: "Habesha",
    name: "BAYENET VEG SPECIAL",
    price: "UGX 42,000",
    description: "mix of different habesha dishes served in one plate with brown or white injera bread (can be Meat or Veg)",
    image: "images/NO FOOD PIC.webp"
  },

  {
    category: "Pasta",
    name: "PENNE ALFREDO",
    price: "UGX 37,000",
    description: "penne pasta tossed in cream of mushroom sauce, onions, garlic, chicken & parmesan cheese",
    image: "images/Penne Alfredo Pasta.webp"
  },
  {
    category: "Pasta",
    name: "CARBONARA CHICKEN",
    price: "UGX 37,000",
    description: "rich creamy sauce with chicken tenders, onions, garlic & parmesan cheese",
    image: "images/Carbonara.webp"
  },
  {
    category: "Pasta",
    name: "CARBONARA BEEF BACON",
    price: "UGX 39,000",
    description: "rich creamy sauce with beef bacon, onions, garlic & parmesan cheese",
    image: "images/Carbonara.webp"
  },
  {
    category: "Pasta",
    name: "PENNE ARRABIATA",
    price: "UGX 30,000",
    description: "pomodoro sauce, egg plant, onions, parsley, bell peppers & parmesan cheese",
    image: "images/Penne Arrabbiata.webp"
  },
  {
    category: "Pasta",
    name: "PENNE PESTO",
    price: "UGX 38,000",
    description: "pesto sauce, chicken strips & parmesan cheese",
    image: "images/Pesto Penne Pasta.webp"
  },
  {
    category: "Pasta",
    name: "BOLOGNAISE SPAGHETTI",
    price: "UGX 32,000",
    description: "spaghetti in beef ragout sauce tossed with parmesan cheese",
    image: "images/Bolognese Pasta.webp"
  },

  {
    category: "Burgers",
    name: "BEEF BURGER",
    price: "UGX 33,000",
    description: "Beef patty, fresh tomatoes, onions, lettuce, gherkins & mayonnaise",
    image: "images/NO FOOD PIC.webp"
  },
  {
    category: "Burgers",
    name: "CHICKEN BURGER",
    price: "UGX 34,000",
    description: "chicken, fresh tomatoes, lettuce, onions & mayonnaise",
    image: "images/NO FOOD PIC.webp"
  },
  {
    category: "Burgers",
    name: "VEGGIE BURGER",
    price: "UGX 30,000",
    description: "chickpeas, lentils, zucchini, onions, carrots & fresh herbs",
    image: "images/NO FOOD PIC.webp"
  },
  // ================= COFFEE =================
  {
    category: "Coffee",
    name: "Espresso",
    price: "Single UGX 7,000 / Double UGX 9,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Macchiato",
    price: "Single UGX 8,000 / Double UGX 10,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Cappuccino",
    price: "Single UGX 12,000 / Double UGX 15,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Flat White",
    price: "Single UGX 8,000 / Double UGX 9,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Latte",
    price: "Single UGX 12,000 / Double UGX 13,000",
    description: "",
    image: "images/Latte.jpg"
  },
  {
    category: "Coffee",
    name: "Affogato",
    price: "UGX 14,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Americano",
    price: "UGX 10,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Frappuccino",
    price: "UGX 19,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Baileys Cappuccino",
    price: "UGX 22,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Caramel Latte",
    price: "UGX 17,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Hazelnut Latte",
    price: "UGX 17,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Vanilla Latte",
    price: "UGX 17,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Cinnamon Latte",
    price: "UGX 17,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Iced Latte",
    price: "UGX 13,000",
    description: "",
    image: "images/Iced Latte.jpg"
  },
  {
    category: "Coffee",
    name: "Cafe Mocha",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "White Mocha",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Iced Mocha",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "Hot Chocolate",
    price: "UGX 13,000",
    description: "",
    image: "images/Hot Chocolate.jpg"
  },
  {
    category: "Coffee",
    name: "House Coffee",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "White Hot Chocolate",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Coffee",
    name: "A Glass Of Milk",
    price: "UGX 9,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },

  // ================= TEA =================
  {
    category: "Tea",
    name: "Black Tea",
    price: "UGX 10,000",
    description: "",
    image: "images/Black Tea.jpg"
  },
  {
    category: "Tea",
    name: "English Tea",
    price: "UGX 11,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Dawa Tea",
    price: "UGX 11,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Turmeric Tea",
    price: "UGX 11,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Lemon Tea",
    price: "UGX 11,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Black Tea Spiced",
    price: "UGX 11,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Iced Tea",
    price: "UGX 13,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "African or Milk Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Camomile Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Earl Grey Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Green Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Lemon Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Peppermint Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Tea",
    name: "Herbal Freshmint Tea",
    price: "UGX 12,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },

  // ================= SMOOTHIES =================
  {
    category: "Smoothies",
    name: "Booster",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Pinacolada",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Mango Madnes",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Tropical",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Super Veggie",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Creamy Butter",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Glowing Skin",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Super Healthy 1",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  },
  {
    category: "Smoothies",
    name: "Super Healthy 2",
    price: "UGX 21,000",
    description: "",
    image: "images/NO DRINKS.webp"
  }
  
];
