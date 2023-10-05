<sub>Credits to [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/), which, by chance, I was watching some days prior this demand.</sub>

#### About
This is a simple path finding algorithm which I needed to make in a recent professional occasion.

We were creating a board game with Typescript and React with a predefined board layout. However, I decided to extrapolate that idea and build an adaptable board reader, which can take in any board drawing and spit its correct path.

I was happy with the implementation, so I decided to create this repository to store it.

#### Findings
Leveraging recursion, the algorithm iters through each step of the board trying to take a new step (following this arbitrary sequence of directions: top, right, bottom and left). The base case happens when the "end" node is found.

Altough recursion is usually worse than iteration performance wise due to the call stack overhead, I think its readability justifies the choice.

On time complexity, since we walk four directions for each step (worse and unrealistic case), if our board has 'i' columns and 'j' rows, the algorithm has a O(4ij). Taking the number of inputs as ij and dropping the constant, we're left with O(n).

#### Tech
- jest;
- typescript.
