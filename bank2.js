let summ = parseFloat(prompt('Введите сумму вклада'));
let procent = parseFloat(prompt('Введите годовой процент'));
let months = parseInt(prompt('Введите кол-во месяцев'));

if (months <= 0 || months > 12 || summ <= 0 || procent <= 0) {
    alert('Некорректный ввод. Пожалуйста, введите корректные значения.');
} else {
    let message = '';
    let itog = 0;

    for (let i = 1; i <= months; i++) {
        let percentForMonth = procent / 100 / 12;
        let incomeForMonth = summ * percentForMonth;
        summ += incomeForMonth;
        message += `${i}. Месяц ${i}: ${summ.toFixed(2)} = ${summ.toFixed(2)} + ${summ.toFixed(2)} * (${procent} / 100 / 12) = ${(summ - incomeForMonth).toFixed(2)} + ${incomeForMonth.toFixed(2)}\n`;
        itog += incomeForMonth;
    }

    alert(message + `Итого доход: ${itog.toFixed(2)}`);
}
