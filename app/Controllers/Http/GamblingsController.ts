//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import UsersController from './UsersController'
//import Ws from 'providers/SocketProvider'

import { HttpContext } from '@adonisjs/http-server/build/standalone'

export default class GamblingsController {
  public async getRooms({ response }: HttpContext) {}
  public async NewRoulette({ request, auth, response }) {
    const body = request.body()

    const roomName = body.roomName
    const roomDescription = body.roomDescription
    const RouletteType = body.gameMode

    if (RouletteType != 1 || 2 || 3) {
      return {
        error: true,
        message: 'Invalid gamemode.',
      }
    }

    /**
     * Thanks Stackoverflow.
     * Ref: https://stackoverflow.com/a/1527820/12500906
     * @param min
     * @param max
     * @returns
     */
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // TODO: Make model and migration for the Russian roulette
    // Russian Roulette system:
    // A room is created and saved to the database including the bullet location.
    // Weapon starts at position 0 and bullet is located in a random position (Saved to db)
    // Actions determine what the position is every time.
    // If the action is click, it goes by one, and if after summing it up, it matches the bullet position. The player dies.
    // If there is more than 2 players the column "pool" will become a small place where items from players will be
    // stored when players die to be given to the winner.
    // Written before i die of sleep, gn - shiggy
    let bulletLocation = getRandomInt(0, 6) // Get the bullet location
  }
}
