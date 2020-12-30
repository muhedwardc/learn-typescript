const codes = ['c', 'o', 'd', 'e', 's'];

const [ first, second, ...others ] = codes;

const me = {
    nickName: 'Ed',
    old: 22
}

const { nickName, old } = me;
console.log(nickName, old);
