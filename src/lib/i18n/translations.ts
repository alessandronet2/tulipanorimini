/**
 * Tutte le stringhe del sito in 4 lingue.
 * IT è la lingua di riferimento. Mantieni la stessa struttura in tutte e 4.
 */

type Locale = "it" | "en" | "de" | "ru";

const allTranslations = {
  it: {
    common: {
      bookNow: "Prenota ora",
    },
    nav: {
      home: "Home",
      position: "Posizione",
      rooms: "Camere",
      services: "Servizi",
      beach: "Spiaggia",
      gallery: "Galleria",
      attractions: "Zone",
      booking: "Prenota",
      contacts: "Contatti",
    },
    hero: {
      welcome: "Benvenuti a Rimini",
      description:
        "Una casa vacanze accogliente, ristrutturata e perfetta per vivere Rimini in totale relax.",
      discoverCta: "Scopri l'appartamento",
    },
    position: {
      eyebrow: "Posizione",
      title: "Dove si trova",
      intro:
        "L'Appartamento Il Tulipano si trova in una posizione strategica a Rimini, a pochi passi dal mare e ben collegato al centro storico, alla stazione, alla Fiera, a Marina Centro, al centro commerciale e all'aeroporto.",
      addressTitle: "Indirizzo",
      addressValue: "Via del Tulipano 18, 47923 Rimini (RN)",
      minutesTitle: "A pochi minuti",
      minutesText:
        "Spiaggia raggiungibile a piedi. Centro storico e stazione facilmente accessibili in autobus o bicicletta.",
      mapsCta: "Apri su Google Maps",
      howToReachEyebrow: "Come raggiungerci",
      howToReachTitle: "Scegli il tuo mezzo",
      tabAuto: "In auto",
      tabTrain: "In treno",
      tabPlane: "In aereo",
      autoNaviTitle: "Naviga fino all'appartamento",
      autoNaviText:
        "Imposta sul navigatore Via del Tulipano 18, 47923 Rimini (RN). Puoi aprire direttamente la posizione su Google Maps dal pulsante qui sopra.",
      autoParkTitle: "Parcheggi in zona",
      autoParkText:
        "Nelle vicinanze dell'appartamento sono presenti diversi parcheggi, sia gratuiti che a pagamento, per un comodo posteggio della tua auto.",
      trainBusTitle: "Autobus linea 11",
      trainBusText:
        "Dalla stazione di Rimini prendi l'autobus Linea 11 e scendi alla fermata n. 17 \"Goldoni\", a pochi passi dall'appartamento.",
      trainMetroTitle: "Metromare",
      trainMetroText:
        "In alternativa, dalla stazione di Rimini puoi prendere il Metromare e in soli 3 minuti arrivare alla fermata Pascoli o Lagomaggio, entrambe vicinissime all'appartamento.",
      trainFairTitle: "Dalla Fiera di Rimini",
      trainFairText:
        "Se arrivi alla Fiera di Rimini, puoi prendere l'autobus Linea 9 per raggiungere la zona dell'appartamento.",
      planeAirportTitle: "Aeroporto Federico Fellini di Rimini",
      planeAirportText:
        "Dall'aeroporto prendi il Metromare dalla fermata Miramare (proprio all'aeroporto) e scendi alla fermata Pascoli o Lagomaggio, vicinissime all'appartamento.",
      metromareEyebrow: "Trasporto consigliato",
      metromareTitle: "Metromare: la fermata è a due passi",
      metromareText:
        "Il Metromare collega Rimini e Riccione con corse continue lungo la costa. Le fermate Pascoli e Lagomaggio sono vicinissime all'appartamento: il modo più rapido e comodo per muoversi senza pensieri.",
      metromareCta: "Scopri orari e info",
    },
    rooms: {
      eyebrow: "Gli ambienti",
      title: "Comfort e accoglienza",
      intro:
        "L'appartamento è stato completamente ristrutturato con cura e attenzione ai dettagli, per offrirti il massimo del comfort durante la tua vacanza a Rimini.",
      f1Title: "Ristrutturato di recente",
      f1Text:
        "Arredi moderni e finiture curate per un soggiorno confortevole e rilassante.",
      f2Title: "Spazi luminosi e ordinati",
      f2Text: "Ambienti pensati per farti sentire a casa fin dal primo momento.",
      f3Title: "Dotato di tutto il necessario",
      f3Text:
        "Cucina attrezzata, lavatrice, microonde, climatizzatore, lenzuola e asciugamani di ricambio: tutto ciò che serve per una vacanza senza pensieri.",
      f4Title: "Ideale per famiglie e coppie",
      f4Text:
        "Un ambiente tranquillo e accogliente, perfetto per coppie in cerca di relax o famiglie con bambini.",
    },
    services: {
      eyebrow: "Servizi",
      title: "Tutto per la tua vacanza",
      intro:
        "Abbiamo pensato a tutto per rendere il tuo soggiorno a Rimini semplice, comodo e indimenticabile.",
      s1Title: "Vicino al mare",
      s1Text: "La spiaggia è raggiungibile in pochi minuti a piedi dall'appartamento.",
      s2Title: "Posizione strategica",
      s2Text: "Centro storico, Marina Centro, ristoranti, negozi e locali a portata di mano: il cuore della spiaggia e della movida riminese.",
      s3Title: "Piano rialzato comodo",
      s3Text: "L'appartamento si trova al piano rialzato: comodo e accessibile, ideale anche per anziani, bambini e persone con difficoltà motorie.",
      s4Title: "Cucina attrezzata",
      s4Text: "Cucina completa con tutti gli elettrodomestici e utensili necessari.",
      s5Title: "Parcheggio disponibile",
      s5Text: "Possibilità di parcheggio a pagamento nelle vicinanze dell'appartamento.",
      s6Title: "Miglior prezzo garantito",
      s6Text:
        "Prenotando direttamente dal sito risparmi rispetto alle piattaforme online.",
    },
    beach: {
      eyebrow: "Spiaggia convenzionata",
      title: "Bagni 64 – 65 – 66",
      subtitle: "Spiagge Maina",
      description:
        "I nostri ospiti possono usufruire di una convenzione speciale con le Spiagge Maina – Bagni 64, 65 e 66, uno stabilimento balneare ampio, attrezzato e accogliente sulla spiaggia di Rimini. Ombrellone, lettini e tutti i servizi a condizioni vantaggiose.",
      tags: ["Ombrellone", "Lettini", "Docce", "Bar", "Area giochi", "Lungomare"],
    },
    gallery: {
      eyebrow: "Galleria",
      title: "Scopri gli spazi",
      intro:
        "Dai un'occhiata agli ambienti dell'appartamento: luminosi, curati e pronti ad accoglierti.",
    },
    attractions: {
      eyebrow: "Zone di interesse",
      title: "Tutto a portata di mano",
      intro:
        "La posizione dell'appartamento Il Tulipano è davvero strategica: mare, shopping, locali e servizi essenziali sono tutti a pochi passi.",
      parcoTag: "A pochi passi · Lungomare",
      parcoTitle: "Parco del Mare",
      parcoText:
        "Il nuovo lungomare di Rimini: una splendida passeggiata affacciata sul mare tra aree verdi, piste ciclabili, giochi per bambini e spazi relax. Perfetto per camminate e momenti di svago.",
      befaneTag: "Shopping · Il più grande della Romagna",
      befaneTitle: "Le Befane",
      befaneText:
        "Il centro commerciale più grande della Romagna, con oltre 100 negozi, ristoranti e servizi. Una tappa immancabile per lo shopping.",
      carducciTag: "Shopping · Passeggio",
      carducciTitle: "Via Carducci & Regina Elena",
      carducciText:
        "Le vie più amate di Rimini per lo shopping e il passeggio serale, tra boutique, negozi di souvenir e caffè.",
      clubTag: "Nightlife · Discoteche",
      clubTitle: "Club & Discoteche",
      clubText:
        "I locali più famosi della riviera: Frontemare e Altromondo Studios, simboli del divertimento notturno riminese.",
      conadTag: "Servizi essenziali",
      conadTitle: "Conad, farmacia & alimentari",
      conadText:
        "Supermercato Conad, farmacia e negozi di alimentari a portata di mano tra Via Praga e Via Pascoli.",
      seraTag: "Ristoranti · Aperitivi · Serate",
      seraTitle: "Cena & serata al mare",
      seraText:
        "A pochi minuti dall'appartamento trovi alcuni dei locali più celebri della riviera per cenare, bere un aperitivo o passare la serata in compagnia.",
    },
    booking: {
      eyebrow: "Prenota",
      title: "Prenota direttamente e risparmia",
      intro:
        "Prenotando dal nostro sito ottieni il miglior prezzo garantito, senza commissioni. Contatto diretto con l'host per un'esperienza semplice e personale.",
      name: "Nome e cognome",
      namePlaceholder: "Mario Rossi",
      email: "Email",
      emailPlaceholder: "mario@email.com",
      phone: "Telefono",
      phonePlaceholder: "+39 333 1234567",
      guests: "Numero ospiti",
      guestSingular: "ospite",
      guestPlural: "ospiti",
      checkin: "Check-in",
      checkout: "Check-out",
      message: "Messaggio",
      messagePlaceholder: "Richieste particolari, domande, orario di arrivo...",
      noteLabel: "Nota:",
      noteText:
        "Il prezzo è indicativo. Dopo l'invio della richiesta verrai ricontattato dall'host per conferma disponibilità e prezzo finale.",
      submit: "Invia richiesta",
      sending: "Invio in corso...",
      successTitle: "Richiesta inviata!",
      successText:
        "Grazie! Ti ricontatteremo il prima possibile per confermare disponibilità e prezzo finale.",
    },
    contacts: {
      eyebrow: "Contatti",
      title: "Hai bisogno di informazioni?",
      intro:
        "Non esitare a contattarci per qualsiasi domanda. Siamo a tua disposizione per rendere la tua vacanza perfetta.",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
      whatsapp: "WhatsApp",
      whatsappValue: "Scrivici su WhatsApp",
    },
    footer: {
      tagline: "Casa vacanze a Rimini",
      rights: "Tutti i diritti riservati.",
    },
    whatsapp: {
      aria: "Contattaci su WhatsApp",
    },
    beachNearby: {
      eyebrow: "A due passi dal mare",
      title: "Il mare è a 4 minuti a piedi",
      description:
        "L'appartamento Il Tulipano si trova vicinissimo al mare: in soli 4 minuti a piedi raggiungi la spiaggia. Ecco il percorso da casa fino alla costa.",
      walkLabel: "4 min a piedi",
      fromLabel: "Dall'appartamento",
      toLabel: "Alla spiaggia",
      mapCta: "Apri il percorso su Google Maps",
    },
  },

  en: {
    common: {
      bookNow: "Book now",
    },
    nav: {
      home: "Home",
      position: "Location",
      rooms: "Rooms",
      services: "Services",
      beach: "Beach",
      gallery: "Gallery",
      attractions: "Area",
      booking: "Book",
      contacts: "Contact",
    },
    hero: {
      welcome: "Welcome to Rimini",
      description:
        "A welcoming, fully renovated holiday apartment — perfect to enjoy Rimini in total relaxation.",
      discoverCta: "Discover the apartment",
    },
    position: {
      eyebrow: "Location",
      title: "Where we are",
      intro:
        "Il Tulipano Apartment is in a strategic position in Rimini, just steps from the sea and well connected to the historic centre, the train station, Rimini Fiera, Marina Centro, the shopping centre and the airport.",
      addressTitle: "Address",
      addressValue: "Via del Tulipano 18, 47923 Rimini (RN)",
      minutesTitle: "Minutes away",
      minutesText:
        "The beach is within walking distance. The historic centre and the train station are easily reached by bus or bike.",
      mapsCta: "Open in Google Maps",
      howToReachEyebrow: "How to reach us",
      howToReachTitle: "Choose your way to travel",
      tabAuto: "By car",
      tabTrain: "By train",
      tabPlane: "By plane",
      autoNaviTitle: "Drive to the apartment",
      autoNaviText:
        "Set your GPS to Via del Tulipano 18, 47923 Rimini (RN). You can open the location directly on Google Maps from the button above.",
      autoParkTitle: "Parking nearby",
      autoParkText:
        "Several parking areas are available near the apartment, both free and paid, so you can comfortably park your car.",
      trainBusTitle: "Bus line 11",
      trainBusText:
        "From Rimini train station take the Line 11 bus and get off at stop no. 17 \"Goldoni\", just a few steps from the apartment.",
      trainMetroTitle: "Metromare",
      trainMetroText:
        "Alternatively, from Rimini station you can take the Metromare and in just 3 minutes reach the Pascoli or Lagomaggio stop, both very close to the apartment.",
      trainFairTitle: "From Rimini Fiera",
      trainFairText:
        "If you arrive at Rimini Fiera, you can take Bus Line 9 to reach the apartment area.",
      planeAirportTitle: "Federico Fellini Airport, Rimini",
      planeAirportText:
        "From the airport, take the Metromare from the Miramare stop (right at the airport) and get off at Pascoli or Lagomaggio, very close to the apartment.",
      metromareEyebrow: "Recommended transport",
      metromareTitle: "Metromare: the stop is just steps away",
      metromareText:
        "The Metromare connects Rimini and Riccione with frequent services along the coast. The Pascoli and Lagomaggio stops are very close to the apartment: the fastest and most convenient way to get around.",
      metromareCta: "Timetables & info",
    },
    rooms: {
      eyebrow: "The spaces",
      title: "Comfort and warmth",
      intro:
        "The apartment has been completely renovated with care and attention to detail, to offer you the highest level of comfort during your holiday in Rimini.",
      f1Title: "Recently renovated",
      f1Text: "Modern furniture and refined finishes for a comfortable and relaxing stay.",
      f2Title: "Bright and tidy spaces",
      f2Text: "Rooms designed to make you feel at home from the very first moment.",
      f3Title: "Everything you need",
      f3Text:
        "Equipped kitchen, washing machine, microwave, air conditioning, spare sheets and towels: everything you need for a worry-free holiday.",
      f4Title: "Ideal for families and couples",
      f4Text:
        "A quiet and welcoming environment, perfect for couples seeking relaxation or families with children.",
    },
    services: {
      eyebrow: "Services",
      title: "Everything for your holiday",
      intro:
        "We've thought of everything to make your stay in Rimini easy, comfortable and unforgettable.",
      s1Title: "Close to the sea",
      s1Text: "The beach is just a few minutes' walk from the apartment.",
      s2Title: "Strategic location",
      s2Text: "Historic centre, Marina Centro, restaurants, shops and venues all within reach: the heart of Rimini's beach and nightlife.",
      s3Title: "Convenient raised ground floor",
      s3Text: "The apartment is on a raised ground floor: comfortable and accessible, ideal for elderly guests, children and people with reduced mobility.",
      s4Title: "Equipped kitchen",
      s4Text: "Full kitchen with all the appliances and utensils you need.",
      s5Title: "Parking available",
      s5Text: "Paid parking is available near the apartment.",
      s6Title: "Best price guaranteed",
      s6Text: "Booking directly on our website saves you money compared to online platforms.",
    },
    beach: {
      eyebrow: "Partner beach",
      title: "Beach Clubs 64 – 65 – 66",
      subtitle: "Spiagge Maina",
      description:
        "Our guests can enjoy a special agreement with Spiagge Maina – Beach Clubs 64, 65 and 66, a large, well-equipped and welcoming beach establishment on the Rimini shore. Umbrella, sun loungers and all services at favourable rates.",
      tags: ["Umbrella", "Sun loungers", "Showers", "Bar", "Playground", "Promenade"],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Take a look inside",
      intro:
        "Have a look at the apartment's spaces: bright, well-kept and ready to welcome you.",
    },
    attractions: {
      eyebrow: "Points of interest",
      title: "Everything within reach",
      intro:
        "Il Tulipano apartment is in a truly strategic location: sea, shopping, nightlife and essential services are all just steps away.",
      parcoTag: "Just steps away · Promenade",
      parcoTitle: "Parco del Mare",
      parcoText:
        "Rimini's new seafront promenade: a beautiful walk overlooking the sea with green areas, bike paths, playgrounds and relaxation spots. Perfect for walks and leisure moments.",
      befaneTag: "Shopping · The largest in Romagna",
      befaneTitle: "Le Befane",
      befaneText:
        "The largest shopping centre in Romagna, with over 100 stores, restaurants and services. A must-visit for shopping.",
      carducciTag: "Shopping · Strolling",
      carducciTitle: "Via Carducci & Regina Elena",
      carducciText:
        "Rimini's most loved streets for shopping and evening strolls, with boutiques, souvenir shops and cafés.",
      clubTag: "Nightlife · Clubs",
      clubTitle: "Clubs & Discos",
      clubText:
        "The most famous venues on the Riviera: Frontemare and Altromondo Studios, icons of Rimini's nightlife.",
      conadTag: "Essential services",
      conadTitle: "Conad, pharmacy & groceries",
      conadText:
        "Conad supermarket, pharmacy and grocery shops within easy reach between Via Praga and Via Pascoli.",
      seraTag: "Restaurants · Aperitifs · Evenings",
      seraTitle: "Dinner & evenings by the sea",
      seraText:
        "A few minutes from the apartment you'll find some of the most famous Riviera venues for dinner, an aperitif or an evening out.",
    },
    booking: {
      eyebrow: "Book",
      title: "Book direct and save",
      intro:
        "By booking on our website you get the best price guaranteed, with no commissions. Direct contact with the host for a simple, personal experience.",
      name: "Full name",
      namePlaceholder: "John Smith",
      email: "Email",
      emailPlaceholder: "john@email.com",
      phone: "Phone",
      phonePlaceholder: "+39 333 1234567",
      guests: "Number of guests",
      guestSingular: "guest",
      guestPlural: "guests",
      checkin: "Check-in",
      checkout: "Check-out",
      message: "Message",
      messagePlaceholder: "Special requests, questions, arrival time...",
      noteLabel: "Note:",
      noteText:
        "The price is indicative. After submitting your request the host will contact you to confirm availability and the final price.",
      submit: "Send request",
      sending: "Sending...",
      successTitle: "Request sent!",
      successText:
        "Thank you! We will get back to you as soon as possible to confirm availability and the final price.",
    },
    contacts: {
      eyebrow: "Contact",
      title: "Need more information?",
      intro:
        "Don't hesitate to get in touch for any questions. We're here to make your holiday perfect.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      whatsapp: "WhatsApp",
      whatsappValue: "Message us on WhatsApp",
    },
    footer: {
      tagline: "Holiday home in Rimini",
      rights: "All rights reserved.",
    },
    whatsapp: {
      aria: "Contact us on WhatsApp",
    },
    beachNearby: {
      eyebrow: "Steps from the sea",
      title: "The beach is 4 minutes on foot",
      description:
        "Il Tulipano apartment is very close to the sea: just a 4-minute walk to the beach. Here's the route from the apartment to the coast.",
      walkLabel: "4 min walk",
      fromLabel: "From the apartment",
      toLabel: "To the beach",
      mapCta: "Open route on Google Maps",
    },
  },

  de: {
    common: {
      bookNow: "Jetzt buchen",
    },
    nav: {
      home: "Start",
      position: "Lage",
      rooms: "Zimmer",
      services: "Service",
      beach: "Strand",
      gallery: "Galerie",
      attractions: "Umgebung",
      booking: "Buchen",
      contacts: "Kontakt",
    },
    hero: {
      welcome: "Willkommen in Rimini",
      description:
        "Eine gemütliche, frisch renovierte Ferienwohnung — perfekt, um Rimini in völliger Entspannung zu erleben.",
      discoverCta: "Wohnung entdecken",
    },
    position: {
      eyebrow: "Lage",
      title: "Wo wir sind",
      intro:
        "Die Ferienwohnung Il Tulipano liegt in einer strategischen Lage in Rimini, nur wenige Schritte vom Meer entfernt und bestens angebunden an Altstadt, Bahnhof, Messe, Marina Centro, Einkaufszentrum und Flughafen.",
      addressTitle: "Adresse",
      addressValue: "Via del Tulipano 18, 47923 Rimini (RN)",
      minutesTitle: "Wenige Minuten entfernt",
      minutesText:
        "Der Strand ist zu Fuß erreichbar. Altstadt und Bahnhof sind bequem mit dem Bus oder Fahrrad zu erreichen.",
      mapsCta: "In Google Maps öffnen",
      howToReachEyebrow: "So erreichen Sie uns",
      howToReachTitle: "Wählen Sie Ihr Verkehrsmittel",
      tabAuto: "Mit dem Auto",
      tabTrain: "Mit dem Zug",
      tabPlane: "Mit dem Flugzeug",
      autoNaviTitle: "Mit dem Auto zur Wohnung",
      autoNaviText:
        "Geben Sie im Navi Via del Tulipano 18, 47923 Rimini (RN) ein. Sie können den Standort direkt über die Schaltfläche oben in Google Maps öffnen.",
      autoParkTitle: "Parkplätze in der Nähe",
      autoParkText:
        "In der Nähe der Wohnung gibt es mehrere Parkplätze, sowohl kostenlos als auch gebührenpflichtig — bequem für Ihr Auto.",
      trainBusTitle: "Buslinie 11",
      trainBusText:
        "Vom Bahnhof Rimini nehmen Sie die Buslinie 11 und steigen an der Haltestelle Nr. 17 \"Goldoni\" aus, nur wenige Schritte von der Wohnung entfernt.",
      trainMetroTitle: "Metromare",
      trainMetroText:
        "Alternativ können Sie vom Bahnhof Rimini den Metromare nehmen und in nur 3 Minuten die Haltestelle Pascoli oder Lagomaggio erreichen, beide ganz in der Nähe der Wohnung.",
      trainFairTitle: "Von der Messe Rimini",
      trainFairText:
        "Wenn Sie am Messegelände Rimini ankommen, können Sie die Buslinie 9 nehmen, um zur Wohnung zu gelangen.",
      planeAirportTitle: "Flughafen Federico Fellini, Rimini",
      planeAirportText:
        "Vom Flughafen aus nehmen Sie den Metromare an der Haltestelle Miramare (direkt am Flughafen) und steigen an Pascoli oder Lagomaggio aus, ganz in der Nähe der Wohnung.",
      metromareEyebrow: "Empfohlenes Verkehrsmittel",
      metromareTitle: "Metromare: die Haltestelle ist nur ein paar Schritte entfernt",
      metromareText:
        "Der Metromare verbindet Rimini und Riccione mit häufigen Fahrten entlang der Küste. Die Haltestellen Pascoli und Lagomaggio liegen ganz in der Nähe der Wohnung: die schnellste und bequemste Art, sich zu bewegen.",
      metromareCta: "Fahrpläne & Infos",
    },
    rooms: {
      eyebrow: "Die Räume",
      title: "Komfort und Gemütlichkeit",
      intro:
        "Die Wohnung wurde mit Sorgfalt und Liebe zum Detail vollständig renoviert, um Ihnen während Ihres Urlaubs in Rimini höchsten Komfort zu bieten.",
      f1Title: "Kürzlich renoviert",
      f1Text: "Moderne Möbel und gepflegte Ausstattung für einen komfortablen, entspannten Aufenthalt.",
      f2Title: "Helle und ordentliche Räume",
      f2Text: "Räume, in denen Sie sich vom ersten Moment an wie zu Hause fühlen.",
      f3Title: "Mit allem Notwendigen ausgestattet",
      f3Text:
        "Voll ausgestattete Küche, Waschmaschine, Mikrowelle, Klimaanlage, Ersatz-Bettwäsche und -Handtücher: alles, was Sie für einen sorglosen Urlaub brauchen.",
      f4Title: "Ideal für Familien und Paare",
      f4Text:
        "Eine ruhige und einladende Umgebung, perfekt für Paare auf der Suche nach Entspannung oder Familien mit Kindern.",
    },
    services: {
      eyebrow: "Service",
      title: "Alles für Ihren Urlaub",
      intro:
        "Wir haben an alles gedacht, um Ihren Aufenthalt in Rimini einfach, bequem und unvergesslich zu machen.",
      s1Title: "Strandnähe",
      s1Text: "Der Strand ist in wenigen Minuten zu Fuß von der Wohnung erreichbar.",
      s2Title: "Strategische Lage",
      s2Text: "Altstadt, Marina Centro, Restaurants, Geschäfte und Lokale in unmittelbarer Nähe: das Herz des Strandes und des Nachtlebens von Rimini.",
      s3Title: "Bequemes Hochparterre",
      s3Text: "Die Wohnung befindet sich im Hochparterre: bequem und barrierefrei, ideal auch für ältere Gäste, Kinder und Menschen mit eingeschränkter Mobilität.",
      s4Title: "Voll ausgestattete Küche",
      s4Text: "Komplette Küche mit allen Geräten und Utensilien, die Sie brauchen.",
      s5Title: "Parkplatz verfügbar",
      s5Text: "Kostenpflichtiger Parkplatz in der Nähe der Wohnung verfügbar.",
      s6Title: "Bestpreisgarantie",
      s6Text:
        "Wenn Sie direkt über unsere Website buchen, sparen Sie im Vergleich zu Online-Plattformen.",
    },
    beach: {
      eyebrow: "Partnerstrand",
      title: "Bagni 64 – 65 – 66",
      subtitle: "Spiagge Maina",
      description:
        "Unsere Gäste profitieren von einer besonderen Vereinbarung mit Spiagge Maina – Bagni 64, 65 und 66, einem großen, gut ausgestatteten und einladenden Strandbad in Rimini. Sonnenschirm, Liegen und alle Services zu vorteilhaften Konditionen.",
      tags: ["Sonnenschirm", "Liegen", "Duschen", "Bar", "Spielplatz", "Promenade"],
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Werfen Sie einen Blick hinein",
      intro:
        "Schauen Sie sich die Räume der Wohnung an: hell, gepflegt und bereit, Sie willkommen zu heißen.",
    },
    attractions: {
      eyebrow: "Sehenswertes in der Nähe",
      title: "Alles in Reichweite",
      intro:
        "Die Lage der Wohnung Il Tulipano ist wirklich strategisch: Meer, Shopping, Lokale und alle wichtigen Dienstleistungen sind nur wenige Schritte entfernt.",
      parcoTag: "Wenige Schritte · Promenade",
      parcoTitle: "Parco del Mare",
      parcoText:
        "Die neue Strandpromenade von Rimini: ein wunderschöner Spazierweg am Meer mit Grünflächen, Radwegen, Spielplätzen und Ruhebereichen. Perfekt für Spaziergänge und Erholung.",
      befaneTag: "Shopping · Das größte der Romagna",
      befaneTitle: "Le Befane",
      befaneText:
        "Das größte Einkaufszentrum der Romagna mit über 100 Geschäften, Restaurants und Services. Ein Muss für Shoppingfreunde.",
      carducciTag: "Shopping · Flanieren",
      carducciTitle: "Via Carducci & Regina Elena",
      carducciText:
        "Riminis beliebteste Straßen zum Einkaufen und Flanieren am Abend, mit Boutiquen, Souvenirläden und Cafés.",
      clubTag: "Nightlife · Diskotheken",
      clubTitle: "Clubs & Diskotheken",
      clubText:
        "Die berühmtesten Lokale der Riviera: Frontemare und Altromondo Studios, Symbole des Riminer Nachtlebens.",
      conadTag: "Wesentliche Services",
      conadTitle: "Conad, Apotheke & Lebensmittel",
      conadText:
        "Conad-Supermarkt, Apotheke und Lebensmittelgeschäfte ganz in der Nähe, zwischen Via Praga und Via Pascoli.",
      seraTag: "Restaurants · Aperitif · Abend",
      seraTitle: "Abendessen & Abend am Meer",
      seraText:
        "Nur wenige Minuten von der Wohnung entfernt finden Sie einige der bekanntesten Lokale der Riviera für Abendessen, Aperitif oder einen schönen Abend in Gesellschaft.",
    },
    booking: {
      eyebrow: "Buchen",
      title: "Direkt buchen und sparen",
      intro:
        "Wenn Sie über unsere Website buchen, erhalten Sie den garantierten Bestpreis, ohne Provisionen. Direkter Kontakt zum Gastgeber für ein einfaches und persönliches Erlebnis.",
      name: "Vor- und Nachname",
      namePlaceholder: "Max Mustermann",
      email: "E-Mail",
      emailPlaceholder: "max@email.com",
      phone: "Telefon",
      phonePlaceholder: "+39 333 1234567",
      guests: "Anzahl Gäste",
      guestSingular: "Gast",
      guestPlural: "Gäste",
      checkin: "Check-in",
      checkout: "Check-out",
      message: "Nachricht",
      messagePlaceholder: "Besondere Wünsche, Fragen, Ankunftszeit...",
      noteLabel: "Hinweis:",
      noteText:
        "Der Preis ist Richtwert. Nach dem Absenden Ihrer Anfrage wird der Gastgeber Sie kontaktieren, um Verfügbarkeit und Endpreis zu bestätigen.",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Anfrage gesendet!",
      successText:
        "Vielen Dank! Wir melden uns so schnell wie möglich, um Verfügbarkeit und Endpreis zu bestätigen.",
    },
    contacts: {
      eyebrow: "Kontakt",
      title: "Brauchen Sie weitere Informationen?",
      intro:
        "Zögern Sie nicht, uns bei Fragen zu kontaktieren. Wir stehen Ihnen zur Verfügung, damit Ihr Urlaub perfekt wird.",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      whatsapp: "WhatsApp",
      whatsappValue: "Schreiben Sie uns auf WhatsApp",
    },
    footer: {
      tagline: "Ferienwohnung in Rimini",
      rights: "Alle Rechte vorbehalten.",
    },
    whatsapp: {
      aria: "Kontaktieren Sie uns auf WhatsApp",
    },
    beachNearby: {
      eyebrow: "Direkt am Meer",
      title: "Der Strand ist 4 Minuten zu Fuß entfernt",
      description:
        "Die Wohnung Il Tulipano liegt ganz nah am Meer: In nur 4 Minuten zu Fuß erreichen Sie den Strand. Hier ist der Weg von der Wohnung zur Küste.",
      walkLabel: "4 Min. zu Fuß",
      fromLabel: "Von der Wohnung",
      toLabel: "Zum Strand",
      mapCta: "Route in Google Maps öffnen",
    },
  },

  ru: {
    common: {
      bookNow: "Забронировать",
    },
    nav: {
      home: "Главная",
      position: "Расположение",
      rooms: "Комнаты",
      services: "Услуги",
      beach: "Пляж",
      gallery: "Галерея",
      attractions: "Район",
      booking: "Бронь",
      contacts: "Контакты",
    },
    hero: {
      welcome: "Добро пожаловать в Римини",
      description:
        "Уютные, полностью отремонтированные апартаменты для отдыха — идеально, чтобы насладиться Римини в полном расслаблении.",
      discoverCta: "Узнать о квартире",
    },
    position: {
      eyebrow: "Расположение",
      title: "Где мы находимся",
      intro:
        "Апартаменты Il Tulipano находятся в стратегически удобном месте Римини, в нескольких шагах от моря и с удобным сообщением с историческим центром, вокзалом, выставочным центром, Marina Centro, торговым центром и аэропортом.",
      addressTitle: "Адрес",
      addressValue: "Via del Tulipano 18, 47923 Rimini (RN)",
      minutesTitle: "В нескольких минутах",
      minutesText:
        "До пляжа можно дойти пешком. Исторический центр и вокзал легко доступны на автобусе или велосипеде.",
      mapsCta: "Открыть в Google Maps",
      howToReachEyebrow: "Как нас найти",
      howToReachTitle: "Выберите способ передвижения",
      tabAuto: "На машине",
      tabTrain: "На поезде",
      tabPlane: "На самолёте",
      autoNaviTitle: "Доехать до квартиры",
      autoNaviText:
        "Установите в навигаторе адрес Via del Tulipano 18, 47923 Rimini (RN). Местоположение можно открыть прямо в Google Maps кнопкой выше.",
      autoParkTitle: "Парковки рядом",
      autoParkText:
        "Рядом с квартирой есть несколько парковок — как бесплатных, так и платных, чтобы вы могли удобно оставить машину.",
      trainBusTitle: "Автобус №11",
      trainBusText:
        "С железнодорожного вокзала Римини сядьте на автобус линии 11 и выйдите на остановке № 17 \"Goldoni\", в нескольких шагах от квартиры.",
      trainMetroTitle: "Metromare",
      trainMetroText:
        "Также с вокзала Римини можно сесть на Metromare и всего за 3 минуты доехать до остановки Pascoli или Lagomaggio — обе очень близко к квартире.",
      trainFairTitle: "С выставочного центра Римини",
      trainFairText:
        "Если вы прибываете на выставочный комплекс Rimini Fiera, сядьте на автобус линии 9, чтобы добраться до района квартиры.",
      planeAirportTitle: "Аэропорт Federico Fellini, Римини",
      planeAirportText:
        "Из аэропорта сядьте на Metromare на остановке Miramare (прямо у аэропорта) и выйдите на Pascoli или Lagomaggio, очень близко к квартире.",
      metromareEyebrow: "Рекомендуемый транспорт",
      metromareTitle: "Metromare: остановка в двух шагах",
      metromareText:
        "Metromare соединяет Римини и Риччоне с частыми рейсами вдоль побережья. Остановки Pascoli и Lagomaggio находятся очень близко к квартире — это самый быстрый и удобный способ передвижения.",
      metromareCta: "Расписание и информация",
    },
    rooms: {
      eyebrow: "Помещения",
      title: "Комфорт и уют",
      intro:
        "Квартира была полностью отремонтирована с заботой и вниманием к деталям, чтобы предложить вам максимум комфорта во время отдыха в Римини.",
      f1Title: "Недавний ремонт",
      f1Text: "Современная мебель и качественная отделка для комфортного и расслабляющего пребывания.",
      f2Title: "Светлые и аккуратные пространства",
      f2Text: "Помещения, в которых вы почувствуете себя как дома с первой минуты.",
      f3Title: "Всё необходимое",
      f3Text:
        "Оборудованная кухня, стиральная машина, микроволновая печь, кондиционер, запасное бельё и полотенца — всё необходимое для отдыха без забот.",
      f4Title: "Идеально для семей и пар",
      f4Text:
        "Тихая и уютная обстановка — идеально для пар, ищущих расслабления, или семей с детьми.",
    },
    services: {
      eyebrow: "Услуги",
      title: "Всё для вашего отдыха",
      intro:
        "Мы продумали всё, чтобы ваш отдых в Римини был простым, удобным и незабываемым.",
      s1Title: "Рядом с морем",
      s1Text: "До пляжа можно дойти пешком за несколько минут.",
      s2Title: "Удачное расположение",
      s2Text: "Исторический центр, Marina Centro, рестораны, магазины и заведения — в самом сердце пляжной жизни и развлечений Римини.",
      s3Title: "Удобный полуэтаж",
      s3Text: "Квартира расположена на полуэтаже: удобный и доступный вход, идеально для пожилых людей, детей и людей с ограниченной подвижностью.",
      s4Title: "Оборудованная кухня",
      s4Text: "Полностью оснащённая кухня со всей необходимой техникой и посудой.",
      s5Title: "Парковка",
      s5Text: "Возможность платной парковки рядом с квартирой.",
      s6Title: "Лучшая цена гарантирована",
      s6Text:
        "Бронируя напрямую на нашем сайте, вы экономите по сравнению с онлайн-платформами.",
    },
    beach: {
      eyebrow: "Партнёрский пляж",
      title: "Bagni 64 – 65 – 66",
      subtitle: "Spiagge Maina",
      description:
        "Наши гости пользуются специальным соглашением со Spiagge Maina – Bagni 64, 65 и 66 — большим, хорошо оборудованным и уютным пляжным комплексом в Римини. Зонт, шезлонги и все услуги на выгодных условиях.",
      tags: ["Зонт", "Шезлонги", "Душ", "Бар", "Детская площадка", "Набережная"],
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Посмотрите интерьеры",
      intro:
        "Загляните внутрь квартиры: светлые, ухоженные помещения, готовые принять вас.",
    },
    attractions: {
      eyebrow: "Что рядом",
      title: "Всё под рукой",
      intro:
        "Расположение апартаментов Il Tulipano действительно стратегическое: море, шопинг, заведения и все необходимые услуги — в нескольких шагах.",
      parcoTag: "В нескольких шагах · Набережная",
      parcoTitle: "Parco del Mare",
      parcoText:
        "Новая набережная Римини: красивая прогулочная зона у моря с зелёными участками, велодорожками, детскими площадками и местами для отдыха. Идеально для прогулок и спокойного времяпрепровождения.",
      befaneTag: "Шопинг · Крупнейший в Романье",
      befaneTitle: "Le Befane",
      befaneText:
        "Самый большой торговый центр Романьи с более чем 100 магазинами, ресторанами и услугами. Обязательное место для шопинга.",
      carducciTag: "Шопинг · Прогулки",
      carducciTitle: "Via Carducci & Regina Elena",
      carducciText:
        "Самые любимые улицы Римини для шопинга и вечерних прогулок — бутики, сувенирные магазины и кафе.",
      clubTag: "Ночная жизнь · Клубы",
      clubTitle: "Клубы и дискотеки",
      clubText:
        "Самые известные заведения Ривьеры: Frontemare и Altromondo Studios — символы ночной жизни Римини.",
      conadTag: "Основные услуги",
      conadTitle: "Conad, аптека и продукты",
      conadText:
        "Супермаркет Conad, аптека и продуктовые магазины поблизости — между Via Praga и Via Pascoli.",
      seraTag: "Рестораны · Аперитивы · Вечера",
      seraTitle: "Ужин и вечер у моря",
      seraText:
        "В нескольких минутах от квартиры — одни из самых известных заведений Ривьеры, где можно поужинать, выпить аперитив или провести вечер в компании.",
    },
    booking: {
      eyebrow: "Бронирование",
      title: "Бронируйте напрямую и экономьте",
      intro:
        "Бронируя через наш сайт, вы получаете гарантию лучшей цены без комиссий. Прямой контакт с хозяином — простой и личный опыт.",
      name: "Имя и фамилия",
      namePlaceholder: "Иван Иванов",
      email: "Эл. почта",
      emailPlaceholder: "ivan@email.com",
      phone: "Телефон",
      phonePlaceholder: "+39 333 1234567",
      guests: "Количество гостей",
      guestSingular: "гость",
      guestPlural: "гостей",
      checkin: "Заезд",
      checkout: "Выезд",
      message: "Сообщение",
      messagePlaceholder: "Особые пожелания, вопросы, время прибытия...",
      noteLabel: "Примечание:",
      noteText:
        "Цена ориентировочная. После отправки запроса хозяин свяжется с вами для подтверждения наличия и окончательной цены.",
      submit: "Отправить запрос",
      sending: "Отправка...",
      successTitle: "Запрос отправлен!",
      successText:
        "Спасибо! Мы свяжемся с вами как можно скорее, чтобы подтвердить наличие и окончательную цену.",
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Нужна дополнительная информация?",
      intro:
        "Не стесняйтесь обращаться с любыми вопросами. Мы поможем сделать ваш отдых идеальным.",
      phone: "Телефон",
      email: "Эл. почта",
      address: "Адрес",
      whatsapp: "WhatsApp",
      whatsappValue: "Напишите нам в WhatsApp",
    },
    footer: {
      tagline: "Дом для отдыха в Римини",
      rights: "Все права защищены.",
    },
    whatsapp: {
      aria: "Связаться с нами в WhatsApp",
    },
    beachNearby: {
      eyebrow: "В двух шагах от моря",
      title: "Пляж в 4 минутах пешком",
      description:
        "Апартаменты Il Tulipano находятся совсем рядом с морем: всего 4 минуты пешком до пляжа. Вот маршрут от квартиры до побережья.",
      walkLabel: "4 мин пешком",
      fromLabel: "От квартиры",
      toLabel: "До пляжа",
      mapCta: "Открыть маршрут в Google Maps",
    },
  },
};

export type Translation = (typeof allTranslations)["it"];

export const translations = allTranslations as Record<Locale, Translation>;
