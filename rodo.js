// rodo.js — перевод и поведение (языковой переключатель, reveal)
const translations = {
  pl: {
    title: "Polityka prywatności (RODO) — Portus Libera",
    header_h1: "Polityka prywatności (RODO)",
    subtitle: "Niniejsza polityka wyjaśnia, w jaki sposób Portus Libera przetwarza dane osobowe użytkowników serwisu.",
    admin_h: "1. Administrator danych",
    admin_text: "Administratorem Pani/Pana danych osobowych jest: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. NIP: 8513239756",
    contact_label: "Kontakt w sprawach ochrony danych:",
    contact_email: "Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>",
    contact_phone: "Telefon: +48 882 166 271",
    scope_h: "2. Zakres i źródła danych",
    scope_text: "Przetwarzamy dane osobowe, które nam Państwo dobrowolnie przekazują, np. poprzez formularz kontaktowy, e‑mail, telefon lub podczas zawierania umowy. Mogą to być: imię i nazwisko, numer telefonu, adres e‑mail, adres zamieszkania, informacje dotyczące sprawy/świadczenia usługi.",
    purposes_h: "3. Cele przetwarzania i podstawa prawna",
    purposes_list: [
      "Obsługa zapytań i komunikacja (podstawa: art. 6 ust. 1 lit. b RODO oraz zgoda, jeżeli dotyczy).",
      "Realizacja umów i świadczenie usług (podstawa: art. 6 ust. 1 lit. b RODO).",
      "Wypełnianie obowiązków prawnych (np. księgowo‑podatkowych) (podstawa: art. 6 ust. 1 lit. c RODO).",
      "Ochrona prawnych interesów Administratora, w tym dochodzenie roszczeń (podstawa: art. 6 ust. 1 lit. f RODO).",
      "Marketing własnych usług — wyłącznie za uprzednią zgodą (podstawa: art. 6 ust. 1 lit. a RODO)."
    ],
    recipients_h: "4. Odbiorcy danych",
    recipients_text: "Dane mogą być udostępniane podmiotom współpracującym z Administratorem — np. biurom rachunkowym, podwykonawcom technicznym, operatorom systemów płatności oraz organom publicznym, gdy wymagają tego przepisy prawa.",
    storage_h: "5. Okres przechowywania",
    storage_text: "Dane będą przechowywane przez czas niezbędny do realizacji celu, w którym zostały zebrane, a następnie przez okres wymagany przepisami prawa lub do czasu wniesienia sprzeciwu bądź cofnięcia zgody.",
    rights_h: "6. Prawa osoby, której dane dotyczą",
    rights_list: [
      "dostępu do treści swoich danych;",
      "sprostowania danych;",
      "usunięcia danych (w zakresie przewidzianym prawem);",
      "ograniczenia przetwarzania;",
      "przenoszenia danych;",
      "wniesienia sprzeciwu wobec przetwarzania;",
      "wycofania zgody (jeżeli przetwarzanie odbywa się na jej podstawie);",
      "wniesienia skargi do Prezesa UODO (https://uodo.gov.pl)."
    ],
    rights_contact: "W celu realizacji praw prosimy o kontakt pod adresem <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a> lub listownie na adres siedziby spółki.",
    cookies_h: "7. Pliki cookies i technologie podobne",
    cookies_text: "Serwis korzysta z plików cookies w celu zapewnienia podstawowego działania strony, analityki oraz — za zgodą użytkownika — do celów marketingowych. Można zarządzać zgodami i usuwać cookies poprzez ustawienia przeglądarki.",
    security_h: "8. Bezpieczeństwo danych",
    security_text: "Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed nieuprawnionym dostępem, utratą, ujawnieniem lub modyfikacją.",
    third_h: "9. Przekazywanie danych do państw trzecich",
    third_text: "W przypadku transferu danych poza EOG zapewniamy, że transfery te odbywać się będą wyłącznie na podstawie odpowiednich zabezpieczeń przewidzianych prawem.",
    changes_h: "10. Zmiany w polityce prywatności",
    changes_text: "Polityka może być aktualizowana. O istotnych zmianach poinformujemy na stronie.",
    last_update: "Data ostatniej aktualizacji: 2026-06-12",
    contact_h: "11. Kontakt",
    contact_text: "W sprawach związanych z przetwarzaniem danych osobowych prosimy o kontakt: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>, Telefon: +48 882 166 271",
    uodo: "Można również złożyć skargę do Prezesa UODO: <a href='https://uodo.gov.pl'>https://uodo.gov.pl</a>",
    back_home: "Back to home"
  },

  uk: {
    title: "Політика конфіденційності (RODO) — Portus Libera",
    header_h1: "Політика конфіденційності (RODO)",
    subtitle: "Ця політика пояснює, як Portus Libera обробляє персональні дані користувачів сайту.",
    admin_h: "1. Адміністратор даних",
    admin_text: "Адміністратором Ваших персональних даних є: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. NIP: 8513239756",
    contact_label: "Контакти з питань захисту даних:",
    contact_email: "Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>",
    contact_phone: "Телефон: +48 882 166 271",
    scope_h: "2. Обсяг і джерела даних",
    scope_text: "Ми обробляємо персональні дані, які Ви добровільно надаєте, наприклад через контактну форму, електронну пошту або під час укладання договору.",
    purposes_h: "3. Мети обробки та правова підстава",
    purposes_list: [
      "Обробка запитів і комунікація (підстава: ст. 6(1)(b) GDPR та згода, якщо застосовується).",
      "Виконання договорів і надання послуг (підстава: ст. 6(1)(b) GDPR).",
      "Виконання правових зобов'язань (наприклад, бухгалтерських) (підстава: ст. 6(1)(c) GDPR).",
      "Захист правових інтересів Адміністратора, включаючи пред'явлення вимог (підстава: ст. 6(1)(f) GDPR).",
      "Маркетинг власних послуг — лише за попередньою згодою (підстава: ст. 6(1)(a) GDPR)."
    ],
    recipients_h: "4. Одержувачі даних",
    recipients_text: "Дані можуть передаватися партнерам (бухгалтерії, технічним підрядникам, платіжним провайдерам) та державним органам, якщо це потрібно за законом.",
    storage_h: "5. Термін зберігання",
    storage_text: "Дані зберігаються стільки, скільки потрібно для цілей обробки, а потім відповідно до вимог законодавства або до моменту скасування згоди.",
    rights_h: "6. Права суб'єкта даних",
    rights_list: [
      "доступ до своїх даних;",
      "виправлення даних;",
      "видалення даних (у межах, передбачених законом);",
      "обмеження обробки;",
      "переносимість даних;",
      "заперечення проти обробки;",
      "відкликання згоди (якщо обробка ґрунтується на ній);",
      "подавання скарги до UODO (https://uodo.gov.pl)."
    ],
    rights_contact: "Для реалізації прав звертайтесь: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a> або поштою за адресою компанії.",
    cookies_h: "7. Cookies та подібні технології",
    cookies_text: "Сайт використовує cookies для базової роботи, аналітики та (за згодою) для маркетингу. Керування cookies доступне в налаштуваннях браузера.",
    security_h: "8. Безпека даних",
    security_text: "Ми застосовуємо технічні та організаційні заходи для захисту даних (HTTPS, контроль доступу тощо).",
    third_h: "9. Передача даних до третіх країн",
    third_text: "У разі передачі за межі ЄЕЗ ми використовуємо відповідні гарантії (стандартні договірні положення тощо).",
    changes_h: "10. Зміни в політиці конфіденційності",
    changes_text: "Політика може оновлюватися; про суттєві зміни повідомимо на сайті.",
    last_update: "Дата останнього оновлення: 2026-06-12",
    contact_h: "11. Контакти",
    contact_text: "З питання обробки даних звертайтесь: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>, Телефон: +48 882 166 271",
    uodo: "Також можна подати скаргу до UODO: <a href='https://uodo.gov.pl'>https://uodo.gov.pl</a>",
    back_home: "Back to home"
  },

  en: {
    title: "Privacy Policy (RODO) — Portus Libera",
    header_h1: "Privacy Policy (RODO)",
    subtitle: "This policy explains how Portus Libera processes personal data of website users.",
    admin_h: "1. Data controller",
    admin_text: "The controller of your personal data is: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Poland. VAT ID: 8513239756",
    contact_label: "Contact for data protection matters:",
    contact_email: "Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>",
    contact_phone: "Phone: +48 882 166 271",
    scope_h: "2. Scope and sources of data",
    scope_text: "We process personal data you voluntarily provide, e.g. via contact form, email, phone or when concluding a contract. This may include: name, phone number, e‑mail address, postal address and case-related details.",
    purposes_h: "3. Purposes of processing and legal basis",
    purposes_list: [
      "Handling inquiries and communication (basis: Art. 6(1)(b) GDPR and consent where applicable).",
      "Performance of contracts and provision of services (basis: Art. 6(1)(b) GDPR).",
      "Compliance with legal obligations (e.g. accounting) (basis: Art. 6(1)(c) GDPR).",
      "Protection of the controller's legitimate interests, including claims (basis: Art. 6(1)(f) GDPR).",
      "Marketing of our services — only with prior consent where required (basis: Art. 6(1)(a) GDPR)."
    ],
    recipients_h: "4. Recipients of data",
    recipients_text: "Data may be shared with partners such as accounting offices, technical subcontractors, payment operators and public authorities where required by law.",
    storage_h: "5. Storage period",
    storage_text: "Data will be retained as long as necessary to fulfill the purpose for which it was collected, and then for periods required by law or until withdrawal of consent.",
    rights_h: "6. Data subject rights",
    rights_list: [
      "access to your data;",
      "rectification of data;",
      "erasure of data (to the extent permitted by law);",
      "restriction of processing;",
      "data portability;",
      "objection to processing;",
      "withdrawal of consent (where processing is based on consent);",
      "lodging a complaint with UODO (https://uodo.gov.pl)."
    ],
    rights_contact: "To exercise your rights contact us at <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a> or by post to the company's address.",
    cookies_h: "7. Cookies and similar technologies",
    cookies_text: "The site uses cookies for basic operation, analytics and — with consent — for marketing. You can manage cookies in your browser settings.",
    security_h: "8. Data security",
    security_text: "We apply appropriate technical and organizational measures to protect data (HTTPS, access control, etc.).",
    third_h: "9. Transfers to third countries",
    third_text: "If transfers outside the EEA occur we will ensure appropriate safeguards (e.g. standard contractual clauses) are in place.",
    changes_h: "10. Changes to this policy",
    changes_text: "This policy may be updated. We will inform about material changes on the website.",
    last_update: "Last updated: 2026-06-12",
    contact_h: "11. Contact",
    contact_text: "For data protection matters contact: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Poland. Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>, Phone: +48 882 166 271",
    uodo: "You may also lodge a complaint with the data protection authority (UODO): <a href='https://uodo.gov.pl'>https://uodo.gov.pl</a>",
    back_home: "Back to home"
  },

  ru: {
    title: "Политика конфиденциальности (RODO) — Portus Libera",
    header_h1: "Политика конфиденциальности (RODO)",
    subtitle: "В этой политике объясняется, как Portus Libera обрабатывает персональные данные пользователей сайта.",
    admin_h: "1. Администратор данных",
    admin_text: "Администратором ваших персональных данных является: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. NIP: 8513239756",
    contact_label: "Контакт по вопросам защиты данных:",
    contact_email: "Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>",
    contact_phone: "Телефон: +48 882 166 271",
    scope_h: "2. Объём и источники данных",
    scope_text: "Мы обрабатываем персональные данные, которые вы добровольно предоставляете, например через контактную форму, e‑mail, телефон или при заключении договора.",
    purposes_h: "3. Цели обработки и правовая основа",
    purposes_list: [
      "Обработка запросов и коммуникация (основание: ст. 6(1)(b) GDPR и согласие, если применимо).",
      "Исполнение договоров и предоставление услуг (основание: ст. 6(1)(b) GDPR).",
      "Выполнение правовых обязанностей (например, бухгалтерских) (основание: ст. 6(1)(c) GDPR).",
      "Защита законных интересов Администратора, включая защиту претензий (основание: ст. 6(1)(f) GDPR).",
      "Маркетинг собственных услуг — только при предварительном согласии (основание: ст. 6(1)(a) GDPR)."
    ],
    recipients_h: "4. Получатели данных",
    recipients_text: "Данные могут передаваться партнёрам: бухгалтерским офисам, техническим подрядчикам, платёжным операторам и государственным органам при необходимости в соответствии с законом.",
    storage_h: "5. Срок хранения",
    storage_text: "Данные хранятся столько, сколько необходимо для целей обработки, а затем в сроки, требуемые законом, либо до отзыва согласия.",
    rights_h: "6. Права субъекта данных",
    rights_list: [
      "доступ к своим данным;",
      "исправление данных;",
      "удаление данных (в пределах, предусмотренных законом);",
      "ограничение обработки;",
      "переносимость данных;",
      "возражение против обработки;",
      "отзыв согласия (если обработка основана на согласии);",
      "подача жалобы в UODO (https://uodo.gov.pl)."
    ],
    rights_contact: "Для реализации прав свяжитесь с нами: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a> или письменно по адресу компании.",
    cookies_h: "7. Файлы cookies и похожие технологии",
    cookies_text: "Сайт использует cookies для базовой работы, аналитики и — при согласии — для маркетинга. Управление cookies доступно в настройках браузера.",
    security_h: "8. Безопасность данных",
    security_text: "Мы применяем технические и организационные меры для защиты данных (HTTPS, контроль доступа и т.д.).",
    third_h: "9. Передача данных в третьи страны",
    third_text: "В случае передачи за пределы ЕЭЗ используются соответствующие гарантии (например, стандартные договорные положения).",
    changes_h: "10. Изменения в политике конфиденциальности",
    changes_text: "Политика может обновляться. О существенных изменениях сообщим на сайте.",
    last_update: "Дата последнего обновления: 2026-06-12",
    contact_h: "11. Контакты",
    contact_text: "По вопросам обработки данных обращайтесь: Portus Libera Sp. z o.o., Plac Rodła 8, lok. 1011, 70-419 Szczecin, Polska. Email: <a href='mailto:info@portuslibera.pl'>info@portuslibera.pl</a>, Телефон: +48 882 166 271",
    uodo: "Также можно подать жалобу в UODO: <a href='https://uodo.gov.pl'>https://uodo.gov.pl</a>",
    back_home: "Back to home"
  }
};

