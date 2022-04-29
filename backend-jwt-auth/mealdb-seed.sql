INSERT INTO users (
                username, 
                password, 
                first_name, 
                last_name, 
                email, 
                is_admin)
VALUES 
(
        'sam123',
        'sam@123',
        'Sam123',
        'sammy',
        'sam@email.com',
        FALSE
),
(
        'guest',
        'guest',
        'Guest',
        'Guest',
        'guest@email.com',
        FALSE
),
(
        'admin',
        'password',
        'Test',
        'Admin',
        'test@email.com',
        TRUE
);

INSERT INTO reviews (username, review, meal_id)
VALUES ('guest', 'loved this food..',  1);

-- INSERT INTO comments (comment)
-- VALUES ('I want to try too.');

INSERT INTO categories (
        
        category,
        image,
        description )
VALUES 
(       
         
         'Beef',
         'https://www.themealdb.com/images/category/beef.png',
         'Beef is the culinary name for meat from cattle particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]'
),
(
         
         'Chicken',
         'https://www.themealdb.com/images/category/chicken.png',
         'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.'
),
(
         
         'Cake',
         'https://www.themealdb.com/images/category/dessert.png',
         'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal. The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.'
),
(
         
         'Lamb',
         'https://www.themealdb.com/images/category/lamb.png',
         'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.'
),
(
         
         'Taco',
         'https://www.themealdb.com/images/category/miscellaneous.png',
         'General foods that dont fit into another category'
),
(
         
         'Pasta',
         'https://www.themealdb.com/images/category/pasta.png',
         'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).'
),
(
         
         'Pork',
         'https://www.themealdb.com/images/category/pork.png',
         'Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork. Pork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.'
),
(
         
         'Seafood',
         'https://www.themealdb.com/images/category/seafood.png',
         'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term seafood is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.'
),
(
         
         'Side',
         'https://www.themealdb.com/images/category/side.png',
         'A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).'
),
(
         
         'Starter',
         'https://www.themealdb.com/images/category/starter.png',
         'An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal. Historically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors dœuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25'
),
(
         
         'Vegan',
         'https://www.themealdb.com/images/category/vegan.png',
         'Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /viɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.'
),
(
        
         'Vegetarian',
         'https://www.themealdb.com/images/category/vegetarian.png',
         'Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter. Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.'
),
(
        
        'Breakfast',
         'https://www.themealdb.com/images/category/breakfast.png',
         'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more typical, or traditional, breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
),
(
         
         'Goat',
         'https://www.themealdb.com/images/category/goat.png',
         'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.'
);


INSERT INTO meals 
(
        meal, 
        category, 
        area, 
        instructions, 
        image, 
        youtube 
)
VALUES 
(
         
         'Chicken Handi',
         'Chicken',
         'Indian',
         'Take a large pot or wok, big enough to cook all the chicken and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside. To the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes. Then return the fried onion to the pot and stir. Add ginger paste and sauté well. Now add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir. Next goes in the spices turmeric powder and red chilli powder. Sauté the spices well for couple of minutes. Add the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor so do not expedite this step by putting it on high heat. When the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doest split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well. Finally add the cream and give a final mix to combine everything well. Sprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!',
         'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',

         'https://www.youtube.com/watch?v=IO0issT0Rmc'
),
(
         
        'Chicken Congee',
        'Chicken',
        'Chinese',
        'STEP 1 - MARINATING THE CHICKEN In a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well. Set the chicken aside. STEP 2 - RINSE THE WHITE RICE Rinse the rice in a metal bowl or pot a couple times and then drain the water. STEP 2 - BOILING THE WHITE RICE Next add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes. After 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference. Next add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes. After an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds. Serve the rice porridge in a bowl Optional: add Coriander on top of the rice porridge.',
        'https://www.themealdb.com/images/media/meals/1529446352.jpg',
        'https://www.youtube.com/watch?v=kqEfk801E94'
),
(
         
        'Chicken Karaage',

        'Chicken',
        'Japanese',
        'Add the ginger, garlic, soy sauce, sake and sugar to a bowl and whisk to combine. Add the chicken, then stir to coat evenly. Cover and refrigerate for at least 1 hour. Add 1 inch of vegetable oil to a heavy bottomed pot and heat until the oil reaches 360 degrees F. Line a wire rack with 2 sheets of paper towels and get your tongs out. Put the potato starch in a bowl Add a handful of chicken to the potato starch and toss to coat each piece evenly. Fry the karaage in batches until the exterior is a medium brown and the chicken is cooked through. Transfer the fried chicken to the paper towel lined rack. If you want the karaage to stay crispy longer, you can fry the chicken a second time, until its a darker color after its cooled off once. Serve with lemon wedges.',
        'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',

        'https://www.youtube.com/watch?v=XivddFddthc'
),

