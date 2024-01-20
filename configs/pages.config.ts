import { StaticImageData } from 'next/image';
import sauna from '../public/sections-images/sauna.jpg';
import yoga from '../public/sections-images/yoga.jpg';
import cave from '../public/sections-images/cave.jpg';
import cave2 from '../public/sections-images/cave2.jpg';

interface Text {
  subtitle: string;
  text: string[];
  addition?: string;
}

interface AdditionalText {
  subtitle: string;
  text: string | string[] | AdditionalText[];
  addition?: string;
}

export interface Section {
  hash: string;
  title: string;
  mainInfo: Text;
  additionInfo?: AdditionalText[];
  picture: {
    file: StaticImageData;
    alt: string;
  };
}

interface SectionsConfig {
  [key: string]: Section;
}

const pagesInfo: SectionsConfig = {
  saltCave: {
    hash: 'grota-solna',
    title: 'Grota Solna',
    mainInfo: {
      subtitle:
        'Grota solna to wyjątkowe miejsce, zbudowane z cegieł solnych, które stwarzają atmosferę spokoju i odprężenia',
      text: [
        'Głównym punktem tej groty jest imponująca tężnia solankowa, która wzmaga działanie soli poprzez uwalnianie ' +
          'drobin soli do powietrza. Dodatkowo, w grocie rozpylana jest inhalacyjna mgiełka solankowa, co sprawia, że ' +
          'jest to miejsce idealne do relaksu i oddechnięcia pełną piersią.',
      ],
    },
    additionInfo: [
      {
        subtitle:
          'Grota solna znana jest ze swoich licznych korzyści zdrowotnych.',
        text: [
          'Inhalacja solanki pomaga w łagodzeniu problemów z drogami oddechowymi, takich jak astma, alergie czy ' +
            'przewlekłe zapalenia zatok. Ponadto, solankowy mikroklimat pomaga w oczyszczeniu dróg oddechowych, ' +
            'poprawiając ich funkcję. ',
          'Działa także łagodząco na stres i poprawia ogólną kondycję psychiczną. ',
          'Odwiedzając Grotę solną, można cieszyć się nie tylko relaksem, ale także korzystać z jej właściwości ' +
            'zdrowotnych, co sprawia, że jest to miejsce szczególnie wartościowe dla osób poszukujących ukojenia dla ' +
            'ciała i ducha.',
        ],
        addition:
          '45-minutowy pobyt w Grocie solnej jest często porównywany do trzydniowego pobytu nad morzem w czasie ' +
          'sztormu ze względu na obecność tych mikroelementów w powietrzu. To doświadczenie może pomóc w oczyszczeniu ' +
          'organizmu i poprawieniu zdrowia, a jednocześnie dostarczać relaksu i odprężenia.',
      },
      {
        subtitle:
          'Pobyt w grocie solnej ma również znaczący wpływ na budowanie odporności organizmu. Jod, brom i inne ' +
          'mikroelementy zawarte w powietrzu groty korzystnie wpływają na zdrowie.',
        text: [
          {
            subtitle: 'Jod',
            text:
              'Jod jest istotnym pierwiastkiem dla naszego organizmu, szczególnie dla prawidłowego funkcjonowania ' +
              'tarczycy. Inhalacja jodu w grocie solnej pomaga w regulacji pracy tarczycy i wspomaga procesy metaboliczne.',
          },
          {
            subtitle: 'Brom',
            text:
              'Brom jest znany ze swoich właściwości relaksujących. W grocie solnej, inhalacja bromu pomaga w ' +
              'zmniejszeniu napięcia mięśniowego, stresu i poprawieniu ogólnego stanu emocjonalnego.',
          },
          {
            subtitle: 'Magnez',
            text:
              'Magnez jest ważnym minerałem dla naszych mięśni i układu nerwowego. Obecność magnezu w powietrzu ' +
              'groty solnej pomaga w łagodzeniu bólu mięśniowego i poprawie ogólnego samopoczucia.',
          },
          {
            subtitle: 'Wapń',
            text:
              'Wapń to niezbędny minerał do utrzymania mocnych kości i zębów. Wprowadzanie wapnia do organizmu ' +
              'podczas inhalacji w grocie solnej korzystnie wpływa na zdrowie układu kostnego.',
          },
          {
            subtitle: 'Selen',
            text:
              'Selen jest pierwiastkiem o działaniu antyoksydacyjnym, co oznacza, że pomaga chronić organizm przed ' +
              'uszkodzeniem komórek przez wolne rodniki. Selen w powietrzu groty solnej wspomaga odporność i ogólną kondycję.',
          },
        ],
      },
    ],
    picture: {
      file: cave,
      alt: 'Salt cave',
    },
  },
  saunaInfrared: {
    hash: 'sauna-infrared',
    title: 'Sauna infrared',
    mainInfo: {
      subtitle:
        'Zapraszamy do skorzystania z naszej usługi sauny infrared, gdzie relaks i poprawa zdrowia idą w parze!',
      text: [
        'Sauna infrared to doskonały sposób na odprężenie się i zadbanie o swoje samopoczucie. ' +
          'Nasza usługa trwa 30 minut i jest dostępna na wyłączność. To oznacza, że jeśli przyjdziesz sama/sam, ' +
          'nikt inny nie będzie miał dostępu do sauny przez cały ten czas. Jednak jeśli wolisz, możecie przyjść ' +
          'we dwoje i cieszyć się tym wyjątkowym doświadczeniem razem. ',
      ],
    },
    additionInfo: [
      {
        subtitle:
          'Sauna infrared, zwana także sauną na podczerwień, ' +
          'działa na zasadzie wykorzystania promieniowania podczerwonego do podgrzewania ciała.',
        text: [
          {
            subtitle: 'Promieniowanie podczerwone',
            text:
              'W saunie infrared stosuje się specjalne promienniki emitujące promieniowanie podczerwone. ' +
              'To promieniowanie jest niewidoczne dla ludzkiego oka, ale można je odczuć jako ciepło.',
          },
          {
            subtitle: 'Przenikanie pod skórę',
            text:
              'Promieniowanie podczerwone penetruje skórę i dociera głębiej do tkanek i narządów. ' +
              'Jest to główna różnica między tradycyjnymi saunami a saunami infrared, ponieważ te pierwsze ' +
              'podgrzewają powietrze wokół ciała.',
          },
          {
            subtitle: 'Podgrzewanie ciała',
            text:
              'Promieniowanie podczerwone przekształca się w ciepło wewnątrz ciała, bez konieczności podgrzewania ' +
              'powietrza. To sprawia, że organizm zaczyna się pocąć, aby utrzymać odpowiednią temperaturę, ' +
              'co przyczynia się do eliminacji toksyn.',
          },
          {
            subtitle: 'Komfort cieplny',
            text:
              'Sauny infrared są często odbierane jako mniej duszne i gorące w porównaniu do tradycyjnych saun. ' +
              'Dzięki temu wielu osobom jest łatwiej znosić wyższą temperaturę w takim środowisku.',
          },
        ],
        addition:
          'Sauna infrared przynosi korzyści osobom cierpiącym na boleriozę, choć ważne jest, aby skonsultować się z lekarzem.',
      },
      {
        subtitle: 'Korzyści',
        text: [
          {
            subtitle: 'Relaks i redukcja stresu',
            text:
              'W naszej saunie infrared możesz się zrelaksować i zapomnieć o codziennym stresie. ' +
              'Ciepło promieni podczerwonych działa uspokajająco na organizm, pomagając złagodzić napięcie i stres.',
          },
          {
            subtitle: 'Regeneracja mięśni i stawów',
            text:
              'Promieniowanie podczerwone działa korzystnie na bóle stawów, mięśni, ' +
              'a także może przynieść ulgę w przypadku dolegliwości reumatycznych czy rwę kulszową.',
          },
          {
            subtitle: 'Detoksykacja',
            text:
              'Sesje w saunie infrared pomagają organizmowi pozbyć się toksyn poprzez intensywne pocenie się, ' +
              'co wpływa na oczyszczenie ciała i poprawę ogólnego stanu zdrowia. Sesje w saunie infrared pomagają organizmowi pozbyć się toksyn poprzez intensywne pocenie się, ' +
              'co wpływa na oczyszczenie ciała i poprawę ogólnego stanu zdrowia.',
          },
          {
            subtitle: 'Wzmocnienie układu immunologicznego',
            text: 'Regularne korzystanie z sauny infrared  pomaga w wzmocnieniu układu immunologicznego.',
          },
          {
            subtitle: 'Poprawa krążenia krwi',
            text:
              'Dzięki stymulacji krążenia krwi w saunie infrared, możesz odczuć ulgę w ' +
              'bólach mięśniowych i stawowych oraz przyspieszyć proces regeneracji.',
          },
          {
            subtitle: 'Wspomaganie utraty wagi',
            text:
              'Regularne korzystanie z sauny infrared  przyspiesza spalanie kalorii, pomagając w ' +
              'procesie utraty wagi i kształtowaniu sylwetki. W ciągu 30 min spalamy 600 - 900 kcal.',
          },
          {
            subtitle: 'Poprawa wyglądu skóry',
            text:
              'Wysoka temperatura w saunie pomaga oczyścić pory skóry i przywrócić jej zdrowy i ' +
              'promienny wygląd. Zmniejsza problemy dermatologiczne oraz cellulit i rozstępy.',
          },
          {
            subtitle: 'Lepszy sen',
            text: 'Sauna może pomóc w poprawie jakości snu, co jest istotne dla procesu leczenia i zdrowia ogólnego.',
          },
        ],
        addition:
          'Zanurz się w doświadczeniu pełnym relaksu, aromaterapii, muzyki i koloroterapii, ' +
          'czerpiąc korzyści zarówno dla ciała, jak i umysłu.',
      },
      {
        subtitle: 'Dodatkowe atrakcje',
        text: [
          {
            subtitle: 'Wybór naturalnego olejku',
            text:
              'Przed rozpoczęciem sesji możesz wybrać olejek zapachowy, który będzie Cię otaczał ' +
              'podczas korzystania z sauny, tworząc przyjemne doznania aromaterapeutyczne.',
          },
          {
            subtitle: 'Inhalacje',
            text:
              'W saunie możesz cieszyć się inhalacjami, które korzystnie wpłyną na Twoje drogi oddechowe i ' +
              'ogólne samopoczucie.',
          },
          {
            subtitle: 'Relaksująca muzyka',
            text: 'W trakcie sesji gra relaksująca muzyka, dzięki której atmosfera staje się jeszcze bardziej kojąca.',
          },
          {
            subtitle: 'Koloroterapia',
            text: 'Kolorowe światło wprowadza element koloroterapii, co może dodatkowo zwiększyć efekty relaksacyjne.',
          },
        ],
      },
      {
        subtitle:
          'Jednak istnieją pewne przeciwwskazania do korzystania z sauny infrared:',
        text: [
          {
            subtitle: 'Ciąża',
            text: 'Nie zaleca się korzystania z sauny w trakcie ciąży.',
          },
          {
            subtitle: 'Choroby serca',
            text: 'Jeśli masz problemy z sercem, skonsultuj się z lekarzem przed skorzystaniem z naszej sauny.',
          },
          {
            subtitle: 'Wysoka gorączka',
            text: 'Jeśli masz gorączkę, lepiej poczekaj, aż stan zdrowia się poprawi.',
          },
          {
            subtitle: 'Skłonność do krwawień',
            text: 'Osoby z tendencją do nadmiernego krwawienia powinny unikać sauny.',
          },
          {
            subtitle: 'Nowotwory',
            text: 'Osoby z chorobami nowotworowymi powinny unikać sauny',
          },
        ],
      },
      {
        subtitle: 'Przygotowanie',
        text: [
          'Przed przyjściem do naszej sauny, upewnij się, że masz ze sobą dwa ręczniki na osobę oraz klapki. ' +
            'To nie tylko zwiększy Twój komfort, ale także pomaga w utrzymaniu higieny.',
        ],
        addition:
          'Nie zapomnij o rezerwacji, abyś móc doświadczyć tego wyjątkowego doświadczenia w pełnej prywatności!',
      },
    ],
    picture: {
      file: sauna,
      alt: 'Sauna',
    },
  },
  inhalation: {
    hash: 'inhalacje-wodorem',
    title: 'Inhalacje wodorem molekularnym',
    mainInfo: {
      subtitle:
        'Zanurz się w przyszłość zdrowia i dobrostanu dzięki naszej innowacyjnej usłudze inhalacji wodorem molekularnym ',
      text: [
        'Inhalacje wodorem molekularnym  pomagają w zwalczaniu wolnych rodników, które są jednym z czynników ' +
          'przyczyniających się do rozwoju nowotworów. Dodatkowo, są one rekomendowane zwłaszcza dla osób z problemami ' +
          'z drogami oddechowymi, chronicznym zmęczeniem, likwidacją stresu antyoksydancyjnego, bezsennością, ' +
          'problemami z pamięcią oraz alergiami.',
      ],
    },
    additionInfo: [
      {
        subtitle: 'Co to jest wodór?',
        text: [
          'Wodór jest wszechobecny w przyrodzie i występuje głównie w formie cząsteczek dwuatomowych (H2). ' +
            'Jest również głównym składnikiem wody (H2O), gdzie łączy się z tlenem. Woda jest niezbędna dla życia ' +
            'na Ziemi, co czyni wodór jednym z kluczowych elementów naszej planety.',
          'Wodór molekularny (H2) jest badany ze względu na swoje potencjalne korzyści zdrowotne, ' +
            'takie jak działanie przeciwutleniające i przeciwzapalne.',
        ],
      },
      {
        subtitle: 'Czym są inhalacje wodorem molekularnym?',
        text: [
          'To rewolucyjna metoda, która wykorzystuje właściwości wodoru molekularnego do walki z wieloma ' +
            'schorzeniami i do wspierania ogólnego samopoczucia. Wodór molekularny jest najmniejszym molekułowym elementem ' +
            'w przyrodzie, co oznacza, że łatwo przenika do komórek organizmu, neutralizując wolne rodniki, które mogą ' +
            'prowadzić do uszkodzenia tkanek i przyspieszenia procesów starzenia się.',
        ],
      },
      {
        subtitle:
          'Nasza usługa inhalacji wodorem molekularnym oferuje wiele korzyści',
        text: [
          {
            subtitle: 'Redukcja stanów zapalnych',
            text:
              'Wodór molekularny jest znany ze swojego potencjału do redukcji stanów zapalnych w organizmie. ' +
              'Chroniczne stany zapalne są często źródłem wielu chorób, w tym chorób serca, cukrzycy i wielu innych. ' +
              'Inhalacje wodorem pomagają w łagodzeniu tych stanów, co wpływa na ogólną poprawę zdrowia.',
          },
          {
            subtitle: 'Silny antyoksydant',
            text:
              'Wodór molekularny jest silnym antyoksydantem, który pomaga w ochronie komórek przed uszkodzeniami ' +
              'oksydacyjnymi, przyczyniającymi się do procesów starzenia i wielu chorób.',
          },
          {
            subtitle: 'Lepsze trawienie',
            text:
              'Badania sugerują, że wodór molekularny wspomaga procesy trawienia, poprawiając wchłanianie ' +
              'składników odżywczych z pożywienia. To może przyczynić się do lepszego wykorzystania wartości ' +
              'odżywczej spożywanych posiłków.',
          },
          {
            subtitle: 'Ochrona przed uszkodzeniem DNA',
            text:
              'Wodór molekularny działa jako skuteczny przeciwutleniacz, chroniąc DNA przed uszkodzeniem ' +
              'spowodowanym przez wolne rodniki. To może przyczynić się do zmniejszenia ryzyka chorób ' +
              'nowotworowych.',
          },
          {
            subtitle: 'Poprawa funkcji mózgu',
            text:
              'Wodór molekularny pomaga w ochronie mózgu przed stresem oksydacyjnym, ale także wpływa na poprawę ' +
              'funkcji poznawczych. To oznacza lepszą pamięć, koncentrację i ogólną wydolność umysłową.',
          },
          {
            subtitle: 'Wspomaganie procesu gojenia',
            text:
              'Wodór molekularny przyspiesza proces gojenia ran i urazów poprzez stymulowanie regeneracji tkanek. ' +
              'To jest szczególnie istotne w przypadku osób po operacjach lub z uszkodzeniami skóry.',
          },
          {
            subtitle: 'Poprawa snu',
            text:
              'Inhalacje wodorem molekularnym poprawiają jakość snu i zmniejszają problemy ze snem. Dzięki temu ' +
              'klientom łatwiej jest się zrelaksować i regenerować organizm w trakcie snu.',
          },
          {
            subtitle: 'Antyoksydacyjne działanie',
            text:
              'Wodór molekularny działa jako potężny antyoksydant, pomagając w oczyszczaniu organizmu z toksyn i ' +
              'wolnych rodników. To może przyczynić się do ogólnego oczyszczenia ciała i wzmocnienia układu ' +
              'odpornościowego.',
          },
          {
            subtitle: 'Lepsza elastyczność i zdolność do ruchu',
            text:
              'Dla osób cierpiących na schorzenia stawów czy bóle mięśni, inhalacje wodorem molekularnym mogą ' +
              'przyczynić się do zwiększenia elastyczności i komfortu podczas ruchu.',
          },
          {
            subtitle: 'Wspomaganie procesu odchudzania',
            text:
              'Wodór molekularny pomaga w procesie odchudzania poprzez przyspieszenie przemiany materii i redukcję ' +
              'stanów zapalnych, które mogą być związane z otyłością.',
          },
          {
            subtitle: 'Poprawa wydolności tlenowej',
            text:
              'Badania wskazują, że wodór molekularny  poprawia wydolność tlenową organizmu, co może pomóc ' +
              'sportowcom i osobom aktywnym fizycznie.',
          },
        ],
      },
      {
        subtitle: 'Jak wygląda proces inhalacji wodorem molekularnym',
        text: [
          'Inhalacja wodorem molekularnym odbywa się przez kaniulę wąsową, która jest bardziej precyzyjna niż inne ' +
            'metody i może być stosowana w celu dostarczania wodoru w terapii medycznej.',
          'Zaczynasz wdychać powoli i głęboko przez kaniulę wąsową, co pozwala wodorowi dostawać się do płuc. W ten ' +
            'sposób wodór jest wchłaniany przez układ oddechowy, który wpłyna na nasz organizm.',
        ],
      },
    ],
    picture: {
      file: cave2,
      alt: 'grota solna',
    },
  },
  yoga: {
    hash: 'joga',
    title: 'Joga w grocie solnej',
    mainInfo: {
      subtitle:
        'Joga w grocie solnej to doskonałe połączenie ćwiczeń jogi ze ' +
        'zdrowotnymi właściwościami soli',
      text: [
        'Grota solna to miejsce, w którym' +
          'można wypocząć i złagodzić objawy alergii, astmy czy przeziębienia. ' +
          'Ćwiczenia jogi w takim otoczeniu pomagają dodatkowo zredukować stres ' +
          'i poprawić samopoczucie. Dzięki temu, joga w grocie solnej jest ' +
          'idealnym sposobem na poprawę zdrowia fizycznego i psychicznego.',
      ],
    },
    picture: {
      file: yoga,
      alt: 'Girl doing yoga',
    },
  },
};

export default pagesInfo;
