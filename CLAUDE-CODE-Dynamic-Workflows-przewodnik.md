# Dynamic Workflows w Claude Code — kompletny przewodnik

**Wersja**: Claude Code, premiera 28 maja 2026
**Cel dokumentu**: praktyczne wytłumaczenie po polsku — czym są Dynamic Workflows, kiedy je stosować, jak je składać i jakich błędów unikać

---

## Kontekst — co to w ogóle jest

Większość użytkowników Claude Code wciąż pisze swoje procesy pracy **ręcznie**: łączą podpowiedzi po kolei, kopiują wyniki, wklejają je do następnej podpowiedzi, naprawiają to, co poszło źle, powtarzają.

Według autora artykułu, 9 na 10 osób budujących z Claude Code nie spróbowało jeszcze ani razu Dynamic Workflows, mimo że ta funkcja istnieje już od dwóch tygodni (premiera 28 maja 2026).

W skrócie: zamiast pisać 50 podpowiedzi po kolei, można napisać **jeden workflow**. Domyślne środowisko Claude Code (harness) jest świetne dla większości zadań programistycznych. Ale są klasy pracy, w których jedno okno kontekstu zaczyna się rozpadać:
- długotrwałe (np. wielogodzinne)
- masowo równoległe (np. 50 plików do przeglądu)
- mocno strukturalne (np. wieloetapowe procesy)
- adwersaryjne (np. zadania wymagające niezależnej weryfikacji)

Dla takich zadań Anthropic wcześniej budował własne, dedykowane harness-y (Research, Code Review, zespoły agentów). Dynamic Workflows pozwalają Claude pisać taki harness **dla Ciebie, w locie, na konkretne zadanie, w JavaScript**.

---

# Część 1 — Model mentalny (kroki 1-3)

## 01. Workflow to harness, który Claude pisze sam

Domyślny harness Claude Code każe Claude planować i wykonywać zadanie **w tym samym oknie kontekstu**. Dla większości pracy programistycznej to się sprawdza. Dla pracy długotrwałej, równoległej lub adwersaryjnej — pada.

**Dynamic Workflow** to plik JavaScript napisany przez samego Claude — zawiera kilka specjalnych funkcji, które tworzą i koordynują **subagentów** (osobne wystąpienia Claude), plus standardowy JavaScript (Math, JSON, Array) do przetwarzania danych przepływających między nimi.

Trzy rzeczy, które to daje, a których domyślny harness nie potrafi:

- **Izolacja per agent.** Każdy subagent dostaje **swoje własne okno kontekstu** z jednym precyzyjnym celem. Brak skażenia krzyżowego.
- **Wybór modelu per agent.** Workflow wybiera model dla każdego subagenta: **Opus** do trudnego rozumowania, **Haiku** do taniej eksploracji, **Sonnet** do zadań pośrednich.
- **Wybór poziomu izolacji per agent.** Worktree (osobne, wyizolowane git checkout) lub remote (bez checkoutu). Workflow sam decyduje, czego potrzebuje każdy agent.

**Jak uruchomić workflow**: albo poproś Claude wprost ("zrób workflow który..."), albo użyj słowa-wyzwalacza **`ultracode`**. Jeśli workflow zostanie przerwany (akcja użytkownika, zamknięcie terminala), wznowienie sesji podejmuje pracę od miejsca, w którym się skończyła.

## 02. Trzy tryby porażki, które workflowy rozwiązują

Aby wiedzieć, kiedy workflow jest właściwym narzędziem, trzeba wiedzieć, co naprawia. Im dłużej Claude pracuje nad złożonym zadaniem w jednym oknie kontekstu, tym bardziej staje się podatny na trzy konkretne tryby porażki — nazwane wprost w materiałach premierowych Anthropic:

**Lenistwo agentowe (agentic laziness)** — Claude zatrzymuje się przed ukończeniem złożonego, wieloczęściowego zadania i ogłasza "skończone" po częściowym postępie. Sprawdza 20 z 50 punktów audytu bezpieczeństwa i mówi, że reszta jest "obsłużona".

**Stronniczość na własną korzyść (self-preferential bias)** — Claude preferuje swoje własne wyniki, kiedy proszony jest o ich weryfikację lub ocenę względem rubryki. Weryfikator z osobistym interesem w sprawie nie może być sprawiedliwym weryfikatorem.

