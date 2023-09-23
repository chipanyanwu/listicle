// Source: https://chicago.eater.com/maps/best-restaurants-northwestern-students-evanston-wildcats

const restaurantData = [
  {
    id: 1,
    name: "Mustard's Last Stand",
    address: "1613 Central St #3, Evanston, IL 60201",
    description:
      "Located steps away from Ryan Field, Mustard’s Last Stand has been a tailgating destination for more than 50 years. Expect a sea of purple-clad Wildcat fans lining up for hot dogs, bratwurst, and Polish sausage on game days, though it's worth stopping by any time the weather is nice to enjoy a burger and ice cream on the patio.",
    imageUrl:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/17/c309ed16-7aa6-44c5-b7d5-d4145eb70c1f/thumbnail/1200x630/cc597d5abdcdd4074704acad6b2ba49a/screenshot-2022-08-16-204719.png?v=6616762727d81e1cb010134e0c556e29",
  },
  {
    id: 2,
    name: "Coffee Lab Evanston",
    address: "910 Noyes St, Evanston, IL 60201",
    description:
      "A popular study space for students on Northwestern’s north campus, Coffee Lab specializes in drinks and baked goods inspired by Filipino Chinese, Korean, and Japanese fare. Browse a table covered in grab-and-go pastries like traditional sweet red bean buns or linger with a matcha white chocolate chip scone and a bright purple ube latte. The space is so welcoming that students sometimes show up still wearing their pajamas.",
    imageUrl:
      "https://dailynorthwestern.com/wp-content/uploads/2022/02/COFFEELAB4_AmyChen.jpg.jpg",
  },
  {
    id: 3,
    name: "Hewn",
    address: "1733 Central St, Evanston, IL 60201",
    description:
      "The celebrated bakery offers excellent grab-and-go sandwiches plus a rotating selection of freshly made sweets such as monkey bread, kouign amann, and scones to provide a bit of energy for a study session or a delicious post-exam treat. They also offer a full espresso bar for a little pick-me-up before class or something warm to drink before heading to a game at nearby Ryan Field.",
    imageUrl:
      "https://www.hewnbread.com/wp-content/uploads/2020/10/hewn-5499.jpg",
  },
  {
    id: 4,
    name: "Stacked & Folded",
    address: "824 Noyes St, Evanston, IL 60201",
    description:
      "The fast-casual restaurant, which also has a location in Winnetka, serves up affordable fusion fare such as falafel tacos topped with tzatziki and pico de gallo and a bulgogi cheese steak accompanied by housemade chips. There are plenty of vegetarian options, though Stacked & Folded takes pride in its locally sourced meats, which are braised in-house.",
    imageUrl:
      "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/251/429/original/316814141_680301273630414_8294721216053876572_n.jpg?1682957610",
  },
  {
    id: 5,
    name: "Tomate Fresh Kitchen",
    address: "914 Noyes St, Evanston, IL 60201",
    description:
      "Lunch often brings long lines at Tomate Fresh Kitchen, a tiny carryout-only spot that draws in plenty of students and local workers with affordable Latin American street food. Save some time by ordering online to pick up a few carne asada or chicken tinga tacos topped with onions and cilantro or a hearty burrito packed with carnitas, pico de gallo, mashed Cuban beans and rice. Complete the meal with horchata or a seasonal agua fresca, with flavors including mango-ginger and passionfruit with peach.",
    imageUrl:
      "https://dailynorthwestern.com/wp-content/uploads/2015/11/PB190026.jpg",
  },
  {
    id: 6,
    name: "Soul & Smoke Evanston",
    address: "1601 Payne St, Evanston, IL 60201",
    description:
      "One of the best barbecue restaurants in Chicago, Soul & Smoke serves up Texas-style brisket, hickory-smoked spare ribs, and house-cured and smoked pastrami from a takeout window with picnic tables outside. Gather some friends and order meat by the pound or just indulge with a lunch special featuring two pulled pork sliders topped with apple slaw with collard greens or chicken gumbo on the side. A full restaurant is in the works.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/649f355d12a5e65dfdc7ef6b/1688155514923-RHHMRVCDF22RQXHC87DI/Evanston+.jpeg",
  },
  {
    id: 7,
    name: "elephant + vine",
    address: "719 Church St, Evanston, IL 60201",
    description:
      "The fast casual offshoot of Winnetka’s Spirit Elephant, elephant & vine serves vegan comfort food including cauliflower wings and a cheeseburger good enough to fool omnivores. The menu also features flavorful salads like the “Southern Comfort” featuring black beans, pickled onions, roasted corn, and spicy cilantro lime dressing, plus indulgent dairy-free mocha and salted caramel pretzel shakes. Grab a meal to go or eat in the cheerful, bright space.",
    imageUrl:
      "https://static.wixstatic.com/media/772656_a072be4fc90f4623859a5d1143ce82e4~mv2.jpg/v1/fill/w_2500,h_2090,al_c/772656_a072be4fc90f4623859a5d1143ce82e4~mv2.jpg",
  },
  {
    id: 8,
    name: "10Q Chicken",
    address: "816 Church St, Evanston, IL 60201",
    description:
      "The casual restaurant from the co-founder of Korean fast food favorite bopNgrill goes a bit farther afield than other Korean fried chicken spots like Crisp and Dak, serving spins on Nashville hot chicken and a chili buffalo sandwich with panko fried chicken breast, pickled jalapenos, and garlic parmesan aioli.",
    imageUrl:
      "https://1.bp.blogspot.com/-ViRtD7GdDb4/XWblhpovPPI/AAAAAAAAhWA/Fthn9gnCexsRsBUtF3rCUovjrHFj9w9zQCLcBGAs/s1600/IMG_5657.JPG",
  },
  {
    id: 9,
    name: "Mt. Everest Restaurant",
    address: "630 Church St, Evanston, IL 60201",
    description:
      "Mt. Everest Restaurant has been serving up Northern Indian and Nepalese fare in downtown Evanston since 1998, providing an excellent place for a family dinner, a first date or a takeout meal sure to provide plenty of leftovers. For an affordable taste, take advantage of their lunch platters available for dine-in or to-go, which include rice, naan, and a choice of two entrees such as mutter paneer or chicken vindaloo.",
    imageUrl: "https://images.otstatic.com/prod/25015565/1/huge.jpg",
  },
  {
    id: 10,
    name: "Tapas Barcelona",
    address: "1615 Chicago Ave, Evanston, IL 60201",
    description:
      "Perfect for dates and birthday celebrations, Tapas Barcelona encourages sharing from its extensive menu of affordable small plates including rotating specials and staples that have been on the menu for nearly 30 years. Carefully fish the sauteed garlic shrimp out of a sizzling dish and then soak up the spicy sauce with bread. Make sure to get plenty of horseradish sauce on the tender grilled beef skewer. Save some room for a lightly cooked banana covered in caramel sauce and pistachios served with a scoop of ice cream.",
    imageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/1/25922747.jpg",
  },
]

export default restaurantData
