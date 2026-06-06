/**
 * GPSR (Rozporządzenie UE 2023/988) — dane producenta + informacje o bezpieczeństwie.
 *
 * Bez nich Allegro nie aktywuje oferty. Allegro NIE udostępnia API do zapisania
 * własnego „podmiotu odpowiedzialnego", ale produkt Zebra ma gotowy wpis w rejestrze
 * GPSR Allegro — ID bierzemy z env (to samo, którego konto używa na istniejących
 * ofertach). Tekst bezpieczeństwa jest wspólny dla papierów/folii (taśmy + etykiety).
 *
 * Env:
 *  ALLEGRO_RESPONSIBLE_PRODUCER_ID — ID producenta (Zebra) z rejestru GPSR Allegro
 *  ALLEGRO_AUTO_PUBLISH=true       — publikuj od razu jako ACTIVE (zamiast szkicu)
 */

export const RESPONSIBLE_PRODUCER_ID = process.env.ALLEGRO_RESPONSIBLE_PRODUCER_ID || ''
export const ALLEGRO_AUTO_PUBLISH = process.env.ALLEGRO_AUTO_PUBLISH === 'true'

/** Tekst bezpieczeństwa GPSR dla papierów/folii (Allegro tłumaczy na języki rynków). */
export const SAFETY_INFORMATION_TEXT =
  'Lista ostrzeżeń dotyczących bezpieczeństwa (papiery, folie), oparta o wymagania ' +
  'Rozporządzenia (UE) 2023/988 w sprawie ogólnego bezpieczeństwa produktów (GPSR).\n\n' +
  '1. Ryzyko skaleczeń: uważaj na ostre krawędzie papieru lub folii, zwłaszcza podczas cięcia; ' +
  'nie używaj uszkodzonych arkuszy, które mogą powodować skaleczenia.\n' +
  '2. Ryzyko zadławienia: przechowuj materiały poza zasięgiem małych dzieci, aby uniknąć ryzyka połknięcia.\n' +
  '3. Ostrzeżenie przeciwpożarowe: papier i folia mogą być łatwopalne, trzymaj je z dala od ognia i źródeł ciepła.\n' +
  '4. Ryzyko urazu: zachowaj ostrożność przy dużych i ciężkich rolach.\n' +
  '5. Ostrzeżenie środowiskowe: utylizuj zgodnie z lokalnymi przepisami o recyklingu; nie spalaj.\n' +
  '6. Ostrzeżenie dotyczące przechowywania: przechowuj w suchym miejscu, z dala od wilgoci.\n' +
  '7. Elektryczność statyczna: uważaj na ładunki statyczne przy niektórych foliach.\n' +
  '8. Papier termiczny: unikaj długotrwałego kontaktu ze skórą, może zawierać substancje drażniące.\n' +
  '9. Folia samoprzylepna: uważaj na przyklejenie do skóry lub włosów.\n' +
  '10. Zalecenia: używaj materiałów zgodnie z instrukcją producenta urządzenia (drukarki); ' +
  'niekompatybilne materiały mogą uszkodzić sprzęt.'

export interface GpsrFields {
  responsibleProducer?: { id: string }
  safetyInformation?: { type: 'TEXT'; description: string }
}

/** Usuń znaki zabronione przez Allegro w opisie bezpieczeństwa (np. myślnik —, –). */
function sanitizeSafety(text: string): string {
  return text.replace(/[—–]/g, '-')
}

/** Sekcje GPSR do productSet[0] — tylko gdy skonfigurowano producenta. */
export function gpsrForProductSet(): GpsrFields {
  if (!RESPONSIBLE_PRODUCER_ID) return {}
  return {
    responsibleProducer: { id: RESPONSIBLE_PRODUCER_ID },
    safetyInformation: { type: 'TEXT', description: sanitizeSafety(SAFETY_INFORMATION_TEXT) },
  }
}
