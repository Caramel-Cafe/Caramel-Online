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

  {
    category: "Main Course (Chicken)",
    name: "GRILLED CHICKEN BREAST",
    price: 42000,
    description: "chicken breast marinated in aromatic herbs, grilled to perfection, and served alongside freshly steamed vegetables",
    image: "images/Grilled Chicken.webp"
  },
  {
    category: "Main Course (Chicken)",
    name: "SWEET & SPICY CHICKEN",
    price: 41000,
    description: "Boneless chicken thighs cooked in sweet chilli sauce served with rice and steamed vegetables",
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
    description: "roasted chicken fried in bbq sauce, served steamed vegetables and your choice of accompaniment.",
    image: "images/BBQ ROASTED CHICKEN.png"
  }
];
