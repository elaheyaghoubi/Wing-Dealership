const carData = [
// SEDANS

    {
      id: 1, model: "Camry", brand: "Toyota", year: 2023, price: 26990,
      class: "Sedan", engine: "2.5L 4-cylinder", horsepower: 203, mileage: 32,
      color: "Midnight Black", image: "https://example.com/cars/toyota-camry.jpg",
  category: "Sedan"
    },
    {
      id: 2, model: "Accord", brand: "Honda", year: 2023, price: 27990,
      class: "Sedan", engine: "1.5L Turbo", horsepower: 192, mileage: 33,
      color: "Platinum White", image: "https://example.com/cars/honda-accord.jpg",
  category: "Sedan"
    },
    {
      id: 3, model: "3 Series", brand: "BMW", year: 2023, price: 43900,
      class: "Sedan", engine: "2.0L Turbo", horsepower: 255, mileage: 29,
      color: "Mineral Gray", image: "https://example.com/cars/bmw-3series.jpg",
  category: "Sedan"
    },
    {
      id: 4, model: "C-Class", brand: "Mercedes", year: 2023, price: 45900,
      class: "Sedan", engine: "2.0L Turbo", horsepower: 255, mileage: 28,
      color: "Obsidian Black", image: "https://example.com/cars/mercedes-cclass.jpg",
  category: "Sedan"
    },
    {
      id: 5, model: "A4", brand: "Audi", year: 2023, price: 41900,
      class: "Sedan", engine: "2.0L Turbo", horsepower: 261, mileage: 30,
      color: "Navarra Blue", image: "https://example.com/cars/audi-a4.jpg",
  category: "Sedan"
    },
    {
      id: 6, model: "Altima", brand: "Nissan", year: 2023, price: 25900,
      class: "Sedan", engine: "2.5L 4-cylinder", horsepower: 188, mileage: 32,
      color: "Scarlet Ember", image: "https://example.com/cars/nissan-altima.jpg",
  category: "Sedan"
    },
    {
      id: 7, model: "Malibu", brand: "Chevrolet", year: 2023, price: 24900,
      class: "Sedan", engine: "1.5L Turbo", horsepower: 160, mileage: 34,
      color: "Pacific Blue", image: "https://example.com/cars/chevrolet-malibu.jpg",
  category: "Sedan"
    },
    {
      id: 8, model: "Fusion", brand: "Ford", year: 2023, price: 26900,
      class: "Sedan", engine: "1.5L EcoBoost", horsepower: 181, mileage: 31,
      color: "Agate Black", image: "https://example.com/cars/ford-fusion.jpg",
  category: "Sedan"
    },
    {
      id: 9, model: "ES 350", brand: "Lexus", year: 2023, price: 42900,
      class: "Sedan", engine: "3.5L V6", horsepower: 302, mileage: 26,
      color: "Ultrasonic Mica", image: "https://example.com/cars/lexus-es350.jpg",
  category: "Sedan"
    },
    {
      id: 10, model: "Mazda6", brand: "Mazda", year: 2023, price: 25900,
      class: "Sedan", engine: "2.5L Turbo", horsepower: 227, mileage: 29,
      color: "Soul Red", image: "https://example.com/cars/mazda6.jpg",
  category: "Sedan"
    },


    {
      id: 11, model: "RAV4", brand: "Toyota", year: 2023, price: 32900,
      class: "SUV", engine: "2.5L Hybrid", horsepower: 219, mileage: 40,
      color: "Lunar Rock", image: "https://example.com/cars/toyota-rav4.jpg",
  category: "SUV"
    },
    {
      id: 12, model: "CR-V", brand: "Honda", year: 2023, price: 31900,
      class: "SUV", engine: "1.5L Turbo", horsepower: 190, mileage: 34,
      color: "Sonic Gray", image: "https://example.com/cars/honda-crv.jpg",
  category: "SUV"
    },
    {
      id: 13, model: "Explorer", brand: "Ford", year: 2023, price: 38900,
      class: "SUV", engine: "2.3L EcoBoost", horsepower: 300, mileage: 23,
      color: "Oxford White", image: "https://example.com/cars/ford-explorer.jpg",
  category: "SUV"
    },
    {
      id: 14, model: "Tahoe", brand: "Chevrolet", year: 2023, price: 54900,
      class: "SUV", engine: "5.3L V8", horsepower: 355, mileage: 19,
      color: "Dark Ash", image: "https://example.com/cars/chevrolet-tahoe.jpg",
  category: "SUV"
    },
    {
      id: 15, model: "X5", brand: "BMW", year: 2023, price: 65900,
      class: "SUV", engine: "3.0L Turbo", horsepower: 335, mileage: 24,
      color: "Phytonic Blue", image: "https://example.com/cars/bmw-x5.jpg",
  category: "SUV"
    },
    {
      id: 16, model: "GLE", brand: "Mercedes", year: 2023, price: 58900,
      class: "SUV", engine: "2.0L Turbo", horsepower: 255, mileage: 23,
      color: "Polar White", image: "https://example.com/cars/mercedes-gle.jpg",
  category: "SUV"
    },
    {
      id: 17, model: "Q5", brand: "Audi", year: 2023, price: 45900,
      class: "SUV", engine: "2.0L Turbo", horsepower: 261, mileage: 26,
      color: "Daytona Gray", image: "https://example.com/cars/audi-q5.jpg",
  category: "SUV"
    },
    {
      id: 18, model: "Rogue", brand: "Nissan", year: 2023, price: 28900,
      class: "SUV", engine: "1.5L Turbo", horsepower: 201, mileage: 33,
      color: "Boulder Gray", image: "https://example.com/cars/nissan-rogue.jpg",
  category: "SUV"
    },
    {
      id: 19, model: "Model Y", brand: "Tesla", year: 2023, price: 49990,
      class: "SUV", engine: "Dual Motor AWD", horsepower: 384, mileage: 131,
      color: "Pearl White", image: "https://example.com/cars/tesla-modely.jpg",
  category: "SUV"
    },
    {
      id: 20, model: "Cayenne", brand: "Porsche", year: 2023, price: 72900,
      class: "SUV", engine: "3.0L Turbo", horsepower: 335, mileage: 21,
      color: "Jet Black", image: "https://example.com/cars/porsche-cayenne.jpg",
  category: "SUV"
    },
    {
      id: 21, model: "Highlander", brand: "Toyota", year: 2023, price: 38900,
      class: "SUV", engine: "3.5L V6", horsepower: 295, mileage: 24,
      color: "Ruby Flare", image: "https://example.com/cars/toyota-highlander.jpg",
  category: "SUV"
    },
    {
      id: 22, model: "Pilot", brand: "Honda", year: 2023, price: 39900,
      class: "SUV", engine: "3.5L V6", horsepower: 280, mileage: 22,
      color: "Modern Steel", image: "https://example.com/cars/honda-pilot.jpg",
  category: "SUV"
    },
    {
      id: 23, model: "Edge", brand: "Ford", year: 2023, price: 36900,
      class: "SUV", engine: "2.0L EcoBoost", horsepower: 250, mileage: 25,
      color: "Rapid Red", image: "https://example.com/cars/ford-edge.jpg",
  category: "SUV"
    },
    {
      id: 24, model: "Traverse", brand: "Chevrolet", year: 2023, price: 34900,
      class: "SUV", engine: "3.6L V6", horsepower: 310, mileage: 20,
      color: "Cherry Red", image: "https://example.com/cars/chevrolet-traverse.jpg",
  category: "SUV"
    },
  {
    id: 25, model: "RX 350", brand: "Lexus", year: 2023, price: 48900,
    class: "SUV", engine: "3.5L V6", horsepower: 295, mileage: 23,
    color: "Nori Green", image: "https://example.com/cars/lexus-rx350.jpg",
    category: "SUV"
  },
    {
      id: 26, model: "F-150", brand: "Ford", year: 2023, price: 42990,
      class: "Truck", engine: "3.5L EcoBoost V6", horsepower: 400, mileage: 22,
      color: "Velocity Blue", image: "https://example.com/cars/ford-f150.jpg",
  category: "Truck"
    },
    {
      id: 27, model: "Silverado 1500", brand: "Chevrolet", year: 2023, price: 38900,
      class: "Truck", engine: "5.3L V8", horsepower: 355, mileage: 19,
      color: "Northsky Blue", image: "https://example.com/cars/chevrolet-silverado.jpg",
  category: "Truck"
    },
    {
      id: 28, model: "Ram 1500", brand: "Ram", year: 2023, price: 40900,
      class: "Truck", engine: "3.6L V6", horsepower: 305, mileage: 21,
      color: "Bright White", image: "https://example.com/cars/ram-1500.jpg",
  category: "Truck"
    },
    {
      id: 29, model: "Tundra", brand: "Toyota", year: 2023, price: 38900,
      class: "Truck", engine: "3.5L Twin-Turbo V6", horsepower: 389, mileage: 20,
      color: "Army Green", image: "https://example.com/cars/toyota-tundra.jpg",
  category: "Truck"
    },
    {
      id: 30, model: "Titan", brand: "Nissan", year: 2023, price: 40900,
      class: "Truck", engine: "5.6L V8", horsepower: 400, mileage: 18,
      color: "Cardinal Red", image: "https://example.com/cars/nissan-titan.jpg",
  category: "Truck"
    },
    {
      id: 31, model: "Sierra 1500", brand: "GMC", year: 2023, price: 42900,
      class: "Truck", engine: "5.3L V8", horsepower: 355, mileage: 19,
      color: "Titanium Rush", image: "https://example.com/cars/gmc-sierra.jpg",
  category: "Truck"
    },
    {
      id: 32, model: "Ranger", brand: "Ford", year: 2023, price: 32900,
      class: "Truck", engine: "2.3L EcoBoost", horsepower: 270, mileage: 23,
      color: "Cactus Gray", image: "https://example.com/cars/ford-ranger.jpg",
  category: "Truck"
    },
    {
      id: 33, model: "Colorado", brand: "Chevrolet", year: 2023, price: 30900,
      class: "Truck", engine: "2.7L Turbo", horsepower: 310, mileage: 22,
      color: "Sand Dune", image: "https://example.com/cars/chevrolet-colorado.jpg",
  category: "Truck"
    },
    {
      id: 34, model: "Tacoma", brand: "Toyota", year: 2023, price: 28900,
      class: "Truck", engine: "3.5L V6", horsepower: 278, mileage: 21,
      color: "Cement Gray", image: "https://example.com/cars/toyota-tacoma.jpg",
  category: "Truck"
    },
    {
      id: 35, model: "Frontier", brand: "Nissan", year: 2023, price: 29900,
      class: "Truck", engine: "3.8L V6", horsepower: 310, mileage: 20,
      color: "Baja Storm", image: "https://example.com/cars/nissan-frontier.jpg",
  category: "Truck"
    },
    {
      id: 36, model: "Corvette Stingray", brand: "Chevrolet", year: 2023, price: 65900,
      class: "Sports", engine: "6.2L V8", horsepower: 495, mileage: 19,
      color: "Torch Red", image: "https://example.com/cars/chevrolet-corvette.jpg",
  category: "Sports"
    },
    {
      id: 37, model: "911 Carrera", brand: "Porsche", year: 2023, price: 107000,
      class: "Sports", engine: "3.0L Turbo", horsepower: 379, mileage: 22,
      color: "Guards Red", image: "https://example.com/cars/porsche-911.jpg",
  category: "Sports"
    },
    {
      id: 38, model: "R8", brand: "Audi", year: 2023, price: 149000,
      class: "Sports", engine: "5.2L V10", horsepower: 562, mileage: 17,
      color: "Kemora Gray", image: "https://example.com/cars/audi-r8.jpg",
  category: "Sports"
    },
    {
      id: 39, model: "Supra", brand: "Toyota", year: 2023, price: 44900,
      class: "Sports", engine: "3.0L Turbo", horsepower: 382, mileage: 25,
      color: "Absolute Zero", image: "https://example.com/cars/toyota-supra.jpg",
  category: "Sports"
    },
    {
      id: 40, model: "GT-R", brand: "Nissan", year: 2023, price: 119000,
      class: "Sports", engine: "3.8L Twin-Turbo V6", horsepower: 565, mileage: 18,
      color: "Super Silver", image: "https://example.com/cars/nissan-gtr.jpg",
  category: "Sports"
    },
    {
      id: 41, model: "Mustang GT", brand: "Ford", year: 2023, price: 42900,
      class: "Sports", engine: "5.0L V8", horsepower: 450, mileage: 19,
      color: "Grabber Blue", image: "https://example.com/cars/ford-mustang.jpg",
  category: "Sports"
    },
    {
      id: 42, model: "Camaro SS", brand: "Chevrolet", year: 2023, price: 42900,
      class: "Sports", engine: "6.2L V8", horsepower: 455, mileage: 18,
      color: "Shock Yellow", image: "https://example.com/cars/chevrolet-camaro.jpg",
  category: "Sports"
    },
    {
      id: 43, model: "LC 500", brand: "Lexus", year: 2023, price: 94900,
      class: "Sports", engine: "5.0L V8", horsepower: 471, mileage: 19,
      color: "Structural Blue", image: "https://example.com/cars/lexus-lc500.jpg",
  category: "Sports"
    },
    {
      id: 44, model: "Cayman", brand: "Porsche", year: 2023, price: 64900,
      class: "Sports", engine: "2.0L Turbo", horsepower: 300, mileage: 24,
      color: "Gentian Blue", image: "https://example.com/cars/porsche-cayman.jpg",
  category: "Sports"
    },
    {
      id: 45, model: "TT RS", brand: "Audi", year: 2023, price: 72900,
      class: "Sports", engine: "2.5L Turbo", horsepower: 394, mileage: 23,
      color: "Turbo Blue", image: "https://example.com/cars/audi-ttrs.jpg",
  category: "Sports"
    },

    {
      id: 46, model: "Model 3", brand: "Tesla", year: 2023, price: 42990,
      class: "Electric", engine: "Dual Motor AWD", horsepower: 346, mileage: 134,
      color: "Deep Blue Metallic", image: "https://example.com/cars/tesla-model3.jpg",
  category: "Electric/Hybrid"
    },
    {
      id: 47, model: "Ioniq 5", brand: "Hyundai", year: 2023, price: 41900,
      class: "Electric", engine: "Dual Motor", horsepower: 320, mileage: 120,
      color: "Digital Teal", image: "https://example.com/cars/hyundai-ioniq5.jpg",
  category: "Electric/Hybrid"
    },
    {
      id: 48, model: "Prius Prime", brand: "Toyota", year: 2023, price: 33900,
      class: "Hybrid", engine: "1.8L + Electric", horsepower: 121, mileage: 54,
      color: "Supersonic Red", image: "https://example.com/cars/toyota-prius.jpg",
  category: "Electric/Hybrid"
    },
    {
      id: 49, model: "F-150 Lightning", brand: "Ford", year: 2023, price: 59900,
      class: "Electric", engine: "Dual Motor", horsepower: 452, mileage: 78,
      color: "Antimatter Blue", image: "https://example.com/cars/ford-lightning.jpg",
  category: "Electric/Hybrid"
    },
    {
      id: 50, model: "Taycan", brand: "Porsche", year: 2023, price: 89900,
      class: "Electric", engine: "Dual Motor", horsepower: 402, mileage: 79,
      color: "Frozen Blue", image: "https://example.com/cars/porsche-taycan.jpg",
  category: "Electric/Hybrid"
    }
  ];
  
  export default carData;
