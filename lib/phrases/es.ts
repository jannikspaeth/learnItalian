import type { PhraseMap } from './index';

// Spanish (Spain) wording for the situations in lib/phrases/canon.ts.
export const ES_PHRASES: PhraseMap = {
  // Begrüßung & Abschied
  'greet-hello': ['¡Hola!', 'Hola'],
  'greet-morning': ['¡Buenos días!', 'Buenos días'],
  'greet-evening': ['¡Buenas tardes!', '¡Buenas noches!'],
  'greet-howareyou': ['¿Qué tal?', '¿Cómo estás?', '¿Cómo está?'],
  'greet-fine': ['Bien, gracias.', 'Muy bien, gracias.'],
  'greet-name': ['Me llamo Jannik.', 'Soy Jannik.'],
  'greet-nicetomeet': ['¡Encantado!', '¡Mucho gusto!', '¡Encantada!'],
  'greet-wherefrom': ['Soy de Alemania.', 'Vengo de Alemania.'],
  'greet-bye': ['¡Adiós!', '¡Hasta la vista!'],
  'greet-seeyou': ['¡Hasta luego!', '¡Hasta pronto!'],

  // Höflichkeit & Nachfragen
  'pol-please': ['Por favor.', 'Por favor'],
  'pol-thanks': ['¡Muchas gracias!', 'Muchísimas gracias'],
  'pol-welcome': ['De nada.', 'No hay de qué.'],
  'pol-sorry': ['¡Perdón!', '¡Disculpe!', '¡Lo siento!'],
  'pol-repeat': ['¿Puede repetir, por favor?', '¿Puedes repetir, por favor?'],
  'pol-slower': ['¿Puede hablar más despacio?', '¿Puedes hablar más despacio?'],
  'pol-notunderstood': ['No lo he entendido.', 'No he entendido.', 'No entendí.'],
  'pol-english': ['¿Habla inglés?', '¿Hablas inglés?'],
  'pol-howtosay': ['¿Cómo se dice?', '¿Cómo se dice esto?'],
  'pol-help': ['¿Me puede ayudar?', '¿Me puedes ayudar?', '¿Puede ayudarme?'],

  // Small Talk
  'small-job': ['¿A qué te dedicas?', '¿En qué trabajas?', '¿A qué se dedica?'],
  'small-ilivein': ['Vivo en Stuttgart.', 'Yo vivo en Stuttgart.'],
  'small-stilllearning': ['Todavía estoy aprendiendo.', 'Aún estoy aprendiendo.'],
  'small-howold': ['¿Cuántos años tienes?', '¿Cuántos años tiene?'],
  'small-weather': ['Hoy hace buen tiempo.', 'Hace buen tiempo hoy.'],
  'small-firsttime': ['Es mi primera vez aquí.', 'Es la primera vez que vengo aquí.'],
  'small-holiday': ['Estoy aquí de vacaciones.', 'Estoy de vacaciones aquí.'],
  'small-ilikeithere': ['Me gusta mucho esto.', 'Me gusta mucho estar aquí.'],
  'small-andyou': ['¿Y tú?', '¿Y usted?'],
  'small-soon': ['¡Nos vemos pronto!', '¡Hasta pronto!'],

  // Restaurant & Café
  'rest-table': ['Una mesa para dos, por favor.', 'Mesa para dos, por favor.'],
  'rest-menu': ['La carta, por favor.', 'El menú, por favor.'],
  'rest-iwouldlike': ['Quería un café.', 'Quisiera un café.', 'Me pone un café, por favor.'],
  'rest-water': ['Un vaso de agua, por favor.', 'Un agua, por favor.'],
  'rest-recommend': ['¿Qué me recomienda?', '¿Qué recomienda?'],
  'rest-vegetarian': ['Soy vegetariano.', 'Soy vegetariana.'],
  'rest-delicious': ['¡Estaba muy rico!', '¡Estaba buenísimo!'],
  'rest-bill': ['La cuenta, por favor.', 'Nos trae la cuenta, por favor.'],
  'rest-card': ['¿Puedo pagar con tarjeta?', '¿Se puede pagar con tarjeta?'],
  'rest-toilet': ['¿Dónde está el baño?', '¿Dónde están los servicios?'],

  // Einkaufen & Bezahlen
  'shop-howmuch': ['¿Cuánto cuesta?', '¿Cuánto vale?', '¿Cuánto es?'],
  'shop-looking': ['Busco un regalo.', 'Estoy buscando un regalo.'],
  'shop-justlooking': ['Solo estoy mirando.', 'Sólo estoy mirando.'],
  'shop-tryon': ['¿Me lo puedo probar?', '¿Puedo probármelo?'],
  'shop-toobig': ['Me queda grande.', 'Es demasiado grande para mí.'],
  'shop-takeit': ['Me lo llevo.', 'Lo compro.'],
  'shop-cheaper': ['¿Tiene algo más barato?', '¿Tienen algo más barato?'],
  'shop-bag': ['Una bolsa, por favor.', 'Me da una bolsa, por favor.'],
  'shop-receipt': ['El recibo, por favor.', 'El tique, por favor.'],
  'shop-open': ['¿Cuándo abren?', '¿A qué hora abren?'],

  // Unterwegs & Verkehr
  'way-station': ['¿Dónde está la estación?', '¿Dónde está la estación de trenes?'],
  'way-ticket': ['Un billete, por favor.', 'Quería un billete, por favor.'],
  'way-platform': ['¿De qué andén sale el tren?', '¿De qué vía sale el tren?'],
  'way-howlong': ['¿Cuánto dura el viaje?', '¿Cuánto tiempo dura el viaje?'],
  'way-nextbus': ['¿Cuándo llega el próximo autobús?', '¿A qué hora llega el próximo autobús?'],
  'way-righttrain': ['¿Es este el tren correcto?', '¿Es el tren correcto?'],
  'way-getoff': ['¿Dónde tengo que bajarme?', '¿Dónde me tengo que bajar?'],
  'way-tocentre': ['¿Cómo llego al centro?', '¿Cómo se llega al centro?'],
  'way-lost': ['Me he perdido.', 'Estoy perdido.', 'Estoy perdida.'],
  'way-taxi': ['¿Me puede llamar un taxi?', '¿Puede llamarme un taxi?'],

  // Hotel & Unterkunft
  'hotel-reservation': ['Tengo una reserva.', 'Tenemos una reserva.'],
  'hotel-free': ['¿Tienen una habitación libre?', '¿Tiene una habitación libre?'],
  'hotel-twonights': ['Para dos noches, por favor.', 'Dos noches, por favor.'],
  'hotel-breakfast': ['¿El desayuno está incluido?', '¿Está incluido el desayuno?'],
  'hotel-wifi': ['¿Cuál es la contraseña del wifi?', '¿Cuál es la clave del wifi?'],
  'hotel-checkout': ['¿A qué hora hay que dejar la habitación?', '¿Cuándo tenemos que dejar la habitación?'],
  'hotel-key': ['La llave no funciona.', 'La tarjeta no funciona.'],
  'hotel-luggage': ['¿Podemos dejar aquí el equipaje?', '¿Podemos dejar el equipaje aquí?'],
  'hotel-quieter': ['¿Tiene una habitación más tranquila?', '¿Tienen una habitación más tranquila?'],
  'hotel-towels': ['¿Nos puede traer toallas limpias?', '¿Podemos tener toallas limpias?'],

  // Arzt & Apotheke
  'med-notwell': ['No me siento bien.', 'No me encuentro bien.'],
  'med-headache': ['Me duele la cabeza.', 'Tengo dolor de cabeza.'],
  'med-fever': ['Tengo fiebre.', 'Tengo un poco de fiebre.'],
  'med-doctor': ['Necesito un médico.', 'Necesito ver a un médico.'],
  'med-pharmacy': ['¿Dónde está la farmacia más cercana?', '¿Dónde hay una farmacia?'],
  'med-something': ['¿Tiene algo para el dolor de cabeza?', '¿Tienen algo para el dolor de cabeza?'],
  'med-allergic': ['Soy alérgico a la penicilina.', 'Soy alérgica a la penicilina.'],
  'med-insurance': ['Aquí está mi tarjeta sanitaria.', 'Esta es mi tarjeta del seguro.'],
  'med-appointment': ['Quería una cita.', 'Quisiera pedir una cita.'],
  'med-better': ['Ya estoy mejor.', 'Ya me siento mejor.'],

  // Telefon & Termine
  'phone-hello': ['Hola, soy Jannik.', '¿Sí? Soy Jannik.'],
  'phone-speakto': ['¿Puedo hablar con el médico?', '¿Podría hablar con el médico?'],
  'phone-wrongnumber': ['Creo que me he equivocado de número.', 'Me he equivocado de número.'],
  'phone-callback': ['Llamo más tarde.', 'Vuelvo a llamar más tarde.'],
  'phone-makeappointment': ['Quería pedir una cita.', 'Quisiera pedir una cita.'],
  'phone-whattime': ['¿A qué hora le va bien?', '¿A qué hora te va bien?'],
  'phone-tomorrowten': ['Mañana a las diez me va bien.', 'Mañana a las diez está bien.'],
  'phone-badline': ['Le oigo mal.', 'No le oigo bien.', 'Te oigo mal.'],
  'phone-moment': ['Un momento, por favor.', 'Un instante, por favor.'],
  'phone-cancel': ['Tengo que cancelar la cita.', 'Tengo que anular la cita.'],

  // Probleme & Notfall
  'emg-help': ['¡Socorro!', '¡Ayuda!'],
  'emg-police': ['¡Llame a la policía!', '¡Llamen a la policía!'],
  'emg-accident': ['Ha habido un accidente.', 'Hubo un accidente.'],
  'emg-stolen': ['Me han robado el bolso.', 'Me robaron el bolso.'],
  'emg-passport': ['He perdido el pasaporte.', 'He perdido mi pasaporte.'],
  'emg-ambulance': ['Necesitamos una ambulancia.', 'Hace falta una ambulancia.'],
  'emg-fire': ['¡Hay un incendio!', '¡Fuego!'],
  'emg-notmyfault': ['No ha sido culpa mía.', 'No fue culpa mía.'],
  'emg-embassy': ['Tengo que llamar a la embajada.', 'Necesito llamar a la embajada.'],
  'emg-car': ['Mi coche está averiado.', 'Se me ha averiado el coche.'],
};