**Dryf celu (goal drift)** — stopniowa utrata wierności pierwotnemu celowi w trakcie wielu tur, szczególnie po **kompaktowaniu** (skrótowym podsumowaniu kontekstu). Każdy krok podsumowania jest stratny. Ograniczenia typu "nie rób X" potrafią po cichu zniknąć przy turze 47.

Workflow rozwiązuje wszystkie trzy **strukturalnie**: osobne instancje Claude z własnymi kontekstami, jasnymi celami i izolowanym stanem. Jeśli Twoje zadanie cierpi na którykolwiek z tych wzorców — to sygnał, żeby sięgnąć po workflow.

## 03. Statyczne vs dynamiczne workflowy

Być może budowałeś już **statyczne workflowy** używając Claude Agent SDK albo `claude -p` — koordynując kilka wystąpień Claude Code razem.

- **Statyczne workflowy** są ogólne: napisane raz, mają obsłużyć każdy możliwy przypadek brzegowy. Działają, ale muszą być ostrożne.
- **Dynamic Workflows** są inne: Claude pisze **ten workflow dla tego zadania**. Harness jest szyty na miarę.

Przykład: pytanie typu "Czy migracja z Stripe do Adyen się opłaca w naszej skali?"

- **Statyczna wersja** wyszuka dokumentację, porówna ceny, pokaże ogólne argumenty za/przeciw.
- **Dynamiczna wersja** wygra nie dzięki "wyszukiwaniu" (oba potrafią) — wygra, bo workflow kształtuje się pod Twój kontekst: czyta Twój kod billingowy, sprawdza każdą funkcję względem aktualnej dokumentacji nowego dostawcy, wycenia przy Twoim wolumenie transakcji i robi adwersaryjną rundę "dlaczego nie migrować" przeciw swojej własnej, formującej się odpowiedzi.

Statyczny harness tego nie umie, bo nie wie, że Twój kod istnieje.

---

# Część 2 — Podstawowe API (krok 4)

## 04. Trzy funkcje: `agent()`, `parallel()`, `pipeline()`

Trzy funkcje wykonują większość pracy w workflowie. Ich znajomość wystarczy, by przeczytać dowolny workflow, który Claude napisze dla Ciebie, i by go skorygować, gdy chcesz konkretnego kształtu.

- **`agent(prompt, options)`** — uruchamia jednego subagenta z własnym kontekstem i wybranym modelem.
- **`parallel([taskA, taskB, taskC])`** — uruchamia wiele agentów równolegle i **czeka, aż wszyscy skończą**, zanim zwróci wyniki. To jest **bariera**: rozsyła pracę, czeka na wszystko, zwraca komplet.
- **`pipeline([stage1, stage2, stage3])`** — przepuszcza dane przez etapy strumieniowo. Każdy element przepływa przez wszystkie etapy niezależnie. Brak bariery — pierwszy element może być gotowy zanim ostatni element wszedł do pierwszego etapu.

**Jak wybrać między `parallel()` a `pipeline()`?**

Zadaj sobie pytanie: **czy potrzebuję wszystkich wyników, zanim cokolwiek dalej zrobię?**

- **Tak** → `parallel()`
- **Nie** → `pipeline()` (taniej, szybciej w sumie)

---

# Część 3 — Sześć wzorców (kroki 5-10)

## 05. Wzorzec "Sklasyfikuj i działaj" (Classify-and-act)

Agent-klasyfikator decyduje, jaki to typ zadania, a workflow kieruje pracę do różnych agentów lub zachowań w zależności od odpowiedzi.

Albo: klasyfikator działa **na końcu**, sortując surowe wyniki do kubełków na potrzeby tego, co przyjdzie potem.

**Kiedy ten wzorzec się sprawdza**:

- Zadanie jest heterogeniczne — różne podtypy wymagają różnego traktowania.
- Chcesz wydać kosztowny model tylko tam, gdzie złożoność tego wymaga (klasyfikator na taniej, potem przekierowanie na Opus tylko jeśli potrzeba).
- Sam podział pracy jest nietrywialny i zyskuje na decyzji modelu o jego kształcie.

