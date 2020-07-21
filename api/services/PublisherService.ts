import PubSubConfig from '../../config/PubSub'
import { PubSub } from '@google-cloud/pubsub'
import Data from '../interfaces/Data'

class PubSubService {
  private client: PubSub | undefined

  public async connect () {
    this.client = await PubSubConfig.getClient()
  }

  public async publish(topicName: string, data: Data ) {
    const dataBuffer = Buffer.from(JSON.stringify(data))
    const messageId = await this.client?.topic(topicName).publish(dataBuffer)
    console.log(`Message ${messageId} published.`)
  }
}

export default new PubSubService()
