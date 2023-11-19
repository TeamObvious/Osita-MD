const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙀𝙮 𝘼𝙣𝙤𝙩𝙖𝙩𝙚 𝙊 𝙎𝙚𝙧𝙖𝙨 𝘾𝙪𝙥𝙤 𝙋𝙡𝙖𝙣𝙩𝙖 𝘿𝙚 𝙈𝙧𝙙🌱 ${pesan}`;
  let teks = `👑 𝗦𝗮𝗺𝘂𝗿𝗮𝗶 𝗥𝗲𝘆 👑\n\n ${oi}\n\n👑 *@SamuraiBot*\n`;
  for (const mem of participants) {
    teks += `👑| ▪ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n👑 𝗦𝗮𝗺𝘂𝗿𝗮𝗶 𝗥𝗲𝘆 👑`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
