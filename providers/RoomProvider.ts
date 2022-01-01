import { Server, RedisPresence } from 'colyseus'

class MultiPlayer {
  public server: Server
  private booted = false
  public core
  public boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    this.server = new Server({
      presence: new RedisPresence(),
    })
    this.core = this.server.listen(3000, 'localhost')
  }
}

export default new MultiPlayer().boot()
