//@ts-check
/**
 * @typedef {Object} RequirementReference - A reference to where a RFC 2119 requirement was written.
 * @property {string} textContent - The context in which the reference appears
 * @property {string} contextId - The html-id of the reference
 * @property {string} sectionId - The html-id of the section
 * @property {string} sectionTitle - The title of the section
 * @property {string=} sectionNumber - The number of the section
 */

/** This function adds an index of RFC 2119 keywords to the document.
 *
 * Requires:
   <section class="">
      <h2>Index van eisen</h2>
      <ol class="toc toc-column toc-labeled" id="index-of-requirements"></ol>
    </section>
 */
function indexOfRequirements(config) {
  const ul = document.querySelector("#index-of-requirements");
  if (!ul) return;

  const requirements = document.querySelectorAll(
    "section:not(#conformance) em.rfc2119"
  );

  /** @type {Record<string, RequirementReference[]>} */
  const requirementsPerSection = {};

  // Collect reference information on the instances of RFC 2119 keywords
  requirements.forEach((requirementElem, n) => {
    const parentElem = requirementElem.parentElement;
    if (!parentElem) return;
    if (!parentElem.id)
      //@ts-ignore
      parentElem.id = `requirement-${requirementElem.textContent.toLowerCase()}-${n}`;

    const sectionElem = requirementElem.closest("section");
    if (!sectionElem) return; // no reference possible
    const headerElem = sectionElem.querySelector(".header-wrapper");
    if (!headerElem) return; // no reference possible
    const sectionNumberElem = headerElem.querySelector(".secno");
    const sectionNumberText = sectionNumberElem
      ? sectionNumberElem.textContent || "(unnumbered)"
      : "(unnumbered)";
    const sectionTitle = headerElem.textContent || "";

    // If there is no array for this section yet, create it
    if (!requirementsPerSection[sectionNumberText]) {
      requirementsPerSection[sectionNumberText] = [];
    }
    requirementsPerSection[sectionNumberText].push({
      // flat content here, we don't want potential re-processing.
      textContent: parentElem.textContent || "",
      contextId: parentElem.id,
      sectionId: sectionElem.id,
      sectionTitle: sectionTitle,
      sectionNumber: sectionNumberText,
    });
  });

  // Create the index of RFC 2119 references
  for (const [__, requirements] of Object.entries(requirementsPerSection)) {
    const entryForSection = document.createElement("li");
    entryForSection.innerHTML = `In § <em>${requirements[0].sectionTitle}</em>:`;
    const listForSection = document.createElement("ol");

    for (const requirement of requirements) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${requirement.contextId}">${requirement.textContent}</a>`;
      listForSection.appendChild(li);
    }
    entryForSection.appendChild(listForSection);
    ul.appendChild(entryForSection);
  }
}

var respecConfig = {
  specStatus: "DRAFT",
  pubDomain: "use-cases-door",
  shortName: "project-beheer",
  license: "CC-BY",
  subtitle: "Informatie voor de vervangings- en renovatieopgave",
  lint: { "no-unused-dfns": false },
  editors: [
    {
      name: "Elisabeth De Vries",
      company: "CROW",
    },
  ],
  github: "https://github.com/Stichting-CROW/use-cases-door",
  postProcess: [indexOfRequirements],
  hypothesisComments: false,

  localBiblio: {
    "prognose-vernieuwingsopgave-2023": {
      title: "Vernieuwingsopgave infrastructuur: Landelijk prognoserapport 2023",
      authors: ["TNO"],
      date: "2023",
      publisher: "TNO",
      href: "https://www.tno.nl/nl/newsroom/2023/11/vernieuwing-infrastructuur-essentieel/"
    },
    "NEN2767": {
      title: "Conditiemeting gebouwde omgeving - Deel 1: Methodiek",
      authors: ["NEN"],
      date: "2019",
      publisher: "NEN",
      href: "https://www.nen.nl/bouw/beheer-en-onderhoud/conditiemeting"
    }
  }
};