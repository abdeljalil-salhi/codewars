function cakes(recipe, available) {
  // Initialize the results array
  let result = [];

  // Loop through the recipe object
  for (let key in recipe) {
    // If the key is not in the available object, return 0
    if (!available.hasOwnProperty(key)) return 0;
    // Push the result of the available object divided by the recipe object
    result = [...result, Math.floor(available[key] / recipe[key])];
  }
  // Return the lowest number in the results array
  return Math.min(...result);
}