// Utilities
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function applyTranslations(lang){
  const dict = translations[lang] || translations.en;
  if (dict.title) document.title = dict.title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n').trim();
    if (!key) return;
    const val = dict[key];
    if (val === undefined) return;
    if (typeof val === 'string' && /<[^>]+>/.test(val)) {
      el.innerHTML = val;
    } else if (Array.isArray(val)) {
      el.innerHTML = '<ul>' + val.map(item => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul>';
    } else {
      el.textContent = val;
    }
  });

  ['purposes_list','rights_list'].forEach(id=>{
    const el = document.getElementById(id);
    if (!el) return;
    const val = dict[id];
    if (Array.isArray(val)) el.innerHTML = '<ul>' + val.map(li=>'<li>'+escapeHtml(li)+'</li>').join('') + '</ul>';
    else if (typeof val === 'string') el.innerHTML = val;
  });

  document.querySelectorAll('.lang-btn').forEach(b=> b.classList.toggle('active', b.getAttribute('data-lang')===lang));
  document.documentElement.lang = lang;
}

// Плавная смена языка (простое затухание)
function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }
async function setLang(lang){
  if (!translations[lang]) lang = 'en';
  document.body.style.transition = 'opacity .28s ease, transform .28s ease';
  document.body.style.opacity = '0.02';
  document.body.style.transform = 'translateY(6px)';
  await delay(300);
  applyTranslations(lang);
  document.body.style.opacity = '';
  document.body.style.transform = '';
}

// Инициализация: применяем язык по умолчанию и навешиваем слушатели
function init(){
  // По умолчанию EN (можно взять navigator.language)
  let initial = 'en';
  applyTranslations(initial);

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.getAttribute('data-lang')));
  });

  // Reveal при скролле
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// Если подключено с defer — можно вызвать сразу; иначе дождёмся DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}