**Przykład**: "Wytłumacz, jak działa moduł autoryzacji." Subagent-klasyfikator najpierw czyta repozytorium, szacuje złożoność, potem kieruje samą pracę wyjaśniającą do **Sonneta** dla modułu z 10 plików albo do **Opusa** dla modułu ze 100 plików. Właściwy model do zadania, wybrany **po** zrozumieniu pracy.

## 06. Wzorzec "Rozsiej i scal" (Fan-out-and-synthesize)

Podziel zadanie na wiele mniejszych kroków. Uruchom agenta na każdym kroku **równolegle**. Scal wyniki w jedną odpowiedź.

Etap scalania jest barierą — czeka na każdego agenta rozsiewu, potem łączy ich strukturalne wyjścia.

**Dlaczego ten wzorzec dominuje w praktyce**: rozwiązuje porażkę "za dużo rzeczy naraz" pracy jednokontekstowej. Każdy subagent widzi tylko swój kawałek. Orkiestrator nigdy nie rozprasza się 50 niepowiązanymi szczegółami. Każdy krok korzysta z własnego czystego okna — nie skażają się nawzajem.

**Stosuj, kiedy**:

- Masz wyliczalną listę pozycji pracy (50 plików, 200 endpointów, 100 recenzji).
- Każda pozycja jest niezależna — żadna nie potrzebuje wyniku innej, by zacząć.
- Chcesz jedną skonsolidowaną odpowiedź na końcu, nie stos częściowych raportów.

**Przykład kodu**:

```javascript
// Rozsiew: jeden agent na plik. Bariera: czekaj na wszystkich.
const reviews = await parallel(
  files.map(file => () => agent(
    `Sprawdź ${file} pod kątem problemów bezpieczeństwa`,
    { model: "haiku", schema: IssueList }
  ))
)

// Scalanie: jeden agent Opus łączy wszystko.
const report = await agent(
  `Połącz te recenzje w jeden uporządkowany raport priorytetowo:\n${JSON.stringify(reviews)}`,
  { model: "opus" }
)
```

## 07. Wzorzec "Adwersaryjna weryfikacja" (Adversarial verification)

Strukturalna naprawa **stronniczości na własną korzyść**. Dla każdego utworzonego agenta uruchom **osobnego agenta**, który adwersaryjnie weryfikuje jego wyjście względem rubryki. Weryfikator **nigdy nie widział oryginalnej pracy** — nie może jej faworyzować.

**Wzorzec ma znaczenie szczególnie dla**:

- **Weryfikacja twierdzeń** — każde stwierdzenie faktograficzne w raporcie dostaje własnego subagenta-weryfikatora, sprawdzającego względem oryginalnego źródła.
- **Code review** — agent-autor pisze poprawkę, agent-recenzent (osobny kontekst) recenzuje. **Nigdy** ten sam Claude oceniający siebie.
- **Bramki jakości** — zanim cokolwiek odejdzie, adwersarz próbuje znaleźć najsłabszy argument przeciw. Jeśli nie potrafi — wypuszczamy.

**Zasada parowania**: weryfikator powinien znać **tylko rubrykę i artefakt**, nie kto go wyprodukował. Inaczej preferencja własna wkrada się tylnymi drzwiami przez podpowiedzi w prompcie.

## 08. Wzorzec "Generuj i filtruj" (Generate-and-filter)

Wygeneruj wiele pomysłów na temat, potem przefiltruj je rubryką lub weryfikacją. Odrzuć duplikaty. Zwróć tylko najwyższej jakości, przetestowane idee.

**Tam, gdzie ten wzorzec błyszczy**:

- **Burze mózgów** — 30 nazw produktu, potem weryfikator zabija banały, konflikty znaków towarowych i słabe brzmienie. Widzisz 3.
- **Generowanie hipotez** — 5 różnych podejść do problemu, każde ocenione względem Twoich ograniczeń. Zwycięzca zasłużył sobie.
- **Projektowanie rozwiązania** — 5 różnych podejść, każde ocenione względem ograniczeń. Wygrywa ten, który przetrwał próbę.

To przeciwieństwo pytania Claude o "najlepszą odpowiedź". Pytanie o "najlepszą odpowiedź" sprawia, że Claude **zatwierdza wcześnie**. "Generuj i filtruj" sprawia, że Claude **zatwierdza późno**, dopiero gdy każda opcja została wyzwana.

