const ownerNumber = ["557187645787@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557187645787' 
// mude para seu numero

const callbotmsgs = ['orion', 'brizas']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'Yeni anti-çat aktivləşdirilib və siz mənim sahibim deyilsiniz, ona görə də bloklanacaqsınız'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 BLOKLANMIŞ PV 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Xoş gəldiniz ${numero}\n\nƏmr siyahısı üçün ${prefix}menu yazın`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Sağol ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, bat) => {
    return `AzeriBOT Menyusu, 434 ƏMR, BATARYA %${bat}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.ytimg.com/vi/AJQmx0zdXSk/maxresdefault.jpg`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.ytimg.com/vi/AJQmx0zdXSk/maxresdefault.jpg`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.ytimg.com/vi/AJQmx0zdXSk/maxresdefault.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '🇦🇿AzeriBot🇦🇿\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Nömrəniz bloklanıb, yəni sizi dinləmir 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra membro comum, o ban estar próximo*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `Mesajların hesablanması sistemi qrup üzrədir və insanları sıralamaq, siyahıya salmaq, onlara görə silməkdən ibarətdir
qrupdakı mesajların tezliyi ilə qrupun mesajlarını idarə etmək üçün aşağıdakı əmrlərə baxın:

checkativo (mark) - işarələnmiş üzvün mesaj tezliyini sadalayır
rankativo - qrupdakı ən aktiv insanları sıralayır
banativos (num) - müəyyən qnt mesaj nömrələri olan üzvləri silir
filtroativo (num) - müəyyən qnt mesaj nömrələri olan üzvlərin siyahısı]
atividade - bütün qrup üzvlərinin fəaliyyətini sadalayır

Qeyd: Mesajların sayı bot tərəfindən olduğuna görə qeyri-dəqiq ola bilər.`

const adminmsgtype = '*Siz adminsiniz, ona görə də qadağan olunmuş tipli mesaj göndərdiyiniz üçün sizə qadağa qoymayacağam*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm porno ilə antiporn aktivləşdirildi, siz artıq doğru bilirsiniz...'
// mensagem de ban no antiporn

const adminmsgporn = '*Siz adminsınız, ona görə də porno göndərdiyiniz üçün sizə qadağa qoymayacağam*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Digər nömrəni işlət, Ban yaxınlaşır...'
// mensagem de ban no antilink

const adminmsglink = 'Bu bir link dostumdur... oh bəli siz adminsiniz, buna görə də lol ola bilərsiniz 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Bu söz bot tərəfindən qadağan olunmuş sözlər siyahısındadır'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Qadağan olunmuş söz? siz artıq düz bilirsiniz'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Sabahınız xeyir, Elçin Qasımov 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Hörmətli Elçin bəy, xahiş olunur bu kofeni qəbul et. ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Hörmətli Elçin bəy, ümid edirəm yaxşı gün keçirdin ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Xəta baş verdi, yenidən cəhd edin :/'
// mensagem de erro

const notregister = `*Komanda qeydiyyatdan keçməyib, əmrlərin siyahısını görmək üçün ${prefix}menu yazın*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Xərçəngə oxşayırsan, əzilmiş xərçəngə 😡'
const cadebot = 'Məni Elçin Qasımov 👉👈?'
const botfdp = 'Uç burdan'
const botgostoso = 'Bir daha təşəkkür edirəm 😳👉👈'
const botfofo = 'Bir daha təşəkkür edirəm 😳👉👈'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Vai te foder, jogador de ff, comprador de pack do pézinho'
const botputa = 'Senhora sua mãe 😡'
const botgay = 'Falou o manja rola 😡'
const botviado = 'Falou o manja rola 😡'
const numbotfeio = 'senhora sua mãe 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo número proprietário! ❌',
        admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs