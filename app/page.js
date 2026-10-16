import styles from "./page.module.css";

const questions = [
  {
    question: "What is the difference between GiftCardMall and MyGift?",
    answer:
      "They’re names cardholders often see while buying or managing a gift card. The exact roles, website and available services can depend on the card program. Check the packaging and cardholder agreement for instructions that match your card.",
  },
  {
    question: "Does “Mcgift GiftCardMall/MyGift” refer to a different card?",
    answer:
      "People may use searches like “Mcgift GiftCardMall/MyGift” or “mcgift giftcardmall/mygift” when looking for GiftCardMall and MyGift information. The wording alone doesn’t identify a separate card or service. Check your own card and its packaging for the applicable issuer and instructions.",
  },
  {
    question: "What should I know about mcgift giftcardmall/mygift?",
    answer:
      "“mcgift giftcardmall/mygift” is a search phrase people use to find information about GiftCardMall and MyGift. It doesn’t confirm that a page is official. Check your card or packaging for the correct instructions, and don’t enter card details on an unfamiliar website.",
  },
  {
    question: "What does giftcardmall/mygift mean?",
    answer:
      "“giftcardmall/mygift” usually describes a search for GiftCardMall and MyGift card information. The services and steps can depend on your particular card. Use the website and phone number printed on your card or packaging rather than relying on a search result or an unsolicited link.",
  },
  {
    question: "How can I check my GiftCardMall balance?",
    answer:
      "Gift Card Active cannot check it for you. We’re an independent information site, not a card issuer or balance checker. For a current GiftCardMall balance, follow the address or phone number printed on your card or its packaging. Never send card numbers, PINs or security codes to this site.",
  },
  {
    question: "Why is my GiftCardMall balance lower than I expected?",
    answer:
      "A purchase may still be pending, or a merchant may have placed a temporary authorization hold. The amount eventually posted can be different from the original hold. Review the transaction activity and contact the issuer using the number on your card if anything looks unfamiliar.",
  },
  {
    question: "How do I safely find the www.giftcardmall.com MyGift page?",
    answer:
      "Don’t rely on a logo, search ad, text message or QR code. Start with the directions printed on your card or packaging, then check the web address carefully before entering anything. If those directions identify giftcardmall.com, type www.giftcardmall.com into your browser yourself rather than following an unsolicited link.",
  },
  {
    question: "What should I do if my MyGift GiftCardMall card is declined?",
    answer:
      "Check that the card is activated, confirm its available balance covers the full total, and look for pending transactions. For online purchases, check whether the merchant asks for a billing ZIP code or limits split payments. If it still won’t work, call the support number printed on the card.",
  },
  {
    question: "Is it safe to share a GiftCardMall card number or PIN with support?",
    answer:
      "Only provide information when you have independently confirmed you are speaking with the card issuer through the contact details printed on the card or its packaging. Never share a PIN or card code with an unexpected caller, text sender or email contact.",
  },
  {
    question: "Is a request to pay a bill with GiftCardMall or MyGift codes a scam?",
    answer:
      "Treat that as a scam warning. A demand for gift card codes to pay a bill, fee, fine or debt is a strong sign something is wrong. Don’t send the codes; contact the organization through a phone number or website you find independently.",
  },
  {
    question: "Can Gift Card Active activate a GiftCardMall card or look up a MyGift balance?",
    answer:
      "No. We don’t sell, issue, activate, reload, replace or look up gift cards. We don’t have a balance-checking tool, and we never ask visitors for card details.",
  },
];

const timeline = [
  ["Day 1", "A hypothetical card is loaded", "Posted", "$100.00"],
  ["Day 2", "An online purchase of $23.50", "Posted", "$76.50"],
  ["Day 3", "A fuel pump places a $75 authorization hold", "Pending", "$1.50"],
  ["Day 4", "The final fuel charge is $41.20; the unused hold is released", "Posted", "$35.30"],
];

const glossary = [
  ["Available balance", "The amount currently shown as available to spend."],
  ["Pending", "A transaction or authorization that hasn’t finished processing."],
  ["Posted", "A completed transaction shown in the card’s activity."],
  ["Registration", "Adding details, such as a billing ZIP code, when a card program requires them."],
  ["Cardholder agreement", "The program’s written terms, including any applicable fees or expiry rules."],
];

