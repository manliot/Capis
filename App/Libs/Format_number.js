import 'intl';
import 'intl/locale-data/jsonp/es-CO'; // or any other locale you need

export const Format_number_money = (number) => {
    return new Intl.NumberFormat(
        'es-CO',
        {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }
    ).format(number)
}