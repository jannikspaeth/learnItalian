import type { PhraseMap } from './index';

// Italian wording for the situations in lib/phrases/canon.ts. A value may be a
// list: the first entry is shown, the rest are also accepted when typing.
export const IT_PHRASES: PhraseMap = {
  // Begrüßung & Abschied
  'greet-hello': ['Ciao!', 'Salve!'],
  'greet-morning': 'Buongiorno!',
  'greet-evening': 'Buonasera!',
  'greet-howareyou': ['Come stai?', 'Come sta?', 'Come va?'],
  'greet-fine': ['Bene, grazie.', 'Tutto bene, grazie.'],
  'greet-name': ['Mi chiamo Jannik.', 'Sono Jannik.'],
  'greet-nicetomeet': ['Piacere!', 'Molto piacere!'],
  'greet-wherefrom': ['Vengo dalla Germania.', 'Sono tedesco.'],
  'greet-bye': ['Arrivederci!', 'ArrivederLa!'],
  'greet-seeyou': ['A dopo!', 'A presto!'],

  // Höflichkeit & Nachfragen
  'pol-please': ['Per favore.', 'Per piacere.'],
  'pol-thanks': ['Grazie mille!', 'Molte grazie!'],
  'pol-welcome': ['Prego.', 'Di niente.'],
  'pol-sorry': ['Scusi!', 'Scusa!', 'Mi scusi!'],
  'pol-repeat': ['Può ripetere, per favore?', 'Puoi ripetere, per favore?'],
  'pol-slower': ['Può parlare più lentamente?', 'Puoi parlare più lentamente?', 'Può parlare più piano?'],
  'pol-notunderstood': ['Non ho capito.', 'Non ho capito bene.'],
  'pol-english': ['Parla inglese?', 'Parli inglese?'],
  'pol-howtosay': ['Come si dice?', 'Come si dice questo?'],
  'pol-help': ['Mi può aiutare?', 'Mi puoi aiutare?', 'Può aiutarmi?'],

  // Small Talk
  'small-job': ['Che lavoro fai?', 'Che lavoro fa?'],
  'small-ilivein': ['Abito a Stoccarda.', 'Vivo a Stoccarda.'],
  'small-stilllearning': ['Sto ancora imparando.', 'Sto imparando ancora.'],
  'small-howold': ['Quanti anni hai?', 'Quanti anni ha?'],
  'small-weather': ['Oggi fa bel tempo.', 'Oggi c’è bel tempo.'],
  'small-firsttime': ['È la prima volta che vengo qui.', 'Sono qui per la prima volta.'],
  'small-holiday': ['Sono qui in vacanza.', 'Sono in vacanza qui.'],
  'small-ilikeithere': ['Mi piace molto qui.', 'Qui mi piace molto.'],
  'small-andyou': ['E tu?', 'E Lei?'],
  'small-soon': ['Ci vediamo presto!', 'A presto!'],

  // Restaurant & Café
  'rest-table': ['Un tavolo per due, per favore.', 'Un tavolo per due persone, per favore.'],
  'rest-menu': ['Il menù, per favore.', 'La carta, per favore.'],
  'rest-iwouldlike': ['Vorrei un caffè.', 'Prendo un caffè.'],
  'rest-water': ['Un bicchiere d’acqua, per favore.', 'Un bicchiere di acqua, per favore.'],
  'rest-recommend': ['Cosa consiglia?', 'Che cosa consiglia?', 'Cosa mi consiglia?'],
  'rest-vegetarian': ['Sono vegetariano.', 'Sono vegetariana.'],
  'rest-delicious': ['Era buonissimo!', 'Era molto buono!'],
  'rest-bill': ['Il conto, per favore.', 'Ci porta il conto, per favore?'],
  'rest-card': ['Posso pagare con la carta?', 'Si può pagare con la carta?'],
  'rest-toilet': ['Dov’è il bagno?', 'Dove è il bagno?', 'Dov’è la toilette?'],

  // Einkaufen & Bezahlen
  'shop-howmuch': ['Quanto costa?', 'Quant’è?'],
  'shop-looking': ['Cerco un regalo.', 'Sto cercando un regalo.'],
  'shop-justlooking': ['Sto solo guardando.', 'Guardo soltanto.'],
  'shop-tryon': ['Posso provarlo?', 'Lo posso provare?'],
  'shop-toobig': ['Mi è troppo grande.', 'È troppo grande per me.'],
  'shop-takeit': ['Lo prendo.', 'La prendo.'],
  'shop-cheaper': ['Ha qualcosa di più economico?', 'Avete qualcosa di più economico?'],
  'shop-bag': ['Un sacchetto, per favore.', 'Una borsa, per favore.'],
  'shop-receipt': ['La ricevuta, per favore.', 'Lo scontrino, per favore.'],
  'shop-open': ['Quando siete aperti?', 'Quando aprite?', 'A che ora aprite?'],

  // Unterwegs & Verkehr
  'way-station': ['Dov’è la stazione?', 'Dove è la stazione?'],
  'way-ticket': ['Un biglietto, per favore.', 'Vorrei un biglietto, per favore.'],
  'way-platform': ['Da quale binario parte il treno?', 'Da che binario parte il treno?'],
  'way-howlong': ['Quanto dura il viaggio?', 'Quanto tempo dura il viaggio?'],
  'way-nextbus': ['Quando arriva il prossimo autobus?', 'A che ora arriva il prossimo autobus?'],
  'way-righttrain': ['È il treno giusto?', 'Questo è il treno giusto?'],
  'way-getoff': ['Dove devo scendere?', 'Dove bisogna scendere?'],
  'way-tocentre': ['Come arrivo in centro?', 'Come si arriva in centro?'],
  'way-lost': ['Mi sono perso.', 'Mi sono persa.'],
  'way-taxi': ['Mi può chiamare un taxi?', 'Può chiamarmi un taxi?'],

  // Hotel & Unterkunft
  'hotel-reservation': ['Ho una prenotazione.', 'Abbiamo una prenotazione.'],
  'hotel-free': ['Avete una camera libera?', 'Ha una camera libera?'],
  'hotel-twonights': ['Per due notti, per favore.', 'Due notti, per favore.'],
  'hotel-breakfast': ['La colazione è compresa?', 'La colazione è inclusa?'],
  'hotel-wifi': ['Qual è la password del wifi?', 'Qual è la password del wi-fi?'],
  'hotel-checkout': ['A che ora dobbiamo lasciare la camera?', 'Quando dobbiamo lasciare la camera?'],
  'hotel-key': ['La chiave non funziona.', 'La chiave non va.'],
  'hotel-luggage': ['Possiamo lasciare qui i bagagli?', 'Possiamo lasciare i bagagli qui?'],
  'hotel-quieter': ['Ha una camera più tranquilla?', 'Avete una camera più tranquilla?'],
  'hotel-towels': ['Possiamo avere degli asciugamani puliti?', 'Ci porta degli asciugamani puliti?'],

  // Arzt & Apotheke
  'med-notwell': ['Non mi sento bene.', 'Non sto bene.'],
  'med-headache': ['Mi fa male la testa.', 'Ho mal di testa.'],
  'med-fever': ['Ho la febbre.', 'Ho un po’ di febbre.'],
  'med-doctor': ['Ho bisogno di un medico.', 'Mi serve un medico.'],
  'med-pharmacy': ['Dov’è la farmacia più vicina?', 'Dove è la farmacia più vicina?'],
  'med-something': ['Ha qualcosa per il mal di testa?', 'Avete qualcosa per il mal di testa?'],
  'med-allergic': ['Sono allergico alla penicillina.', 'Sono allergica alla penicillina.'],
  'med-insurance': ['Ecco la mia tessera sanitaria.', 'Questa è la mia tessera sanitaria.'],
  'med-appointment': ['Vorrei un appuntamento.', 'Vorrei fissare un appuntamento.'],
  'med-better': ['Sto già meglio.', 'Sto meglio adesso.'],

  // Telefon & Termine
  'phone-hello': ['Pronto, sono Jannik.', 'Pronto, è Jannik.'],
  'phone-speakto': ['Posso parlare con il medico?', 'Potrei parlare con il medico?'],
  'phone-wrongnumber': ['Credo di aver sbagliato numero.', 'Ho sbagliato numero.'],
  'phone-callback': ['Richiamo più tardi.', 'Richiamo dopo.'],
  'phone-makeappointment': ['Vorrei fissare un appuntamento.', 'Vorrei prendere un appuntamento.'],
  'phone-whattime': ['A che ora le va bene?', 'A che ora Le va bene?'],
  'phone-tomorrowten': ['Domani alle dieci va bene.', 'Domani alle dieci mi va bene.'],
  'phone-badline': ['La sento male.', 'Ti sento male.'],
  'phone-moment': ['Un momento, per favore.', 'Un attimo, per favore.'],
  'phone-cancel': ['Devo annullare l’appuntamento.', 'Devo cancellare l’appuntamento.'],

  // Probleme & Notfall
  'emg-help': ['Aiuto!', 'Aiutatemi!'],
  'emg-police': ['Chiami la polizia!', 'Chiamate la polizia!'],
  'emg-accident': ['C’è stato un incidente.', 'È successo un incidente.'],
  'emg-stolen': ['Mi hanno rubato la borsa.', 'Mi è stata rubata la borsa.'],
  'emg-passport': ['Ho perso il passaporto.', 'Ho perso il mio passaporto.'],
  'emg-ambulance': ['Serve un’ambulanza.', 'Abbiamo bisogno di un’ambulanza.'],
  'emg-fire': ['C’è un incendio!', 'Va a fuoco!'],
  'emg-notmyfault': ['Non è stata colpa mia.', 'Non è colpa mia.'],
  'emg-embassy': ['Devo chiamare l’ambasciata.', 'Devo telefonare all’ambasciata.'],
  'emg-car': ['La mia auto è guasta.', 'La mia macchina è guasta.'],
};
