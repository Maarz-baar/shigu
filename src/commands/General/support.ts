import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽𝘀*\n\n
                 *「Elaina: RE Events」*:https://chat.whatsapp.com/EOB2UescDz78rTYG4MQWe1\n\n
                 *「Elaina: 𝗖𝗮𝘀𝗶𝗻𝗼💰」*:https://chat.whatsapp.com/Gy1JemBGs9wLjVEfzbRJ21                      `,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/a94f2f60dc76a7403ad41.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, Check dm dude I have sent you a personal message in your DM📪\n` }
        )

        }
}