const urlChecks = [
  {
    title: "Start from the card",
    text: "Use the website or phone number printed on the card or its packaging. Don’t assume a search result is official.",
  },
  {
    title: "Read the actual domain",
    text: "Check the site name in the address bar, letter by letter. A familiar logo or brand name elsewhere on the page doesn’t prove who runs it.",
  },
  {
    title: "Watch for look-alikes",
    text: "Extra words, hyphens, misspellings and look-alike letters can make an unrelated address seem familiar.",
  },
  {
    title: "Skip unsolicited links",
    text: "Be cautious with unexpected texts, emails, QR codes and sponsored results. If in doubt, close the page and type the card’s printed address yourself.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function SectionLabel({ children }) {
  return (
    <div className={styles.eyebrow}>
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, children, id }) {
  return (
    <div className={styles.sectionHeading} id={id}>
      <div className={styles.sectionNumber}>{number}</div>
      <div>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2>{title}</h2>
        {children && <p className={styles.sectionLead}>{children}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <div className={styles.topNotice}>
        Independent GiftCardMall/MyGift guide <span aria-hidden="true">✳</span> Never enter card details on this site
      </div>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Gift Card Active home">
          <span className={styles.logoMark} aria-hidden="true">g<span>✳</span></span>
          <span>giftcard<span className={styles.wordmarkAccent}>active</span></span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#giftcardmall-mygift">GiftCardMall/MyGift</a>
          <a href="#giftcardmall-balance">GiftCardMall balance</a>
          <a href="#safe-access">Safe access</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className={styles.headerCta} href="#quick-guide">Start here <span aria-hidden="true">↓</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <SectionLabel>A CLEAR, INDEPENDENT GUIDE</SectionLabel>
          <h1>GiftCardMall/MyGift, <span>made easier.</span></h1>
          <p className={styles.heroDescription}>
            Looking for your GiftCardMall balance, trying to make sense of MyGift, or wondering whether a page is genuine? Start with the basics—then follow the instructions that came with your card.
          </p>
          <p className={styles.heroDescription}>
            People search this topic with different capitalization, including “Mcgift GiftCardMall/MyGift” and “mcgift giftcardmall/mygift.” Whatever wording brought you here, use the instructions that came with your specific card.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#quick-guide">Read the quick guide <span aria-hidden="true">↓</span></a>
            <a className={styles.textButton} href="#safe-access">Check safe access <span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.safetyNote}>
            <span aria-hidden="true">✓</span>
            <p><strong>For your safety:</strong> We don’t ask for card numbers, PINs, passwords or security codes.</p>
          </div>
        </div>
        <aside className={styles.heroCard} aria-label="Important card safety reminder">
          <div className={styles.cardTop}><span>GIFTCARDMALL / MYGIFT</span><span>INDEPENDENT GUIDE</span></div>
          <div className={styles.cardSymbol} aria-hidden="true">✳</div>
          <p>Balance.<br />Card help.<br /><span>Safer access.</span></p>
          <div className={styles.cardBottom}><span>CHECK YOUR CARD’S INSTRUCTIONS</span><span aria-hidden="true">↗</span></div>
          <span className={styles.cardOrbit} aria-hidden="true" />
        </aside>
        <div className={styles.heroFootnote}>A plain-language guide. Not the card issuer.</div>
      </section>

      <section className={styles.quickGuide} id="quick-guide">
        <div className={styles.quickIntro}>
          <SectionLabel>THE SHORT VERSION</SectionLabel>
          <h2>GiftCardMall/MyGift <span>basics.</span></h2>
          <p>Gift Card Active is an independent information resource about GiftCardMall and MyGift. We aren’t affiliated with either, or with any card issuer, bank or retailer.</p>
        </div>
        <div className={styles.quickPoints}>
          <article><span>01</span><p>For GiftCardMall or MyGift instructions, start with the details supplied with your card.</p></article>
          <article><span>02</span><p>When checking a GiftCardMall balance, review available funds and pending transactions.</p></article>
          <article><span>03</span><p>Never share a GiftCardMall or MyGift card PIN or code with someone who contacts you unexpectedly.</p></article>
        </div>
      </section>

      <section className={styles.contentSection} id="giftcardmall-mygift">
        <SectionHeading
          number="01"
          eyebrow="GETTING YOUR BEARINGS"
          title={<>GiftCardMall/MyGift:<br /><em>what do the names mean?</em></>}
          id="giftcardmall-mygift-heading"
        >
          People often search for “GiftCardMall MyGift” as if it names one place. The labels can appear at different points in a card’s life, but the details depend on the card program. Your card packaging and agreement are the best place to confirm what applies to yours.
        </SectionHeading>

        <div className={styles.mythGrid}>
          <article className={styles.mythCard}>
            <span className={styles.mythLabel}>THE ASSUMPTION</span>
            <h3>“GiftCardMall and MyGift must be the same page.”</h3>
            <p>It’s easy to expect one website to cover buying a card, checking its balance and managing it.</p>
          </article>
          <article className={styles.factCard}>
            <span className={styles.factLabel}><span aria-hidden="true">✓</span> A BETTER WAY TO THINK ABOUT IT</span>
            <h3>Follow the instructions for your specific GiftCardMall card.</h3>
            <p>GiftCardMall and MyGift can appear in different parts of the card experience. The card packaging and cardholder agreement—not a guess based on a name—tell you which instructions apply.</p>
          </article>
          <article className={styles.mythCard}>
            <span className={styles.mythLabel}>THE ASSUMPTION</span>
            <h3>“A page with the right name must be official.”</h3>
            <p>Names and logos can be copied. A familiar-looking page alone doesn’t establish who operates a website.</p>
          </article>
          <article className={styles.factCard}>
            <span className={styles.factLabel}><span aria-hidden="true">✓</span> A SAFER HABIT</span>
            <h3>Check the address before entering anything.</h3>
            <p>Start with the contact details printed on your card. Be wary of unexpected links, look-alike domains and urgent requests for card information.</p>
          </article>
        </div>

        <div className={styles.glossaryWrap}>
          <div className={styles.subheading}>
            <span className={styles.smallKicker}>GIFTCARDMALL/MYGIFT CARD TERMS</span>
            <h3>Balance and card terms, in plain English.</h3>
          </div>
          <div className={styles.tableScroll}>
            <table className={styles.glossaryTable}>
              <thead><tr><th>Term</th><th>What it usually means</th></tr></thead>
              <tbody>{glossary.map(([term, definition]) => <tr key={term}><th scope="row">{term}</th><td>{definition}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.balanceSection}`} id="giftcardmall-balance">
        <SectionHeading
          number="02"
          eyebrow="READING THE NUMBERS"
          title={<>GiftCardMall balance:<br /><em>why the amount can change.</em></>}
        >
          The amount available to spend can change while purchases settle or temporary holds are released. Here’s a made-up example to show how that can happen—not a fee schedule or record of a real card.
        </SectionHeading>

        <div className={styles.timelineCard}>
          <div className={styles.tableScroll}>
            <table className={styles.timelineTable}>
              <caption>Illustrative balance timeline · Example figures only</caption>
              <thead><tr><th>When</th><th>What happened</th><th>Status</th><th>Example available balance</th></tr></thead>
              <tbody>
                {timeline.map(([day, event, status, balance]) => (
                  <tr key={day}>
                    <th scope="row">{day}</th><td>{event}</td>
                    <td><span className={status === "Pending" ? styles.pendingBadge : styles.postedBadge}>{status}</span></td>
                    <td className={styles.balanceValue}>{balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.timelineInsight}><span aria-hidden="true">↗</span><p>On day three, a large temporary hold makes the example balance look surprisingly low. When the final charge is smaller, the unused amount is released. Actual processing times and terms vary by issuer and merchant.</p></div>
        </div>

        <div className={styles.rulesBlock}>
          <div className={styles.subheading}>
            <span className={styles.smallKicker}>BEFORE YOUR NEXT PURCHASE</span>
            <h3>Six sensible GiftCardMall balance-checking habits.</h3>
          </div>
          <ol className={styles.rulesGrid}>
            <li><span>01</span><p><strong>Use the source on your card.</strong> Type the address printed on the card or packaging into your browser.</p></li>
            <li><span>02</span><p><strong>Look at available and pending.</strong> Pending activity may explain a difference in what you can spend.</p></li>
            <li><span>03</span><p><strong>Give temporary holds time.</strong> Fuel, lodging and rental merchants may authorize more than the final charge.</p></li>
            <li><span>04</span><p><strong>Check again before checkout.</strong> The balance may change between planning and paying.</p></li>
            <li><span>05</span><p><strong>Allow for the whole bill.</strong> Include applicable tax, delivery and any tip in your total.</p></li>
            <li><span>06</span><p><strong>Call the number on the card.</strong> Contact the issuer directly if a charge or fee doesn’t look right.</p></li>
          </ol>
        </div>
        <p className={styles.noLookup}><span aria-hidden="true">!</span> Gift Card Active cannot look up a GiftCardMall balance. We don’t collect or store card details.</p>
      </section>

      <section className={styles.buyerSection} id="giftcardmall-card">
        <div className={styles.buyerIntro}>
          <SectionHeading
            number="03"
            eyebrow="GIFTCARDMALL CARD CHECKLIST"
            title={<>Before you buy or use<br /><em>a GiftCardMall card.</em></>}
          >
            GiftCardMall card options and terms can vary. Check the specific card’s packaging and agreement before buying or using it; these quick checks can help you know what to look for.
          </SectionHeading>
        </div>
        <div className={styles.buyerColumns}>
          <article className={styles.buyerCard}>
            <div className={styles.buyerIcon} aria-hidden="true">↗</div>
            <span className={styles.smallKicker}>BUYING A GIFTCARDMALL CARD?</span>
            <h3>Check the card before checkout.</h3>
            <ul>
              <li>Is the GiftCardMall card packaging intact and untampered?</li>
              <li>Where can this specific card be used—in store, online or both?</li>
              <li>Does its agreement explain fees, expiry dates or other restrictions?</li>
              <li>What does the packaging say about activation and when to do it?</li>
            </ul>
          </article>
          <article className={`${styles.buyerCard} ${styles.recipientCard}`}>
            <div className={styles.buyerIcon} aria-hidden="true">♡</div>
            <span className={styles.smallKicker}>RECEIVED A GIFTCARDMALL CARD?</span>
            <h3>Keep the card details safe.</h3>
            <ul>
              <li>Keep the GiftCardMall card packaging and purchase receipt if available.</li>
              <li>Use the card’s printed contact details if you need MyGift or balance help.</li>
              <li>Read the cardholder agreement and note any relevant dates.</li>
              <li>Use the printed instructions instead of a link in an unexpected message.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.contentSection} id="safe-access">
        <SectionHeading
          number="04"
          eyebrow="PAUSE BEFORE YOU TAP"
          title={<>www.giftcardmall.com MyGift:<br /><em>check the address first.</em></>}
        >
          Some visitors arrive after searching “mcgift giftcardmall/mygift” or “Mcgift GiftCardMall/MyGift.” Search wording is not proof that a page is official. A search for “www.giftcardmall.com MyGift” can bring up familiar words in unfamiliar places, so begin with your card’s printed instructions and inspect the address itself.
        </SectionHeading>
        <div className={styles.addressNotice}>
          <span className={styles.addressIcon} aria-hidden="true">i</span>
          <p><strong>If your card’s own instructions direct you to giftcardmall.com,</strong> type <code>www.giftcardmall.com</code> into the browser yourself. Check that the address matches what your card says before continuing. This guide is not the issuer’s website and does not verify or process cards.</p>
        </div>
        <div className={styles.urlCheckGrid}>
          {urlChecks.map((check, index) => (
            <article className={styles.urlCheck} key={check.title}>
              <span className={styles.urlIndex}>0{index + 1}</span>
              <div><h3>{check.title}</h3><p>{check.text}</p></div>
              <span className={styles.urlArrow} aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className={styles.audit}>
          <div><span className={styles.smallKicker}>A ONE-MINUTE CHECK</span><h3>Before you enter card details, ask:</h3></div>
          <ol>
            <li>Did I get here from the card’s own instructions?</li>
            <li>Does the address match those instructions exactly?</li>
            <li>Did anyone ask me to act urgently or share a PIN?</li>
          </ol>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.troubleshootSection}`} id="mygift-giftcardmall">
        <SectionHeading
          number="05"
          eyebrow="WHEN SOMETHING GOES WRONG"
          title={<>MyGift GiftCardMall card declined?<br /><em>Start with these checks.</em></>}
        >
          A declined transaction doesn’t always mean the card is damaged. Work through these checks, then contact the issuer if you still need help.
        </SectionHeading>
        <div className={styles.decisionTree}>
          <article><span className={styles.decisionNumber}>01</span><div><h3>Does the available balance cover the full purchase?</h3><p>Remember to include tax, delivery and any other amount due. If it doesn’t, ask the merchant whether split payment is possible or reduce the purchase.</p></div></article>
          <article><span className={styles.decisionNumber}>02</span><div><h3>Could a pending hold be using some of the balance?</h3><p>Check recent activity. If a merchant has placed a hold, ask the issuer or merchant when it is expected to clear.</p></div></article>
          <article><span className={styles.decisionNumber}>03</span><div><h3>Are you paying online?</h3><p>Check whether the card program requires registration or a billing ZIP code, and whether the merchant accepts that kind of gift card.</p></div></article>
          <article><span className={styles.decisionNumber}>04</span><div><h3>Still stuck, or can’t access the card’s site?</h3><p>Recheck the address against the card packaging. For card-specific problems, contact the issuer using the phone number printed on the card.</p></div></article>
        </div>
        <div className={styles.calloutGrid}>
          <article className={styles.scriptCard}>
            <span className={styles.smallKicker}>WHEN YOU CALL THE NUMBER ON YOUR CARD</span>
            <h3>Keep the conversation clear.</h3>
            <ol>
              <li>Say what type of card you have and briefly describe the problem.</li>
              <li>Share the date, merchant and amount of the declined transaction.</li>
              <li>Ask whether a pending authorization or a fee could explain the balance.</li>
              <li>Ask what to do next and note any reference number they provide.</li>
            </ol>
            <p className={styles.scriptQuote}>“Could you tell me whether there’s a pending hold, and what I should do next?”</p>
          </article>
          <aside className={styles.scamCard}>
            <span className={styles.scamSymbol} aria-hidden="true">!</span>
            <span className={styles.smallKicker}>A SCAM RED FLAG</span>
            <h3>No legitimate bill needs gift card codes.</h3>
            <p>If a caller, message or email tells you to pay a bill, fine or fee with gift card codes, stop. Don’t send the numbers or PIN. Contact the organization through a number you find independently.</p>
            <p>In the U.S., suspected scams can be reported to the Federal Trade Commission.</p>
          </aside>
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.faqIntro}>
          <SectionLabel>STRAIGHT ANSWERS</SectionLabel>
          <h2>GiftCardMall MyGift<br /><em>questions, answered.</em></h2>
          <p>Looking for a GiftCardMall balance, trying to understand MyGift, or working out what to do when a card is declined? Start with these answers and check your own card’s instructions for the details.</p>
          <a href="#safe-access" className={styles.textButton}>Review safe access <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.faqList}>
          {questions.map((item, index) => (
            <details className={styles.faqItem} key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><span className={styles.faqToggle} aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.independence} id="disclaimer">
        <span className={styles.independenceMark} aria-hidden="true">✳</span>
        <div>
          <SectionLabel>WHO WE ARE (AND AREN’T)</SectionLabel>
          <h2>Independent information.<br /><em>Not a card service.</em></h2>
        </div>
        <p>Gift Card Active is an independent educational website about GiftCardMall and MyGift. We are not GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard, a bank, an issuer or a retailer, and none of those organizations sponsors or approves this guide. Brand names belong to their respective owners and are used only to identify the topic. We do not sell, issue, activate, reload, replace or look up GiftCardMall or MyGift cards. This page has no card-number, PIN, password or security-code fields.</p>
      </section>

      <footer className={styles.footer} id="privacy">
        <div className={styles.footerMain}>
          <div>
            <a className={`${styles.wordmark} ${styles.footerWordmark}`} href="#top">
              <span className={styles.logoMark} aria-hidden="true">g<span>✳</span></span>
              <span>giftcard<span className={styles.wordmarkAccent}>active</span></span>
            </a>
            <p>Clear, independent information<br />about GiftCardMall and MyGift.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#giftcardmall-mygift">GiftCardMall/MyGift</a>
            <a href="#giftcardmall-balance">GiftCardMall balance guide</a>
            <a href="#safe-access">Safe access</a>
            <a href="#mygift-giftcardmall">Troubleshooting</a>
            <a href="#faq">FAQ</a>
            <a href="#disclaimer">About this guide</a>
          </div>
          <div className={styles.footerStamp} aria-hidden="true"><span>INDEPENDENT<br />INFO</span><i>✳</i></div>
        </div>
        <div className={styles.privacyNote}><strong>Privacy:</strong> This page has no forms and does not ask for personal or card information. Our hosting provider may process routine server logs for security and site operation. If analytics, advertising or other tracking is added, this notice should be updated.</div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Gift Card Active</span>
          <span>Educational information only. Card terms and issuer instructions take precedence.</span>
          <a href="mailto:hello@giftcardactive.com">Contact us</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
