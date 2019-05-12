    client.on('message', async msg => {
    var prefix = "$";
    var user = msg.author;
        if (msg.content === (prefix +'help')) {
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
 .setDescription(`
`)  
 
 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('🎶').then(r=>{          
     zg.react('🎲').then(r=>{          
     zg.react('💥').then(r=>{
     zg.react('❌').then(r=>{          
 var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
   var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
    var nnn = (reaction, user) => reaction.emoji.name === '🎶' && user.id === msg.author.id;
    var ppp = (reaction, user) => reaction.emoji.name === '🎲' && user.id === msg.author.id;
    var vvv = (reaction, user) => reaction.emoji.name === '💥' && user.id === msg.author.id;
    var ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var nn = zg.createReactionCollector(nnn, { maxMatches:1 , time: 60000 , });
    var pp = zg.createReactionCollector(ppp, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });
 
aa.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
          .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`        ***__الاوامر العامه__***
**
『**\n${prefix}**allbots/لعرض جميع البوتات الي بالسيرفر』
『**\n${prefix}**server/يعرض لك معلومات عن السيرفر』
『**\n${prefix}**bot/يعرض لك كل معلومات البوت』
『**\n${prefix}**credit/يعرض لك الكردت حقك』
『**\n${prefix}**daily/لاخذ يوميتك من الكردت』
『**\n${prefix}**profile/لعرض البروفايل الخاص بك』
『**\n${prefix}**setwelcomer <name chat> /لتفعيل الترحيب بصوره 』
『**\n${prefix}**invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『**\n${prefix}**invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 』
『**\n${prefix}**cal/اله حاسبة』
『**\n${prefix}**trans <language> <any thing>/يترجم لك الي تبيه من اي لغة』
『**\n${prefix}**short/يختصر لك رابط كبير الى رابط صغير』
『**\n${prefix}**tag/يكتب لك الكلمة بشكل جميل وكبير』
『**\n${prefix}**google/للبحث في قوقل عن طريق الدسكورد』
『**\n${prefix}**perms/يعرض لك برمشناتك بالسيرفر』
『**\n${prefix}**za5/يزخرف لك كلمة او جملة』
『**\n${prefix}**rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها』
『**\n${prefix}**roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل』
『**\n${prefix}**say/يكرر الكلام الي تكتبو』
『**\n${prefix}**image/صورة السيرفر』
『**\n${prefix}**members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『**\n${prefix}**id/معلومات عنك』
『**\n${prefix}**bans / عدد الاشخاص المبندة 』
『**\n${prefix}**avatar/صورتك او صورة الي تمنشنو』
『**\n${prefix}**embed/يكرر الي تقولو بشكل حلو』
『**\n${prefix}**discrim/كود يضهر لك الاشخاص نفس تاقك』
『**\n${prefix}**emoji <any things>/لتحويل اي كلمه تقولها الي ايموجي』
『**\n${prefix}**inv/لدعوة البوت الى سيرفرك』
『**\n${prefix}**support/سيرفر الدعم』
『**\n${prefix}**contact/ارسال اقتراح او لمراسلة صاحب البوت』
**
`)
 
 .setTimestamp()
    
   
   
    })//
mm.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`        ***__الاوامر الاداريه__***
**
『**\n${prefix}**move @user /  لسحب الشخص الى روومك』
『**\n${prefix}**bc / رسالة جماعية الى كل اعضاء السيرفر』
『**\n${prefix}**role @user <rank> / لأعطاء رتبة لعضو معين』
『**\n${prefix}**roleremove @user <rank> / لازالة الرتبة من شخص معين』
『**\n${prefix}**role all <rank> / لأعطاء رتبة للجميع』
『**\n${prefix}**role humans <rank> / لأعطاء رتبة للاشخاص فقط』
『**\n${prefix}**role bots <rank> / لأعطاء رتبة لجميع البوتات』
『**\n${prefix}**hchannel / اخفاء الشات』
『**\n${prefix}**schannel / اضهار الشات المخفية』
『**\n${prefix}**clr <numbr> / مسح الشات بعدد』
『**\n${prefix}**clear / مسح الشات』
『**\n${prefix}**mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
『**\n${prefix}**unmute @user / لفك الميوت عن الشخص 』
『**\n${prefix}**kick @user <reason> / طرد الشخص من السيرفر』
『**\n${prefix}**ban @user <reason> / حضر الشخص من السيرفر』
『**\n${prefix}**mutechannel / تقفيل الشات』
『**\n${prefix}**unmutechannel / فتح الشات』
『**\n${prefix}**dc / مسح كل الرومات』
『**\n${prefix}**dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات』
『**\n${prefix}**ct <name> / انشاء شات』
『**\n${prefix}**cv <name> / انشاء رووم فويس』
『**\n${prefix}**delet <name> / مسح الشات او الرووم فويس』
『**\n${prefix}**ccolors <number> / ينشا لك الوان مع كم الوان تبي』`)  
 
.setTimestamp()
    
    })
nn.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`        ***__اوامر اغاني__***
**
『**\n${prefix}**play / لتشغيل أغنية برآبط أو بأسم』
『**\n${prefix}**skip / لتجآوز الأغنية الحآلية』
『**\n${prefix}**pause / إيقآف الأغنية مؤقتا』
『**\n${prefix}**resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
『**\n${prefix}**vol / لتغيير درجة الصوت 100 - 0』
『**\n${prefix}**stop / لإخرآج البوت من الروم』
『**\n${prefix}**np / لمعرفة الأغنية المشغلة حآليا』
『**\n${prefix}**queue / لمعرفة قآئمة التشغيل』
**
`)
 
 
 .setTimestamp()
    
})
vv.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`        **' SuperBot Discord.
『**\n${prefix}**help - لرؤية الأوامر :comet:
『**\n${prefix}**inv - لدعوة البوت :wine_glass:
\n معلومات عن البوت :thinking:
\n بوت ديسكورت متكامل :soccer: :microphone: :earth_americas:
\nيوجد داخل البوت خاصية منع التهكير مجانا وبسهوله تامة :scream:
\nصيانة دورية :stopwatch: :wrench:
\n 24 ساعة :point_up:
\nاضافات يومية :link:
\n الدعم الفني للمساعدةة : https://discord.gg/yWwdycB  :rose:
\n وشكرا لكم :lizard: **
`)
 
 
 .setTimestamp()
    
   
})
pp.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setDescription(`   ***__اوامر العاب__***
 **      
『**\n${prefix}**rps / حجر ورقة مقص』
『**\n${prefix}**speed / اسرع كتابة』
『**\n${prefix}**quas / اسئلة عامة』
『**\n${prefix}**نكت / نكت 』
『**\n${prefix}**لعبة فكك / فكك』
『**\n${prefix}**عواصم عشوائي/عواصم』
『**\n${prefix}**لعبة كت تويت / كت تويت』
『**\n${prefix}**roll <number> / قرعة』
『**\n${prefix}**لو خيروك بطريقة حلوة / لو خيروك』
『**\n${prefix}**لعبة مريم / مريم』
『**\n${prefix}**فوائد ونصائح  / هل تعلم』
『**\n${prefix}**يعطيك عقابات قاسية / عقاب 』
**
`)
 
 
 
 .setTimestamp()
    
   
})
cc.on("collect", r => {
    zg.delete();
    msg.delete();
})
     }).then(msg => msg.delete(15000));
     })
     })
     })
})
     
     });
