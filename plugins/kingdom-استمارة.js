let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `❃━══✦•〘• ☘️ •〙•✦══━❃

*◈⛩️╠ بــوابــة نـيـتـشـر ╣⛩️◈*

  ⋄━───═◞⬪☘️⬪◟═───━⋄
*⟨⬪ الـلـقـب ⬪⟩*
❖❘  ❘❖
*⟨⬪ اسـم الأنـمـي ⬪⟩*
❖❘  ❘❖
      ✠ ━━ • ━ ‹✤› ━ • ━━ ✠
*⟨⬪ من طـرف ⬪⟩*
❖❘  ❘❖
*⟨⬪ ذكر أو انثى ⬪⟩*
❖❘  ❘❖
  ⋄━───═◞⬪☘️⬪◟═───━⋄
*💫 ارسل صورة للشخصية التي*
 *اخترتها .* 
*💫 أنرتم جميعاً .*
❃━══✦•〘• ☘️ •〙•✦══━❃
*✠ ~مــع تــ✍︎ـحــيــات ↯:~*
*「 ☘️ 𝑵𝒂𝒕𝒖𝒓𝒆 | 自然 」*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/722efd258d6ac9bd9f645.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(7|الاستمارة)$/i;
handler.command = new RegExp;

export default handler;