## 09. Wzorzec "Turniej" (Tournament)

Zamiast dzielić pracę, **rywalizuj na niej**. Utwórz N agentów, którzy próbują tego samego zadania używając różnych podejść, potem oceń wyniki **parami** aż jeden wygra. Ocena porównawcza jest bardziej wiarygodna niż ocena bezwzględna — szczególnie dla pracy zależnej od smaku.

**Dlaczego to bije sortowanie według wyniku**: próba posortowania 1 000 pozycji w jednym prompcie zawodzi na dwóch frontach — jakość spada, a wynik nie mieści się w kontekście. Turniej rozdziela drabinkę na świeżych agentów, każdy porównuje tylko dwie pozycje. Sama drabinka żyje w **deterministycznym kodzie pętli**, nie w kontekście. Każde porównanie jest szybkie, sprawiedliwe i izolowane.

Ten sam pomysł działa dla rankingu zależnego od smaku: wybory projektowe, dobór kandydatów, priorytetyzacja treści.

## 10. Wzorzec "Pętla aż do końca" (Loop until done)

Dla zadań o nieznanej ilości pracy — pętla, tworząca agentów, aż spełniony zostanie warunek stopu (brak nowych znalezisk, brak błędów w logach, teoria zweryfikowana) — zamiast uruchamiać stałej liczby przebiegów.

**Ten wzorzec to odpowiedź na "lecimy aż naprawdę będzie skończone"**:

- **Debugowanie testów chwiejnych** — odtwórz, sformułuj teorie, przetestuj je, aż jedna teoria utrzyma się.
- **Polowanie na bugi** — szukaj bugów aż pełen przebieg zwróci zero.
- **Wyszukiwanie wzorców** — klastruj, identyfikuj reguły, aż żadne nowe klastry nie wyłaniają się.

**Paruj ten wzorzec** z `/goal`, by ustalić twardy wymóg zakończenia ("nie przerywaj, aż jedna teoria zadziała"), oraz z `/loop`, jeśli chcesz, by sam workflow biegał na cyklicznym harmonogramie. Drabinka i warunek stopu żyją w kodzie; tylko **aktywna iteracja** zostaje w kontekście.

---

# Część 4 — Kompozycja i kontrola (kroki 11-14)

## 11. Komponuj wzorce pod realne przypadki użycia

Sześć wzorców rzadko pojawia się samodzielnie. Realny workflow komponuje 2-4 z nich. Tabela poniżej łączy każdy przypadek użycia z materiałów premierowych Anthropic ze wzorcami, które zwykle stosuje:

| Przypadek użycia | Wzorce w użyciu |
|---|---|
| **Migracje i refaktoryzacje** | Rozsiew (jeden agent na callsite/testjedjący w worktree) → Adwersaryjna weryfikacja (osobny agent recenzuje każdą poprawkę) → Pętla aż do końca. Tego wzorca użył Anthropic, by przepisać Bun z Zig na Rust. |
| **Głębokie badania** (skill `/deep-research`) | Rozsiew (równoległe wyszukiwania w sieci) → Adwersaryjna weryfikacja (każde twierdzenie weryfikowane niezależnie) → Synteza (jeden raport z cytowaniami). |
| **Głęboka weryfikacja szkicu** | Zidentyfikuj wszystkie twierdzenia faktograficzne (jeden agent) → Rozsiew (jeden weryfikator na twierdzenie, każdy sprawdza źródło) → Meta-weryfikator (sprawdza, czy źródła weryfikatora są wysokiej jakości). |
| **Sortowanie 1 000+ pozycji** | Turniej (kroki 5-9) — porównanie parami, ranking kubełkowy lub drabinka. Ocena porównawcza, nigdy bezwzględna. |
| **Pamięć i przestrzeganie reguł** | Weryfikator per reguła (rozsiew) → Persona sceptyka recenzuje same reguły, by unikać fałszywych alarmów. |
| **Dochodzenie przyczyn źródłowych** | Generuj teorie z rozłącznych dowodów (różni agenci czytają logi, pliki, dane) → Panel weryfikatorów i obalaczy dla każdej teorii → Pętla, aż jedna teoria przetrwa. |
| **Triage na skalę** | Klasyfikuj i działaj → Deduplikacja względem istniejących ticketów → Albo próba naprawy, albo eskalacja. Paruj z `/loop` dla ciągłego triage. |
| **Eksploracja i smak** (projekt, naming, UI) | Generuj i filtruj (5-20 opcji) → Turniej z rubryką → Ranking lub wybór. |
| **Lekkie ewaluacje** | Uruchom kandydata w worktree → Agenci porównawczy oceniają względem rubryki → Refine i ponowna ocena. Ten sam kształt co turniej, ale do oceniania, nie do rankingu. |

