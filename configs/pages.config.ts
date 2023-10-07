// Add page descriptions in paragraphs separated by commas
// Добавляйте описание на страницах параграфами, разделенными запятой
// Dodaj opisy na stronach w akapitach oddzielonych przecinkami

interface IPage {
  title: string;
  description: string[];
}

interface IPagesInfo {
  [key: string]: IPage;
}

const pagesInfo: IPagesInfo = {
  saltCave: {
    title: 'Grota Solna',
    description: [
      'Grota solna to pomieszczenie wypełnione solą, które ma na celu\n' +
        'poprawienie zdrowia i samopoczucia ludzi. Oczyszcza ona drogi\n' +
        'oddechowe, a także działa kojąco na skórę. Groty solne są\n' +
        'szczególnie polecane osobom cierpiącym na choroby układu\n' +
        'oddechowego, takie jak astma czy kaszel. Sól zawarta w grocie jest\n' +
        'bogata w mikroelementy, które korzystnie wpływają na organizm. Grota\n' +
        'solna może być stosowana w celach terapeutycznych, a także jako\n' +
        'sposób na relaks i odprężenie.',

      'Jeśli chcesz zadbać o swoje zdrowie w sposób naturalny i bezpieczny\n' +
        'dla organizmu, grota solna to doskonały wybór. W takim pomieszczeniu\n' +
        'możesz nie tylko poprawić swoje zdrowie, ale także wypocząć i\n' +
        'zrelaksować się po ciężkim dniu. Mgiełka solankowa którą można\n' +
        'zobaczyć poniżej na filmiku jest dodatkowo rozpylana, ona zwiększa\n' +
        'koncentrację mikrocząstek i jest bardziej skoncentrowaną formą\n' +
        'terapii solnej.',
    ],
  },
  saunaInfrared: {
    title: 'Sauna infrared',
    description: [
      'Sauna infrared to innowacyjne rozwiązanie, które zyskuje na\n' +
        'popularności ze względu na swoje korzystne działanie na zdrowie. W\n' +
        'przeciwieństwie do tradycyjnych saun, sauna-salt-cave-about infrared działa na\n' +
        'zasadzie generowania ciepła przez promieniowanie podczerwone, a nie\n' +
        'przez ogrzewanie powietrza. Dzięki temu temperatura w saunie jest\n' +
        'niższa, ale odczuwamy takie samo ciepło.',

      'Korzystanie z sauny infrared przynosi wiele korzyści dla naszego\n' +
        'organizmu. Sauny te poprawiają krążenie, redukują ból, zmniejszają\n' +
        'stres i poprawiają wygląd skóry. Dzięki temu są szczególnie polecane\n' +
        'dla osób zmagających się z bólami mięśni i stawów, a także dla osób,\n' +
        'które chcą poprawić kondycję swojej skóry.',

      'Należy jednak pamiętać, że sauna-salt-cave-about infrared nie jest odpowiednia dla\n' +
        'każdego. Osoby z problemami zdrowotnymi, takimi jak choroby serca,\n' +
        'nadciśnienie czy cukrzyca, powinny skonsultować się z lekarzem przed\n' +
        'skorzystaniem z sauny infrared. We wszystkich przypadkach, przed\n' +
        'rozpoczęciem korzystania z sauny, należy dokładnie zapoznać się z\n' +
        'zasadami bezpieczeństwa i przestrzegać ich podczas korzystania z\n' +
        'sauny infrared.',
    ],
  },
  inhalation: {
    title: 'Inhalacje wodorem molekularnym',
    description: [
      'Inhalacje wodorem molekularnym mają wiele korzyści dla zdrowia.\n' +
        'Wodór molekularny działa jako silny przeciwutleniacz, redukując\n' +
        'stres oksydacyjny w organizmie. Inhalacje wodorem mogą pomóc w\n' +
        'łagodzeniu bólu, redukowaniu stanów zapalnych, poprawie\n' +
        'funkcjonowania układu krążenia oraz zwiększeniu poziomu energii.\n' +
        'Wodór molekularny jest także bezpieczny w użyciu i nie powoduje\n' +
        'skutków ubocznych.',
    ],
  },
  yoga: {
    title: 'Joga w grocie solnej',
    description: [
      'Joga w grocie solnej to doskonałe połączenie ćwiczeń jogi ze\n' +
        'zdrowotnymi właściwościami soli. Grota solna to miejsce, w którym\n' +
        'można wypocząć i złagodzić objawy alergii, astmy czy przeziębienia.\n' +
        'Ćwiczenia jogi w takim otoczeniu pomagają dodatkowo zredukować stres\n' +
        'i poprawić samopoczucie. Dzięki temu, joga w grocie solnej jest\n' +
        'idealnym sposobem na poprawę zdrowia fizycznego i psychicznego.',
    ],
  },
};

export default pagesInfo;
