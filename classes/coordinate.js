/**
 * @classDescription    A 3-D coordinate.
 */
var papaya = papaya || {};
papaya.volume = papaya.volume || {};


/**
 * Constructor.
 */
papaya.volume.Coordinate = papaya.volume.Coordinate || function (xLoc, yLoc, zLoc) {
    // Public properties
    this.x = xLoc;
    this.y = yLoc;
    this.z = zLoc;
}


/**
 * Sets the coordinate to new values.
 * @param {Numeric} xloc    the new X location
 * @param {Numeric} yLoc    the new Y location
 * @param {Numeric} zLoc    the new Z location
 */


/**
 *
 * @param xLoc
 * @param yLoc
 * @param zLoc
 */
papaya.volume.Coordinate.prototype.setCoordinate = function (xLoc, yLoc, zLoc, round) {
    if (round) {
        this.x = Math.round(xLoc);
        this.y = Math.round(yLoc);
        this.z = Math.round(zLoc);
    } else {
        this.x = xLoc;
        this.y = yLoc;
        this.z = zLoc;
    }
}