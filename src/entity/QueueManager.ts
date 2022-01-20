import { Connection, Queue } from "../entity/rabbit-mq";

export class QueueManager {
  private connection: Connection;

  private constructor( conn: Connection ) {
    this.connection = conn;
  }
  static async create( ip: string ) {
    const rabbitMqConnection = new Connection( ip );
    await rabbitMqConnection.open();
    return new QueueManager( rabbitMqConnection );
  }

  private queues: any = {}
  async send( queueName: string, data: any ) {
    const queue = await this.getQueueOrCreateIt( queueName );
    return queue.send( queueName, data );
  }

  private async getQueueOrCreateIt( queueName: string ): Promise<Queue> {
    if ( this.queues[queueName] ) {
      return new Promise( ( resolve, reject ) => resolve( this.queues[queueName] ) );
    } else {
      const queue = new Queue( this.connection );
      await queue.create();
      this.queues[queueName] = queue;
      return queue;
    }
  }
}
