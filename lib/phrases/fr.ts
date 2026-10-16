import type { PhraseMap } from './index';

// French wording for the situations in lib/phrases/canon.ts.
export const FR_PHRASES: PhraseMap = {
  // Begrüßung & Abschied
  'greet-hello': ['Salut !', 'Bonjour !', 'Coucou !'],
  'greet-morning': ['Bonjour !', 'Bonjour'],
  'greet-evening': ['Bonsoir !', 'Bonsoir'],
  'greet-howareyou': ['Ça va ?', 'Comment ça va ?', 'Comment allez-vous ?'],
  'greet-fine': ['Ça va bien, merci.', 'Très bien, merci.'],
  'greet-name': ["Je m'appelle Jannik.", 'Moi, c’est Jannik.'],
  'greet-nicetomeet': ['Enchanté !', 'Enchantée !', 'Ravi de vous rencontrer !'],
  'greet-wherefrom': ["Je viens d'Allemagne.", 'Je suis allemand.'],
  'greet-bye': ['Au revoir !', 'Bonne journée !'],
  'greet-seeyou': ['À plus tard !', 'À tout à l’heure !', 'À bientôt !'],

  // Höflichkeit & Nachfragen
  'pol-please': ["S'il vous plaît.", "S'il te plaît."],
  'pol-thanks': ['Merci beaucoup !', 'Merci bien !'],
  'pol-welcome': ['Je vous en prie.', 'De rien.', 'Il n’y a pas de quoi.'],
  'pol-sorry': ['Excusez-moi !', 'Pardon !', 'Désolé !'],
  'pol-repeat': ['Pouvez-vous répéter, s’il vous plaît ?', 'Vous pouvez répéter, s’il vous plaît ?'],
  'pol-slower': ['Pouvez-vous parler plus lentement ?', 'Vous pouvez parler moins vite ?'],
  'pol-notunderstood': ["Je n'ai pas compris.", 'Je n’ai pas bien compris.'],
  'pol-english': ['Parlez-vous anglais ?', 'Vous parlez anglais ?'],
  'pol-howtosay': ['Comment dit-on ?', 'Comment est-ce qu’on dit ?'],
  'pol-help': ["Pouvez-vous m'aider ?", 'Vous pouvez m’aider ?'],

  // Small Talk
  'small-job': ['Qu’est-ce que tu fais comme travail ?', 'Tu fais quoi comme travail ?', 'Qu’est-ce que vous faites comme travail ?'],
  'small-ilivein': ["J'habite à Stuttgart.", 'Je vis à Stuttgart.'],
  'small-stilllearning': ["J'apprends encore.", 'Je suis encore en train d’apprendre.'],
  'small-howold': ['Tu as quel âge ?', 'Quel âge as-tu ?', 'Quel âge avez-vous ?'],
  'small-weather': ["Il fait beau aujourd'hui.", 'Aujourd’hui, il fait beau.'],
  'small-firsttime': ['C’est la première fois que je viens ici.', 'Je viens ici pour la première fois.'],
  'small-holiday': ['Je suis ici en vacances.', 'Je suis en vacances ici.'],
  'small-ilikeithere': ["J'aime beaucoup ici.", 'Ça me plaît beaucoup ici.'],
  'small-andyou': ['Et toi ?', 'Et vous ?'],
  'small-soon': ['On se voit bientôt !', 'À bientôt !'],

  // Restaurant & Café
  'rest-table': ['Une table pour deux, s’il vous plaît.', 'Une table pour deux personnes, s’il vous plaît.'],
  'rest-menu': ['La carte, s’il vous plaît.', 'Le menu, s’il vous plaît.'],
  'rest-iwouldlike': ['Je voudrais un café.', 'Je prends un café.'],
  'rest-water': ["Un verre d'eau, s’il vous plaît.", 'Une carafe d’eau, s’il vous plaît.'],
  'rest-recommend': ['Qu’est-ce que vous recommandez ?', 'Qu’est-ce que vous conseillez ?'],
  'rest-vegetarian': ['Je suis végétarien.', 'Je suis végétarienne.'],
  'rest-delicious': ['C’était très bon !', 'C’était délicieux !'],
  'rest-bill': ["L'addition, s’il vous plaît.", 'Je voudrais l’addition, s’il vous plaît.'],
  'rest-card': ['Est-ce que je peux payer par carte ?', 'Je peux payer par carte ?'],
  'rest-toilet': ['Où sont les toilettes ?', 'Où est la toilette ?'],

  // Einkaufen & Bezahlen
  'shop-howmuch': ['Ça coûte combien ?', 'Combien ça coûte ?', 'C’est combien ?'],
  'shop-looking': ['Je cherche un cadeau.', 'Je voudrais un cadeau.'],
  'shop-justlooking': ['Je regarde seulement.', 'Je regarde juste.'],
  'shop-tryon': ['Je peux l’essayer ?', 'Est-ce que je peux l’essayer ?'],
  'shop-toobig': ['C’est trop grand pour moi.', 'C’est trop grand.'],
  'shop-takeit': ['Je le prends.', 'Je la prends.'],
  'shop-cheaper': ['Avez-vous quelque chose de moins cher ?', 'Vous avez quelque chose de moins cher ?'],
  'shop-bag': ['Un sac, s’il vous plaît.', 'Est-ce que je peux avoir un sac ?'],
  'shop-receipt': ['Le ticket, s’il vous plaît.', 'Le reçu, s’il vous plaît.'],
  'shop-open': ['Vous êtes ouverts quand ?', 'Quand est-ce que vous ouvrez ?', 'À quelle heure vous ouvrez ?'],

  // Unterwegs & Verkehr
  'way-station': ['Où est la gare ?', 'Où se trouve la gare ?'],
  'way-ticket': ['Un billet, s’il vous plaît.', 'Je voudrais un billet, s’il vous plaît.'],
  'way-platform': ['Le train part de quel quai ?', 'De quel quai part le train ?'],
  'way-howlong': ['Le trajet dure combien de temps ?', 'Combien de temps dure le trajet ?'],
  'way-nextbus': ['Quand arrive le prochain bus ?', 'À quelle heure arrive le prochain bus ?'],
  'way-righttrain': ['C’est le bon train ?', 'Est-ce que c’est le bon train ?'],
  'way-getoff': ['Où est-ce que je dois descendre ?', 'Je dois descendre où ?'],
  'way-tocentre': ['Comment est-ce que j’arrive au centre ?', 'Comment aller au centre ?'],
  'way-lost': ['Je me suis perdu.', 'Je me suis perdue.'],
  'way-taxi': ["Pouvez-vous m'appeler un taxi ?", 'Vous pouvez m’appeler un taxi ?'],

  // Hotel & Unterkunft
  'hotel-reservation': ["J'ai une réservation.", 'Nous avons une réservation.'],
  'hotel-free': ['Avez-vous une chambre libre ?', 'Vous avez une chambre libre ?'],
  'hotel-twonights': ['Pour deux nuits, s’il vous plaît.', 'Deux nuits, s’il vous plaît.'],
  'hotel-breakfast': ['Le petit-déjeuner est compris ?', 'Est-ce que le petit-déjeuner est compris ?'],
  'hotel-wifi': ['Quel est le mot de passe du wifi ?', 'C’est quoi le mot de passe du wifi ?'],
  'hotel-checkout': ['À quelle heure faut-il libérer la chambre ?', 'Quand faut-il libérer la chambre ?'],
  'hotel-key': ['La clé ne marche pas.', 'La clé ne fonctionne pas.'],
  'hotel-luggage': ['On peut laisser les bagages ici ?', 'Est-ce qu’on peut laisser les bagages ici ?'],
  'hotel-quieter': ['Avez-vous une chambre plus calme ?', 'Vous avez une chambre plus calme ?'],
  'hotel-towels': ['Est-ce qu’on peut avoir des serviettes propres ?', 'On peut avoir des serviettes propres ?'],

  // Arzt & Apotheke
  'med-notwell': ['Je ne me sens pas bien.', 'Je ne vais pas bien.'],
  'med-headache': ["J'ai mal à la tête.", 'La tête me fait mal.'],
  'med-fever': ["J'ai de la fièvre.", 'Je fais de la fièvre.'],
  'med-doctor': ["J'ai besoin d'un médecin.", 'Il me faut un médecin.'],
  'med-pharmacy': ['Où est la pharmacie la plus proche ?', 'Où y a-t-il une pharmacie ?'],
  'med-something': ['Avez-vous quelque chose contre le mal de tête ?', 'Vous avez quelque chose contre le mal de tête ?'],
  'med-allergic': ['Je suis allergique à la pénicilline.', 'Je fais une allergie à la pénicilline.'],
  'med-insurance': ["Voici ma carte d'assurance.", 'Voilà ma carte d’assurance.'],
  'med-appointment': ['Je voudrais un rendez-vous.', 'Je voudrais prendre rendez-vous.'],
  'med-better': ['Je vais déjà mieux.', 'Ça va déjà mieux.'],

  // Telefon & Termine
  'phone-hello': ['Allô, c’est Jannik.', 'Bonjour, c’est Jannik.'],
  'phone-speakto': ['Est-ce que je peux parler au médecin ?', 'Je peux parler au médecin ?'],
  'phone-wrongnumber': ['Je crois que je me suis trompé de numéro.', 'Je me suis trompé de numéro.'],
  'phone-callback': ['Je rappelle plus tard.', 'Je vous rappelle plus tard.'],
  'phone-makeappointment': ['Je voudrais prendre rendez-vous.', 'J’aimerais prendre rendez-vous.'],
  'phone-whattime': ['À quelle heure cela vous convient ?', 'À quelle heure ça vous va ?'],
  'phone-tomorrowten': ['Demain à dix heures, ça me va.', 'Demain à dix heures, c’est bon pour moi.'],
  'phone-badline': ['Je vous entends mal.', 'Je ne vous entends pas bien.'],
  'phone-moment': ['Un instant, s’il vous plaît.', 'Un moment, s’il vous plaît.'],
  'phone-cancel': ['Je dois annuler le rendez-vous.', 'Il faut que j’annule le rendez-vous.'],

  // Probleme & Notfall
  'emg-help': ['Au secours !', 'À l’aide !'],
  'emg-police': ['Appelez la police !', 'Appelle la police !'],
  'emg-accident': ['Il y a eu un accident.', 'Il s’est passé un accident.'],
  'emg-stolen': ["On m'a volé mon sac.", 'Mon sac a été volé.'],
  'emg-passport': ["J'ai perdu mon passeport.", 'J’ai perdu le passeport.'],
  'emg-ambulance': ['Il faut une ambulance.', 'Nous avons besoin d’une ambulance.'],
  'emg-fire': ['Il y a le feu !', 'Au feu !'],
  'emg-notmyfault': ["Ce n'était pas ma faute.", 'Ce n’est pas ma faute.'],
  'emg-embassy': ["Je dois appeler l'ambassade.", 'Il faut que j’appelle l’ambassade.'],
  'emg-car': ['Ma voiture est en panne.', 'Ma voiture ne marche plus.'],
};
