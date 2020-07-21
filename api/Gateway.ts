import { Request, Response } from 'express'
import PubSubService from './services/PublisherService'
import Data from './interfaces/Data'

export default {
  async postMessage (request: Request, response: Response) {
    try {
      await PubSubService.connect()
      const topicName: string = request.body.topicName
      const data: Data = request.body.data
      await PubSubService.publish(topicName, data)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  }
}
