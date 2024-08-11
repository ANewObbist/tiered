namespace SpriteKind {
    export const Buttons = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    info.setScore(Math.floor(_Skill))
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Buttons, function (sprite, otherSprite) {
    if (sprites.readDataString(otherSprite, "Add stat") == "x") {
        if (_Cash >= sprites.readDataNumber(otherSprite, "Cost")) {
            _Cash += sprites.readDataNumber(otherSprite, "Cost") * -1
            _Multiplier += sprites.readDataNumber(otherSprite, "Add") * (1 + _Rebirth) * (1 + _Mega * 0.2)
            pause(200)
        }
    } else if (sprites.readDataString(otherSprite, "Add stat") == "R") {
        if (_Multiplier >= sprites.readDataNumber(otherSprite, "Cost")) {
            _Cash = 0
            _Multiplier = 1
            _Rebirth += sprites.readDataNumber(otherSprite, "Add") * (1 + _Ultra * 1.25) * (1 + _Hyper * 0.25)
            pause(200)
        }
    } else if (sprites.readDataString(otherSprite, "Add stat") == "U") {
        if (_Rebirth >= sprites.readDataNumber(otherSprite, "Cost")) {
            _Cash = 0
            _Multiplier = 1
            _Rebirth = 0
            _Ultra += sprites.readDataNumber(otherSprite, "Add") * (1 + _Prestige * 1.5) * (1 + _Ascend * 0.3)
            pause(200)
        }
    } else if (sprites.readDataString(otherSprite, "Add stat") == "P") {
        if (_Ultra >= sprites.readDataNumber(otherSprite, "Cost")) {
            _Cash = 0
            _Multiplier = 1
            _Rebirth = 0
            _Ultra = 0
            _Prestige += sprites.readDataNumber(otherSprite, "Add") * (1 + _Mega * 1.75)
            pause(200)
        }
    } else if (sprites.readDataString(otherSprite, "Add stat") == "M") {
        if (_Mega >= sprites.readDataNumber(otherSprite, "Cost")) {
            _Cash = 0
            _Multiplier = 1
            _Rebirth = 0
            _Ultra = 0
            _Prestige = 0
            _Mega += sprites.readDataNumber(otherSprite, "Add") * (1 + _Hyper * 2)
            pause(200)
        }
    }
})
function ReSpawn_player () {
    mySprite = sprites.create(assets.image`Youself lmao`, SpriteKind.Player)
    controller.moveSprite(mySprite, 80, 0)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 350
    mySprite.z = 1
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    150,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    sprite.vy = -96
})
function Round (value: number, divide: number) {
    return Math.round(value / divide * 100) / 100
}
function Spawn_a_difficulty (x: number, y: number, s: number, c: number, n: string, sub: boolean) {
    if (sub) {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            `, SpriteKind.Buttons)
    } else {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            `, SpriteKind.Buttons)
    }
    sprites.setDataNumber(BUTTON, "Cost", 10000 * 2 ** s)
    sprites.setDataNumber(BUTTON, "Add", 750 * 1.4 ** s)
    BUTTON.image.replace(2, c)
    sprites.setDataString(BUTTON, "Cost stat", "" + n + " $")
    sprites.setDataString(BUTTON, "Add stat", "x")
    tiles.placeOnTile(BUTTON, tiles.getTileLocation(x, y))
}
function Spawn_a_button (x: number, y: number, r: number, a: number, cs: string, _as: string) {
    if (_as == "x") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            `, SpriteKind.Buttons)
    } else if (_as == "R") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            `, SpriteKind.Buttons)
    } else if (_as == "U") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . a a a a a a a a a a a a a a . 
            . a a a a a a a a a a a a a a . 
            `, SpriteKind.Buttons)
    } else if (_as == "P") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            `, SpriteKind.Buttons)
    } else if (_as == "M") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            `, SpriteKind.Buttons)
    } else if (_as == "H") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Buttons)
    } else if (_as == "A") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            `, SpriteKind.Buttons)
        BUTTON.startEffect(effects.halo)
    } else if (_as == "p") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            `, SpriteKind.Buttons)
        BUTTON.startEffect(effects.fire)
    } else if (_as == "F") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
            `, SpriteKind.Buttons)
        BUTTON.startEffect(effects.coolRadial)
    } else if (_as == "u") {
        BUTTON = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c c c c c c c c c c c c c c c 
            c a a a a a a a a a a a a a a c 
            c a a a a a a a a a a a a a a c 
            `, SpriteKind.Buttons)
        BUTTON.startEffect(effects.starField)
    }
    sprites.setDataNumber(BUTTON, "Cost", r)
    sprites.setDataNumber(BUTTON, "Add", a)
    sprites.setDataString(BUTTON, "Cost stat", cs)
    sprites.setDataString(BUTTON, "Add stat", _as)
    tiles.placeOnTile(BUTTON, tiles.getTileLocation(x, y))
}
function Pick (value: number) {
    if (value < 1000) {
        return "" + Round(value, 1) + ""
    } else if (value < 1000000) {
        return "" + Round(value, 1000) + "K"
    } else if (value < 1000000000) {
        return "" + Round(value, 1000000) + "M"
    } else if (value < 1000000000000) {
        return "" + Round(value, 1000000000) + "B"
    } else if (value < 1000000000000000) {
        return "" + Round(value, 1000000000000) + "T"
    } else {
        return "" + Round(value, 1) + ""
    }
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile14`)) {
        sprite.vx = 80
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile15`)) {
        sprite.vx = -80
    }
})
function Class_0 () {
    tiles.setCurrentTilemap(tilemap`level5`)
    Reset()
    Spawn_a_difficulty(3, 6, -30, 3, "Millisecondless", false)
    Spawn_a_difficulty(4, 6, -29.8, 8, "Astronomical", true)
    Spawn_a_difficulty(11, 14, -29, 8, "Win", false)
    Spawn_a_difficulty(2, 26, -28, 9, "Winsome", false)
    Spawn_a_difficulty(5, 27, -27, 9, "Do Nothing", false)
    Spawn_a_difficulty(6, 27, -26.8, 8, "Sleepful", true)
    Spawn_a_difficulty(13, 25, -26, 8, "Blessing", false)
    Spawn_a_difficulty(27, 14, -25, 10, "Vintage", false)
    Spawn_a_difficulty(29, 14, -24.8, 15, "Ifinitude", true)
    Spawn_a_difficulty(30, 16, -24, 8, "Just Air", false)
    Spawn_a_difficulty(31, 19, -23, 15, "Happylike", false)
    Spawn_a_difficulty(34, 22, -22, 2, "Locomotion", false)
    Spawn_a_difficulty(46, 9, -21, 6, "Walkthrough", false)
    Spawn_a_difficulty(48, 9, -20, 7, "Automatic Joyful", false)
    Spawn_a_difficulty(50, 15, -19, 3, "Unlosable", false)
    Spawn_a_difficulty(49, 15, -18.9, 3, "Roll", true)
    Spawn_a_difficulty(48, 15, -18.8, 2, "Mazeophobia", true)
    Spawn_a_difficulty(47, 15, -18.7, 10, "Shattered Babass", true)
    BUTTON.startEffect(effects.disintegrate, 100)
    Spawn_a_difficulty(46, 15, -18.6, 8, "Safe", true)
    Spawn_a_difficulty(51, 15, -18.5, 10, "Unmissable", true)
    Spawn_a_difficulty(52, 16, -18.4, 9, "Contraption", true)
    Spawn_a_difficulty(53, 17, -18.3, 10, "Unrebirth Supreme", true)
    Spawn_a_difficulty(55, 25, -18, 6, "Frivolous", false)
    Spawn_a_difficulty(56, 25, -17.8, 5, "Vibeness", true)
    Spawn_a_difficulty(58, 25, -17, 7, "Automatic", false)
    Spawn_a_difficulty(60, 25, -16, 7, "Spontaneous", false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    sprite.vx = 80
    sprite.vy = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    sprite.vy = 96
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    sprite.sayText("2.2 skill required", 100, false)
    if (controller.A.isPressed() && _Skill >= 2.2) {
        Class_12()
    }
})
function Reload_saves (s: string, OgN: number) {
    if (blockSettings.exists(s)) {
        return blockSettings.readNumber(s)
    } else {
        return OgN
    }
}
function Stats () {
    _Cash = Reload_saves("$", 0)
    _Multiplier = Reload_saves("x", 1)
    _Rebirth = Reload_saves("R", 0)
    _Ultra = Reload_saves("U", 0)
    _Prestige = Reload_saves("P", 0)
    _Mega = Reload_saves("M", 0)
    _Hyper = Reload_saves("H", 0)
    _Ascend = Reload_saves("A", 0)
    _Power = Reload_saves("p", 0)
    _Freeze = Reload_saves("F", 0)
    _Universal = Reload_saves("u", 0)
    _Multiversal = Reload_saves("m", 0)
    _Hyperversal = Reload_saves("h", 0)
    _Omniversal = Reload_saves("O", 0)
    _Godly = Reload_saves("G", 0)
    _Enternal = Reload_saves("E", 0)
    _Reality = Reload_saves("r", 0)
    textSprite0 = textsprite.create("", 0, 13)
    textSprite0.setOutline(1, 1)
    textSprite0.top = 1
    textSprite = textsprite.create("", 0, 7)
    textSprite.setOutline(1, 1)
    textSprite.left = 1
    textSprite2 = textsprite.create("", 0, 2)
    textSprite2.setOutline(1, 1)
    textSprite2.left = 1
    textSprite3 = textsprite.create("", 0, 8)
    textSprite3.setOutline(1, 1)
    textSprite3.left = 1
    textSprite4 = textsprite.create("", 0, 10)
    textSprite4.setOutline(1, 1)
    textSprite4.left = 1
    textSprite5 = textsprite.create("", 0, 4)
    textSprite5.setOutline(1, 1)
    textSprite5.left = 1
    for (let value of sprites.allOfKind(SpriteKind.Text)) {
        value.setFlag(SpriteFlag.RelativeToCamera, true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprite.sayText("1.05 skill required", 100, false)
    if (controller.A.isPressed() && _Skill >= 1.05) {
        Class_0()
    }
})
function Class_12 () {
    tiles.setCurrentTilemap(tilemap`level8`)
    Reset()
    Spawn_a_difficulty(5, 55, -15, 7, "Joyful", false)
    Spawn_a_difficulty(6, 55, -14.8, 8, "Do Something", true)
    Spawn_a_difficulty(14, 52, -14, 1, "Placid", false)
    Spawn_a_difficulty(19, 47, -14, 1, "Press a Key", false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    sprite.vx = -80
    sprite.vy = 0
})
function Reset () {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    sprites.destroyAllSpritesOfKind(SpriteKind.Buttons)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprite.sayText("0 skill required", 100, false)
    if (controller.A.isPressed()) {
        Class_1()
    }
})
function Class_1 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    Reset()
    Spawn_a_difficulty(5, 26, -200, 15, "The First Difficulty", false)
    Spawn_a_difficulty(8, 26, -160, 7, "The Lower Gap", false)
    Spawn_a_difficulty(11, 26, -150, 15, "Negativity", false)
    Spawn_a_difficulty(14, 26, -140, 15, "Unimpossible", false)
    Spawn_a_difficulty(17, 26, -130, 1, "Friendliness", false)
    Spawn_a_difficulty(20, 26, -120, 1, "True Ease", false)
    Spawn_a_difficulty(23, 26, -110, 2, "A", false)
    Spawn_a_difficulty(26, 26, -100, 7, "Felix the ДA", false)
    Spawn_a_difficulty(29, 26, -90, 1, "Exist", false)
    Spawn_a_difficulty(32, 26, -80, 11, "Reversed Peripherality", false)
    Spawn_a_difficulty(35, 26, -70, 1, "Relax", false)
    Spawn_a_difficulty(38, 26, -60, 4, "Skip", false)
    Spawn_a_difficulty(41, 26, -50, 6, "Restful", false)
    Spawn_a_difficulty(44, 26, -40, 10, "Ifinity", false)
    Spawn_a_difficulty(47, 26, -31, 8, "Instant Win", false)
    Spawn_a_difficulty(48, 24, -30.9, 7, "Cash", true)
    Spawn_a_difficulty(46, 23, -30.8, 2, "Multiplier", true)
    Spawn_a_difficulty(44, 22, -30.7, 8, "Rebirth", true)
}
let textSprite5: TextSprite = null
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let textSprite0: TextSprite = null
let _Reality = 0
let _Enternal = 0
let _Godly = 0
let _Omniversal = 0
let _Hyperversal = 0
let _Multiversal = 0
let _Universal = 0
let _Freeze = 0
let _Power = 0
let BUTTON: Sprite = null
let mySprite: Sprite = null
let _Ascend = 0
let _Prestige = 0
let _Hyper = 0
let _Ultra = 0
let _Mega = 0
let _Rebirth = 0
let _Multiplier = 0
let _Cash = 0
let _Skill = 0
scene.setBackgroundColor(9)
ReSpawn_player()
Class_1()
Stats()
forever(function () {
    textSprite0.setText("Skill:" + Pick(_Skill))
    textSprite0.right = 159
    textSprite.setText("$" + Pick(_Cash))
    textSprite.top = 1
    textSprite2.setText("x" + Pick(_Multiplier))
    textSprite2.top = 10
    textSprite3.setText("R" + Pick(_Rebirth))
    textSprite3.top = 19
    textSprite4.setText("U" + Pick(_Ultra))
    textSprite4.top = 28
    textSprite5.setText("P" + Pick(_Prestige))
    textSprite5.top = 37
})
game.onUpdate(function () {
    blockSettings.writeNumber("$", _Cash)
    blockSettings.writeNumber("x", _Multiplier)
    blockSettings.writeNumber("R", _Rebirth)
    blockSettings.writeNumber("U", _Ultra)
    blockSettings.writeNumber("P", _Prestige)
    blockSettings.writeNumber("M", _Mega)
    blockSettings.writeNumber("H", _Hyper)
    blockSettings.writeNumber("A", _Ascend)
    blockSettings.writeNumber("p", _Power)
    blockSettings.writeNumber("F", _Freeze)
    blockSettings.writeNumber("u", _Universal)
    blockSettings.writeNumber("m", _Multiversal)
    blockSettings.writeNumber("h", _Hyperversal)
    blockSettings.writeNumber("O", _Omniversal)
    _Cash += _Multiplier / 50 * (1 + _Prestige * 0.2) * (1 + _Ascend * 0.5) * (1 + _Universal * 3) * (1 + _Omniversal * 15)
    _Skill = _Cash ** 0.125
    if (controller.A.isPressed() && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        spriteutils.jumpImpulse(mySprite, 34)
    }
    for (let value of sprites.allOfKind(SpriteKind.Buttons)) {
        if (spriteutils.distanceBetween(mySprite, value) < 24) {
            value.sayText("" + sprites.readDataString(value, "Cost stat") + Pick(sprites.readDataNumber(value, "Cost")) + "=" + sprites.readDataString(value, "Add stat") + Pick(sprites.readDataNumber(value, "Add")), 100, false)
        }
    }
})
