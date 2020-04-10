const friends = 'josefina'
const dict = {
   [friends] : 'id'
}

console.log(dict['josefina'])

const dict2 = [['hi','hi'], ['cristo', 'go']]

console.log(dict2['hi'])

const map = new Map()

map.set('oi', 'hi')
map.set('oia', 'hi')
console.log(map.get('oi'))
map.set('oi', 'bom dia')
console.log(map)