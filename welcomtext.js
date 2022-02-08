const welcome = (number, groupname) => {
    return `Salam @${number}. Bizim ${groupname} qrupuna xoş gəlmisiniz`
}
exports.welcome = welcome

const bye = (number) => {
    return `Sağol @${number} görüşənədək. Hələlik. 👋`
}
exports.bye = bye