(
         
         'Beef Rendang',

         'Beef',
         'Malaysian',
         'Chop the spice paste ingredients and then blend it in a food processor until fine. Heat the oil in a stew pot, add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic. Add the beef and the pounded lemongrass and stir for 1 minute. Add the coconut milk, tamarind juice, water, and simmer on medium heat, stirring frequently until the meat is almost cooked. Add the kaffir lime leaves, kerisik (toasted coconut), sugar or palm sugar, stirring to blend well with the meat. Lower the heat to low, cover the lid, and simmer for 1 to 1 1/2 hours or until the meat is really tender and the gravy has dried up. Add more salt and sugar to taste. Serve immediately with steamed rice and save some for overnight.',
         'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg',

         'https://www.youtube.com/watch?v=Ot-dmfBaZrA'

),
(
         
         'Szechuan Beef',

         'Beef',
         'Chinese',
         'STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, sesame seed oil, white pepper, egg white, 2 Tablespoon of corn starch and 1 Tablespoon of oil. STEP 2 - STIR FRY First Cook the beef by adding 2 Tablespoon of oil until the beef is golden brown. Set the beef aside In a wok add 1 Tablespoon of oil, minced ginger, minced garlic and stir-fry for few seconds. Next add all of the vegetables and then add sherry cooking wine and 1 cup of water. To make the sauce add oyster sauce, hot pepper sauce, and sugar. add the cooked beef and 1 spoon of soy sauce To thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until its the right thickness',

         'https://www.themealdb.com/images/media/meals/1529443236.jpg',

         'https://www.youtube.com/watch?v=SQGZqZYz7Ms'

),
(
         
         'Beef Wellington',

         'Beef',
         'British',
         'Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool. Heat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You dont want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard. Lay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape. Roll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest. Heat the oven to 200C, 400F, gas 6. Lightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.',
         'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
         
         'https://www.youtube.com/watch?v=FS8u1RBdf6I'

),
(
         
         'Beef stroganoff',

         'Beef',
         'Russian',
         'Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate. Tip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the crème fraîche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice.',
         'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',

         'https://www.youtube.com/watch?v=PQHgQX1Ss74'

),
(
         
         'Minced Beef Pie',

         'Beef',
        'British',
         'Preheat the oven to 200C/400F/Gas 6. Heat the oil in a deep frying pan and fry the beef mince for 4-5 minutes, breaking it up with a wooden spoon as it browns. Add the onion and cook for 2-3 minutes, then stir in the tomato purée and cook for 2-3 more minutes. Stir in the flour and cook for a further minute, then add the chopped mushrooms, the stout or beef stock and a couple of dashes of Worcestershire sauce. Bring to the boil, then reduce the heat, cover the pan with a lid and leave to simmer for 20 minutes. Set aside and leave to cool, then turn the meat mixture into a one litre pie dish. Roll out the pastry on a floured work surface until it is slightly larger than the pie dish. Gently drape the pastry over the dish, pressing firmly onto the edges. Trim, then shape the edges into a fluted shape. Cut some leaf shapes out of the pastry trimmings and decorate the top of the pie, sticking them to the pastry with the beaten egg yolk. Make three or four slits in the pastry to allow the steam to escape, then brush the pie with the rest of the beaten egg yolk and bake in the oven for 20-25 minutes or until golden-brown. To serve, slice into wedges.',
         'https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg',

         'https://www.youtube.com/watch?v=QY47h-uqq5g'


),

(
         
        'Chicken Marengo',

        'Chicken',
        'French',
         'Heat the oil in a large flameproof casserole dish and stir-fry the mushrooms until they start to soften. Add the chicken legs and cook briefly on each side to colour them a little. Pour in the passata, crumble in the stock cube and stir in the olives. Season with black pepper  you shouldnt need salt. Cover and simmer for 40 mins until the chicken is tender. Sprinkle with parsley and serve with pasta and a salad, or mash and green veg, if you like.',
        'https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg',

        'https://www.youtube.com/watch?v=U33HYUr-0Fw'
),