**Właściwa droga do zinternalizowania tych wzorców**: zidentyfikuj, który tryb porażki dotyka Twojego aktualnego zadania, potem wybierz wzorzec, który strukturalnie temu zapobiega:

- Dryf → Rozsiew (fan-out)
- Preferencja własna → Adwersaryjna weryfikacja
- Otwarte zakończenie → Pętla aż do końca
- Trudno zważyć → Turniej

## 12. Paruj z `/goal`, `/loop` i budżetami tokenów

Workflowy bywają drogie. Trzy mechanizmy zamieniają je z "fajne ale kosztowne" w "narzędzie, które uruchamiam bez nadzoru":

- **`/goal`** ustawia twardy wymóg zakończenia. Paruj z wzorcem pętli: "nie przerywaj, aż jedna teoria zadziała". Bez `/goal` workflow zatrzymuje się na miękkim punkcie zakończenia. Z `/goal` iteruje aż do rzeczywistego warunku końca.
- **`/loop`** uruchamia cały workflow na cyklicznym harmonogramie. Stosuj dla workflowów, które chcesz uruchamiać ciągle — triage, cotygodniowe aktualizacje badań, cykliczna weryfikacja.
- **Jawne budżety tokenów.** Powiedz Claude w prompcie: "użyj 10k tokenów." To ustawia czapkę na uruchomieniu workflowu. Bez czapki ambitny workflow może spuchnąć do 5-10× tokenów, których oczekiwałeś.

**Przykład prompta**:

```
> ultracode zrób szybką adwersaryjną weryfikację tego założenia:
  "Przejście na Postgres eliminuje nasze rebalansowanie shardów."
  Użyj 5k tokenów. /goal nie przerywaj, aż masz albo
  kontrprzykład, albo trzy niezależne potwierdzenia.
```

Cytat z zespołu Claude Code: *"Najlepsze praktyki dopiero się rozwijają. Dynamiczne workflowy często zużywają więcej tokenów, więc dobrze się zastanów, kiedy i jak je stosować."*

Większość tradycyjnych zadań kodowania nie potrzebuje panelu 5 recenzentów. Zadaj sobie pytanie: **czy to zadanie naprawdę potrzebuje więcej obliczeń?** Jeśli zwykła sesja Claude Code skończyłaby je w 5 minut, nie potrzebujesz workflowu.

## 13. Używaj wzorca kwarantanny dla niezaufanego wejścia

Każdy workflow, który czyta **niezaufaną publiczną treść** (zgłoszenia wsparcia, raporty błędów, feedback użytkowników, scrapowane dane), musi zakładać, że ta treść może zawierać **wstrzyknięcie podpowiedzi (prompt injection)**.

**Rozwiązanie: kwarantanna.** Zablokuj agentom, którzy czytają niezaufaną treść, możliwość podejmowania akcji o wysokich uprawnieniach. Osobni agenci, **bez ekspozycji na surową treść**, wykonują akcje.

**Kiedy stosować bezwzględnie**:

- Workflow przetwarzający treści wysłane przez użytkowników (zgłoszenia wsparcia, raporty błędów, feedback, social media)
- Scrapowanie publicznych stron internetowych
- Praca na wyjściu z zewnętrznego API trzeciej strony

Jeśli wejście nie zostało napisane przez Ciebie albo przez zaufanego kolegę z zespołu — **kwarantanna**. Agent 30 linii kodu czytający tylko do odczytu kosztuje prawie nic, a usuwa całą klasę ryzyka wstrzykiwania podpowiedzi.

