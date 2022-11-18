


export default function CalculateDays(startDate: string) {   //Parameters are calendar Year,Month,Day

    let days: number = new Date(startDate).getDate();
    let months: number = new Date(startDate).getMonth();
    let years: number = new Date(startDate).getFullYear();
    let nowDate = new Date();  // current date (local)
    let nowTime = nowDate.getTime();  // current time (UTC)
    let thisYear = nowDate.getFullYear();
    let thisMonth = nowDate.getMonth();
    let thisDay = nowDate.getDate();

    let whYears
    let spareDays

    if ((thisMonth > months - 1) || ((thisMonth === months - 1) && (thisDay >= days))) {
        whYears = thisYear - years
        spareDays = ((nowTime - Date.UTC(thisYear, months - 1, days)) / (3600000 * 24));
        if ((months === 2 && days === 29) && ((thisYear % 4 != 0) || (thisYear % 100 === 0 && thisYear % 400 != 0))) { spareDays = spareDays + 1 }
    } else {
        whYears = thisYear - years - 1;
        spareDays = ((nowTime - Date.UTC(thisYear - 1, months - 1, days)) / (3600000 * 24));
        if ((months === 2 && days === 29) && (((thisYear - 1) % 4 != 0) || ((thisYear - 1) % 100 === 0 && (thisYear - 1) % 400 != 0))) { spareDays = spareDays + 1 }
    }

    if (whYears === 0) {
        return `posted ${Math.floor(spareDays)} days ago`
    } else if (Math.floor(spareDays) === 0) {
        return `posted ${whYears} years ago`
    } else {
        return `posted ${whYears} years ${Math.floor(spareDays)} days ago`
    }

}

