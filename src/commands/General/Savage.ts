import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'savage',
            description: 'Displays info about savage.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/savage.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hey Savage!đI'm Elaina a learner/student & an upcoming developer in the future.
            
đ«đđđđ©đšđŒđ„đ„;
Wa.me/263716928420
Wa.me/263716564623

â­đđđ©đđȘđ;
https://github.com/savage-savage

đźđđŁđšđ©đđđ§đđą;
https://instagram.com/amapiano-grooves

đžđđđĄđđđ§đđą;
t.me/migos

đđżđđšđđ€đ§đ;
ïœđąđđđđđ đČđđđïœ 

âȘŒđČđŸđŸ đđșđ đ` }
        )
    }
}
