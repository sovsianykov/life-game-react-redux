export function step1(field) {

   return field.map((cell, i) => {
       if (field[i - 1]) {
           if (field[i - 1].isLive) {
               field[i].value++
           }
       }
       if (field[i + 1]) {
           if (field[i + 1].isLive) {
               field[i].value++
           }
       }
       if (field[i - 21]) {
           if (field[i - 21].isLive) {
               field[i].value++
           }
       }
       if (field[i - 20]) {
           if (field[i - 20].isLive) {
               field[i].value++
           }
       }
       if (field[i - 19]) {
           if (field[i - 19].isLive) {
               field[i].value++
           }
       }
       if (field[i + 19]) {
           if (field[i + 19].isLive) {
               field[i].value++
           }
       }
       if (field[i + 20]) {
           if (field[i + 20].isLive) {
               field[i].value++
           }
       }
       if (field[i + 21]) {
           if (field[i + 21].isLive) {
               field[i].value++
           }
       }
       return cell
   })
}

export function step2(field) {

    return field.map((cell, i) => {
        if (field[i].isLive) {
            if (field[i].value < 2 || field[i].value > 3) {
                field[i].isLive = false
            }
        } else {
            if (field[i].value > 2) {
                field[i].isLive = true

            }
        }
        return cell
    })
}
export function step3(field) {

    return field.map((cell, i) => {

            field[i].value = 0

        return cell
    })
}