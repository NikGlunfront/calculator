import expBooks from '../../assets/img/talents/exp-books.jpg';
import expToms from '../../assets/img/talents/exp-toms.jpg';
import bigCase from '../../assets/img/talents/case.jpg';
import atkBadge from '../../assets/img/talents/atk-badge.jpg';
import naukaBadge from '../../assets/img/talents/nauka-badge.jpg';
import heartBadge from '../../assets/img/talents/heart-badge.jpg';
import expCase from '../../assets/img/talents/exp-case.jpg';
import politikaBadge from '../../assets/img/talents/politika-badge.jpg';
import sixBadge from '../../assets/img/talents/six-badge.jpg';
import points from '../../assets/img/talents/points.jpg';

const DATA_TALENTS_INPUTS = {
    "rus": [
        {text: "Альманах Знаний", img: expBooks, id:'expBooks'},
        {text: "Приказ Изучения", img: expToms, id:'expToms'},
        {text: "Случ. приказ-изучения", img: expCase, id:'expCase'},
        {text: "Шкатулка Сфер", img: bigCase, id:'bigCase'},
        {text: "Жетон Тактики", img: atkBadge, id:'atkBadge'},
        {text: "Жетон Науки", img: naukaBadge, id:'naukaBadge'},
        {text: "Жетон Культуры", img: heartBadge, id:'heartBadge'},
        {text: "Жетон Политики", img: politikaBadge, id:'politikaBadge'},
        {text: "Жетон Могущества", img: sixBadge, id:'sixBadge'},
        {text: "Суммарное число Опыт книг Советников", img: points, id:'points'},
    ],

    "eng": [
        {text: "Book XP Pack", img: expBooks, id:'expBooks'},
        {text: "Book Xp Chest", img: expToms, id:'expToms'},
        {text: "Book Xp Booster", img: expCase, id:'expCase'},
        {text: "Orb Box", img: bigCase, id:'bigCase'},
        {text: "Military Badge", img: atkBadge, id:'atkBadge'},
        {text: "Research Badge", img: naukaBadge, id:'naukaBadge'},
        {text: "Prestige Badge", img: heartBadge, id:'heartBadge'},
        {text: "Politics Badge", img: politikaBadge, id:'politikaBadge'},
        {text: "Almighty Badge", img: sixBadge, id:'sixBadge'},
        {text: "Total number of Experience books of Advisors", img: points, id:'points'},
    ],

    "tur": [
        {text: "Kitap Tecrübesi", img: expBooks, id:'expBooks'},
        {text: "Kitap Tecrübe Sandığı", img: expToms, id:'expToms'},
        {text: "Kitap Tecrübe Takviyesi", img: expCase, id:'expCase'},
        {text: "Küre Kutusu", img: bigCase, id:'bigCase'},
        {text: "Güç Payesi", img: atkBadge, id:'atkBadge'},
        {text: "İtibar Payesi", img: naukaBadge, id:'naukaBadge'},
        {text: "Bilgi Payesi", img: heartBadge, id:'heartBadge'},
        {text: "Politika Payesi", img: politikaBadge, id:'politikaBadge'},
        {text: "Süper Paye", img: sixBadge, id:'sixBadge'},
        {text: "Danışmanların Deneyim kitaplarının toplam sayısı", img: points, id:'points'},
    ],
}

const DATA_TALENTS_TITLE = {
    "rus": {title: 'Расчет Талантов', subtitle: 'Межсерверный рейтинг талантов (Богдан)', calculateText: 'Заполните поля в соответствии с информацией в ячейках', info: 'Для получения детального расчета нажмите кнопку "Получить результат" после ввода данных'},
    "eng": {title: 'Calculation of Talents', subtitle: 'Cross-Server Talent Rating (Bogdan)', calculateText: 'Fill in the fields according to the information in the cells', info: 'For a detailed calculation, click the "Get result" button after entering the data'},
    "tur": {title: 'Yeteneklerin Hesaplanması', subtitle: 'Sunucular Arası Yetenek Derecelendirmesi (Bogdan)', calculateText: 'Hücrelerdeki bilgilere göre alanları doldurun', info: 'Detaylı hesaplama için verileri girdikten sonra "Sonuç al" butonuna tıklayınız.'},
}

const DATA_TALENTS_UI = {
    "rus": {inputText: 'Прирост талантов (усредненный)', resultButton: 'Получить результат'},
    "eng": {inputText: 'Talent growth (average)', resultButton: 'Get Result'},
    "tur": {inputText: 'Yetenek büyümesi (ortalama)', resultButton: 'Sonuç al'},
}

const DATA_TALENTS_TEXT = [
    {
        "rus": {text: "Расчет жетонов могущества производится с учетом улучшения навыков исключительно с шестью звездами."},
        "eng": {text: "The calculation of power tokens is made taking into account the improvement of skills with six stars only."},
        "tur": {text: "Güç belirteçlerinin hesaplanması, yalnızca altı yıldızla becerilerin geliştirilmesi dikkate alınarak yapılır."}
    },
    {
        "rus": {text: "Фактическое количество талантов может отличаться от Среднего и Максимального количества в меньшую сторону."},
        "eng": {text: "The actual number of talents may differ from the Average and Maximum number down."},
        "tur": {text: "Gerçek yetenek sayısı, aşağı Ortalama ve Maksimum sayıdan farklı olabilir."}
    },
    {
        "rus": {text: "Результатом вычислений являются три показателя: Минимальное количество, Среднее количество, Максимальное количество."},
        "eng": {text: "The result of the calculations are three indicators: Minimum number, Average number, Maximum number."},
        "tur": {text: "Hesaplamaların sonucu üç göstergedir: Minimum sayı, Ortalama sayı, Maksimum sayı."}
    },
    {
        "rus": {text: "Минимальное количество - число, показывающее минимально возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Minimum quantity - a number indicating the minimum possible quantity that will be added to the total indicator."},
        "tur": {text: "Minimum miktar - toplam göstergeye eklenecek olası minimum miktarı gösteren bir sayı."}
    },
    {
        "rus": {text: "Среднее количество - число, показывающее среднее возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Average number - a number showing the average possible amount that will be added to the total indicator."},
        "tur": {text: "Ortalama sayı - toplam göstergeye eklenecek olası ortalama tutarı gösteren bir sayı."}
    },
    {
        "rus": {text: "Максимальное количество - число, показывающее максимальное возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Maximum Quantity - A number indicating the maximum possible amount that will be added to the total."},
        "tur": {text: "Maksimum Miktar - Toplama eklenecek olası maksimum tutarı gösteren bir sayı."}
    },
]



export const DATA_TALENTS = {
    text: DATA_TALENTS_TEXT,
    title: DATA_TALENTS_TITLE,
    inputs: DATA_TALENTS_INPUTS,
    ui: DATA_TALENTS_UI,
}
