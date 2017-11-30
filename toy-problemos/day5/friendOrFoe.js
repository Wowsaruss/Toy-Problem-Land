// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output.

// Clarify
// Check array of strings and return only the ones with 4 letters.

// Sample
// Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Psudo
// function(array) -> array
// 

// Code
function friend(friends){
    let newFriends = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            newFriends.push(friends[i]);
        }
    }
    return newFriends
}
friend(['hello', 'tom', 'frank', 'john', 'russ', 'jerry', 'ben', 'tedd']);