import fetch from 'node-fetch';

 async function handler(m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) {
  let response = args.join(' ').split('|');
  if (!args[0]) throw 'يمكنك صناعة شعار تيكتوك مثال :\n\n*.ttlogo* bobiza|bot';
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=Gatadios&text1=${response[0]}&text2=${response[1]}`;
  conn.sendFile(m.chat, res, 'bobiza.jpg', `instagram.com/soufian_k23`, m, false);
}

handler.help = ['ttlogo']
handler.tags = ['logo'];
handler.command = /^(ttlogo)$/i;
export default handler
