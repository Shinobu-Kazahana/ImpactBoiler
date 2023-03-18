ig.module('game.main')
.requires(
    'plusplus.core.plusplus',
  
    )
   
.defines(function () {
    let myGameClass = ig.GameExtended.extend({
        init: function () {
            this.parent();
            this.loadLevel(ig.global.levelTest);
        }
    });
    ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );
});