import Moment from 'moment';
import 'moment/locale/es'
Moment.locale('es');
export const Formart_date = (date) => Moment(new Date(date)).format("DD MMM [de] YYYY")