(
       
        'Tandoori chicken',
        'Chicken',
        'Indian',
        'Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times then turn them in the juice and set aside for 10 mins. Mix all of the marinade ingredients together and pour over the chicken. Give everything a good mix then cover and chill for at least 1 hr. This can be done up to a day in advance. Heat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through.',
        'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
       
        'https://www.youtube.com/watch?v=-CKvt1KNU74'
),
(
     
        'Chicken Couscous',

        'Chicken',
        'Moroccan',
        'Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more. Tip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.',
        'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',

        'https://www.youtube.com/watch?v=GZQGy9oscVk'
),
(
        
        'Kung Pao Chicken',

        'Chicken',
        'Chinese',
        'Combine the sake or rice wine, soy sauce, sesame oil and cornflour dissolved in water. Divide mixture in half. In a glass dish or bowl, combine half of the sake mixture with the chicken pieces and toss to coat. Cover dish and place in refrigerator for about 30 minutes. In a medium frying pan, combine remaining sake mixture, chillies, vinegar and sugar. Mix together and add spring onion, garlic, water chestnuts and peanuts. Heat sauce slowly over medium heat until aromatic. Meanwhile, remove chicken from marinade and sauté in a large frying pan until juices run clear. When sauce is aromatic, add sautéed chicken and let simmer together until sauce thickens.',
        'https://www.themealdb.com/images/media/meals/1525872624.jpg',

        'https://www.youtube.com/watch?v=QqdcCHQlOe0'
),
(
        
        'Chicken Basquaise',
        'Chicken',
        'French',
        'Preheat the oven to 180°C/Gas mark 4. Have the chicken joints ready to cook. Heat the butter and 3 tbsp olive oil in a flameproof casserole or large frying pan. Brown the chicken pieces in batches on both sides, seasoning them with salt and pepper as you go. Dont crowd the pan - fry the chicken in small batches, removing the pieces to kitchen paper as they are done. Add a little more olive oil to the casserole and fry the onions over a medium heat for 10 minutes, stirring frequently, until softened but not browned. Add the rest of the oil, then the peppers and cook for another 5 minutes. Add the chorizo, sun-dried tomatoes and garlic and cook for 2-3 minutes. Add the rice, stirring to ensure it is well coated in the oil. Stir in the tomato paste, paprika, bay leaves and chopped thyme. Pour in the stock and wine. When the liquid starts to bubble, turn the heat down to a gentle simmer. Press the rice down into the liquid if it isnt already submerged and place the chicken on top. Add the lemon wedges and olives around the chicken. Cover and cook in the oven for 50 minutes. The rice should be cooked but still have some bite, and the chicken should have juices that run clear when pierced in the thickest part with a knife. If not, cook for another 5 minutes and check again.',
        'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
 
        'https://www.youtube.com/watch?v=emfm6TwsVhg'
),
(
      
         'Chicken Parmentier',

         'Chicken',
         'French',
         'For the topping, boil the potatoes in salted water until tender. Drain and push through a potato ricer, or mash thoroughly. Stir in the butter, cream and egg yolks. Season and set aside. For the filling, melt the butter in a large pan. Add the shallots, carrots and celery and gently fry until soft, then add the garlic. Pour in the wine and cook for 1 minute. Stir in the tomato purée, chopped tomatoes and stock and cook for 10–15 minutes, until thickened. Add the shredded chicken, olives and parsley. Season to taste with salt and pepper. Preheat the oven to 180C/160C Fan/Gas 4. Put the filling in a 20x30cm/8x12in ovenproof dish and top with the mashed potato. Grate over the Gruyère. Bake for 30–35 minutes, until piping hot and the potato is golden-brown.',
         'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg',

         'https://www.youtube.com/watch?v=tiG-xlmeyjg'
),
(
        
         'Brown Stew Chicken',

         'Chicken',
         'Jamaican',
         'Squeeze lime over chicken and rub well. Drain off excess lime juice. Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour. Heat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce. Lightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces. Drain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes. Mix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.',
         'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',

         'https://www.youtube.com/watch?v=_gFB1fkNhXs'
),
(
         
         'Katsu Chicken curry',

         'Chicken',
         'Japanese',
        '-Prep:15min    -Cook:30min    Ready in:45min  For the curry sauce: Heat oil in medium non-stick saucepan, add onion and garlic and cook until softened. Stir in carrots and cook over low heat for 10 to 12 minutes. Add flour and curry powder; cook for 1 minute. Gradually stir in stock until combined; add honey, soy sauce and bay leaf. Slowly bring to the boil. Turn down heat and simmer for 20 minutes or until sauce thickens but is still of pouring consistency. Stir in garam masala. Pour the curry sauce through a sieve; return to saucepan and keep on low heat until ready to serve. For the chicken: Season both sides of chicken breasts with salt and pepper. Place flour, egg and breadcrumbs in separate bowls and arrange in a row. Coat the chicken breasts in flour, then dip them into the egg, then coat in breadcrumbs, making sure you cover both sides. Heat oil in large frying pan over medium-high heat. Place chicken into hot oil and cook until golden brown, about 3 or 4 minutes each side. Once cooked, place on kitchen paper to absorb excess oil. Pour curry sauce over chicken, serve with white rice and enjoy!',
        'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',

         'https://www.youtube.com/watch?v=MWzxDFRtVbc'
),
(
        
         'Nutty Chicken Curry',

         'Chicken',
         'Indian',
         'Finely slice a quarter of the chilli, then put the rest in a food processor with the ginger, garlic, coriander stalks and one-third of the leaves. Whizz to a rough paste with a splash of water if needed. Heat the oil in a frying pan, then quickly brown the chicken chunks for 1 min. Stir in the paste for another min, then add the peanut butter, stock and yogurt. When the sauce is gently bubbling, cook for 10 mins until the chicken is just cooked through and sauce thickened. Stir in most of the remaining coriander, then scatter the rest on top with the chilli, if using. Eat with rice or mashed sweet potato.',
         'https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg',

         'https://www.youtube.com/watch?v=nSQNfZxOdeU'
),
(
        
        'General Tsos Chicken',

         'Chicken',
         'Chinese',
         'DIRECTIONS: STEP 1 - SAUCE In a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar. Mix together well and set aside. STEP 2 - MARINATING THE CHICKEN In a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch STEP 3 - DEEP FRY THE CHICKEN Deep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they dont stick together. Set the chicken aside. STEP 4 - STIR FRY Add the sauce to the wok and then the broccoli and wait until it is boiling. To thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until its the right thickness. Next add in the chicken and stir-fry for a minute and serve on a plate',
         'https://www.themealdb.com/images/media/meals/1529444113.jpg',

         'https://www.youtube.com/watch?v=wWGwz0iBmvU'
);

