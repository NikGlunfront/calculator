const DATA_TABLE_RESULTS = {
    "rus": {min: 'Мин. количество', avg: "Среднее количество", max: "Макс. количество"},
    "eng": {min: "Min. amount", avg: "Average quantity", max: "Max. quantity"},
    "tur": {min: "Minimum miktar", avg: "Ortalama miktar", max: "En yüksek miktar"},
}

const DATA_TABLE_HEADER = {
    "rus": {title: 'Мин. количество', description: "Среднее количество"},
    "eng": {title: "Min. amount", description: "Average quantity"},
    "tur": {title: "Minimum miktar", description: "Ortalama miktar"},
}

const DATA_TABLE_BODY = {
    "rus": {title: 'Таблица с результатами расчетов', subtitle: "В таблице ниже приведены результаты расчетов. Для просмотра подробных результатов нажмите кнопку 'Подробнее'", button: 'Подробнее'},
    "eng": {title: "Table with calculation results", subtitle: "The table below shows the calculation results. To view detailed results, click the 'Details' button", button: 'Details'},
    "tur": {title: "Hesaplama sonuçlarını içeren tablo", subtitle: "Aşağıdaki tablo hesaplama sonuçlarını göstermektedir. Ayrıntılı sonuçları görüntülemek için 'Ayrıntılar' düğmesini tıklayın", button: 'Daha fazla'},
}

export const DATA_TABLE = {
    head: DATA_TABLE_HEADER,
    text: DATA_TABLE_RESULTS,
    body: DATA_TABLE_BODY,
}