const zodiac = document.getElementById("zodiac")

const bod = document.body


const changeBackground = () => {
    switch (zodiac.value) {
        case 'aries':
            bod.style.backgroundColor = "#FF0000"
            break;


        case 'taurus':
            bod.style.backgroundColor = "#000FFF"
            break;


        case 'gemini':
            bod.style.backgroundColor = "#7FFFD4"
            break;

        case 'cancer':
            bod.style.backgroundColor = "#800080"
            break;

        case 'lio':
            bod.style.backgroundColor = "#34282C"
            break;

        case 'virgo':
            bod.style.backgroundColor = "#00FF00"
            break;

        case 'libra':
            bod.style.backgroundColor = "#808000"
            break;

        case 'scorpio':
            bod.style.backgroundColor = "#008000"
            break;

        case 'sagittarius':
            bod.style.backgroundColor = "#800000"
            break;

        case 'capricon':
            bod.style.backgroundColor = "#FFA500"
            break;

        case 'aquarius':
            bod.style.backgroundColor = "blue"
            break;

        case 'pisces':
            bod.style.backgroundColor = "#52595D"
            break;

        default:
            bod.style.backgroundColor="#fff"
            break;
    }
}