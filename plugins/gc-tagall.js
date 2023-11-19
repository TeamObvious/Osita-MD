const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 𝐎𝐬𝐢𝐭𝐨𝐬 𝐘 𝐀𝐧𝐨𝐭𝐞𝐧𝐬𝐞 𝐌𝐢𝐞𝐫𝐝𝐚𝐬 ${pesan}`;
  let teks = `🐼  𝐎𝐬𝐢𝐭𝐚 𝐁𝐨𝐭  🐼\n\n ${oi}\n\n🐼 *@SamuraiBot*\n`;
  for (const mem of participants) {
    teks += `▶︎🐼❖ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n🐼  𝐎𝐬𝐢𝐭𝐚 𝐁𝐨𝐭  🐼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
