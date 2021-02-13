import {formatRelative, subDays} from 'date-fns';
const dateFormated = (date) => {
    return formatRelative(subDays(new Date(date), 3), new Date())
}

export default dateFormated;