/* The five type of Positioning */

/*
 1) Static 
 2) Relative
 3) Fixed
 4) Sticky
 5) Absolute


1) Static: 
    Every element in HTML is static by default.
    It follows the normal document flow.
    You cannot move it using top, left, right, or bottom.
    
2) Relative:
    Relative allows you to shift an element without affecting surrounding elements.
    It reserves the original space.
    It moves relative to its normal position.
    Use Case:

        Useful when you want to move an element slightly without breaking layout flow.
        Often used as a reference for absolutely positioned children.
    
3) absolute (Position Relative to the Nearest Positioned Ancestor)
absolute removes the element from the document flow.
It does not reserve space (other elements will move up).
The element moves relative to its nearest positioned ancestor (relative, absolute, fixed, or sticky).
If there is no positioned ancestor, it moves relative to <html>.


4. fixed (Stick to the Viewport)
fixed positions the element relative to the viewport.
It does not move even when scrolling.
It removes the element from normal flow.

5) sticky (Hybrid of relative and fixed)
sticky acts relative until a scroll threshold is reached, then becomes fixed.
It sticks inside its parent when scrolling.

.sidebar {
  position: sticky;
  top: 10px;
  height: 200px;
  background: lightblue;
}
The .sidebar moves normally until it reaches top: 10px, then it sticks.

 Use Case:

Used for sticky headers, floating sections, scroll indicators.
*/
