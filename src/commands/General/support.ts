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
                `*๐ฎ๐ฆ๐๐ฝ๐ฝ๐ผ๐ฟ๐ ๐๐ฟ๐ผ๐๐ฝ๐*\n\n
                 *ใElaina: RE Eventsใ*:https://chat.whatsapp.com/EOB2UescDz78rTYG4MQWe1\n\n
                 *ใElaina: ๐๐ฎ๐๐ถ๐ป๐ผ๐ฐใ*:https://chat.whatsapp.com/Gy1JemBGs9wLjVEfzbRJ21                      `,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/a94f2f60dc76a7403ad41.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, Check dm dude I have sent you a personal message in your DM๐ช\n` }
        )

        }
}
