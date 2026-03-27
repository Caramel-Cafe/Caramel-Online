const menuItems = [
  {
    category: "Breakfast Menu",
    name: "CARAMEL BREAKY",
    price: 36000,
    description: "Our signature breakfast burritos with curried chicken strips, peppers, onions, omelette, pair of sausage, sweet and spicy potatoes with garden salad",
    image: "images/Caramel Breaky.webp"
  },
  {
    category: "Breakfast Menu",
    name: "FARMERS BREAKFAST",
    price: 32000,
    description: "Spanish omelette is served with our curried creamy spinach, avocado slice, house gourmet bread, bread, and fresh homemade jam.",
    tag: "Best Seller",
    image: "images/Farmers Breakfast.webp"
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL CHICKEN NUGGETS WRAP",
    price: 32000,
    description: "Homemade tortilla, lettuce, tomatoes, red onion, and chicken nuggets are served with chopped salad, egg of your choice, and baked beans.",
    image: "images/CARAMEL CHICKEN NUGGETS WRAP.png"
  },
  {
    category: "Breakfast Menu",
    name: "MUESLI",
    price: 29000,
    description: "Plain Yoghurt, Banana & Pineapple, Granola, Honey & Cashew Nuts/Gnuts",
    image: "images/Muesli.webp"
  },
  {
    category: "Breakfast Menu",
    name: "BELGIAN WAFFLE",
    price: 31000,
    description: "freshly made waffles served with seasonal fruits and maple syrup, garnished with icing sugar.",
    image: "images/Belgian Waffle.webp"
  },
  {
    category: "Breakfast Menu",
    name: "AMERICAN PANCAKES",
    price: 31000,
    description: "freshly made Pancakes served with seasonal fruits and maple syrup, garnished with icing sugar.",
    image: "images/American Pancake.webp"
  },
  {
    category: "Breakfast Menu",
    name: "NORWEGIAN CROISSANT",
    price: 37000,
    description: "Butter croissant, smoked salmon, poached egg and hollandaise sauce served with salad.",
    image: "images/Norwegian Croissant.webp"
  },
  {
    category: "Breakfast Menu",
    name: "THE SIMPLE ONE",
    price: 32000,
    description: "Omelette of 2 eggs, Tuna and Fresh salad served with bread, butter and Jam.",
    image: "images/The Simple One.webp"
  },
  {
    category: "Breakfast Menu",
    name: "SAMO-MASAI",
    price: 36000,
    description: "Pair of samosa, Spanish omelette, sweet and spicy potatoes and garden salad.",
    image: "images/Samo-Masai.webp"
  },
  {
    category: "Breakfast Menu",
    name: "CARAMEL COMBO 2",
    price: 35000,
    description: "Potato wedges, Beef, Chicken strips, two eggs (of your choice), Avocado, chopped salad and one beef sausage, salad, baked beans and sliced bread.",
    image: "images/Combo 2.webp"
  },
  {
    category: "Breakfast Menu",
    name: "RANCHERS BREAKFAST",
    price: 36000,
    description: "Two fried eggs, two beef sausages, beans, beef bacon, grilled tomatoes & fresh avocado.",
    image: "images/Ranchers.webp"
  },
  {
    category: "Breakfast Menu",
    name: "GIANT SALMON OMELETTE",
    price: 39000,
    description: "Four eggs, smoked salmon cream cheese and chives, Served with fresh tomatoes and avocado, bread butter and jam, house coffe or black tea.",
    image: "images/Giant Salmon.webp"
  },
  {
    category: "Breakfast Menu",
    name: "SICILIAN BREAKFAST",
    price: 36000,
    description: "beef bacon, Potatoes and onion cooked in olive oil with 2 sunny side eggs and avocado cubes.",
    image: "images/Sicilian Breakfast.webp"
  },

  {
    category: "Starters",
    name: "FALAFEL & HUMMUS",
    price: 31000,
    description: "Served with chilli sauce, olives & freshly baked focaccia bread.",
    image: "images/Falafel and Humus.webp"
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
    price: 28000,
    description: "",
    image: "images/Lollypop.webp"
  },
  {
    category: "Starters",
    name: "CHICKEN DRUMSTICKS",
    price: 34000,
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
    price: 33000,
    description: "Freshly selected mixed lettuce, cherry tomatoes, green apples, red radish, chicken tenders, spring onions, boiled egg, English cucumber, red onions, julienne carrots dressed with ranch dressing & topped with avocado",
    image: "images/Ranch Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "THAI CHICKEN SALAD",
    price: 33000,
    description: "chicken tenders, mint, coriander, red onions, cherry tomatoes, spring onions, mixed fresh lettuce, peanuts and Thai sweet chilli dressing with garlic toasted bread",
    image: "images/Thai Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CRISPY CHICKEN SALAD",
    price: 33000,
    description: "crunchy chicken breast, mixed fresh lettuce, beetroots, carrots, red peppers, avocado, honey mustard dressing with garlic-toasted bread",
    image: "images/Crispy Chicken Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "CAESAR CHICKEN SALAD",
    price: 32000,
    description: "mixed fresh lettuce, chicken tenders, croutons, parmesan cheese, avocado, caesar dressing with garlic toasted bread",
    image: "images/Caesar Salad.webp"
  },
  {
    category: "Fresh Salads",
    name: "MEXICAN SALAD",
    price: 32000,
    description: "chicken tenders, sweetcorn, red peppers, pickled onions, roasted cauliflower, tomatoes, coriander, Gouda cheese, french dressing with garlic toasted bread",
    image: "images/Mexican Salad.webp"
  },
                            //Main Cours Chicken//
{
  category: "Main Course (Chicken)",
  name: "GRILLED CHICKEN BREAST",
  price: 42000,
  description: "Chicken breast marinated in aromatic herbs, grilled to perfection, and served alongside freshly steamed vegetables.",
  image: "images/Grilled Chicken.webp"
},
{
  category: "Main Course (Chicken)",
  name: "SWEET & SPICY CHICKEN",
  price: 41000,
  description: "Boneless chicken thighs cooked in sweet chilli sauce served with rice and steamed vegetables.",
  image: "images/Sweet and Spicy.webp"
},
{
  category: "Main Course (Chicken)",
  name: "ROASTED CHICKEN",
  price: 42000,
  description: "Marinated and slow-roasted half chicken, bursting with flavor and served with your choice of side.",
  image: "images/Roasted Chicken.webp"
},
{
  category: "Main Course (Chicken)",
  name: "BBQ ROASTED CHICKEN",
  price: 44000,
  description: "Roasted chicken fried in BBQ sauce, served with steamed vegetables and your choice of accompaniment.",
  image: "images/BBQ ROASTED CHICKEN.png"
},
{
  category: "Main Course (Chicken)",
  name: "THAI COCONUT CHICKEN",
  price: 40000,
  description: "Chicken tender cooked in creamy coconut sauce with tomato, garlic, and spices, served with your choice of accompaniment.",
  image: "images/Thai coconut.webp"
},
{
  category: "Main Course (Chicken)",
  name: "RED CHICKEN CURRY",
  price: 42000,
  description: "Chicken tender cooked in aromatic curry spices with rich cooking cream for a smooth, flavorful finish.",
  image: "images/Red Chicken Curry.webp"
},
{
  category: "Main Course (Chicken)",
  name: "TUSCAN CHICKEN",
  price: 43000,
  description: "Chicken breast fillet cooked with spinach, tomato, and garlic in rich parmesan and cream. Served with rice or accompaniment of your choice.",
  image: "images/Tuscan Chicken.webp"
},
                 // Main Cours Beef//
  {
  category: "Main Course (Beef)",
  name: "CHEZA BEEF",
  price: 41000,
  description: "Stir-fry beef fillet with onions, peppers, ginger, garlic, broccoli, eggplant, oyster mushrooms, chilli & teriyaki sauce, served with white rice.",
  image: "images/Cheza Beef.webp"
},
{
  category: "Main Course (Beef)",
  name: "GRILLED BEEF FILLET",
  price: 44000,
  description: "Grilled beef fillet served with mushroom sauce & mashed potatoes.",
  image: "images/Grilled Beef Fillet.webp"
},
{
  category: "Main Course (Beef)",
  name: "CARAMEL BEEF STEW",
  price: 41000,
  description: "Slow-cooked beef cubes with carrots, celery, onions & garlic served with mashed potatoes.",
  image: "images/Beef Stew.webp"
},

              //Main cours Fish//
  {
  category: "Main Course (Fish)",
  name: "FISH & CHIPS",
  price: 43000,
  description: "Marinated fish fillet coated with bread crumbs, served with french fries and coleslaw.",
  image: "images/Fish n Chips.webp"
},
{
  category: "Main Course (Fish)",
  name: "SALMON FILLET",
  price: 67000,
  description: "Grilled with olive oil, garlic, chilli, and fresh herbs, served with steamed vegetables.",
  image: "images/Salmon Fillet.webp"
},
{
  category: "Main Course (Fish)",
  name: "GRILLED FISH",
  price: 43000,
  description: "Grilled fish fillet coated with fresh spices, served with mushroom sauce and steamed vegetables.",
  image: "images/Grilled Fish.webp"
},
{
  category: "Main Course (Fish)",
  name: "FISH CURRY",
  price: 44000,
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
  price: 48000,
  description: "Pan-fried goat meat with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Goat Shekla.webp"
},
{
  category: "Habesha",
  name: "CHICKEN SHEKLA",
  price: 44000,
  description: "Pan-fried chicken meat with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Chicken Shekla.webp"
},
{
  category: "Habesha",
  name: "FISH SHEKLA",
  price: 44000,
  description: "Pan-fried fish cubes with peppers, soy sauce, and traditional Habesha spices.",
  image: "images/Fish Shekla.webp"
},
{
  category: "Habesha",
  name: "RED OR WHITE TIBS",
  price: 35000,
  description: "Pan-fried meat cubes with onion and garlic served with gluten-free teff injera.",
  image: "images/Red Tibs.webp"
},
{
  category: "Habesha",
  name: "BAYENET MEAT SPECIAL",
  price: 49000,
  description: "Mix of different Habesha dishes served on one plate with brown or white injera bread (meat option).",
  image: "images/Bayenet Meat Special.webp"
},
{
  category: "Habesha",
  name: "BAYENET VEG SPECIAL",
  price: 42000,
  description: "Mix of different Habesha dishes served on one plate with brown or white injera bread (vegetarian option).",
  image: "images/NO FOOD PIC.webp"
},

                     //Pasta//

  {
  category: "Pasta",
  name: "PENNE ALFREDO",
  price: 37000,
  description: "Penne pasta tossed in cream of mushroom sauce, onions, garlic, chicken & parmesan cheese.",
  image: "images/Penne Alfredo Pasta.webp"
},
{
  category: "Pasta",
  name: "CARBONARA CHICKEN",
  price: 37000,
  description: "Rich creamy sauce with chicken tenders, onions, garlic & parmesan cheese.",
  image: "images/Carbonara.webp"
},
{
  category: "Pasta",
  name: "CARBONARA BEEF BACON",
  price: 39000,
  description: "Rich creamy sauce with beef bacon, onions, garlic & parmesan cheese.",
  image: "images/Carbonara.webp"
},
{
  category: "Pasta",
  name: "PENNE ARRABIATA",
  price: 30000,
  description: "Pomodoro sauce, eggplant, onions, parsley, bell peppers & parmesan cheese.",
  image: "images/Penne Arrabbiata.webp"
},
{
  category: "Pasta",
  name: "PENNE PESTO",
  price: 38000,
  description: "Pesto sauce, chicken strips & parmesan cheese.",
  image: "images/Pesto Penne Pasta.webp"
},
{
  category: "Pasta",
  name: "BOLOGNAISE SPAGHETTI",
  price: 32000,
  description: "Spaghetti in beef ragout sauce tossed with parmesan cheese.",
  image: "images/Bolognese Pasta.webp"
},
                     //Burgers//
  {
  category: "Burgers",
  name: "BEEF BURGER",
  price: 33000,
  description: "Beef patty, fresh tomatoes, onions, lettuce, gherkins & mayonnaise.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "CHICKEN BURGER",
  price: 34000,
  description: "Chicken, fresh tomatoes, lettuce, onions & mayonnaise.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "VEGGIE BURGER",
  price: 30000,
  description: "Chickpeas, lentils, zucchini, onions, carrots & fresh herbs.",
  image: "images/NO FOOD PIC.webp"
},
{
  category: "Burgers",
  name: "CRUNCHY CHICKEN BURGER",
  price: 35000,
  description: "Crunchy fried chicken breast fillet with fresh lettuce, tomatoes, avocado slices & mayonnaise.",
  image: "images/Crunchy Chicken Burger.webp"
},
{
  category: "Burgers",
  name: "CARIBBEAN BURGER",
  price: 35000,
  description: "Chicken or beef patty with pineapple slice tossed in sweet chilli sauce, lettuce and mayonnaise.",
  image: "images/Caribbean Beef Burger.webp"
},
{
  category: "Burgers",
  name: "BBQ BURGER",
  price: 35000,
  description: "Beef or chicken patty tossed in BBQ sauce, lettuce, BBQ spread, fresh tomato slices and fried onion rings.",
  image: "images/BBQ Beef Burger.webp"
},
{
  category: "Burgers",
  name: "TEXAS BURGER",
  price: 37000,
  description: "Beef or chicken patty, BBQ sauce, rocket leaves, fried eggs, gouda cheese.",
  image: "images/Texas Burger.webp"
},
                          //Pizza//
  {
  category: "Pizzeria",
  name: "MARGARITA PIZZA",
  price: 33000,
  description: "Pomodoro sauce, mozzarella & basil leaves.",
  image: "images/Margarita Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CHICKEN FAJITA",
  price: 35000,
  description: "Marinated chicken tenders, pomodoro sauce, mixed peppers, cumin, onions, garlic, coriander, mozzarella cheese.",
  image: "images/Fajita Pizza.webp"
},
{
  category: "Pizzeria",
  name: "POLLO PIZZA",
  price: 37000,
  description: "Chicken with BBQ sauce, mozzarella, grilled onions, fresh coriander.",
  image: "images/Pollo Pizza.webp"
},
{
  category: "Pizzeria",
  name: "VEGGIE PIZZA",
  price: 33000,
  description: "Mushroom, fresh tomatoes, pomodoro mozzarella, kalamata olives, broccoli, basil leaves.",
  image: "images/Vegi Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CARAMEL MEAT SPECIAL",
  price: 38000,
  description: "Pomodoro sauce, mozzarella, beef bacon, grilled chicken, green chilli, green olives & rocket leaves.",
  image: "images/Caramel Meat Special Pizza.webp"
},
{
  category: "Pizzeria",
  name: "HAWAIIAN PIZZA",
  price: 37000,
  description: "Pomodoro sauce, mozzarella, beef bacon & pineapple.",
  image: "images/Hawaiian Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CHICKEN PESTO PIZZA",
  price: 36000,
  description: "Pesto chicken, pesto sauce, mozzarella, oregano, onions, pomodoro sauce.",
  image: "images/Pesto Pizza.webp"
},
{
  category: "Pizzeria",
  name: "CARAMEL STEAK PIZZA",
  price: 36000,
  description: "Pomodoro sauce, marinated steak strips, onions, mozzarella, oregano and tomatoes.",
  image: "images/Steak Pizza.webp"
},
{
  category: "Pizzeria",
  name: "BEEF PEPPERONI PIZZA",
  price: 34000,
  description: "Pomodoro sauce, olives, mozzarella cheese, topped with beef pepperoni.",
  image: "images/Pepperoni Pizza.webp"
},
                         // Sandwich//
  {
  category: "Sandwich",
  name: "CHICKEN PESTO SANDWICH",
  price: 34000,
  description: "Grilled chicken breast fillet, mozzarella, tomatoes with pesto sauce.",
  image: "images/Pesto Sandwich.webp"
},
{
  category: "Sandwich",
  name: "BBQ CHICKEN SANDWICH",
  price: 34000,
  description: "Grilled BBQ chicken, lettuce, tomatoes & crunchy onions.",
  image: "images/BBQ CHICKEN SANDWICH.png"
},
{
  category: "Sandwich",
  name: "STEAK SANDWICH",
  price: 35000,
  description: "Beef fillet, rocket leaves, mustard, toasted pepper & crunchy onions.",
  image: "images/Steak Sandwich.webp"
},
{
  category: "Sandwich",
  name: "SHAWARMA (CHICKEN OR BEEF)",
  price: 24000,
  description: "Chicken tenders tossed with onions and shawarma spices, tomatoes, hummus spread, and lettuce, wrapped in a tortilla or toasted with focaccia bread.",
  image: "images/Chicken Shawrama.webp"
},
{
  category: "Sandwich",
  name: "SPECIAL CLUB",
  price: 40000,
  description: "Chicken tenders, beef bacon, gouda cheese, tomatoes, lettuce, avocado, boiled egg, mayonnaise.",
  image: "images/Club Sandwhich.webp"
},
{
  category: "Sandwich",
  name: "CHICKEN FAJITA SANDWICH",
  price: 29000,
  description: "Chicken tenders marinated in fajita spices, grilled to perfection, served alongside sweet chili-infused potato wedges.",
  image: "images/Fajita Chicken Wrap.webp"
},
{
  category: "Sandwich",
  name: "BEEF FAJITA SANDWICH",
  price: 29000,
  description: "Beef marinated in fajita spices, grilled to perfection, served alongside sweet chili-infused potato wedges.",
  image: "images/Fajita Beef Wrap.webp"
},
  
                   //Kids menu//
  {
  category: "Kids Menu",
  name: "Tomato Cheese Sandwich",
  price: 24000,
  description: "Combination of fresh tomatoes and mayonnaise.",
  image: "images/Tomato Cheese Sandwich.webp"
},
{
  category: "Kids Menu",
  name: "Chicken Cheese Sandwich",
  price: 24000,
  description: "Chicken, mayonnaise, and melted cheese layered between slices of toasted bread.",
  image: "images/Chicken Cheese Sandwich.webp"
},
{
  category: "Kids Menu",
  name: "Chicken Burger",
  price: 23000,
  description: "Grilled chicken breast fillet, tomatoes, lettuce and mayonnaise served with chips.",
  image: "images/Chicken Burger.jpg"
},
{
  category: "Kids Menu",
  name: "Beef Burger",
  price: 23000,
  description: "Grilled beef patty, tomatoes, lettuce and mayonnaise served with chips.",
  image: "images/Beef Burger.jpg"
},
{
  category: "Kids Menu",
  name: "Chicken Strips",
  price: 24000,
  description: "Chicken strips served with fries.",
  image: "images/Chicken Strips.jpg"
},
{
  category: "Kids Menu",
  name: "Fish Finger",
  price: 26000,
  description: "Fish fingers served with fries.",
  image: "images/Fish Finger.jpg"
},
{
  category: "Kids Menu",
  name: "Spaghetti Bolognaise",
  price: 23000,
  description: "Spaghetti pasta cooked in bolognese sauce made from fresh tomatoes and minced beef.",
  image: "images/Spaghetti Bolognaise.jpg"
},
{
  category: "Kids Menu",
  name: "Chips and Sausage",
  price: 22000,
  description: "Chips with medium-fried sausages.",
  image: "images/Chicps and Sausage.webp"
},
{
  category: "Kids Menu",
  name: "Margarita Pizza",
  price: 25000,
  description: "Well-baked dough with mozzarella cheese and pomodoro sauce.",
  image: "images/Margarita Pizza.jpg"
},
{
  category: "Kids Menu",
  name: "Beef Bacon Pizza",
  price: 27000,
  description: "Well-baked dough with mozzarella cheese and pomodoro sauce.",
  image: "images/Beef Pizza.jpg"
},
{
  category: "Kids Menu",
  name: "Pollo Pizza",
  price: 27000,
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
}
];
