let a = 7; // crio as duas variáveis
let b = 94;

c = a; // crio uma temporária e boto ele pra armazenar o primeiro valor de a pois ele irá mudar

a = b; //igualo com b pra começar a troca
console.log(a); //printo a troca

b = c; // igualo ao primeiro valor de a
console.log(b); //printo o valor

/*
    outra forma em JS qque eu fiquei sabendo é :
                                                [a, b] = [b, a]
 */