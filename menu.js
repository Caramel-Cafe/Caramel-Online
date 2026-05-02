const menuItems = [
  {
    category: "Breakfast Menu",
    name: "CARAMEL BREAKY",
    price: 38000,
    description: "Our signature breakfast burritos with curried chicken strips, peppers, onions, omelette, pair of sausage, sweet and spicy potatoes with garden salad",
    tag: "Best Seller",
    image: "images/Caramel Breaky.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "FARMERS BREAKFAST",
    price: 34000,
    description: "Spanish omelette is served with our curried creamy spinach, avocado slice, house gourmet bread, bread, and fresh homemade jam.",
    tag: "Best Seller",
    image: "images/Farmers Breakfast.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL CHICKEN NUGGETS WRAP",
    price: 34000,
    description: "Homemade tortilla, lettuce, tomatoes, red onion, and chicken nuggets are served with chopped salad, egg of your choice, and baked beans.",
    image: "images/CARAMEL CHICKEN NUGGETS WRAP.png",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "MUESLI",
    price: 32000,
    description: "Plain Yoghurt, Banana & Pineapple, Granola, Honey & Cashew Nuts/Gnuts",
    tag: "Best Seller",
    image: "images/Muesli.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "BELGIAN WAFFLE",
    price: 33000,
    description: "freshly made waffles served with seasonal fruits and maple syrup, garnished with icing sugar.",
    tag: "Best Seller",
    image: "images/Belgian Waffle.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "AMERICAN PANCAKES",
    price: 33000,
    description: "freshly made Pancakes served with seasonal fruits and maple syrup, garnished with icing sugar.",
    tag: "Best Seller",
    image: "images/American Pancake.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "NORWEGIAN CROISSANT",
    price: 39000,
    description: "Butter croissant, smoked salmon, poached egg and hollandaise sauce served with salad.",
    image: "images/Norwegian Croissant.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "THE SIMPLE ONE",
    price: 34000,
    description: "Omelette of 2 eggs, Tuna and Fresh salad served with bread, butter and Jam.",
    image: "images/The Simple One.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "SAMO-MASAI",
    price: 38000,
    description: "Pair of samosa, Spanish omelette, sweet and spicy potatoes and garden salad.",
    image: "images/Samo-Masai.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL COMBO 2",
    price: 37000,
    description: "Potato wedges, Beef, Chicken strips, two eggs (of your choice), Avocado, chopped salad and one beef sausage, salad, baked beans and sliced bread.",
    image: "images/Combo 2.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "RANCHERS BREAKFAST",
    price: 38000,
    description: "Two fried eggs, two beef sausages, beans, beef bacon, grilled tomatoes & fresh avocado.",
    image: "images/Ranchers.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "GIANT SALMON OMELETTE",
    price: 41000,
    description: "Four eggs, smoked salmon cream cheese and chives, Served with fresh tomatoes and avocado, bread butter and jam, house coffe or black tea.",
    image: "images/Giant Salmon.webp",
    breakfastWithDrink: true
  },
  {
    category: "Breakfast Menu",
    name: "SICILIAN BREAKFAST",
    price: 38000,
    description: "beef bacon, Potatoes and onion cooked in olive oil with 2 sunny side eggs and avocado cubes.",
    image: "images/Sicilian Breakfast.webp",
    breakfastWithDrink: true
  },

                                     //Starters//

  {
    category: "Starters",
    name: "FALAFEL & HUMMUS",
    price: 32000,
    description: "Served with chilli sauce, olives & freshly baked focaccia bread.",
    image: "images/Falafel and Humus.webp",
  },
  {
    category: "Starters",
    name: "CARAMEL STICKY WINGS",
    price: 29000,
    description: "served with BBQ or spicy butter sauce",
    image: "images/Chicken Wings.webp"
  },
  {
    category: "Starters",
    name: "CHICKEN LOLLIPOP",
    price: 29000,
    description: "",
    image: "images/Lollypop.webp"
  },
  {
    category: "Starters",
    name: "CHICKEN DRUMSTICKS",
    price: 36000,
    description: "Chicken drumsticks in sweet and spicy sauce, served with soft lettuce and coleslaw salad.",
    image: "images/Drumstick.webp"
  },
  {
    category: "Starters",
    name: "CLEAR SOUP",
    price: 20000,
    description: "Our signature soup — light, flavorful, and freshly prepared. Choose of Mushroom, Chicken, or Vegetable.",
    image: "images/Soup of the day (Clear chicken).webp"
  },
  {
    category: "Starters",
    name: "CREAMY SOUP",
    price: 24000,
    description: "Our signature soup — rich, smooth, and comforting. Choose of Mushroom, Chicken, or Vegetable.",
    image: "images/Soup of the day (Creamy Mushroom).webp"
  },
                //Salad//
  {
    category: "Fresh Salads",
    name: "RANCH SALAD",
    price: 35000,
    description: "Freshly selected mixed lettuce, cherry tomatoes, green apples, red radish, chicken tenders, spring onions, boiled egg, English cucumber, red onions, julienne carrots dressed with ranch dressing & topped with avocado",
    image: "images/Ranch Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "THAI CHICKEN SALAD",
    price: 35000,
    description: "chicken tenders, mint, coriander, red onions, cherry tomatoes, spring onions, mixed fresh lettuce, peanuts and Thai sweet chilli dressing with garlic toasted bread",
    image: "images/Thai Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CRISPY CHICKEN SALAD",
    price: 35000,
    description: "crunchy chicken breast, mixed fresh lettuce, beetroots, carrots, red peppers, avocado, honey mustard dressing with garlic-toasted bread",
    image: "images/Crispy Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CAESAR CHICKEN SALAD",
    price: 35000,
    description: "mixed fresh lettuce, chicken tenders, croutons, parmesan cheese, avocado, caesar dressing with garlic toasted bread",
    image: "images/Caesar Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "MEXICAN SALAD",
    price: 34000,
    description: "chicken tenders, sweetcorn, red peppers, pickled onions, roasted cauliflower, tomatoes, coriander, Gouda cheese, french dressing with garlic toasted bread",
    image: "images/Mexican Salad.webp"
  },
                            //Main Course Chicken//
{
  category: "Main Course (Chicken)",
  name: "GRILLED CHICKEN BREAST",
  price: 44000,
  description: "Chicken breast marinated in aromatic herbs, grilled to perfection, and served alongside freshly steamed vegetables.",
  image: "images/Grilled Chicken.webp"
},
{
  category: "Main Course (Chicken)",
  name: "SWEET & SPICY CHICKEN",
  price: 43000,
  description: "Boneless chicken thighs cooked in sweet chilli sauce served with rice and steamed vegetables.",
  image: "images/Sweet and Spicy.webp"
},
{
  category: "Main Course (Chicken)",
  name: "ROASTED CHICKEN",
  price: 44000,
  description: "Marinated and slow-roasted half chicken, bursting with flavor and served with your choice of side.",
  image: "images/Roasted Chicken.webp"
},
{
  category: "Main Course (Chicken)",
  name: "BBQ ROASTED CHICKEN",
  price: 45000,
  description: "Roasted chicken fried in BBQ sauce, served with steamed vegetables and your choice of accompaniment.",
  image: "images/BBQ ROASTED CHICKEN.png"
},
{
  category: "Main Course (Chicken)",
  name: "THAI COCONUT CHICKEN",
  price: 43000,
  description: "Chicken tender cooked in creamy coconut sauce with tomato, garlic, and spices, served with your choice of accompaniment.",
  image: "images/Thai coconut.webp"
},
{
  category: "Main Course (Chicken)",
  name: "RED CHICKEN CURRY",
  price: 44000,
  description: "Chicken tender cooked in aromatic curry spices with rich cooking cream for a smooth, flavorful finish.",
  image: "images/Red Chicken Curry.webp"
},
{
  category: "Main Course (Chicken)",
  name: "TUSCAN CHICKEN",
  price: 44000,
  description: "Chicken breast fillet cooked with spinach, tomato, and garlic in rich parmesan and cream. Served with rice or accompaniment of your choice.",
  image: "images/Tuscan Chicken.webp"
},
                 // Main Cours Beef//
  {
  category: "Main Course (Beef)",
  name: "CHEZA BEEF",
  price: 43000,
  description: "Stir-fry beef fillet with onions, peppers, ginger, garlic, broccoli, eggplant, oyster mushrooms, chilli & teriyaki sauce, served with white rice.",
  image: "images/Cheza Beef.webp"
},
{
  category: "Main Course (Beef)",
  name: "GRILLED BEEF FILLET",
  price: 45000,
  description: "Grilled beef fillet served with mushroom sauce & mashed potatoes.",
  image: "images/Grilled Beef Fillet.webp"
},
{
  category: "Main Course (Beef)",
  name: "CARAMEL BEEF STEW",
  price: 43000,
  description: "Slow-cooked beef cubes with carrots, celery, onions & garlic served with mashed potatoes.",
  image: "images/Beef Stew.webp"
},

              //Main cours Fish//
  {
  category: "Main Course (Fish)",
  name: "FISH & CHIPS",
  price: 44000,
  description: "Marinated fish fillet coated with bread crumbs, served with french fries and coleslaw.",
  image: "images/Fish n Chips.webp"
},
{
  category: "Main Course (Fish)",
  name: "SALMON FILLET",
  price: 69000,
  description: "Grilled with olive oil, garlic, chilli, and fresh herbs, served with steamed vegetables.",
  image: "images/Salmon Fillet.webp"
},
{
  category: "Main Course (Fish)",
  name: "GRILLED FISH",
  price: 44000,
  description: "Grilled fish fillet coated with fresh spices, served with mushroom sauce and steamed vegetables.",
  image: "images/Grilled Fish.webp"
},
{
  category: "Main Course (Fish)",
  name: "FISH CURRY",
  price: 45000,
  description: "Fresh tilapia fillet cutlets cooked in a creamy coconut curry sauce.",
  image: "images/Fish Curry.webp"
},
  
                   //Habesha//
  {
  category: "Habesha",
  name: "FISH GOULASH",
  price: 44000,
  description: "Fish cubes cooked with onions, garlic, tomatoes, butter, and a blend of aromatic spices for a rich and flavorful dish.",
  image: "images/Fish goulash.webp"
},
{
  category: "Habesha",
  name: "GOAT SHEKLA",
  price: 51000,
  description: "Pan-fried goat meat with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Goat Shekla.webp"
},
{
  category: "Habesha",
  name: "CHICKEN SHEKLA",
  price: 46000,
  description: "Pan-fried chicken meat with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Chicken Shekla.webp"
},
{
  category: "Habesha",
  name: "FISH SHEKLA",
  price: 46000,
  description: "Pan-fried fish cubes with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Fish Shekla.webp"
},
{
  category: "Habesha",
  name: "RED OR WHITE TIBS",
  price: 37000,
  description: "Pan-fried meat cubes with onion and garlic served with gluten-free teff injera.",
  image: "images/Red Tibs.webp"
},
{
  category: "Habesha",
  name: "BAYENET MEAT SPECIAL",
  price: 52000,
  description: "Mix of different Habesha dishes served on one plate with brown or white injera bread (meat option).",
  image: "images/Bayenet Meat Special.webp"
},
{
  category: "Habesha",
  name: "BAYENET VEG SPECIAL",
  price: 44000,
  description: "Mix of different Habesha dishes served on one plate with brown or white injera bread (vegetarian option).",
  image: "images/NO FOOD PIC.webp"
},

                     //Pasta//

  {
  category: "Pasta",
  name: "PENNE ALFREDO",
  price: 39000,
  description: "Penne pasta tossed in cream of mushroom sauce, onions, garlic, chicken & parmesan cheese.",
  image: "images/Penne Alfredo Pasta.webp"
},
{
  category: "Pasta",
  name: "CARBONARA CHICKEN",
  price: 38000,
  description: "Rich creamy sauce with chicken tenders, onions, garlic & parmesan cheese.",
  image: "images/Carbonara.webp"
},
{
  category: "Pasta",
  name: "CARBONARA BEEF BACON",
  price: 41000,
  description: "Rich creamy sauce with beef bacon, onions, garlic & parmesan cheese.",
  image: "images/Carbonara.webp"
},
{
  category: "Pasta",
  name: "PENNE ARRABIATA",
  price: 31000,
  description: "Pomodoro sauce, eggplant, onions, parsley, bell peppers & parmesan cheese.",
  image: "images/Penne Arrabbiata.webp"
},
{
  category: "Pasta",
  name: "PENNE PESTO",
  price: 39000,
  description: "Pesto sauce, chicken strips & parmesan cheese.",
  image: "images/Pesto Penne Pasta.webp"
},
{
  category: "Pasta",
  name: "BOLOGNAISE SPAGHETTI",
  price: 34000,
  description: "Spaghetti in beef ragout sauce tossed with parmesan cheese.",
  image: "images/Bolognese Pasta.webp"
},
                     //Burgers//
  {
  category: "Burgers",
  name: "BEEF BURGER",
  price: 34000,
  description: "Beef patty, fresh tomatoes, onions, lettuce, gherkins & mayonnaise.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "CHICKEN BURGER",
  price: 35000,
  description: "Chicken, fresh tomatoes, lettuce, onions & mayonnaise.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "VEGGIE BURGER",
  price: 31000,
  description: "Chickpeas, lentils, zucchini, onions, carrots & fresh herbs.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "CRUNCHY CHICKEN BURGER",
  price: 36000,
  description: "Crunchy fried chicken breast fillet with fresh lettuce, tomatoes, avocado slices & mayonnaise.",
  image: "images/Crunchy Chicken Burger.webp"
},
{
  category: "Burgers",
  name: "CARIBBEAN BURGER",
  price: 36000,
  description: "Chicken or beef patty with pineapple slice tossed in sweet chilli sauce, lettuce and mayonnaise.",
  image: "images/Caribbean Beef Burger.webp"
},
{
  category: "Burgers",
  name: "BBQ BURGER",
  price: 36000,
  description: "Beef or chicken patty tossed in BBQ sauce, lettuce, BBQ spread, fresh tomato slices and fried onion rings.",
  image: "images/BBQ Beef Burger.webp"
},
{
  category: "Burgers",
  name: "TEXAS BURGER",
  price: 38000,
  description: "Beef or chicken patty, BBQ sauce, rocket leaves, fried eggs, gouda cheese.",
  image: "images/Texas Burger.webp"
},
                          //Pizza//
  {
  category: "Pizzeria",
  name: "MARGARITA PIZZA",
  price: 35000,
  description: "Pomodoro sauce, mozzarella & basil leaves.",
  image: "images/Margarita Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CHICKEN FAJITA",
  price: 37000,
  description: "Marinated chicken tenders, pomodoro sauce, mixed peppers, cumin, onions, garlic, coriander, mozzarella cheese.",
  image: "images/Fajita Pizza.webp"
},
{
  category: "Pizzeria",
  name: "POLLO PIZZA",
  price: 39000,
  description: "Chicken with BBQ sauce, mozzarella, grilled onions, fresh coriander.",
  image: "images/Pollo Pizza.webp"
},
{
  category: "Pizzeria",
  name: "VEGGIE PIZZA",
  price: 35000,
  description: "Mushroom, fresh tomatoes, pomodoro mozzarella, kalamata olives, broccoli, basil leaves.",
  image: "images/Vegi Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CARAMEL MEAT SPECIAL",
  price: 39000,
  description: "Pomodoro sauce, mozzarella, beef bacon, grilled chicken, green chilli, green olives & rocket leaves.",
  image: "images/Caramel Meat Special Pizza.webp"
},
{
  category: "Pizzeria",
  name: "HAWAIIAN PIZZA",
  price: 39000,
  description: "Pomodoro sauce, mozzarella, beef bacon & pineapple.",
  image: "images/Hawaiian Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CHICKEN PESTO PIZZA",
  price: 38000,
  description: "Pesto chicken, pesto sauce, mozzarella, oregano, onions, pomodoro sauce.",
  image: "images/Pesto Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CARAMEL STEAK PIZZA",
  price: 30000,
  description: "Pomodoro sauce, marinated steak strips, onions, mozzarella, oregano and tomatoes.",
  image: "images/Steak Pizza.webp"
},
{
  category: "Pizzeria",
  name: "BEEF PEPPERONI PIZZA",
  price: 36000,
  description: "Pomodoro sauce, olives, mozzarella cheese, topped with beef pepperoni.",
  image: "images/Pepperoni Pizza.webp"
},
                         // Sandwich//
  {
  category: "Sandwich",
  name: "CHICKEN PESTO SANDWICH",
  price: 35000,
  description: "Grilled chicken breast fillet, mozzarella, tomatoes with pesto sauce.",
  image: "images/Pesto Sandwich.webp"
},
{
  category: "Sandwich",
  name: "BBQ CHICKEN SANDWICH",
  price: 35000,
  description: "Grilled BBQ chicken, lettuce, tomatoes & crunchy onions.",
  image: "images/BBQ CHICKEN SANDWICH.png"
},
{
  category: "Sandwich",
  name: "STEAK SANDWICH",
  price: 36000,
  description: "Beef fillet, rocket leaves, mustard, toasted pepper & crunchy onions.",
  image: "images/Steak Sandwich.webp"
},
{
  category: "Sandwich",
  name: "SHAWARMA (CHICKEN OR BEEF)",
  price: 26000,
  description: "Chicken tenders tossed with onions and shawarma spices, tomatoes, hummus spread, and lettuce, wrapped in a tortilla or toasted with focaccia bread.",
  image: "images/Chicken Shawrama.webp"
},
{
  category: "Sandwich",
  name: "SPECIAL CLUB",
  price: 42000,
  description: "Chicken tenders, beef bacon, gouda cheese, tomatoes, lettuce, avocado, boiled egg, mayonnaise.",
  image: "images/Club Sandwhich.webp"
},
{
  category: "Sandwich",
  name: "CHICKEN FAJITA SANDWICH",
  price: 30000,
  description: "Chicken tenders marinated in fajita spices, grilled to perfection, served alongside sweet chili-infused potato wedges.",
  image: "images/Fajita Chicken Wrap.webp"
},
{
  category: "Sandwich",
  name: "BEEF FAJITA SANDWICH",
  price: 30000,
  description: "Beef marinated in fajita spices, grilled to perfection, served alongside sweet chili-infused potato wedges.",
  image: "images/Fajita Beef Wrap.webp"
},
  
                   //Kids menu//
  {
  category: "Kids Menu",
  name: "Tomato Cheese Sandwich",
  price: 26000,
  description: "Combination of fresh tomatoes and mayonnaise.",
  image: "images/Tomato Cheese Sandwich.webp"
},
{
  category: "Kids Menu",
  name: "Chicken Cheese Sandwich",
  price: 26000,
  description: "Chicken, mayonnaise, and melted cheese layered between slices of toasted bread.",
  image: "images/Chicken Cheese Sandwich.webp"
},
{
  category: "Kids Menu",
  name: "Chicken Burger",
  price: 25000,
  description: "Grilled chicken breast fillet, tomatoes, lettuce and mayonnaise served with chips.",
  image: "images/Chicken Burger.jpg"
},
{
  category: "Kids Menu",
  name: "Beef Burger",
  price: 25000,
  description: "Grilled beef patty, tomatoes, lettuce and mayonnaise served with chips.",
  image: "images/Beef Burger.jpg"
},
{
  category: "Kids Menu",
  name: "Chicken Strips",
  price: 26000,
  description: "Chicken strips served with fries.",
  image: "images/Chicken Strips.jpg"
},
{
  category: "Kids Menu",
  name: "Fish Finger",
  price: 28000,
  description: "Fish fingers served with fries.",
  image: "images/Fish Finger.jpg"
},
{
  category: "Kids Menu",
  name: "Spaghetti Bolognaise",
  price: 25000,
  description: "Spaghetti pasta cooked in bolognese sauce made from fresh tomatoes and minced beef.",
  image: "images/Spaghetti Bolognaise.jpg"
},
{
  category: "Kids Menu",
  name: "Chips and Sausage",
  price: 24000,
  description: "Chips with medium-fried sausages.",
  image: "images/Chicps and Sausage.webp"
},
{
  category: "Kids Menu",
  name: "Margarita Pizza",
  price: 27000,
  description: "Well-baked dough with mozzarella cheese and pomodoro sauce.",
  image: "images/Margarita Pizza.jpg"
},
{
  category: "Kids Menu",
  name: "Beef Bacon Pizza",
  price: 29000,
  description: "Well-baked dough with mozzarella cheese and pomodoro sauce.",
  image: "images/Beef Pizza.jpg"
},
{
  category: "Kids Menu",
  name: "Pollo Pizza",
  price: 29000,
  description: "",
  image: "images/Kidi Chicken Pizza.webp"
},
{
  category: "Kids Menu",
  name: "Milkshake",
  price: 14000,
  description: "",
  image: "images/Milkshake.jpg"
},
{
  category: "Kids Menu",
  name: "Fresh Juice",
  price: 8000,
  description: "",
  image: "images/Fresh Juice.jpg"
},
                    // Coffee//
  {
  category: "Coffee",
  name: "Espresso (Single)",
  price: 8000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Espresso (Double)",
  price: 10000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Macchiato (Single)",
  price: 9000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Macchiato (Double)",
  price: 11000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Cappuccino (Single)",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Cappuccino (Double)",
  price: 16000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Flat White (Single)",
  price: 9000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Flat White (Double)",
  price: 11000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Latte (Single)",
  price: 13000,
  description: "",
  image: "images/Latte.jpg"
},
{
  category: "Coffee",
  name: "Latte (Double)",
  price: 14000,
  description: "",
  image: "images/Latte.jpg"
},
{
  category: "Coffee",
  name: "Affogato",
  price: 15000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Americano",
  price: 11000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Frappuccino",
  price: 20000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Baileys Cappuccino",
  price: 23000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Caramel Latte",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Hazelnut Latte",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Vanilla Latte",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Cinnamon Latte",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Iced Latte",
  price: 14000,
  description: "",
  image: "images/Iced Latte.jpg"
},
{
  category: "Coffee",
  name: "Cafe Mocha",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "White Mocha",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Iced Mocha",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "Hot Chocolate",
  price: 14000,
  description: "",
  image: "images/Hot Chocolate.jpg"
},
{
  category: "Coffee",
  name: "House Coffee",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "White Hot Chocolate",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Coffee",
  name: "A Glass Of Milk",
  price: 10000,
  description: "",
  image: "images/NO DRINKS.webp"
},
             //Tea//
  {
  category: "Tea",
  name: "Black Tea",
  price: 11000,
  description: "",
  image: "images/Black Tea.jpg"
},
{
  category: "Tea",
  name: "English Tea",
  price: 12000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Dawa Tea",
  price: 12000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Turmeric Tea",
  price: 12000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Lemon Tea",
  price: 12000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Black Tea Spiced",
  price: 12000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Iced Tea",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "African or Milk Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Camomile Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Earl Grey Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Green Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Lemon Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Peppermint Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Tea",
  name: "Herbal Freshmint Tea",
  price: 13000,
  description: "",
  image: "images/NO DRINKS.webp"
},
  
              //Smoothie//
  {
  category: "Smoothies",
  name: "Booster",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Pinacolada",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Mango Madness",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Tropical",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Super Veggie",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Creamy Butter",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Glowing Skin",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Super Healthy 1",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Smoothies",
  name: "Super Healthy 2",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
                   //Fresh Juice//

  {
  category: "Fresh Juices",
  name: "Orange Juice",
  price: 19000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Pineapple Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Watermelon Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Passion Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Mango Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Carrot Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Lemonade",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Apple Juice",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Lemon Mint",
  price: 15000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Pineapple Mint",
  price: 15000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Fresh Juices",
  name: "Mixed Juice",
  price: 14000,
  description: "",
  image: "images/NO DRINKS.webp"
},
  
                  //Mojitos//

  {
  category: "Mojitos",
  name: "Mint Mojito",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mojitos",
  name: "Strawberry Mojito",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mojitos",
  name: "Kiwi Mojito",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
                 //Milkshake//
  {
  category: "Milkshake",
  name: "Oreo Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Vanilla Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Chocolate Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Cookies Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Unicorn Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Strawberry Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Brownie Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Stracciatella Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Milkshake",
  name: "Coconut Milkshake",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
             //Soft drinks//

  {
  category: "Soft Drinks",
  name: "Coca Cola",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Coke Zero",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Fanta",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Soda Water",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Sprite",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Stony",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Tonic Water",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Red Bull",
  price: 11000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Soft Drinks",
  name: "Krest",
  price: 5000,
  description: "",
  image: "images/NO DRINKS.webp"
},
                //Mocktails//

  {
  category: "Mocktails",
  name: "Material Girl",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Cranberry Pucker",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Passionate Girl",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Cool Down",
  price: 18000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Virgin Strawberry Daiquiri",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Virgin Captain Colada",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Material Boy",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
{
  category: "Mocktails",
  name: "Mango Pucker",
  price: 22000,
  description: "",
  image: "images/NO DRINKS.webp"
},
              //Cocktails//

  {
  category: "Cocktails",
  name: "Aperol Martini",
  price: 33000,
  description: "Ice cubes, slice of orange, Martini Bianco, 3 parts prosecco (or dry sparkling wine), 2 parts Aperol, 1 splash of soda.",
  image: "images/The Aperols.jpg"
},
{
  category: "Cocktails",
  name: "Aperol Spritz",
  price: 32000,
  description: "Ice cubes, slice of orange, 3 parts prosecco (or dry sparkling wine), 2 parts Aperol, 1 splash of soda.",
  image: "images/The Aperols.jpg"
},
{
  category: "Cocktails",
  name: "Bourbon Aperol",
  price: 36000,
  description: "Ice cubes, slice of orange, bourbon, prosecco, Aperol and soda.",
  image: "images/The Aperols.jpg"
},
{
  category: "Cocktails",
  name: "Slap & Tickle",
  price: 32000,
  description: "Monin berry purée, triple sec, Absolut vodka topped with Red Bull.",
  image: "images/SLAP & TICKLE.jpg"
},
{
  category: "Cocktails",
  name: "Faithful Bitch",
  price: 32000,
  description: "Absolut vodka, tang, sour apple, lemonade and grenadine.",
  image: "images/FAITHFULL BITCH.jpg"
},
{
  category: "Cocktails",
  name: "Desperate House Wife",
  price: 31000,
  description: "Absolut vodka, peach schnapps, lemon juice, passion purée, orange juice and lemonade.",
  image: "images/DESPERATE HOUSE WIFE.jpg"
},
{
  category: "Cocktails",
  name: "Kiwi Mojito",
  price: 32000,
  description: "Fresh kiwi, mint, Havana Club rum, crushed ice and soda.",
  image: "images/MOJITOS.jpg"
},
{
  category: "Cocktails",
  name: "Classic Mojito",
  price: 32000,
  description: "Fresh lime, mint, Havana Club rum, crushed ice and soda.",
  image: "images/MOJITOS.jpg"
},
{
  category: "Cocktails",
  name: "Strawberry Mojito",
  price: 32000,
  description: "Strawberries, mint, Havana Club rum, strawberry liqueur and soda.",
  image: "images/MOJITOS.jpg"
},
{
  category: "Cocktails",
  name: "Pan Galactic",
  price: 36000,
  description: "Vodka, orange juice, cherry liqueur, grenadine, peach schnapps, blue curaçao and citrus mix.",
  image: "images/PAN GALACTIC.jpg"
},
{
  category: "Cocktails",
  name: "7 Devils",
  price: 38000,
  description: "Mix of seven spirits with orange and cranberry juice.",
  image: "images/7 DEVILS.jpg"
},
{
  category: "Cocktails",
  name: "After Sex",
  price: 35000,
  description: "Vodka, banana liqueur, orange juice and grenadine.",
  image: "images/AFTER SEX AND IRON MAN.jpg"
},
{
  category: "Cocktails",
  name: "Iron Man",
  price: 35000,
  description: "Rum, gin, vodka, melon liqueur, sour mix and orange juice.",
  image: "images/AFTER SEX AND IRON MAN.jpg"
},
{
  category: "Cocktails",
  name: "Long Island Iced Tea",
  price: 38000,
  description: "Five white spirits with lemon, lime and a splash of coke.",
  image: "images/LONG ISLAND.jpg"
},
{
  category: "Cocktails",
  name: "Mango Frozen Margarita",
  price: 34000,
  description: "Tequila blended with mango, sugar and triple sec.",
  image: "images/FROZEN MARGARITA.jpg"
},
{
  category: "Cocktails",
  name: "Classic Frozen Margarita",
  price: 32000,
  description: "Tequila blended with lemon, lime, sugar and triple sec.",
  image: "images/FROZEN MARGARITA.jpg"
},
{
  category: "Cocktails",
  name: "Strawberry Daiquiri",
  price: 33000,
  description: "Rum, strawberry liqueur, lime and strawberry juice.",
  image: "images/STRAWBERRY DAIQUIRI.jpg"
},
{
  category: "Cocktails",
  name: "Moscow Mule",
  price: 32000,
  description: "Vodka, ginger beer, lime juice and lime wedges.",
  image: "images/MOSCOW MULE.jpg"
},
{
  category: "Cocktails",
  name: "Old Fashioned",
  price: 25000,
  description: "Whiskey, sugar syrup, bitters and orange zest.",
  image: "images/OLD FASHIONED.jpg"
},
{
  category: "Cocktails",
  name: "Dirty Martini",
  price: 29000,
  description: "Vodka, olive water and dry martini.",
  image: "images/DIRTY MARTINI.jpg"
},
{
  category: "Cocktails",
  name: "Whiskey Sour",
  price: 31000,
  description: "Whiskey, bitters, lime and egg wash.",
  image: "images/WHISKEY SMASH.jpg"
},
{
  category: "Cocktails",
  name: "Mixed Berry Sangria",
  price: 28000,
  description: "Red wine with berry purée, citrus fruits and lemonade (glass price).",
  image: "images/MIXED BERRY SANGRIA.jpg"
},
{
  category: "Cocktails",
  name: "The Big Bang",
  price: 28000,
  description: "White wine, vodka, gin, kiwi purée, cucumber, lemon and apple juice (glass price).",
  image: "images/THE BIG BANG.jpg"
},
{
  category: "Cocktails",
  name: "Jäger Bomb",
  price: 21000,
  description: "Jägermeister with Red Bull.",
  image: "images/JÄGER BOMB.jpg"
},
{
  category: "Cocktails",
  name: "Irish Coffee",
  price: 26000,
  description: "Jameson whiskey, hot coffee, cream and sugar syrup.",
  image: "images/IRISH COFFEE.jpg"
},
           //Bakery//

{
  category: "Bakery",
  name: "Sweet Bread",
  price: 9000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "Cramique Bread",
  price: 13000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "Brown Bread",
  price: 8000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "White Bread",
  price: 8000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "Baguette Bread",
  price: 7000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "Sunflower Bread",
  price: 10000,
  description: "",
  image: "images/No Bread.webp"
},
{
  category: "Bakery",
  name: "Gluten Free Bread",
  price: 17000,
  description: "",
  image: "images/No Bread.webp"
},
                //Pastries//

  {
  category: "Pastries",
  name: "Black Forest Cake (Slice)",
  price: 17000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Black Forest Cake (Full)",
  price: 125000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Blueberry Cheese Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Blueberry Cheese Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Caramel Cheese Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Caramel Cheese Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocoberry Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocoberry Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocolate Cheese Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocolate Lovers Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocolate Lovers Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocolate Nutella Cheese Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Chocolate Strawberry Cheese Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Lotus Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Nutella Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Nutella Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Red Velvet Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Red Velvet Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Toffe Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Toffe Cake (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Purple Velvet (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "Purple Velvet (Full)",
  price: 135000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "White Forest Cake (Slice)",
  price: 18000,
  description: "",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Pastries",
  name: "White Forest Cake (Full)",
  price: 125000,
  description: "",
  image: "images/NO FOOD PIC.webp"
}
];