-- (
        
--          "Kentucky Fried Chicken",

--          "Chicken",
--          "American",
--          "Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients. Combine spice mix with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.",
--          "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",

--          "https://www.youtube.com/watch?v=PTUxCvCz8Bc"
-- ),
-- (
        
--          "Chicken Ham and Leek Pie",

--          "Chicken",
--          "British",
--          "Heat the chicken stock in a lidded saucepan. Add the chicken breast and bring to a low simmer. Cover with a lid and cook for 10 minutes. Remove the chicken breasts from the water with tongs and place on a plate. Pour the cooking liquor into a large jug. Melt 25g/1oz of the butter in a large heavy-based saucepan over a low heat. Stir in the leeks and fry gently for two minutes, stirring occasionally until just softened. Add the garlic and cook for a further minute. Add the remaining butter and stir in the flour as soon as the butter has melted. Cook for 30 seconds, stirring constantly. Slowly pour the milk into the pan, just a little at a time, stirring well between each adding. Gradually add 250ml/10fl oz of the reserved stock and the wine, if using, stirring until the sauce is smooth and thickened slightly. Bring to a gentle simmer and cook for 3 minutes. Season the mixture, to taste, with salt and freshly ground black pepper. Remove from the heat and stir in the cream. Pour into a large bowl and cover the surface of the sauce with cling ilm to prevent a skin forming. Set aside to cool. Preheat the oven to 200C/400F/Gas 6. Put a baking tray in the oven to heat. For the pastry, put the flour and butter in a food processor and blend on the pulse setting until the mixture resembles fine breadcrumbs. With the motor running, add the beaten egg and water and blend until the mixture forms a ball. Portion off 250g/10oz of pastry for the lid. Roll the remaining pastry out on a lightly floured surface, turning the pastry frequently until around 5mm/¼in thick and 4cm/1½in larger than the pie dish. Lift the pastry over the rolling pin and place it gently into the pie dish. Press the pastry firmly up the sides, making sure there are no air bubbles. Leave the excess pastry overhanging the sides. Cut the chicken breasts into 3cm/1¼in pieces. Stir the chicken, ham and leeks into the cooled sauce. Pour the chicken filling into the pie dish. Brush the rim of the dish with beaten egg. Roll out the reserved pastry for the lid. Cover the pie with the pastry lid and press the edges together firmly to seal. Trim any excess pastry. Make a small hole in the centre of the pie with the tip of a knife. Glaze the top of the pie with beaten egg. Bake on the preheated tray in the centre of the oven for 35-40 minutes or until the pie is golden-brown all over and the filling is piping hot.",
--          "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",

--          "https://www.youtube.com/watch?v=xr-CpPE_lNk"

-- ),
-- (
--          "52796",
--          "Chicken Alfredo Primavera",

--          "Chicken",
--          "Italian",
--          "Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.  While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of  pasta water before draining the pasta.  Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.  Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired. ",
--          "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",

--          "https://www.youtube.com/watch?v=qCIbq8HywpQ"

-- ),
-- (
--          "52846",
--          "Chicken & mushroom Hotpot",

--          "Chicken",
--          "British",
--         "Heat oven to 200C/180C fan/gas 6. Put the butter in a medium-size saucepan and place over a medium heat. Add the onion and leave to cook for 5 mins, stirring occasionally. Add the mushrooms to the saucepan with the onions. Once the onion and mushrooms are almost cooked, stir in the flour – this will make a thick paste called a roux. If you are using a stock cube, crumble the cube into the roux now and stir well. Put the roux over a low heat and stir continuously for 2 mins – this will cook the flour and stop the sauce from having a floury taste. Take the roux off the heat. Slowly add the fresh stock, if using, or pour in 500ml water if you’ve used a stock cube, stirring all the time. Once all the liquid has been added, season with pepper, a pinch of nutmeg and mustard powder. Put the saucepan back onto a medium heat and slowly bring it to the boil, stirring all the time. Once the sauce has thickened, place on a very low heat. Add the cooked chicken and vegetables to the sauce and stir well. Grease a medium-size ovenproof pie dish with a little butter and pour in the chicken and mushroom filling. Carefully lay the potatoes on top of the hot-pot filling, overlapping them slightly, almost like a pie top. Brush the potatoes with a little melted butter and cook in the oven for about 35 mins. The hot-pot is ready once the potatoes are cooked and golden brown.",
--          "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",

--          "https://www.youtube.com/watch?v=bXKWu4GojNI"

-- ),
-- (
--          "52772",
--          "Teriyaki Chicken Casserole",

--          "Chicken",
--          "Japanese",
--          "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
--          "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",

--          "https://www.youtube.com/watch?v=4aZr5hZXP_s"

-- ),
-- (
--          "52780",
--          "Potato Gratin with Chicken",

--          "Chicken",
--          "Unknown",
--          "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
--          "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",

--          "https://www.youtube.com/watch?v=p3u8eiy3yHI"

-- ),
-- (
--          "53011",
--          "Chicken Quinoa Greek Salad",

--          "Chicken",
--          "Greek",
--         "Cook the quinoa following the pack instructions, then rinse in cold water and drain thoroughly. Meanwhile, mix the butter, chilli and garlic into a paste. Toss the chicken fillets in 2 tsp of the olive oil with some seasoning. Lay in a hot griddle pan and cook for 3-4 mins each side or until cooked through. Transfer to a plate, dot with the spicy butter and set aside to melt. Next, tip the tomatoes, olives, onion, feta and mint into a bowl. Toss in the cooked quinoa. Stir through the remaining olive oil, lemon juice and zest, and season well. Serve with the chicken fillets on top, drizzled with any buttery chicken juices.",
--          "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",

--          "https://www.youtube.com/watch?v=akcrkXYr61M"

-- ),
-- (
--          "53039",
--          "Piri-piri chicken and slaw",

--          "Chicken",
--          "Portuguese",
--          "STEP 1 Whizz together all of the marinade ingredients in a small food processor. Rub the marinade onto the chicken and leave for 1 hour at room temperature. STEP 2 Heat the oven to 190C/fan 170C/gas 5. Put the chicken in a roasting tray and cook for 1 hour 20 minutes. Rest under loose foil for 20 minutes. While the chicken is resting, mix together the slaw ingredients and season. Serve the chicken with slaw, fries and condiments.",
--          "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",

--          "https://www.youtube.com/watch?v=_RKwKjskopk"

-- ),
-- (
--          "52765",
--          "Chicken Enchilada Casserole",

--          "Chicken",
--          "Mexican",
--          "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom. Remove chicken from the pot and shred with two forks. Preheat oven to 375 F degrees. Start layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese. Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top. Serve warm.",
--          "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
--          "Casserole,Cheasy,Meat",
--          "https://www.youtube.com/watch?v=EtVkwVKLc_M"

-- ),
-- (
--          "52818",
--          "Chicken Fajita Mac and Cheese",

--          "Chicken",
--          "American",
--          "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly. Add your cream, stock and macaroni. Cook on low for 20 minutes. Add your cheeses, stir to combine. Top with roasted peppers and parsley.",
--          "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",

--         "https://www.youtube.com/watch?v=bwTSmLTZKNg"

-- ),
-- (
--         "52830",
--         "Crock Pot Chicken Baked Tacos",
--         "Chicken",
--         "Mexican",
--         "Put the uncooked chicken breasts in the crock pot. Pour the full bottle of salad dressing over the chicken. Sprinkle the rest of the ingredients over the top and mix them in a bit with a spoon. Cover your crock pot with the lid and cook on high for 4 hours. Remove all the chicken breasts from the crock pot and let cool. Shred the chicken breasts and move to a glass bowl. Pour most of the liquid over the shredded chicken. FOR THE TACOS: Make the guacamole sauce by mixing the avocado and green salsa together. Pour the guacamole mixture through a strainer until smooth and transfer to a squeeze bottle. Cut the tip off the lid of the squeeze bottle to make the opening more wide if needed. Make the sour cream sauce by mixing the sour cream and milk together until you get a more liquid sour cream sauce. Transfer to a squeeze bottle. In a 9x 13 glass baking dish, fill all 12+ tacos with a layer of refried beans, cooked chicken and shredded cheese. Bake at 450 for 10-15 minutes just until the cheese is melted and bubbling. Out of the oven top all the tacos with the sliced grape tomaotes, jalapeno and cilantro. Finish with a drizzle of guacamole and sour cream. Enjoy!",
--         "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",

--         "https://www.youtube.com/watch?v=oqL0mLDBzS4"
-- ),
-- (
--         "52937",
--         "Jerk chicken with rice & peas",
--         "Chicken",
--         "Jamaican",
--          "To make the jerk marinade, combine all the ingredients in a food processor along with 1 tsp salt, and blend to a purée. If you’re having trouble getting it to blend, just keep turning off the blender, stirring the mixture, and trying again. Eventually it will start to blend up – don’t be tempted to add water, as you want a thick paste. Taste the jerk mixture for seasoning – it should taste pretty salty, but not unpleasantly, puckering salty. You can now throw in more chillies if it’s not spicy enough for you. If it tastes too salty and sour, try adding in a bit more brown sugar until the mixture tastes well balanced. Make a few slashes in the chicken thighs and pour the marinade over the meat, rubbing it into all the crevices. Cover and leave to marinate overnight in the fridge. If you want to barbecue your chicken, get the coals burning 1 hr or so before you’re ready to cook. Authentic jerked meats are not exactly grilled as we think of grilling, but sort of smoke-grilled. To get a more authentic jerk experience, add some wood chips to your barbecue, and cook your chicken over slow, indirect heat for 30 mins. To cook in the oven, heat to 180C/160C fan/gas 4. Put the chicken pieces in a roasting tin with the lime halves and cook for 45 mins until tender and cooked through. While the chicken is cooking, prepare the rice & peas. Rinse the rice in plenty of cold water, then tip it into a large saucepan with all the remaining ingredients except the kidney beans. Season with salt, add 300ml cold water and set over a high heat. Once the rice begins to boil, turn it down to a medium heat, cover and cook for 10 mins. Add the beans to the rice, then cover with a lid. Leave off the heat for 5 mins until all the liquid is absorbed. Squeeze the roasted lime over the chicken and serve with the rice & peas, and some hot sauce if you like it really spicy.",
--         "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",

--         "https://www.youtube.com/watch?v=qfchrS2D_v4"
-- ),
-- (
        
--          "Fish pie",

--          "Seafood",
--          "British",
--          "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season. 02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones. 03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream. 04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon. 05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.",
--         "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
         
--          "https://www.youtube.com/watch?v=2sX4fCgg-UI"

-- ),
-- (
--          "53043",
--          "Fish fofos",

--          "Seafood",
--          "Portuguese",
--          "STEP 1 Put the fish into a lidded pan and pour over enough water to cover. Bring to a simmer and gently poach for 10 minutes over a low heat with the lid on. Drain and flake the fish. STEP 2 Put the fish, potato, green chilli, coriander, cumin, black pepper, garlic and ginger in a large bowl. Season, add the rice flour, mix well and break in 1 egg. Stir the mixture and divide into 15, then form into small logs. Break the remaining eggs into a bowl and whisk lightly. Put the breadcrumbs into another bowl. Dip each fofo in the beaten egg followed by the breadcrumb mixture. Chill for 20 minutes. STEP 3 Heat 1cm of oil in a large frying pan over a medium heat. Fry the fofos in batches for 2 minutes on each side, turning gently to get an even golden brown colour all over. Drain on kitchen paper and repeat with the remaining fofos. STEP 4 For the onion salad, mix together the onion, coriander and lemon juice with a pinch of salt. Serve with the fofos and mango chutney.",
--          "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",

--          "https://www.youtube.com/watch?v=YXUZHK2PrV8"

-- ),
-- (
--         "52882",
--          "Three Fish Pie",

--          "Seafood",
--          "British",
--         "Preheat the oven to 200C/400F/Gas 6 (180C fan). Put the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary. For the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth. Add the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm. Spoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese. Bake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
--          "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",

--          "https://www.youtube.com/watch?v=Ds1Jb8H5Sg8"



-- ),
-- (
--          "52944",
--          "Escovitch Fish",

--          "Seafood",
--          "Jamaican",
--          "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready. In large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil Add, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn Then add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes.  Discard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
--          "https://www.themealdb.com/images/media/meals/1520084413.jpg",

--          "https://www.youtube.com/watch?v=nF6DOtGE6k8"

-- ),
-- (
--          "52936",
--          "Saltfish and Ackee",

--          "Seafood",
--          "Jamaican",
--          "For the saltfish, soak the salt cod overnight, changing the water a couple of times. Drain, then put the cod in a large pan of fresh water and bring to the boil. Drain again, add fresh water and bring to the boil again. Simmer for about five minutes, or until cooked through, then drain and flake the fish into large pieces. Discard any skin or bones. For the dumplings, mix the flour and suet with a pinch of salt and 250ml/9fl oz water to make a dough. Wrap the mixture in clingfilm and leave in the fridge to rest. Open the can of ackee, drain and rinse, then set aside. Heat a tablespoon of olive oil in a pan and fry the onion until softened but not brown. Add the spices, seasoning, pepper sauce and sliced peppers and continue to fry until the peppers are tender. Add the chopped tomatoes, then the salt cod and mix together. Lastly stir in the ackee very gently and leave to simmer until ready to serve. When you’re almost ready to eat, heat about 1cm/½in vegetable oil in a frying pan and heat until just smoking. Shape the dumpling mix into plum-size balls and shallow-fry until golden-brown. (CAUTION: hot oil can be dangerous. Do not leave the pan unattended.) Drain the dumplings on kitchen paper and serve with the saltfish and ackee.",
--          "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",

--          "https://www.youtube.com/watch?v=nbfNyZbdn2I"

-- ),
-- (
--          "52809",
--          "Recheado Masala Fish",

--          "Seafood",
--         "Indian",
--          "Soak all the spices, ginger, garlic, tamarind pulp and kashmiri chilies except oil in vinegar. Add sugar and salt. Also add turmeric powder. Combine all nicely and marinate for 35-40 mins. Grind the mixture until soft and smooth. Add more vinegar if required but ensure the paste has to be thick so add vinegar accordingly. If the masala paste is thin then it would not stick to the fish. Rinse the fish slit from the center and give some incision from the top. You could see the fish below for clarity. Now stuff the paste into the center and into the incision. Coat the entire fish with this paste. Marinate the fish for 30 mins. Place oil in a shallow pan, once oil is quite hot shallow fry the stuffed mackerels. Fry until golden brown from both sides Serve the recheado mackerels hot with salad, lime wedges, rice and curry. Notes 1. Ensure the masala paste is thick else the result won't be good. 2. If you aren't able to find kashmiri chilies then use bedgi chilies or kashmiri red chili powder. 3. You could use white vinegar or coconut vinegar. 4. Any left over paste could be stored in the fridge for future use. 5. Cinnamon could be avoided as it's a strong spice used generally for meat or chicken.",
--          "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",

--          "https://www.youtube.com/watch?v=FXtCris37nE"

-- ),
-- (
--          "52918",
--         "Fish Stew with Rouille",

--          "Seafood",
--          "French",
--          "Twist the heads from the prawns, then peel away the legs and shells, but leave the tails intact. Devein each prawn. Fry the shells in 1 tbsp oil for 5 mins, until dark pink and golden in patches. Add the wine, boil down by two thirds, then pour in the stock. Strain into a jug, discarding the shells. Heat the rest of the oil in a deep frying pan or casserole. Add the fennel, onion and garlic, season, then cover and gently cook for 10 mins until softened. Meanwhile, peel the potato and cut into 2cm-ish chunks. Put into a pan of cold water, bring to the boil and cook for 5 mins until almost tender. Drain in a colander. Peel a strip of zest from the orange. Put the zest, star anise, bay and ½ tsp harissa into the pan. Fry gently, uncovered, for 5-10 mins, until the vegetables are soft, sweet and golden. Stir in the tomato purée, cook for 2 mins, then add the tomatoes and stock. Simmer for 10 mins until the sauce thickens slightly. Season to taste. The sauce can be made ahead, then reheated later in the day. Meantime, scrub the mussels or clams and pull away any stringy beards. Any that are open should be tapped sharply on the worktop – if they don’t close after a few seconds, discard them. Reheat the sauce if necessary, then stir the potato, chunks of fish and prawns very gently into the stew. Bring back to the boil, then cover and gently simmer for 3 mins. Scatter the mussels or clams over the stew, then cover and cook for 2 mins more or until the shells have opened wide. Discard any that remain closed. The chunks of fish should flake easily and the prawns should be pink through. Scatter with the thyme leaves. To make the quick rouille, stir the rest of the harissa through the mayonnaise. Serve the stew in bowls, topped with spoonfuls of rouille, which will melt into the sauce and enrich it. Have some good bread ready, as you’ll definitely want to mop up the juices.",
--          "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      
--          "https://www.youtube.com/watch?v=fp9Lqx2EUco"

-- ),
-- (
--          "52819",
--          "Cajun spiced fish tacos",

--          "Seafood",
--          "Mexican",
--          "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery. On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over. Heat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan. Meanwhile, prepare the dressing by combining all the ingredients with a little seasoning. Soften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing.",
--          "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",

--         "https://www.youtube.com/watch?v=N4EdUt0Ou48"

-- ),
-- (
--          53045,
--          'Portuguese fish stew (Caldeirada de peixe)',

--          'Seafood',
--         'Portuguese',
--          'STEP 1 Heat a drizzle of oil in a large, deep-sided frying pan, and fry the onion and pepper on a medium heat until softened but not browned. Finely chop the coriander stalks (keep the leaves for later), and add to the pan with the chilli and chopped garlic. Fry for another few minutes. Add the wine, saffron and bay leaf and let it simmer until reduced by half. STEP 2 Add the potatoes, tomatoes, and 300ml water and bring to a gentle boil. Break up the tomatoes with a spoon on the side of the pan and simmer for 20-25 minutes until the potatoes are just tender, and the tomatoes have broken down. STEP 3 Season well, then gently push the fish into the sauce, and arrange the squid, prawns, clams and mussels on the surface. Put the lid on and cook for 6-8 minutes until the mussel and clam shells have opened, the prawns are cooked and the fish is flaky. Toast the bread, rub lightly with the halved garlic clove and drizzle with olive oil. Serve the stew scatted with chopped coriander leaves, and the toasts for dunking.',

--          'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',

--          'https://www.youtube.com/watch?v=utv-GpSJypk'

-- ),
-- (
--          "52952",
--          "Beef Lo Mein",

--          "Beef",
--          "Chinese",
--          "STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oil and mix together. STEP 2 - BOILING THE THE NOODLES In a 6 qt pot add your noodles to boiling water until the noodles are submerged and boil on high heat for 10 seconds. After your noodles is done boiling strain and cool with cold water. STEP 3 - STIR FRY Add 2 Tablespoons of oil, beef and cook on high heat untill beef is medium cooked. Set the cooked beef aside In a wok add 2 Tablespoon of oil, onions, minced garlic, minced ginger, bean sprouts, mushrooms, peapods and 1.5 cups of water or until the vegetables are submerged in water. Add the noodles to wok To make the sauce, add oyster sauce, 1 pinch white pepper, 1 teaspoon sesame seed oil, sugar, and 1 Teaspoon of soy sauce. Next add the beef to wok and stir-fry",
--          "https://www.themealdb.com/images/media/meals/1529444830.jpg",

--          "https://www.youtube.com/watch?v=ZT9LSsNXXe0"

-- ),


