import partners from '../../assets/img/charm/partners.png';

const DATA_MAIN_CALCULATION = {
    "rus": {calculateText: 'Заполните поля в соответствии с информацией в ячейках', info: 'Для получения детального расчета нажмите кнопку "Получить результат" после ввода данных'},
    "eng": {calculateText: 'Fill in the fields according to the information in the cells', info: 'For a detailed calculation, click the "Get result" button after entering the data'},
    "tur": {calculateText: 'Hücrelerdeki bilgilere göre alanları doldurun', info: 'Detaylı hesaplama için verileri girdikten sonra "Sonuç al" butonuna tıklayınız.'},
}

const DATA_MAIN_UI = {
    "rus": {partnersTitle: 'Пожалуйста введите количество партнеров', partnersDescription: 'Обязательное поле', partnersButton: 'Подтвердить'},
    "eng": {partnersTitle: 'Please enter the number of partners', partnersDescription: 'Obligatory field', partnersButton: 'Confirm'},
    "tur": {partnersTitle: 'Lütfen ortak sayısını girin', partnersDescription: 'zorunlu alan', partnersButton: 'Teyit etmek'},
}

const DATA_MAIN_PARTNER_INPUT = {
    "rus": 
        {text: "Количество партнеров", img: partners, id:'partners'}
    ,

    "eng": 
        {text: "Companions amount", img: partners, id:'partners'}
    ,

    "tur": 
        {text: "Cariye Sayısı", img: partners, id:'partners'}
    ,
}

export const DATA_MAIN = {
    calc: DATA_MAIN_CALCULATION,
    ui: DATA_MAIN_UI,
    partnerInput: DATA_MAIN_PARTNER_INPUT,
}