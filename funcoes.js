function MAIOR_MENOR(a, b, c, d, e) {
    var maior = a;
    var menor = a;

    if (b > maior) maior = b;
    if (c > maior) maior = c;
    if (d > maior) maior = d;
    if (e > maior) maior = e;

    if (b < menor) menor = b;
    if (c < menor) menor = c;
    if (d < menor) menor = d;
    if (e < menor) menor = e;

    return "Maior: " + maior + " / Menor: " + menor;
}

function VOGAL(c) {
    c = c.toLowerCase();
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        return 1;
    }
    return 0;
}

function LIMITES(li, ls) {
    var pares = [];
    var soma = 0;
    for (var i = li + 1; i < ls; i++) {
        if (i % 2 == 0) {
            pares.push(i);
            soma = soma + i;
        }
    }
    if (pares.length == 0) {
        return "Nenhum número par no intervalo. Somatório: 0";
    }
    return "Pares: " + pares.join(", ") + " | Somatório: " + soma;
}

function ORDEM(a, b, c) {
    var nums = [a, b, c];
    var temp;

    if (nums[0] > nums[1]) {
        temp = nums[0];
        nums[0] = nums[1];
        nums[1] = temp;
    }
    if (nums[1] > nums[2]) {
        temp = nums[1];
        nums[1] = nums[2];
        nums[2] = temp;
    }
    if (nums[0] > nums[1]) {
        temp = nums[0];
        nums[0] = nums[1];
        nums[1] = temp;
    }

    return nums[0] + ", " + nums[1] + ", " + nums[2];
}

function POSITIVO_NEGATIVO(x) {
    if (x >= 0) {
        return true;
    } else {
        return false;
    }
}

function PAR_IMPAR(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}