## 14. Zapisuj workflowy. Wysyłaj je jako Skille

Kiedy workflow działa, zapisz go: naciśnij **s** w menu workflowu. Zapisane workflowy idą do `~/.claude/workflows`. Stamtąd masz dwie ścieżki:

- **Zostaw lokalnie** — używaj ponownie w swoich projektach.
- **Wyślij jako Skill** — spakuj plik JavaScript do folderu Skill, odnieś się do niego w `SKILL.md`, i każdy, kto zainstaluje Skill, uruchamia ten sam workflow.

**Jeden praktyczny niuans wart wiedzy**: kiedy pakujesz workflow do Skilla, **podpowiedz Claude, by traktował workflow jak szablon, nie jak skrypt do uruchomienia dosłownie**. To zostawia miejsce dla Claude, by dostosował kształt workflowu do konkretnego zadania, zachowując ogólną strukturę. Szczególnie użyteczne dla workflowów takich jak "głęboka weryfikacja" albo "triage", które wymagają elastyczności per przypadek użycia.

---

# Częste błędy marnujące tokeny

- **Sięganie po workflow, gdy wystarczyłaby zwykła sesja Claude Code.** Większość tradycyjnych zadań kodowania nie potrzebuje panelu 5 recenzentów.
- **Brak budżetu tokenów.** Ambitne workflowy puchną do 5-10× tego, czego oczekiwałeś, bez jawnej czapki.
- **Jeden agent wykonujący i pracę, i weryfikację.** Stronniczość na własną korzyść sprawia, że weryfikator faworyzuje pracownika. Muszą być osobni.
- **Traktowanie `parallel()` i `pipeline()` jako wymiennych.** Bariera ma znaczenie — `parallel` czeka na wszystkich, `pipeline` strumieniuje.
- **Pomijanie `/goal` przy wzorcach pętli.** Workflow zatrzymuje się wcześnie na pierwszym miękkim punkcie zakończenia. `/goal` wymusza twarde zakończenie.
- **Dopuszczanie niezaufanej treści do agenta wykonującego.** Kwarantanna nie jest opcjonalna, gdy przetwarzasz cokolwiek wysłanego przez użytkownika.
- **Sortowanie z wynikami bezwzględnymi.** Ocena porównawcza jest bardziej wiarygodna. Użyj turnieju.
- **Brak zapisywania działających workflowów.** Co tydzień to samo od nowa promptujesz. Zapisz przez `s`, wyślij jako Skill.

---

# Streszczenie na lodówkę

**Trzy zdania:**

1. Dynamic Workflow to **JavaScript napisany przez Claude w locie**, który tworzy i koordynuje subagentów z **własnymi kontekstami i modelami** — rozwiązuje lenistwo, preferencję własną i dryf celu poprzez strukturę.
2. Sześć wzorców (Klasyfikuj-i-działaj, Rozsiew-i-scal, Adwersaryjna weryfikacja, Generuj-i-filtruj, Turniej, Pętla aż do końca) rzadko stosuje się solo — komponujesz 2-4 dla realnych zadań.
3. Trzy mechanizmy kontroli — `/goal`, `/loop`, jawne budżety tokenów — zamieniają drogie eksperymenty w narzędzia, które uruchamiasz bez nadzoru.

**Pierwsze testowe zadanie do uruchomienia z `ultracode`** (jeśli nigdy nie próbowałeś):

> `ultracode` zrób adwersaryjną weryfikację tego założenia: "[Twoje konkretne założenie biznesowe]". Użyj 5k tokenów. `/goal` nie przerywaj, aż masz albo kontrprzykład, albo trzy niezależne potwierdzenia.

To minimalistyczny workflow (Adwersaryjna weryfikacja + budżet + cel) na typowe pytanie biznesowe. Dobry sposób, by zobaczyć, jak to działa, bez ryzyka.

---

*Tłumaczenie i przeformułowanie artykułu z Substacka movez.substack.com (autor oryginału nie podany w treści). Wszystkie 14 kroków i 6 wzorców zachowane. Terminy techniczne (workflow, harness, agent, parallel, pipeline, fan-out, worktree) zachowane w wersji angielskiej, bo tak nazywają się funkcje w API Claude Code. Wszystko inne — po polsku.*
