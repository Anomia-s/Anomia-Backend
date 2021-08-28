import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersController from './UsersController'
export default class GamblingsController {

    public async roulette({request, auth, response}){
        const body = request.body();

        /**
         * Thanks Stackoverflow.
         * Ref: https://stackoverflow.com/a/1527820/12500906
         * @param min 
         * @param max 
         * @returns 
         */
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let [
            players,
            roomId,
            player,
            action
        ] =
        [
            body.players,
            body.roomId,
            body.player,
            body.action
        ] 
        // TODO: Make model and migration for the Russian roulette
        // Russian Roulette system:
        // A room is created and saved to the database including the bullet location.
        // Weapon starts at position 0 and bullet is located in a random position (Saved to db)
        // Actions determine what the position is every time.
        // If the action is click, it goes by one, and if after summing it up, it matches the bullet position. The player dies.
        // If there is more than 2 players the column "pool" will become a small place where items from players will be 
        // stored when players die to be given to the winner.
        // Written before i die of sleep, gn - shiggy
        let bulletLocation = getRandomInt(0,6) // Get the bullet location
    }

}
