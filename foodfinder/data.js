// information for locations
// map and bulletin board pull from this

class Location {
    constructor(id, name, location, lat, lng, hours, description, image) {
        this.id = id
        this.name = name
        this.location = location
        this.lat = lat
        this.lng = lng
        this.hours = hours
        this.description = description
        this.image = image
    }
}

const locations = [
    new Location (
        "central-texas-food-bank",
        "Cental Texas Food Bank", // TODO is this a good locaiton, or should we put specific food pantries
        "6500 Metropolis Dr",
        30.2089, -97.7339,
        "Mon-Fri 9am-5pm",
        "Largest food bank in Central Texas", //TODO give better descriptions
        "images/centraltexasfoodbank.jpeg"
    ),
    new Location (
        "little-free-bakery",
        "Little Free Bakery",
        "Bruning Green Park",
        30.31582362636627, -97.71838521839757,
        "First Sunday of every month 11am-12pm", 
        "Monthly pop-up of baked goods where everything is free! While supplies last",
    ),
    new Location (
        "west-campus-community-fridge",
        "West Campus Community Fridge + Pantry",
        "2000 Pearl St, Austin, TX 78705",
        30.284540867618333, -97.74746150724597,
        "Open 24/7", // TODO add time
        "Do not need to sign up, and can go whenever to access donated food. Take what you need!",
        "images/westcampuspantry.jpg"
    ),
    new Location (
        "hope-food-panty",
        "Hope Food Pantry Austin",
        "4001 Speedway, Austin, TX 78751",
        30.30342187180229, -97.73174838104819,
        "Thursdays, Fridays, and first Saturday of the month from 9-10:30am",
        "Located in Trinity Church of Austin for grocery pickup. We are partners with the Central Texas Food Bank",
        "images/hopefoodpantry.jpg"
    ),
    new Location (
        "sustainable-food-center",
        "Sustainable Food Center",
        "Building C, 2921 E 17th St, Austin, TX 78702",
        30.278639592325373, -97.71012599645422,
        "Mon-Fri 9am-5pm",
        "Sustainable Food Center (SFC) is transforming the food system in Texas through increased food access, equitable food policy, small-scale farming support, and farm to school programs. For 50 years, SFC has improved access to fresh, nutritious food for all Texans. SFC hosts cooking and nutrition classes in Austin and Lubbock, operates farmers’ markets in downtown Austin and Sunset Valley, and provides WIC nutrition support statewide. SFC also leads the statewide network Double Up Food Bucks Texas, matching SNAP benefits $1-for-$1."
    ),
    new Location (
        "south-austin-church",
        "South Austin Church Food Pantry",
        "6711 Menchaca Road",
        30.208608312413748, -97.80630584163262,
        "Mondays 9am-11am",
        "Drive-through only. Please enter from Barge Street using the second driveway on the right (just past the playground) and continue around to the main entrance. Stop at the covered double doors and remain in your car. No appointment is necessary. ",
        "images/southaustinchurch.jpg"
    ),
    new Location (
        "hyde-park-baptist-church",
        "Hyde Park Baptist Church Food Pantry",
        "3810 Speedway",
        30.30158423399776, -97.73337843808594,
        "Wednesdays 1pm-3pm",
        "We are a Central Texas Food Bank partner agency. Individuals in need of food who live in our service area in zip codes 78705, 78751, 78752, 78756 and 78757 may come to our pantry up to 10 times a year. In addition, we also give out special food items for Thanksgiving and Christmas. HPBC Members who are in need may also come to the pantry. Pantry volunteers order and pick up food from the Central Texas Food Bank. Workers also process the paperwork required by the CTFB, stock and distribute meat, bread, milk, sweets, dry and canned food."
    )
]