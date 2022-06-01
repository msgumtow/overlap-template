/**
 * YOUR JOB:
 * 
 * -Add another object sprite and change its type/kind (different than "Food" or "Player"). Make sure this goes at the BOTTOM of the green “On start” block. 
 * 
 * -Duplicate the "set Donut position to x pick random y pick random" block, change it from Donut to your new sprite name, and put it in the "on game update every 1000 ms" block. 
 * 
 * -Add another blue "on sprite of kind Player overlaps otherSprite of kind _____" container block and change the SECOND "kind" to your new type for your new sprite. 
 * 
 * Have different events happen! I put a bunch of ideas and how to find them in the PDF attached to the assignment in Google Classroom. There are more than I show there, feel free to experiment! 
 * 
 * Choose at least TWO different events (other than score and move position) to put in the overlap block.
 */
/**
 * When the dog overlaps the donut, we want:
 * 
 * -The score to go up
 * 
 * -The dog to reset to its original spot.
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	
})
/**
 * Feel free to change the background color, the sprite images, the sprite names, etc!
 */
scene.setBackgroundColor(7)
let PlayerCharacter = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(PlayerCharacter)
PlayerCharacter.setStayInScreen(true)
let Donut = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
/**
 * Whatever is inside the "on game update" block will happen repeatedly every ___ amount of seconds. You can change the frequency the events happen by changing the seconds/milliseconds.
 * 
 * Here, I have the donut switching to a random spot every 1 second.
 */
game.onUpdateInterval(1000, function () {
    Donut.setPosition(randint(160, 0), randint(0, 120))
})
