import sunduk from '../../assets/img/charm/sunduk.jpg';
import meshok from '../../assets/img/charm/meshok.jpg';
import greben1 from '../../assets/img/charm/greben1.jpg';
import greben2 from '../../assets/img/charm/greben2.jpg';
import greben3 from '../../assets/img/charm/greben3.jpg';
import casualCase from '../../assets/img/charm/casual-case.jpg';
import brosh1 from '../../assets/img/charm/brosh1.jpg';
import brosh2 from '../../assets/img/charm/brosh2.jpg';
import brosh3 from '../../assets/img/charm/brosh3.jpg';
import bigCharmCase from '../../assets/img/charm/big-case.jpg';
import aromat from '../../assets/img/charm/aromat.jpg';
import aromatCase from '../../assets/img/charm/aromat-case.jpg';
import ears from '../../assets/img/charm/ears.jpg';
import earsx2 from '../../assets/img/charm/ears-x2.jpg';

const DATA_CHARM_INPUTS = {
    "rus": [
        {text: "Шкатулка с Cерьгами", img: sunduk, id:'sunduk'},
        {text: "Мешочек с Серьгами", img: meshok, id:'meshok'},
        {text: "Серебряный Гребень", img: greben1, id:'greben1'},
        {text: "Золотой Гребень", img: greben2, id:'greben2'},
        {text: "Алмазный Гребень", img: greben3, id:'greben3'},
        {text: "Набор Гребней", img: casualCase, id:'casualCase'},
        {text: "Нефритовая Брошь", img: brosh1, id:'brosh1'},
        {text: "Брошь Из Топаза", img: brosh2, id:'brosh2'},
        {text: "Бриллиантовая Брошь", img: brosh3, id:'brosh3'},
        {text: "Сундук С золотыми Серьгами", img: bigCharmCase, id:'bigCharmCase'},
        {text: "Oчаровательный Аромат", img: aromat, id:'aromat'},
        {text: "Сладкий Аромат", img: aromatCase, id:'aromatCase'},
        {text: "Серебряные Cерьги", img: ears, id:'ears'},
        {text: "Золотые Серьги", img: earsx2, id:'earsx2'},
    ],

    "eng": [
        {text: "Charm Chest", img: sunduk, id:'sunduk'},
        {text: "Charm Pack", img: meshok, id:'meshok'},
        {text: "Sliver Hairpin", img: greben1, id:'greben1'},
        {text: "Gold Hairpin", img: greben2, id:'greben2'},
        {text: "Diamond Hairpin", img: greben3, id:'greben3'},
        {text: "Hairpin Chest", img: casualCase, id:'casualCase'},
        {text: "Jade Brooch", img: brosh1, id:'brosh1'},
        {text: "Gemstone Brooch", img: brosh2, id:'brosh2'},
        {text: "Diamond Brooch", img: brosh3, id:'brosh3'},
        {text: "Golden Earring Chest", img: bigCharmCase, id:'bigCharmCase'},
        {text: "Fresh Fragrance", img: aromat, id:'aromat'},
        {text: "Sweet Fragrance", img: aromatCase, id:'aromatCase'},
        {text: "Silver Earring", img: ears, id:'ears'},
        {text: "Gold Earring", img: earsx2, id:'earsx2'},
    ],

    "tur": [
        {text: "Cazibe Sandığı", img: sunduk, id:'sunduk'},
        {text: "Cazibe Paketi", img: meshok, id:'meshok'},
        {text: "Gümüş Toka", img: greben1, id:'greben1'},
        {text: "Altın Toka", img: greben2, id:'greben2'},
        {text: "Elmas Toka", img: greben3, id:'greben3'},
        {text: "Toka Sandığı", img: casualCase, id:'casualCase'},
        {text: "Yeşil Broş", img: brosh1, id:'brosh1'},
        {text: "Mavi Broş", img: brosh2, id:'brosh2'},
        {text: "Elmas Broş", img: brosh3, id:'brosh3'},
        {text: "Altın Küpe Sandığı", img: bigCharmCase, id:'bigCharmCase'},
        {text: "Ferah Kokulu Parfüm", img: aromat, id:'aromat'},
        {text: "Tatlı Kokulu Parfüm", img: aromatCase, id:'aromatCase'},
        {text: "Gümüş Küpe", img: ears, id:'ears'},
        {text: "Altın Küpe", img: earsx2, id:'earsx2'},
    ],
}

const DATA_CHARM_TITLE = {
    "rus": {title: 'Расчет Обаяния', subtitle: 'Межсерверный рейтинг обаяния (Элиза)'},
    "eng": {title: 'Charisma Calculation', subtitle: 'Interserver Charm Rating (Eliza)'},
    "tur": {title: 'Karizma Hesaplama', subtitle: 'Sunucular Arası Büyü Derecesi (Eliza)'},
}

const DATA_CHARM_UI = {
    "rus": {inputText: 'Прирост обаяния (усредненный)', resultButton: 'Получить результат'},
    "eng": {inputText: 'Charm Growth (Average)', resultButton: 'Get Result'},
    "tur": {inputText: 'Cazibe Büyümesi (Ortalama)', resultButton: 'Sonuç al'},
}

const DATA_CHARM_TEXT = [
    {
        "rus": {text: "Скоро здесь появится описание..."},
        "eng": {text: "Description coming soon..."},
        "tur": {text: "Açıklama yakında..."}
    },
]



export const DATA_CHARM = {
    text: DATA_CHARM_TEXT,
    title: DATA_CHARM_TITLE,
    inputs: DATA_CHARM_INPUTS,
    ui: DATA_CHARM_UI,
}